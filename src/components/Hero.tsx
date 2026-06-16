"use client";
import { useEffect, useState } from "react";

/* Hero — static brand tagline on the left. On the right, a live "system" scene:
   channels feed a central card, and the card's text cycles through the revenue
   leaks as they're caught in real time (changing text = the different angles). */

const ICONS: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  refresh: <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
};

/* node corners feeding the centre (520x360 viewBox) */
const CX = 260, CY = 178;
const NODES = [
  { x: 86, y: 84, k: "phone" },
  { x: 434, y: 84, k: "chat" },
  { x: 86, y: 272, k: "calendar" },
  { x: 434, y: 272, k: "refresh" },
];

const EVENTS = [
  { t: "A 21:40-es hívás", s: "felvéve, időpont egyeztetve" },
  { t: "A webes érdeklődő", s: "2 percen belül visszahíva" },
  { t: "Az elmaradt időpont", s: "visszahívással megmentve" },
  { t: "A rég nem látott ügyfél", s: "magától újraaktiválva" },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % EVENTS.length), 2800);
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

          {/* Right — live system scene with cycling event text */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · élő rendszer</span>
            </div>
            <div className="canvas__stage canvas__stage--live">
              <svg className="hlive__bg" viewBox="0 0 520 360" preserveAspectRatio="xMidYMid meet">
                {NODES.map((n, i) => {
                  const path = `M${n.x} ${n.y} Q ${(n.x + CX) / 2} ${(n.y + CY) / 2 + (n.y < CY ? 18 : -18)}, ${CX} ${CY}`;
                  return (
                    <g key={i}>
                      <path d={path} fill="none" stroke="var(--line)" strokeWidth="1.3" />
                      <circle r="3" fill="#6DBC61">
                        <animateMotion dur="2.6s" begin={`${i * 0.45}s`} repeatCount="indefinite" path={path} />
                        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.75;1" dur="2.6s" begin={`${i * 0.45}s`} repeatCount="indefinite" />
                      </circle>
                      <circle cx={n.x} cy={n.y} r="19" fill="var(--bone)" stroke="var(--line)" strokeWidth="1.4" />
                      <svg x={n.x - 11} y={n.y - 11} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--stone)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[n.k]}</svg>
                    </g>
                  );
                })}
                {/* core glow */}
                <circle cx={CX} cy={CY} r="58" fill="rgba(109,188,97,0.07)" />
              </svg>

              <div className="hlive__card">
                <span className="hlive__k">
                  <span className="hlive__live" /> Élőben
                </span>
                <div className="hlive__now" key={idx}>
                  <b className="hlive__t">{EVENTS[idx].t}</b>
                  <span className="hlive__s">{EVENTS[idx].s}</span>
                </div>
                <span className="hlive__tag">
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
