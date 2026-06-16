"use client";
import { useEffect, useState } from "react";

/* Hero — static brand tagline on the left. On the right, a stacked-area chart:
   recovered revenue by source over six months. The total climbs month over
   month; the cycling highlight names each source, brightens its band and pulses
   its latest point — so the "changing text" is built into a real data-viz. */

const SOURCES = [
  { t: "Hívásfogadás", c: "#7C5CFF", v: [3, 4, 5, 6, 7, 8] },
  { t: "Lead-utánkövetés", c: "#4AA3FF", v: [2, 3, 3, 4, 5, 6] },
  { t: "No-show visszahívás", c: "#54CFC0", v: [1, 2, 3, 3, 4, 5] },
  { t: "Reaktiválás", c: "#E8A33D", v: [1, 1, 2, 3, 4, 4] },
  { t: "Értékelések", c: "#34C759", v: [1, 1, 2, 2, 3, 4] },
];

const M = 6, X0 = 60, X1 = 482, YB = 250, YT = 66;
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
  return { ...src, path: `M ${top.join(" L ")} L ${[...bot].reverse().join(" L ")} Z`, topY: yFor(SOURCES.slice(0, si + 1).reduce((s, s2) => s + s2.v[M - 1], 0)) };
});

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SOURCES.length), 2300);
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

          {/* Right — recovered-revenue-by-source stacked area chart */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · visszaszerzett bevétel / forrás</span>
            </div>
            <div className="canvas__stage canvas__stage--rev">
              <svg className="hrev" viewBox="0 0 520 360" preserveAspectRatio="xMidYMid meet">
                {/* gridlines + axes */}
                {[110, 150, 190, 230].map((y) => (
                  <line key={y} x1={X0} y1={y} x2={X1} y2={y} stroke="var(--line)" strokeWidth="1" strokeDasharray="2 7" />
                ))}
                <line x1={X0} y1={YB} x2={X1} y2={YB} stroke="var(--line)" strokeWidth="1" />

                {/* stacked bands — active one full, others dimmed */}
                {BANDS.map((b, i) => (
                  <path key={i} d={b.path} fill={b.c} fillOpacity={i === idx ? 0.9 : 0.32}
                    stroke={i === idx ? b.c : "transparent"} strokeWidth="1.5"
                    style={{ transition: "fill-opacity 400ms ease" }} />
                ))}

                {/* total line + live pulse at the latest month */}
                <polyline points={Array.from({ length: M }, (_, m) => `${xAt(m)},${yFor(totals[m])}`).join(" ")} fill="none" stroke="var(--ink)" strokeWidth="2" />
                <circle cx={xAt(M - 1)} cy={yFor(MAX)} r="4.5" fill="var(--ink)" />
                <circle cx={xAt(M - 1)} cy={yFor(MAX)} r="4.5" fill="none" stroke="var(--ink)" strokeWidth="1.5">
                  <animate attributeName="r" values="4.5;13" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* month axis */}
                {Array.from({ length: M }, (_, m) => (
                  <text key={m} className="hrev__ax" x={xAt(m)} y={YB + 18} textAnchor="middle">{m + 1}.</text>
                ))}
                <text className="hrev__ax" x={X1} y={YB + 34} textAnchor="end">hónap →</text>
              </svg>

              {/* legend — active source cycles */}
              <div className="hrev__legend">
                {SOURCES.map((s, i) => (
                  <div className={"hrev__leg" + (i === idx ? " hrev__leg--on" : "")} key={i}>
                    <span className="hrev__leg-dot" style={{ background: s.c }} />
                    {s.t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
