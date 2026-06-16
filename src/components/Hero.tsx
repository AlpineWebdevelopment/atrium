"use client";
import { useEffect, useState } from "react";

/* Hero — static brand tagline on the left; on the right, a live graph that
   cycles through the revenue leaks and checks each one off (szivárog → befogva). */

const PAINS = [
  { item: "Elszalasztott hívás" },
  { item: "Lassan kezelt érdeklődő" },
  { item: "Elmaradt időpont" },
  { item: "Rég elfeledett ügyfél" },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % PAINS.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" id="rendszer">
      <div className="wrap">
        <div className="hero__grid">
          {/* Left — copy */}
          <div className="hero__content reveal reveal--instant visible">
            <h1 className="hero__title">
              A bevétel,<br />ami eddig elveszett.
            </h1>
            <p className="hero__sub">
              Az Atrium egy magyar nyelvű AI-alapú értékesítési rendszer
              szolgáltató cégeknek — minden hívást fogad, minden időpontot
              lefoglal, minden érdeklődőt utánkövet.
            </p>
            <div className="hero__actions">
              <button className="btn">Foglaljon időpontot</button>
              <a className="btn btn--ghost" href="#rendszer-teljes">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                A rendszerről
              </a>
            </div>
            <p className="hero__trust">
              Az Ön számaiból árazva · 30 perc · kötelezettség nélkül
            </p>
          </div>

          {/* Right — live "leaks caught" graph */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · élő rendszer</span>
            </div>
            <div className="canvas__stage canvas__stage--cyc">
              <div className="hcyc">
                <span className="hcyc__k">Bevételszivárgás · élőben</span>
                <div className="hcyc__stage">
                  <span className="hcyc__txt" key={idx}>{PAINS[idx].item}</span>
                </div>
                <span className="hcyc__tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg>
                  befogva
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
