"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

/* BookingForm — the full booking flow (slot picker → form → confirmation),
   rendered inline on the /foglalas page. Loads availability from the CRM,
   posts to /api/book. Reused styling from the old modal (bk-* classes). */

/* The CRM is the dashboard's Atrium CRM, not the old standalone deployment.
   Availability and bookings both come from its /api/atrium routes now, so the
   hours and blocked slots set in the dashboard are what this page offers, and
   a booking arrives there as a lead instead of being copied over by hand. */
const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? "https://granturismo.vercel.app";
const CONSENT_TEXT_VERSION = "v1.0_2026-06-07";
const CONSENT_LABEL =
  "Hozzájárulok, hogy az Atrium a megadott adataimat a kapcsolatfelvétel és időpont-egyeztetés céljából kezelje az adatkezelési tájékoztató szerint.";

const DOW = ["Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo"];

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface Slot { start: string; label: string; busy?: boolean; }
interface Day { date: string; weekday: number; slots: Slot[]; }
interface Availability { timezone: string; slot_duration_minutes: number; days: Day[]; }

export default function BookingForm({ niche = "root" }: { niche?: string }) {
  const [loading, setLoading] = useState(true);
  const [avail, setAvail] = useState<Availability | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [dayIdx, setDayIdx] = useState(0);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const loadAvailability = useCallback(async () => {
    setLoading(true);
    setLoadError(false);
    try {
      const res = await fetch(`${CRM_URL}/api/atrium/availability`);
      if (!res.ok) throw new Error();
      const data: Availability = await res.json();
      setAvail(data);
      setDayIdx(0);
    } catch {
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadAvailability(); }, [loadAvailability]);

  /* Only days with something left to book. A day whose slots are all taken has
     nothing for a visitor to click, and offering it as a tab is worse than
     leaving it out: dayIdx starts at 0, so on any day that filled up the
     widget would open on an empty picker. Filtering here also means the first
     tab is always a day with real availability, without tracking that
     separately. */
  const days = useMemo(
    () => (avail?.days ?? []).filter((d) => d.slots.some((s) => !s.busy)),
    [avail]
  );
  const activeDay = days[dayIdx];

  const chosenLabel = useMemo(() => {
    if (!slot || !avail) return "";
    return new Date(slot.start).toLocaleString("hu-HU", {
      timeZone: avail.timezone,
      year: "numeric", month: "long", day: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  }, [slot, avail]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!slot || submitting) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    if ((data.get("_hp") as string)?.trim()) { setSuccess(true); return; }

    const params = new URLSearchParams(window.location.search);
    const payload = {
      name: (data.get("name") as string)?.trim(),
      email: (data.get("email") as string)?.trim(),
      phone: (data.get("phone") as string)?.trim(),
      source_niche: niche,
      slot_start: slot.start,
      source_url: window.location.href,
      referrer: document.referrer || null,
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      utm_term: params.get("utm_term"),
      utm_content: params.get("utm_content"),
      consent_text_version: CONSENT_TEXT_VERSION,
      consent_given_at: new Date().toISOString(),
      slot_label: chosenLabel,
    };

    setSubmitting(true);
    setFormError(null);
    try {
      const res = await fetch(`/api/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.status === 409) {
        setFormError("Ez az időpont időközben betelt. Kérjük, válasszon másikat.");
        setSlot(null);
        await loadAvailability();
        setSubmitting(false);
        return;
      }
      if (!res.ok) throw new Error();
      // Meta Pixel conversion — fires only on a confirmed booking
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Schedule");
      }
      setSuccess(true);
    } catch {
      setFormError("Hiba történt a foglalás során. Kérjük, próbálja újra.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="bk-success">
        <span className="bk-success-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
        <h2 className="bk-success-h">Időpont lefoglalva.</h2>
        <p className="bk-success-p">{chosenLabel ? `${chosenLabel} — ` : ""}hamarosan felvesszük Önnel a kapcsolatot a megerősítéshez.</p>
        <a href="/" className="btn btn--ghost" style={{ marginTop: "22px" }}>Vissza a főoldalra</a>
      </div>
    );
  }

  return (
    <>
      <span className="bk-eyebrow">Foglaljon időpontot</span>
      <h1 className="bk-title">Válasszon időpontot</h1>
      <p className="bk-sub">30 perces, kötelezettség nélküli megbeszélés.</p>

      {loading && <p className="bk-empty">Időpontok betöltése…</p>}
      {loadError && <p className="bk-err">Nem sikerült betölteni az időpontokat. Kérjük, próbálja újra később.</p>}

      {!loading && !loadError && avail && (
        <>
          {days.length === 0 ? (
            <p className="bk-empty">Jelenleg nincs szabad időpont. Kérjük, nézzen vissza később.</p>
          ) : !slot ? (
            <>
              <p className="bk-section-label">Nap</p>
              <div className="bk-days">
                {days.map((d, i) => {
                  const dayNum = Number(d.date.split("-")[2]);
                  return (
                    <button key={d.date} className={`bk-day${i === dayIdx ? " bk-day--active" : ""}`} onClick={() => setDayIdx(i)} type="button">
                      <span className="bk-day-dow">{DOW[d.weekday]}</span>
                      <span className="bk-day-num">{dayNum}</span>
                    </button>
                  );
                })}
              </div>
              <p className="bk-section-label">Időpont</p>
              {/* Taken slots are dropped rather than shown crossed out. A wall
                  of struck-through times reads as "this place is full" — the
                  opposite of what a booking page is for — and there is nothing
                  a visitor can do with one. This list is never empty: `days`
                  only holds days that still have one. */}
              <div className="bk-slots">
                {activeDay?.slots
                  .filter((s) => !s.busy)
                  .map((s) => (
                    <button key={s.start} className="bk-slot" type="button" onClick={() => setSlot(s)}>{s.label}</button>
                  ))}
              </div>
            </>
          ) : (
            <form className="bk-form" onSubmit={submit} noValidate>
              <div className="bk-chosen">
                <span>{chosenLabel}</span>
                <button type="button" onClick={() => setSlot(null)}>Módosítás</button>
              </div>

              <input type="text" name="_hp" className="bk-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              <div className="bk-row">
                <div>
                  <label className="bk-label">Név</label>
                  <input className="bk-input" type="text" name="name" required autoComplete="name" placeholder="Teljes név" />
                </div>
                <div>
                  <label className="bk-label">Telefonszám</label>
                  <input className="bk-input" type="tel" name="phone" required autoComplete="tel" placeholder="+36 ..." />
                </div>
              </div>
              <div>
                <label className="bk-label">E-mail cím</label>
                <input className="bk-input" type="email" name="email" required autoComplete="email" placeholder="nev@ceg.hu" />
              </div>

              <label className="bk-consent">
                <input type="checkbox" name="consent" required />
                <span>{CONSENT_LABEL}{" "}<a href="/adatvedelem" className="bk-link" target="_blank" rel="noopener noreferrer">Adatkezelési tájékoztató</a> · <a href="/aszf" className="bk-link" target="_blank" rel="noopener noreferrer">ÁSZF</a></span>
              </label>

              {formError && <p className="bk-err">{formError}</p>}

              <button className="btn btn--lg bk-submit" type="submit" disabled={submitting}>
                {submitting ? "Foglalás…" : "Időpont lefoglalása"}
              </button>
            </form>
          )}
        </>
      )}
    </>
  );
}
