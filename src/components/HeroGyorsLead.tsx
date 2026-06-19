/* ATRIUM-EDIT LR1/LR2/LR3 — cross-niche service hero: lead response speed.
   LR2: static headline — no typewriter.
   LR8-canvas: "Egy lead útja" — 6-step journey showing speed beats. 3/3 col split.
   Audience thinks in "lead" not "érdeklődő" — kept throughout. */
"use client";
import { useEffect, useState } from "react";

const ICONS: Record<string, React.ReactNode> = {
  form:     <g><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></g>,
  chat:     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  qualify:  <g><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></g>,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  refresh:  <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  bars:     <g><path d="M18 20V10M12 20V4M6 20v-6" /></g>,
};

/* LR canvas — Egy lead útja; 6 steps, 3/3 split; bars (riport) uses signal blue */
const JOURNEY = [
  { k: "form",     c: "#6DBC61", step: "Beérkezés",   t: "Lead kitöltötte a Meta-űrlapot." },
  { k: "chat",     c: "#628FBC", step: "Válasz",       t: "A rendszer perceken belül reagál, magyarul." },
  { k: "qualify",  c: "#AD83CC", step: "Kvalifikálva", t: "Megerősíti az érdeklődést, felteszi az első kérdéseket." },
  { k: "calendar", c: "#62BCAC", step: "Lefoglalva",   t: "Időpont vagy visszahívás — a naptárban." },
  { k: "refresh",  c: "#BCA162", step: "Utánkövetés",  t: "Ha nincs válasz, más csatornán, más ütemben." },
  { k: "bars",     c: "#2B64B8", step: "Riport",       t: "Válaszidő, elért arány, foglalt arány — havonta." },
];

export default function HeroGyorsLead() {
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
            {/* ATRIUM-EDIT LR1 */}
            <span className="hero__eyebrow">Lead-kezelés Meta- és Google-hirdetésekhez.</span>
            {/* ATRIUM-EDIT LR2 — static headline */}
            <h1 className="hero__title">
              Minden leadre válasz.<br />Perceken belül.
            </h1>
            {/* ATRIUM-EDIT LR3 */}
            <p className="hero__sub">
              Az Atrium egy AI-alapú rendszer, amely azonnal megkeresi a
              beérkező leadeket — mielőtt a versenytárs megteszi. Minden
              lead, minden csatornán, az első 5 percen belül.
            </p>
            <div className="hero__actions">
              <button className="btn">Foglaljon időpontot</button>
              <a className="btn btn--ghost" href="#termek">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                A rendszerről
              </a>
            </div>
            <div className="hero__trust2">
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> Magyar nyelvű</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> EU hosting</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg> GDPR-konform</span>
            </div>
          </div>

          {/* Right — LR canvas: Egy lead útja (illustrative), 6 steps, 3/3 split */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · egy lead útja</span>
            </div>
            <div className="canvas__stage canvas__stage--con">
              <div className="hcon__head2">
                <span className="hcon__title"><i /> Egy lead útja</span>
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
              <div className="hcon__foot">Minden lead beér — egyik sem vész el válasz nélkül.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
