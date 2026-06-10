"use client";
import { useState } from "react";

const TABS = ["Áttekintés", "Profilok", "Tölcsér", "Teljesítmény", "Élő"];

const METRICS = [
  { k: "Hívás", c: "var(--viz-purple)", v: "412", d: "+18%", cls: "up" },
  { k: "Bevétel", c: "var(--viz-green)", v: "3,2M Ft", d: "+100%", cls: "up" },
  { k: "Foglalás", c: "var(--viz-blue)", v: "87", d: "+24%", cls: "up" },
  { k: "Megválaszolt", c: "var(--viz-cyan)", v: "100%", d: "0%", cls: "flat" },
  { k: "No-show", c: "var(--viz-amber)", v: "4%", d: "−31%", cls: "up" },
  { k: "Átlag hívás", c: "var(--stone)", v: "2m 10s", d: "+12%", cls: "up" },
];

const AXIS = ["00:00", "", "", "", "", "", "", "", "", "20:00", "", "23:00"];

const PROFILES = [
  { in: "KA", c: "var(--viz-purple)", name: "Kovács Anna", meta: "Bejövő hívás · 09:42", chan: "Telefon", status: "Foglalt ✓" },
  { in: "SB", c: "var(--viz-blue)", name: "Schmidt Béla", meta: "Munkaidő után · 19:20", chan: "Telefon", status: "Foglalt ✓" },
  { in: "TP", c: "var(--viz-cyan)", name: "Tóth Péter", meta: "No-show → visszahívva", chan: "SMS", status: "Megerősítve ✓" },
  { in: "NA", c: "var(--viz-green)", name: "Nagy Andrea", meta: "FB-lead · 14:30", chan: "Facebook", status: "Foglalt · 22 perc" },
  { in: "HG", c: "var(--viz-amber)", name: "Horváth Gábor", meta: "Ajánlatkérés · web", chan: "Web űrlap", status: "Utánkövetés…", warn: true },
];

const FUNNEL = [
  { name: "Bejövő hívás", n: "412", p: "100%", x: 9 },
  { name: "Érdeklődő", n: "198", p: "48%", x: 37 },
  { name: "Foglalás", n: "87", p: "21%", x: 66 },
  { name: "Megjelent", n: "79", p: "19%", x: 91 },
];

const PERF_BARS = [
  { k: "Átlag válaszidő", v: "1,8 mp", w: "94%", c: "linear-gradient(90deg,#7C5CFF,#4AA3FF)" },
  { k: "Megválaszolt hívás", v: "100%", w: "100%", c: "linear-gradient(90deg,#4AA3FF,#54CFC0)" },
  { k: "No-show visszanyerés", v: "64%", w: "64%", c: "linear-gradient(90deg,#E8A33D,#34C759)" },
];

const RT_BARS = [30, 52, 40, 22, 60, 35, 70, 48, 88, 56, 64, 38, 50, 72, 44, 60, 33, 78];

export default function RealtimeDashboard() {
  const [tab, setTab] = useState(0);

  return (
    <section className="dash">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Élő rendszer</span>
          <h2 className="dash__h">Minden hívás, valós időben.</h2>
          <p className="dash__p">
            Nem egy műszerfal, amit Önnek kell nézegetnie — de ha megnézi, pontosan
            látja, mit végzett a rendszer. Váltson nézetet.
          </p>
        </div>

        <div className="dash__card reveal" data-delay="1">
          {/* Tabs */}
          <div className="dash__tabs" role="tablist">
            {TABS.map((t, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={tab === i}
                className={"dash__tab" + (tab === i ? " dash__tab--active" : "")}
                onClick={() => setTab(i)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="dash__panel">
            {/* 0 — Áttekintés */}
            {tab === 0 && (
              <>
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
                <div className="dash__chart">
                  <svg className="dash__svg" viewBox="0 0 1000 190" preserveAspectRatio="none">
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
                    <path d="M0,95 C40,52 70,32 110,42 C150,52 175,128 230,134 C295,140 330,100 385,105 C445,110 470,130 525,126 C585,122 620,92 685,102 C745,112 785,124 845,118 C905,112 955,124 1000,118 L1000,190 L0,190 Z" fill="url(#gTotal)" />
                    <path d="M0,95 C40,52 70,32 110,42 C150,52 175,128 230,134 C295,140 330,100 385,105 C445,110 470,130 525,126 C585,122 620,92 685,102 C745,112 785,124 845,118 C905,112 955,124 1000,118" fill="none" stroke="rgba(1,14,30,0.16)" strokeWidth="2" />
                    <path d="M0,150 C90,147 150,153 240,150 C330,147 390,151 480,150 C570,149 630,145 720,147 C820,150 900,146 1000,147 L1000,190 L0,190 Z" fill="url(#gAnsFill)" />
                    <path d="M0,150 C90,147 150,153 240,150 C330,147 390,151 480,150 C570,149 630,145 720,147 C820,150 900,146 1000,147" fill="none" stroke="url(#gAns)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <div className="dash__gdot" style={{ left: "17%", top: "70%" }} />
                  <div className="dash__gdot" style={{ left: "48%", top: "70%" }} />
                  <div className="dash__gbar" style={{ left: "62%", top: "56%", height: "44px" }} />
                  <div className="dash__marker" style={{ left: "52%", top: "6%" }}>
                    <svg className="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
                  </div>
                  <div className="dash__marker dash__marker--amber" style={{ left: "92%", top: "6%" }}>
                    <svg className="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
                  </div>
                  <div className="dash__axis">
                    {AXIS.map((a, i) => (a ? <span key={i}>{a}</span> : <i key={i} />))}
                  </div>
                </div>
              </>
            )}

            {/* 1 — Profilok */}
            {tab === 1 && (
              <div className="prof">
                {PROFILES.map((p, i) => (
                  <div className="prof__row" key={i}>
                    <span className="prof__av" style={{ background: p.c }}>{p.in}</span>
                    <div>
                      <div className="prof__name">{p.name}</div>
                      <div className="prof__meta">{p.meta}</div>
                    </div>
                    <span className="prof__chan">{p.chan}</span>
                    <span className={"prof__status" + (p.warn ? " warn" : "")}>{p.status}</span>
                  </div>
                ))}
              </div>
            )}

            {/* 2 — Tölcsér */}
            {tab === 2 && (
              <div>
                <div className="funnel__top">
                  <div>
                    <div className="funnel__kpi-k">Elért érdeklődő</div>
                    <div className="funnel__kpi-v">412</div>
                    <div className="funnel__kpi-d up">+18%</div>
                  </div>
                  <div>
                    <div className="funnel__kpi-k">Foglalási arány</div>
                    <div className="funnel__kpi-v">21%</div>
                    <div className="funnel__kpi-d up">+50%</div>
                  </div>
                </div>
                <div className="funnel__chart">
                  <svg className="funnel__svg" viewBox="0 0 1000 250" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gFunnel" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#7C5CFF" />
                        <stop offset="50%" stopColor="#4AA3FF" />
                        <stop offset="100%" stopColor="#54CFC0" />
                      </linearGradient>
                    </defs>
                    {/* soft outer band */}
                    <path d="M0,26 C180,26 250,63 333,63 C480,63 540,86 666,86 C820,86 880,94 1000,94 L1000,156 C880,156 820,164 666,164 C540,164 480,187 333,187 C250,187 180,224 0,224 Z" fill="rgba(124,92,255,0.16)" />
                    {/* solid inner band */}
                    <path d="M0,40 C180,40 250,77 333,77 C480,77 540,100 666,100 C820,100 880,108 1000,108 L1000,142 C880,142 820,150 666,150 C540,150 480,173 333,173 C250,173 180,210 0,210 Z" fill="url(#gFunnel)" />
                  </svg>
                  {FUNNEL.map((s, i) => (
                    <div className="funnel__stage" key={i} style={{ left: `${s.x}%`, top: "50%" }}>
                      <b>{s.n}</b><span>{s.p}</span>
                    </div>
                  ))}
                </div>
                <div className="funnel__labels">
                  {FUNNEL.map((s, i) => (<span key={i}>{s.name}</span>))}
                </div>
              </div>
            )}

            {/* 3 — Teljesítmény */}
            {tab === 3 && (
              <div className="perf">
                <div className="perf__ring-wrap">
                  <svg className="perf__ring" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--line)" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--viz-green)" strokeWidth="3" strokeDasharray="97 100" strokeLinecap="round" transform="rotate(-90 18 18)" />
                    <text x="18" y="22.5" textAnchor="middle" className="perf__ring-num">100</text>
                  </svg>
                  <div>
                    <div className="perf__perfect">Tökéletes élmény</div>
                    <div className="perf__perfect-sub">Minden hívó tökéletes élményt kapott. Hibátlan.</div>
                  </div>
                </div>
                <div className="perf__bars">
                  {PERF_BARS.map((b, i) => (
                    <div key={i}>
                      <div className="perf__bar-top">
                        <span className="perf__bar-k">{b.k}</span>
                        <span className="perf__bar-v">{b.v}</span>
                      </div>
                      <div className="perf__bar-track">
                        <div className="perf__bar-fill" style={{ width: b.w, background: b.c }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4 — Élő */}
            {tab === 4 && (
              <div className="dash__cards" style={{ marginTop: 0 }}>
                <div className="dcard">
                  <div className="dcard__head">
                    <span className="dcard__title"><b>28 hívás</b> az elmúlt 30 percben</span>
                    <span className="dcard__tag"><span className="pkg__pin-dot" style={{ background: "var(--viz-purple)", boxShadow: "none" }} /> Élő</span>
                  </div>
                  <div className="dcard__bars">
                    {RT_BARS.map((h, i) => (<i key={i} className={i % 3 === 1 ? "soft" : ""} style={{ height: `${h}%` }} />))}
                  </div>
                </div>
                <div className="dcard">
                  <div className="dcard__head">
                    <span className="dcard__title">Most a vonalban</span>
                    <span className="dcard__tag pos">2 aktív</span>
                  </div>
                  <div className="prof" style={{ marginTop: "-4px" }}>
                    <div className="prof__row" style={{ gridTemplateColumns: "32px 1fr auto", padding: "10px 0" }}>
                      <span className="prof__av" style={{ width: 32, height: 32, fontSize: 12, background: "var(--viz-purple)" }}>+36</span>
                      <div><div className="prof__name">Bejövő hívás</div><div className="prof__meta">Időpontot egyeztet · 0:42</div></div>
                      <span className="prof__status">Folyamatban</span>
                    </div>
                    <div className="prof__row" style={{ gridTemplateColumns: "32px 1fr auto", padding: "10px 0" }}>
                      <span className="prof__av" style={{ width: 32, height: 32, fontSize: 12, background: "var(--viz-blue)" }}>SMS</span>
                      <div><div className="prof__name">No-show visszahívás</div><div className="prof__meta">Kimenő · megerősítés</div></div>
                      <span className="prof__status">Küldve</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
