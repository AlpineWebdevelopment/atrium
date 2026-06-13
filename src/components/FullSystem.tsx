"use client";

/* The full system as a unified hub: one shared-memory core, seven functions
   orbiting it, all connected — "egy rendszer, egy memória, minden összhangban".
   Desktop: radial hub graph. Mobile: two-column icon grid. */

const STAGES = [
  { b: "Hívásfogadás", s: "minden hívást felvesz", c: "#7C5CFF" },
  { b: "Lead-utánkövetés", s: "percek alatt válaszol", c: "#9B7BFF" },
  { b: "Időpontfoglalás", s: "egyenesen a naptárba", c: "#4AA3FF" },
  { b: "No-show visszahívás", s: "visszaszerzi az elmaradtat", c: "#54CFC0" },
  { b: "Értékelések", s: "elégedett ügyféltől kéri", c: "#34C759" },
  { b: "Reaktiválás", s: "visszahozza a régieket", c: "#E8A33D" },
  { b: "Riportálás", s: "látja, mi működik", c: "#010E1E" },
];

/* radial geometry */
const CX = 550, CY = 230, R = 175;
const HUB = STAGES.map((st, i) => {
  const a = (-90 + i * (360 / 7)) * (Math.PI / 180);
  const x = CX + R * Math.cos(a);
  const y = CY + R * Math.sin(a);
  const cos = Math.cos(a);
  const side = cos > 0.2 ? "r" : cos < -0.2 ? "l" : "c";
  const lx = side === "r" ? x + 15 : side === "l" ? x - 15 : x;
  const ly = side === "c" ? y - 18 : y + 5;
  const anchor: "start" | "end" | "middle" =
    side === "r" ? "start" : side === "l" ? "end" : "middle";
  return { ...st, x, y, lx, ly, anchor };
});

const POINTS = [
  { t: "Egységes memória", d: "Minden csatornán emlékszik a korábbi beszélgetésekre." },
  { t: "Proaktív megkeresés", d: "Nem csak válaszol — magától kezdeményez és újraaktivál." },
  { t: "Teljes CRM-szinkron", d: "Minden beszélgetés automatikusan a helyére kerül." },
  { t: "Kiszámítható, 24/7", d: "Emberi kiesés nélkül, egy csapat költségének töredékéért." },
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
          {/* desktop: unified-memory hub */}
          <div className="sys__desk">
            <svg className="sys__hub" viewBox="0 0 1100 460" role="img" aria-label="Egységes memória, hét funkcióval összekötve">
              {/* orbit ring */}
              <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 7" />
              {/* spokes */}
              {HUB.map((n, i) => (
                <line key={`s${i}`} x1={CX} y1={CY} x2={n.x} y2={n.y} stroke={n.c} strokeWidth="1.5" strokeOpacity="0.45" />
              ))}
              {/* core */}
              <circle cx={CX} cy={CY} r="46" fill="var(--bone)" stroke="#6DBC61" strokeWidth="2" />
              <circle cx={CX} cy={CY} r="46" fill="none" stroke="#6DBC61" strokeWidth="2">
                <animate attributeName="r" values="46;66" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <text className="sys__hub-core" x={CX} y={CY - 3} textAnchor="middle">Egységes</text>
              <text className="sys__hub-core" x={CX} y={CY + 14} textAnchor="middle">memória</text>
              {/* nodes + labels */}
              {HUB.map((n, i) => (
                <g key={`n${i}`}>
                  <circle cx={n.x} cy={n.y} r="9" fill={n.c} stroke="var(--bone)" strokeWidth="3" />
                  <text className="sys__hub-label" x={n.lx} y={n.ly} textAnchor={n.anchor}>{n.b}</text>
                </g>
              ))}
            </svg>
          </div>

          {/* mobile: two-column icon grid */}
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
      </div>
    </section>
  );
}
