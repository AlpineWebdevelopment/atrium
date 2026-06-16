"use client";
import { useEffect, useState } from "react";

/* Hero — omnifusion-style rotating pain headline ("Ne veszítse el a bevételt
   ~az elszalasztott hívások~ miatt."), and a live graph that cycles through the
   same revenue leaks, checking each one off (befogva). Headline + graph share
   one index so they stay in sync. */

const PAINS = [
  { strike: "az elszalasztott hívások", item: "Elszalasztott hívás" },
  { strike: "a lassú visszahívás", item: "Lassan kezelt érdeklődő" },
  { strike: "az elmaradt időpontok", item: "Elmaradt időpont" },
  { strike: "a rég elfeledett ügyfelek", item: "Rég elfeledett ügyfél" },
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
              Ne veszítse el a bevételt{" "}
              <span className="hero__rot" key={idx}>{PAINS[idx].strike}</span>{" "}
              miatt.
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
            <div className="canvas__stage canvas__stage--leak">
              <div className="hlk">
                <span className="hlk__k">Bevételszivárgás · befogva</span>
                {PAINS.map((p, i) => {
                  const done = i <= idx;
                  const active = i === idx;
                  return (
                    <div className={"hlk__row" + (done ? " hlk__row--done" : "") + (active ? " hlk__row--active" : "")} key={i}>
                      <span className="hlk__check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg>
                      </span>
                      <span className="hlk__txt">{p.item}</span>
                      <span className="hlk__tag">{done ? "befogva" : "szivárog"}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
