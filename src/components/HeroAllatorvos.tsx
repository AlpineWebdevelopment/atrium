/* ATRIUM-EDIT AV1/AV2/AV3/AV8 — vet hero, owner-operator frame.
   AV2: static headline — no typewriter.
   AV8: "Egy gazdi útja" — 6-step owner lifecycle, ending on recall. 3/3 col split.
   No qualify-out / filtering language anywhere (route-not-filter mandate). */
"use client";
import { useEffect, useState } from "react";

const ICONS: Record<string, React.ReactNode> = {
  phone:    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  confirm:  <g><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></g>,
  triage:   <g><path d="M9 12h6M12 9v6" /><circle cx="12" cy="12" r="9" /></g>,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  bell:     <g><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></g>,
  refresh:  <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
};

/* AV8 — Egy gazdi útja; 6 steps, 3/3 split; refresh (recall) uses signal color for emphasis */
const JOURNEY = [
  { k: "phone",    c: "#6DBC61", step: "Hívás",       t: "Egy gazdi hív, zárás után, beteg kedvenccel." },
  { k: "confirm",  c: "#62BCAC", step: "Fogadva",      t: "A rendszer azonnal, nyugodtan válaszol." },
  { k: "triage",   c: "#AD83CC", step: "Rangsorolva",  t: "Sürgős vagy rutin? A helyére kerül." },
  { k: "calendar", c: "#628FBC", step: "Lefoglalva",   t: "Időpont a naptárban, a gazdinak visszaigazolva." },
  { k: "bell",     c: "#9662BC", step: "Emlékeztetve", t: "Az időpont előtt, hogy meg is jelenjen." },
  { k: "refresh",  c: "#2D9B7F", step: "Visszahívva",  t: "Egy év múlva, amikor az oltás esedékes — mielőtt elsodródna." },
];

export default function HeroAllatorvos() {
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
            {/* ATRIUM-EDIT AV1 */}
            <span className="hero__eyebrow">Értékesítési rendszer állatorvosi rendelőknek.</span>
            {/* ATRIUM-EDIT AV2 — static; no typewriter */}
            <h1 className="hero__title">
              Minden gazdi. Minden hívás. Minden órában.
            </h1>
            {/* ATRIUM-EDIT AV3 */}
            <p className="hero__sub">
              Az Atrium egy magyar nyelvű, AI-alapú értékesítési rendszer
              állatorvosi rendelőknek — minden hívást fogad, a sürgős eseteket
              rangsorolja, a rutin időpontokat lefoglalja, és visszahívja a
              pácienseket, mielőtt lemaradnának az oltásról.
            </p>
            <div className="hero__actions">
              <button className="btn">Foglaljon időpontot</button>
              <a className="btn btn--ghost" href="#rendszer-teljes">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                A rendszerről
              </a>
            </div>
            {/* AV13 — trust strip */}
            <div className="hero__trust2">
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> Magyar nyelvű</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> EU hosting</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> GDPR-konform</span>
            </div>
          </div>

          {/* Right — AV8: Egy gazdi útja (illustrative), 6 steps, 3/3 split */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · egy gazdi útja</span>
            </div>
            <div className="canvas__stage canvas__stage--con">
              <div className="hcon__head2">
                <span className="hcon__title"><i /> Egy gazdi útja</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", opacity: 0.45, letterSpacing: "0.06em" }}>ILLUSZTRATÍV</span>
              </div>
              {/* 6 steps: 3 left / 3 right */}
              <div className="hcon__cols">
                {[JOURNEY.slice(0, 3), JOURNEY.slice(3)].map((col, ci) => (
                  <div className="hcon__col" key={ci}>
                    {col.map((d, ri) => {
                      const gi = ci === 0 ? ri : 3 + ri;
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
              <div className="hcon__foot">Minden gazdi egy évekig tartó kapcsolat — egy sem vész el.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
