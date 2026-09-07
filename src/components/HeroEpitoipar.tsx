/* ATRIUM-EDIT KV1/KV2/KV3/KV7 — cégvezető construction hero.
   KV7: solo-operator "egy nap" replaced with "Egy megkeresés útja" journey (7 steps).
   Static headline. No typewriter. Channel chips removed from canvas header — not relevant
   to the inquiry-journey narrative. Last step (Látható) uses signal color for emphasis. */
"use client";
import { useEffect, useState } from "react";

const ICONS: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  confirm: <g><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></g>,
  qualify: <g><rect x="5" y="4" width="14" height="18" rx="2" /><path d="M9 4V2.5h6V4" /><path d="M8.5 13l2 2 4-4.5" /></g>,
  handoff: <g><path d="M14 3h7v7" /><path d="M21 3l-8 8" /><circle cx="7" cy="9" r="3" /><path d="M2 21v-1a5 5 0 0 1 5-5h1a5 5 0 0 1 4 2" /></g>,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  refresh: <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  bars: <path d="M12 20V10M18 20V4M6 20v-6" />,
};

/* KV7 — inquiry journey, 7 steps; bars step uses signal color for extra weight */
const JOURNEY = [
  { k: "phone",    c: "#6DBC61", step: "Megkeresés",          t: "Egy érdeklődő hív, űrlapot küld vagy e-mailt ír — akár csúcsterhelésen, akár este." },
  { k: "confirm",  c: "#62BCAC", step: "Fogadva",             t: "A rendszer azonnal válaszol, professzionális magyar nyelven." },
  { k: "qualify",  c: "#AD83CC", step: "Kvalifikálva",        t: "Kikérdezi a projektet, és eldönti, komoly munka-e." },
  { k: "handoff",  c: "#628FBC", step: "Irányítva",           t: "A megfelelő emberhez kerül, a részletekkel együtt." },
  { k: "calendar", c: "#9662BC", step: "Felmérés foglalva",   t: "Időpont a naptárban, az ügyfélnek visszaigazolva." },
  { k: "refresh",  c: "#BCA162", step: "Árajánlat utánkövetve", t: "A kiküldött ajánlatra a rendszer rákérdez, amíg le nem zárul." },
  { k: "bars",     c: "#A07C34", step: "Látható",             t: "Minden lépés mérve, a cégvezető riportjában." },
];

export default function HeroEpitoipar() {
  const [cur, setCur] = useState(JOURNEY.length - 1);
  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % JOURNEY.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" id="rendszer">
      <div className="wrap">
        <div className="hero__grid">
          {/* Left — copy */}
          <div className="hero__content reveal reveal--instant visible">
            {/* ATRIUM-EDIT KV1 */}
            <span className="hero__eyebrow">Értékesítési rendszer építőipari cégeknek.</span>
            {/* ATRIUM-EDIT KV2 — static; cégvezető framing (not the solo-operator "on the scaffold" family) */}
            <h1 className="hero__title">
              Egyetlen megkeresés és egyetlen árajánlat sem vész el.
            </h1>
            {/* ATRIUM-EDIT KV3 */}
            <p className="hero__sub">
              Az Atrium egy magyar nyelvű, AI-alapú értékesítési rendszer
              építőipari cégeknek — minden megkeresést azonnal fogad és
              kvalifikál, a megfelelő emberhez irányít, és minden árajánlatot
              utánkövet, amíg le nem zárul. Ön pedig először látja át az egészet.
            </p>
            <div className="hero__actions">
              <button className="btn">Foglaljon időpontot</button>
              <a className="btn btn--ghost" href="#rendszer-teljes">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                A rendszerről
              </a>
            </div>
            {/* KV12 — trust strip */}
            <div className="hero__trust2">
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> Magyar nyelvű</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> EU hosting</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> GDPR-konform</span>
            </div>
          </div>

          {/* Right — KV7: inquiry journey replacing the personal "egy nap" timeline */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · egy megkeresés útja</span>
            </div>
            <div className="canvas__stage canvas__stage--con">
              <div className="hcon__head2">
                <span className="hcon__title"><i /> Egy megkeresés útja</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", opacity: 0.45, letterSpacing: "0.06em" }}>ILLUSZTRATÍV</span>
              </div>
              {/* 7 steps: 4 left / 3 right */}
              <div className="hcon__cols">
                {[JOURNEY.slice(0, 4), JOURNEY.slice(4)].map((col, ci) => (
                  <div className="hcon__col" key={ci}>
                    {col.map((d, ri) => {
                      const gi = ci === 0 ? ri : 4 + ri;
                      const state = gi < cur ? "done" : gi === cur ? "now" : "up";
                      return (
                        <div className={"hcon__row hcon__row--" + state} key={gi}>
                          <span className="hcon__ico" style={{ background: `color-mix(in srgb, ${d.c} 26%, var(--bone))`, color: d.c, border: `1px solid color-mix(in srgb, ${d.c} 55%, transparent)` }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{ICONS[d.k]}</svg>
                          </span>
                          <span className="hcon__txt">
                            <span className="hcon__time">{d.step}</span>
                            <span className="hcon__ev">{d.t}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="hcon__foot">Minden lépés nyomon követhető — Ön végre látja az egészet.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
