"use client";
import { useEffect, useState } from "react";

/* Hero — static brand tagline on the left. On the right, a live revenue-recovery
   graph: the green line climbs as each leak is caught; the cycling callout names
   the angle just caught and the matching point on the curve pulses. */

const REASONS = [
  "Meg nem válaszolt hívás",
  "Lassú visszahívás",
  "Elmaradt időpont",
  "Kihűlt érdeklődő",
  "Rég elfeledett ügyfél",
];

/* one point per reason, climbing left→right (520×360 viewBox) */
const P = [
  { x: 64, y: 250 },
  { x: 166, y: 214 },
  { x: 268, y: 170 },
  { x: 370, y: 126 },
  { x: 470, y: 88 },
];
const RISE = P.map((p) => `${p.x},${p.y}`).join(" ");
const AREA = `64,262 ${RISE} 470,262`;

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

          {/* Right — revenue-recovery graph */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · visszaszerzett bevétel</span>
            </div>
            <div className="canvas__stage canvas__stage--rev">
              <svg className="hrev" viewBox="0 0 520 360" preserveAspectRatio="xMidYMid meet">
                {/* gridlines + baseline */}
                {[120, 170, 220].map((y) => (
                  <line key={y} x1="64" y1={y} x2="478" y2={y} stroke="var(--line)" strokeWidth="1" strokeDasharray="2 7" />
                ))}
                <line x1="64" y1="262" x2="478" y2="262" stroke="var(--line)" strokeWidth="1" />

                {/* recovered area + the two lines */}
                <polygon points={AREA} fill="rgba(52,199,89,0.13)" />
                <polyline points="64,252 478,246" fill="none" stroke="var(--ink-35)" strokeWidth="1.5" strokeDasharray="5 5" />
                <polyline className="hrev__rise" points={RISE} fill="none" stroke="#34C759" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                {/* a point per leak; caught ones fill green */}
                {P.map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r={i === idx ? 6 : 4.5}
                    fill={i <= idx ? "#34C759" : "var(--bone)"} stroke="#34C759" strokeWidth="2" />
                ))}
                {/* pulse on the active point */}
                <circle key={`p${idx}`} cx={P[idx].x} cy={P[idx].y} r="6" fill="none" stroke="#34C759" strokeWidth="2">
                  <animate attributeName="r" values="6;18" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.55;0" dur="1.8s" repeatCount="indefinite" />
                </circle>

                {/* labels */}
                <text className="hrev__lbl hrev__lbl--sig" x="470" y="78" textAnchor="end">az Atriummal</text>
                <text className="hrev__lbl" x="300" y="240" textAnchor="middle">rendszer nélkül</text>
                <text className="hrev__ax" x="478" y="282" textAnchor="end">idő →</text>
              </svg>

              <div className="hrev__call">
                <span className="hrev__call-k">
                  <span className="hrev__live" /> Most befogva
                </span>
                <b className="hrev__call-r" key={idx}>{REASONS[idx]}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
