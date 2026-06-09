const METRICS = [
  { k: "Hívás", c: "var(--viz-purple)", v: "412", d: "+18%", cls: "up" },
  { k: "Bevétel", c: "var(--viz-green)", v: "3,2M Ft", d: "+100%", cls: "up" },
  { k: "Foglalás", c: "var(--viz-blue)", v: "87", d: "+24%", cls: "up" },
  { k: "Megválaszolt", c: "var(--viz-cyan)", v: "100%", d: "0%", cls: "flat" },
  { k: "No-show", c: "var(--viz-amber)", v: "4%", d: "−31%", cls: "up" },
  { k: "Átlag hívás", c: "var(--stone)", v: "2m 10s", d: "+12%", cls: "up" },
];

const AXIS = ["00:00", "", "", "", "", "", "", "", "", "20:00", "", "23:00"];

const REALTIME_BARS = [30, 52, 40, 22, 60, 35, 70, 48, 88, 56, 64, 38, 50, 72, 44];

export default function RealtimeDashboard() {
  return (
    <section className="dash">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Élő rendszer</span>
          <h2 className="dash__h">Minden hívás, valós időben.</h2>
          <p className="dash__p">
            Nem egy műszerfal, amit Önnek kell nézegetnie — de ha megnézi,
            pontosan látja, mit végzett a rendszer. Egy nap az Atrium szemszögéből.
          </p>
        </div>

        <div className="dash__card reveal" data-delay="1">
          {/* Metric row */}
          <div className="dash__metrics">
            {METRICS.map((m, i) => (
              <div key={i}>
                <div className="dash__metric-k">
                  <span className="dash__metric-dot" style={{ background: m.c }} />
                  {m.k}
                </div>
                <div className="dash__metric-v">{m.v}</div>
                <div className={"dash__metric-d " + m.cls}>{m.d}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="dash__chart">
            <svg className="dash__svg" viewBox="0 0 1000 260" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(124,92,255,0.18)" />
                  <stop offset="100%" stopColor="rgba(124,92,255,0)" />
                </linearGradient>
                <linearGradient id="gAns" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7C5CFF" />
                  <stop offset="55%" stopColor="#4AA3FF" />
                  <stop offset="100%" stopColor="#54CFC0" />
                </linearGradient>
                <linearGradient id="gAnsFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(74,163,255,0.22)" />
                  <stop offset="100%" stopColor="rgba(74,163,255,0)" />
                </linearGradient>
              </defs>

              {/* total (gray) area */}
              <path
                d="M0,150 C40,90 70,55 110,68 C150,82 175,185 230,192 C295,200 330,150 385,156 C445,163 470,188 525,182 C585,176 620,140 685,152 C745,163 785,178 845,172 C905,166 955,178 1000,172 L1000,260 L0,260 Z"
                fill="url(#gTotal)"
              />
              <path
                d="M0,150 C40,90 70,55 110,68 C150,82 175,185 230,192 C295,200 330,150 385,156 C445,163 470,188 525,182 C585,176 620,140 685,152 C745,163 785,178 845,172 C905,166 955,178 1000,172"
                fill="none" stroke="rgba(1,14,30,0.16)" strokeWidth="2"
              />

              {/* answered (gradient) area */}
              <path
                d="M0,212 C90,208 150,216 240,212 C330,208 390,214 480,212 C570,210 630,205 720,208 C820,211 900,206 1000,208 L1000,260 L0,260 Z"
                fill="url(#gAnsFill)"
              />
              <path
                d="M0,212 C90,208 150,216 240,212 C330,208 390,214 480,212 C570,210 630,205 720,208 C820,211 900,206 1000,208"
                fill="none" stroke="url(#gAns)" strokeWidth="3" strokeLinecap="round"
              />
            </svg>

            {/* event markers */}
            <div className="dash__gdot" style={{ left: "17%", top: "73%" }} />
            <div className="dash__gdot" style={{ left: "48%", top: "73%" }} />
            <div className="dash__gbar" style={{ left: "62%", top: "60%", height: "60px" }} />
            <div className="dash__marker" style={{ left: "52%", top: "8%" }} title="Csúcsidő">
              <svg className="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
            </div>
            <div className="dash__marker dash__marker--amber" style={{ left: "92%", top: "8%" }} title="Munkaidő utáni csúcs">
              <svg className="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
            </div>

            <div className="dash__axis">
              {AXIS.map((a, i) => (a ? <span key={i}>{a}</span> : <i key={i} />))}
            </div>
          </div>

          {/* small cards */}
          <div className="dash__cards">
            <div className="dcard">
              <div className="dcard__head">
                <span className="dcard__title"><b>28 hívás</b> az elmúlt 30 percben</span>
                <span className="dcard__tag"><span className="pkg__pin-dot" style={{ background: "var(--viz-purple)", boxShadow: "none" }} /> Élő</span>
              </div>
              <div className="dcard__bars">
                {REALTIME_BARS.map((h, i) => (
                  <i key={i} className={i % 3 === 1 ? "soft" : ""} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="dcard">
              <div className="dcard__head">
                <span className="dcard__title">Élmény-pontszám</span>
                <span className="dcard__tag">Teljesítmény ›</span>
              </div>
              <div className="dcard__ring-wrap">
                <svg className="dcard__ring" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--line)" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--viz-green)" strokeWidth="3"
                    strokeDasharray="97 100" strokeLinecap="round" transform="rotate(-90 18 18)" />
                  <text x="18" y="22" textAnchor="middle" className="dcard__ring-txt">100</text>
                </svg>
                <div>
                  <div className="dcard__perfect">Tökéletes</div>
                  <div className="dcard__sub">Minden hívó tökéletes élményt kapott. Hibátlan.</div>
                </div>
              </div>
            </div>

            <div className="dcard">
              <div className="dcard__head">
                <span className="dcard__title">Visszahozott bevétel</span>
                <span className="dcard__tag pos">+100%</span>
              </div>
              <div className="dcard__big">750 000 Ft</div>
              <svg className="dcard__spark" viewBox="0 0 200 40" preserveAspectRatio="none">
                <path d="M0,32 C30,30 50,20 80,22 C110,24 130,8 160,10 C180,11 190,6 200,5"
                  fill="none" stroke="var(--viz-green)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="dcard">
              <div className="dcard__head">
                <span className="dcard__title">Foglalási arány</span>
                <span className="dcard__tag pos">100% CR</span>
              </div>
              <div className="dcard__x">
                <b>28×</b> a 3,6%-os iparági átlag — kiemelkedő.
              </div>
              <div className="dcard__sub">
                Minden megfogott érdeklődő foglalássá vált a mért időszakban.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
