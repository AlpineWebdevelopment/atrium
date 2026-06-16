"use client";
import { useEffect, useState } from "react";

/* Hero — static brand tagline on the left. On the right: omnifusion-style
   headline (static line + rotating accent phrase with a blinking cursor,
   cycling the leak angles) sitting above a compact recovered-revenue chart,
   whose matching band brightens in sync. */

const REASONS = [
  "a meg nem válaszolt hívások miatt",
  "a lassú visszahívás miatt",
  "az elmaradt időpontok miatt",
  "a kihűlt érdeklődők miatt",
  "a rég elfeledett ügyfelek miatt",
];

const SOURCES = [
  { c: "#7C5CFF", v: [3, 4, 5, 6, 7, 8] },
  { c: "#4AA3FF", v: [2, 3, 3, 4, 5, 6] },
  { c: "#54CFC0", v: [1, 2, 3, 3, 4, 5] },
  { c: "#E8A33D", v: [1, 1, 2, 3, 4, 4] },
  { c: "#34C759", v: [1, 1, 2, 2, 3, 4] },
];

const M = 6, X0 = 24, X1 = 496, YB = 150, YT = 22;
const xAt = (m: number) => X0 + (m * (X1 - X0)) / (M - 1);
const totals = Array.from({ length: M }, (_, m) => SOURCES.reduce((s, src) => s + src.v[m], 0));
const MAX = Math.max(...totals);
const yFor = (cum: number) => YB - (cum / MAX) * (YB - YT);
const BANDS = SOURCES.map((src, si) => {
  const top: string[] = [], bot: string[] = [];
  for (let m = 0; m < M; m++) {
    const below = SOURCES.slice(0, si).reduce((s, s2) => s + s2.v[m], 0);
    top.push(`${xAt(m)},${yFor(below + src.v[m])}`);
    bot.push(`${xAt(m)},${yFor(below)}`);
  }
  return { c: src.c, path: `M ${top.join(" L ")} L ${[...bot].reverse().join(" L ")} Z` };
});

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

          {/* Right — rotating headline + compact recovered-revenue chart */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · visszaszerzett bevétel</span>
            </div>
            <div className="canvas__stage canvas__stage--h2">
              <div className="hh__text">
                <span className="hh__static">Ne veszítsen több bevételt</span>
                <span className="hh__rotline">
                  <span className="hh__rot" key={idx}>{REASONS[idx]}</span>
                  <span className="hh__cursor" />
                </span>
              </div>

              <svg className="hh__chart" viewBox="0 0 520 170" preserveAspectRatio="none">
                {[60, 100, 140].map((y) => (
                  <line key={y} x1={X0} y1={y} x2={X1} y2={y} stroke="var(--line)" strokeWidth="1" strokeDasharray="2 7" />
                ))}
                <line x1={X0} y1={YB} x2={X1} y2={YB} stroke="var(--line)" strokeWidth="1" />
                {BANDS.map((b, i) => (
                  <path key={i} d={b.path} fill={b.c} fillOpacity={i === idx ? 0.92 : 0.3}
                    stroke={i === idx ? b.c : "transparent"} strokeWidth="1.3"
                    style={{ transition: "fill-opacity 400ms ease" }} />
                ))}
                <polyline points={Array.from({ length: M }, (_, m) => `${xAt(m)},${yFor(totals[m])}`).join(" ")} fill="none" stroke="var(--ink)" strokeWidth="1.8" />
                <circle cx={xAt(M - 1)} cy={yFor(MAX)} r="4" fill="var(--ink)" />
                <circle cx={xAt(M - 1)} cy={yFor(MAX)} r="4" fill="none" stroke="var(--ink)" strokeWidth="1.4">
                  <animate attributeName="r" values="4;12" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
