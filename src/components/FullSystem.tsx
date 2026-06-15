"use client";

/* The full system centred on the RESULT: seven functions, threaded on one
   shared-memory ring, each delivering its outcome inward to "több foglalás,
   több bevétel". Memory is the connective ring (with context circulating
   around it), not the destination — the value the client gets is the hero.
   Desktop: full hub with labels. Mobile: same hub, compact (icons only) +
   a named icon-grid legend below it. */

const STAGES = [
  { b: "Hívásfogadás", s: "minden hívást felvesz", c: "#7C5CFF" },
  { b: "Lead-utánkövetés", s: "percek alatt válaszol", c: "#9B7BFF" },
  { b: "Időpontfoglalás", s: "egyenesen a naptárba", c: "#4AA3FF" },
  { b: "No-show visszahívás", s: "visszaszerzi az elmaradtat", c: "#54CFC0" },
  { b: "Értékelések", s: "elégedett ügyféltől kéri", c: "#34C759" },
  { b: "Reaktiválás", s: "visszahozza a régieket", c: "#E8A33D" },
  { b: "Riportálás", s: "látja, mi működik", c: "#010E1E" },
];

const ICONS = [
  <path key="0" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  <path key="1" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  <g key="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  <g key="3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  <polygon key="4" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  <g key="5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  <g key="6"><path d="M12 20v-9M18 20V4M6 20v-5" /></g>,
];

/* radial geometry */
const CX = 560, CY = 275, R = 195;
const HUB = STAGES.map((st, i) => {
  const a = (-90 + i * (360 / 7)) * (Math.PI / 180);
  const x = CX + R * Math.cos(a);
  const y = CY + R * Math.sin(a);
  const cos = Math.cos(a);
  const side = cos > 0.2 ? "r" : cos < -0.2 ? "l" : "c";
  const lx = side === "r" ? x + 33 : side === "l" ? x - 33 : x;
  const titleY = side === "c" ? y - 46 : y + 1;
  const subY = side === "c" ? y - 31 : y + 16;
  const anchor: "start" | "end" | "middle" =
    side === "r" ? "start" : side === "l" ? "end" : "middle";
  return { ...st, x, y, lx, titleY, subY, anchor };
});

const POINTS = [
  { t: "Egységes memória", d: "Minden csatornán emlékszik a korábbi beszélgetésekre." },
  { t: "Proaktív megkeresés", d: "Nem csak válaszol — magától kezdeményez és újraaktivál." },
  { t: "Teljes CRM-szinkron", d: "Minden beszélgetés automatikusan a helyére kerül." },
  { t: "Kiszámítható, 24/7", d: "Emberi kiesés nélkül, egy csapat költségének töredékéért." },
];

/* The hub graph. `compact` crops to the core+nodes square and drops the
   side text labels, so it stays legible on a phone. */
function Hub({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={`sys__hub ${compact ? "sys__hub--mob" : "sys__hub--desk"}`}
      viewBox={compact ? "340 50 440 455" : "0 0 1120 600"}
      role="img"
      aria-label="Hét funkció egy közös memóriával, egyetlen eredménybe futva: több foglalás, több bevétel"
    >
      {/* the shared-memory ring that threads every function together */}
      <circle cx={CX} cy={CY} r={R - 64} fill="none" stroke="var(--line)" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(109,188,97,0.32)" strokeWidth="1.5" />
      {/* shared context circulating around the ring */}
      {[0, 1, 2].map((k) => (
        <circle key={`mem${k}`} r="2.4" fill="#6DBC61" opacity="0.75">
          <animateMotion dur="10s" begin={`${k * 3.33}s`} repeatCount="indefinite" path={`M${CX},${CY - R} A ${R},${R} 0 1 1 ${CX - 0.1},${CY - R}`} />
        </circle>
      ))}
      {/* label tag sitting on the memory ring */}
      <rect x={CX - 64} y={CY + R - 13} width="128" height="26" rx="13" fill="var(--bone)" stroke="rgba(109,188,97,0.4)" />
      <text className="sys__hub-memlbl" x={CX} y={CY + R + 4} textAnchor="middle">egységes memória</text>

      {/* spokes — every function delivers its result inward */}
      {HUB.map((n, i) => (
        <g key={`sp${i}`}>
          <line x1={CX} y1={CY} x2={n.x} y2={n.y} stroke={n.c} strokeWidth="1.5" strokeOpacity="0.38" />
          <circle r="2.8" fill={n.c}>
            <animateMotion dur="2.8s" begin={`${i * 0.34}s`} repeatCount="indefinite" path={`M${n.x},${n.y} L${CX},${CY}`} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.8;1" dur="2.8s" begin={`${i * 0.34}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* core: layered + staggered pulse */}
      <circle cx={CX} cy={CY} r="58" fill="var(--bone)" stroke="rgba(109,188,97,0.30)" strokeWidth="1" />
      <circle cx={CX} cy={CY} r="46" fill="rgba(109,188,97,0.07)" stroke="#6DBC61" strokeWidth="2" />
      <circle cx={CX} cy={CY} r="46" fill="none" stroke="#6DBC61" strokeWidth="2">
        <animate attributeName="r" values="46;80" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <circle cx={CX} cy={CY} r="46" fill="none" stroke="#6DBC61" strokeWidth="1.5">
        <animate attributeName="r" values="46;80" dur="2.6s" begin="1.3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0" dur="2.6s" begin="1.3s" repeatCount="indefinite" />
      </circle>
      <text className="sys__hub-core" x={CX} y={CY - 4} textAnchor="middle">Több foglalás</text>
      <text className="sys__hub-core" x={CX} y={CY + 13} textAnchor="middle">több bevétel</text>

      {/* function modules: icon + (desktop) title + subtitle */}
      {HUB.map((n, i) => (
        <g key={`n${i}`}>
          <circle cx={n.x} cy={n.y} r="22" fill="var(--bone)" stroke={n.c} strokeWidth="2" />
          <g transform={`translate(${n.x - 11} ${n.y - 11}) scale(0.92)`} fill="none" stroke={n.c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {ICONS[i]}
          </g>
          {!compact && (
            <>
              <text className="sys__hub-label" x={n.lx} y={n.titleY} textAnchor={n.anchor}>{n.b}</text>
              <text className="sys__hub-sub" x={n.lx} y={n.subY} textAnchor={n.anchor}>{n.s}</text>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

export default function FullSystem() {
  return (
    <section className="sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A teljes rendszer</span>
          <h2 className="dash__h">Hét funkció. Egyetlen rendszer.</h2>
          <p className="dash__p">
            Nem különálló eszközök, és nem alapszintű automatizálás. Egy
            összehangolt, AI-alapú értékesítési rendszer: hét funkció egyetlen
            közös memóriával — magyarul, a háttérben, az Ön meglévő naptárához
            és eszközeihez kötve.
          </p>
        </div>

        <div className="dash__card reveal" data-delay="1">
          <div className="sys__desk">
            <Hub />
          </div>

          {/* mobile: same hub, compact, then the named legend */}
          <Hub compact />
          <div className="sys__mob">
            {STAGES.map((st, i) => (
              <div className="sys__cell" key={i}>
                <div className="sys__cell-h" style={{ color: i === STAGES.length - 1 ? "var(--ink)" : st.c }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[i]}
                  </svg>
                  <b>{st.b}</b>
                </div>
                <span className="sys__cell-d">{st.s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sys__points reveal" data-delay="2">
          {POINTS.map((p, i) => (
            <div className="sys__point" key={i}>
              <b className="sys__point-t">{p.t}</b>
              <span className="sys__point-d">{p.d}</span>
            </div>
          ))}
        </div>

        <div className="sys__badges reveal" data-delay="3">
          <span className="sys__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></svg>
            Magyar nyelvű
          </span>
          <span className="sys__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="8" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 8h.01M7 17h.01" /></svg>
            EU hosting
          </span>
          <span className="sys__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5z" /><path d="M9 12l2 2 4-4" /></svg>
            GDPR-konform
          </span>
        </div>
      </div>
    </section>
  );
}
