"use client";
import { useEffect, useState } from "react";

/* Hero — static brand tagline on the left. On the right, omnifusion-style
   rotating headline: a fixed lead line ("Ne veszítsen több bevételt") plus a
   colour-accented reason that cycles through the different revenue-leak angles. */

const REASONS = [
  "a meg nem válaszolt hívások miatt",
  "a lassú visszahívás miatt",
  "az elmaradt időpontok miatt",
  "a kihűlt érdeklődők miatt",
  "a rég elfeledett ügyfelek miatt",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % REASONS.length), 2400);
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

          {/* Right — rotating-reason headline */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · élő rendszer</span>
            </div>
            <div className="canvas__stage canvas__stage--rot">
              <div className="hrot">
                <span className="hrot__k"><span className="hrot__live" /> Bevételszivárgás</span>
                <span className="hrot__static">Ne veszítsen több bevételt</span>
                <span className="hrot__rot" key={idx}>{REASONS[idx]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
