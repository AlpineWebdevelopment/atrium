"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

/* BookingModal — opens from any "Foglaljon időpontot" CTA on the page.
   Step 1: pick an available slot (calendar fed by the CRM /api/availability).
   Step 2: fill the instant form → POST to CRM /api/book → saved in Supabase,
   shows up in the CRM. Mount this once per page. */

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? "https://atrium-crm-nine.vercel.app";
const CONSENT_TEXT_VERSION = "v1.0_2026-06-07";
const CONSENT_LABEL =
  "Hozzájárulok, hogy az Atrium a megadott adataimat a kapcsolatfelvétel és időpont-egyeztetés céljából kezelje az adatkezelési tájékoztató szerint.";

const DOW = ["Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo"];

interface Slot { start: string; label: string; busy?: boolean; }
interface Day { date: string; weekday: number; slots: Slot[]; }
interface Availability { timezone: string; slot_duration_minutes: number; days: Day[]; }

export default function BookingModal({ niche = "root" }: { niche?: string }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
      const res = await fetch(`${CRM_URL}/api/availability`);
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

  const openModal = useCallback(() => {
    setOpen(true);
    setSuccess(false);
    setSlot(null);
    setFormError(null);
    loadAvailability();
  }, [loadAvailability]);

  const close = useCallback(() => setOpen(false), []);

  // Intercept every CTA on the page: links to #kapcsolat or buttons/links
  // whose text says "Foglaljon...".
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement)?.closest("a, button") as
        | HTMLAnchorElement
        | HTMLButtonElement
        | null;
      if (!el) return;
      const href = (el as HTMLAnchorElement).getAttribute?.("href") ?? "";
      const text = (el.textContent ?? "").trim().toLowerCase();
      const isCta = href.includes("#kapcsolat") || text.startsWith("foglaljon");
      if (isCta) {
        e.preventDefault();
        openModal();
      }
    }
    document.addEventListener("click", onClick);
    window.addEventListener("atrium:open-booking", openModal as EventListener);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("atrium:open-booking", openModal as EventListener);
    };
  }, [openModal]);

  // Escape to close, lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") close(); }
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const days = avail?.days ?? [];
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
      // For the confirmation email only — our /api/book strips this before
      // forwarding to the CRM. Already localized so the email time matches.
      slot_label: chosenLabel,
    };

    setSubmitting(true);
    setFormError(null);
    try {
      // Post to our own /api/book, which forwards to the CRM and — only on a
      // confirmed booking — sends the confirmation + notification emails.
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
      setSuccess(true);
    } catch {
      setFormError("Hiba történt a foglalás során. Kérjük, próbálja újra.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="bk-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="bk-modal" role="dialog" aria-modal="true">
        <button className="bk-close" onClick={close} aria-label="Bezárás">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>

        {success ? (
          <div className="bk-success">
            <span className="bk-success-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
            <h3 className="bk-success-h">Időpont lefoglalva.</h3>
            <p className="bk-success-p">{chosenLabel ? `${chosenLabel} — ` : ""}hamarosan felvesszük Önnel a kapcsolatot a megerősítéshez.</p>
          </div>
        ) : (
          <>
            <span className="bk-eyebrow">Foglaljon időpontot</span>
            <h2 className="bk-title">Válasszon időpontot</h2>
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
                    <div className="bk-slots">
                      {activeDay?.slots.map((s) =>
                        s.busy ? (
                          <span key={s.start} className="bk-slot bk-slot--busy" aria-disabled="true">
                            {s.label}
                          </span>
                        ) : (
                          <button key={s.start} className="bk-slot" type="button" onClick={() => setSlot(s)}>
                            {s.label}
                          </button>
                        )
                      )}
                    </div>
                    {activeDay && activeDay.slots.every((s) => s.busy) && (
                      <p className="bk-empty">Erre a napra minden időpont betelt.</p>
                    )}
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
        )}
      </div>
    </div>
  );
}
