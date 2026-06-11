"use client";

/* The full system — seven capabilities as stations along one customer journey.
   Custom solutions live in their own section; deliberately not mentioned here.
   Desktop: horizontal journey path. Mobile: the same journey as a vertical
   winding graph — nodes alternate sides, labels sit beside them. */

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

/* mobile snake — viewBox 0 0 360 560 */
const M_NODES: { mx: number; my: number; side: string; dy?: number }[] = [
  { mx: 70, my: 40, side: "r", dy: -16 },
  { mx: 290, my: 125, side: "l" },
  { mx: 70, my: 210, side: "r" },
  { mx: 290, my: 295, side: "l" },
  { mx: 70, my: 380, side: "r" },
  { mx: 290, my: 465, side: "l" },
  { mx: 180, my: 535, side: "l" },
];

const M_PATH =
  "M70,40 C200,40 290,62 290,125 " +
  "C290,190 70,147 70,210 " +
  "C70,275 290,232 290,295 " +
  "C290,360 70,317 70,380 " +
  "C70,445 290,402 290,465 " +
  "C290,522 225,535 180,535";

export default function FullSystem() {
  return (
    <section className="sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A teljes rendszer</span>
          <h2 className="dash__h">Hét lépés. Egyetlen rendszer.</h2>
          <p className="dash__p">
            Az érdeklődő első hívásától a visszatérő ügyfélig minden lépést
            ugyanaz az összehangolt rendszer visz — magyarul, a háttérben,
            az Ön meglévő naptárához és eszközeihez kapcsolva.
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

          {/* mobile journey — vertical winding graph */}
          <div className="sys__mob">
            <svg className="sys__mob-svg" viewBox="0 0 360 560" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gSysM" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7C5CFF" />
                  <stop offset="40%" stopColor="#4AA3FF" />
                  <stop offset="75%" stopColor="#54CFC0" />
                  <stop offset="100%" stopColor="#34C759" />
                </linearGradient>
              </defs>
              <path d={M_PATH} fill="none" stroke="url(#gSysM)" strokeWidth="2.5" strokeLinecap="round" />
              {STAGES.map((st, i) => (
                <circle key={i} cx={M_NODES[i].mx} cy={M_NODES[i].my} r="7" fill={st.c} stroke="var(--bone)" strokeWidth="3" />
              ))}
            </svg>

            {STAGES.map((st, i) => {
              const n = M_NODES[i];
              const top = `calc(${(n.my / 560) * 100}% + ${n.dy ?? 0}px)`;
              const pos =
                n.side === "r"
                  ? { left: `calc(${(n.mx / 360) * 100}% + 22px)`, top }
                  : { right: `calc(${100 - (n.mx / 360) * 100}% + 22px)`, top };
              return (
                <div
                  className={"sys__mob-label" + (n.side === "l" ? " sys__mob-label--r" : "")}
                  key={i}
                  style={pos}
                >
                  <b>{st.b}</b>
                  <span>{st.s}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
