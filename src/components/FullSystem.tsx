"use client";

/* The full system — seven capabilities as stations along one customer journey.
   Custom solutions live in their own section; deliberately not mentioned here.
   Desktop: horizontal journey path. Mobile: two-column grid of icon cells. */

const STAGES = [
  { b: "Hívásfogadás", s: "minden hívást felvesz", x: 13, nx: 60, ny: 190, c: "#7C5CFF" },
  { b: "Lead-utánkövetés", s: "percek alatt válaszol", x: 21, nx: 210, ny: 150, c: "#9B7BFF" },
  { b: "Időpontfoglalás", s: "egyenesen a naptárba", x: 36, nx: 360, ny: 170, c: "#4AA3FF" },
  { b: "No-show visszahívás", s: "visszaszerzi az elmaradtat", x: 51, nx: 510, ny: 120, c: "#54CFC0" },
  { b: "Értékelések", s: "elégedett ügyféltől kéri", x: 66, nx: 660, ny: 140, c: "#34C759" },
  { b: "Reaktiválás", s: "visszahozza a régieket", x: 81, nx: 810, ny: 90, c: "#E8A33D" },
  { b: "Riportálás", s: "látja, mi működik", x: 88, nx: 950, ny: 110, c: "#010E1E" },
];

const PATH =
  "M60,190 C110,175 160,158 210,150 C260,142 310,168 360,170 " +
  "C410,172 460,130 510,120 C560,110 610,140 660,140 " +
  "C710,140 760,98 810,90 C860,82 910,105 950,110";

const ICONS = [
  /* phone */
  <path key="0" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  /* message bubble */
  <path key="1" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  /* calendar */
  <g key="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  /* phone outgoing */
  <g key="3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  /* star */
  <polygon key="4" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  /* rotate-ccw (bring back) */
  <g key="5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  /* bar chart */
  <g key="6"><path d="M12 20v-9M18 20V4M6 20v-5" /></g>,
];

/* What sets the system apart — distilled, professional, on-brand. */
const POINTS = [
  { t: "Egységes memória", d: "Minden csatornán emlékszik a korábbi beszélgetésekre." },
  { t: "Proaktív megkeresés", d: "Nem csak válaszol — magától kezdeményez és újraaktivál." },
  { t: "Teljes CRM-szinkron", d: "Minden beszélgetés automatikusan a helyére kerül." },
  { t: "Kiszámítható, 24/7", d: "Emberi kiesés nélkül, egy csapat költségének töredékéért." },
];

export default function FullSystem() {
  return (
    <section className="sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A teljes rendszer</span>
          <h2 className="dash__h">Hét lépés. Egyetlen rendszer.</h2>
          <p className="dash__p">
            Nem különálló eszközök, és nem alapszintű automatizálás. Egy
            összehangolt, AI-alapú értékesítési rendszer, amely egyetlen közös
            memóriával viszi végig az érdeklődőt az első hívástól a visszatérő
            ügyfélig — magyarul, a háttérben, az Ön meglévő naptárához és
            eszközeihez kötve.
          </p>
        </div>

        <div className="dash__card reveal" data-delay="1">
          {/* desktop journey */}
          <div className="sys__desk">
            <div className="sys__chart">
              <svg className="sys__svg" viewBox="0 0 1000 260" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gSys" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7C5CFF" />
                    <stop offset="40%" stopColor="#4AA3FF" />
                    <stop offset="75%" stopColor="#54CFC0" />
                    <stop offset="100%" stopColor="#34C759" />
                  </linearGradient>
                  <linearGradient id="gSysFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(74,163,255,0.14)" />
                    <stop offset="100%" stopColor="rgba(74,163,255,0)" />
                  </linearGradient>
                </defs>
                <path d={PATH + " L950,260 L60,260 Z"} fill="url(#gSysFill)" />
                <path d={PATH} fill="none" stroke="url(#gSys)" strokeWidth="3" strokeLinecap="round" />
                {STAGES.map((st, i) => (
                  <circle key={i} cx={st.nx} cy={st.ny} r="7" fill={st.c} stroke="var(--bone)" strokeWidth="3" />
                ))}
              </svg>

              {STAGES.map((st, i) => (
                <div
                  className="funnel__stage"
                  key={i}
                  style={{
                    left: `${st.x}%`,
                    top: `${(st.ny / 260) * 100 + (i % 2 === 0 ? 24 : -24)}%`,
                  }}
                >
                  <b>{st.b}</b>
                  <span>{st.s}</span>
                </div>
              ))}
            </div>

            <div className="dash__axis">
              {["Első megkeresés", "", "", "", "", "", "", "", "", "", "", "Visszatérő ügyfél"].map((a, i) =>
                a ? <span key={i}>{a}</span> : <i key={i} />
              )}
            </div>
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
