"use client";
import { useState } from "react";

/* Four revenue leaks — each tab tells one problem's story in the metric slots. */
const PAINS = [
  {
    tab: "Elszalasztott hívások",
    desc:
      "A hívások jó része munkaidő után, hétvégén vagy foglalt vonal mellett érkezik. Aki hangpostát kap, nem vár — a következő számot hívja.",
    metrics: [
      { k: "Hívás érkezik", c: "var(--viz-purple)", v: "20:14", d: "munkaidő után" },
      { k: "A vonal", c: "var(--viz-amber)", v: "Hangposta", d: "senki nem veszi fel" },
      { k: "Üzenet", c: "var(--stone)", v: "Nincs", d: "a hívó nem hagy" },
      { k: "A hívó", c: "var(--viz-red)", v: "Továbblép", d: "a következőt hívja" },
    ],
    markers: [
      { kind: "amber", left: "78%", top: "6%" },
      { kind: "dot", left: "84%", top: "70%" },
    ],
  },
  {
    tab: "Lassú utánkövetés",
    desc:
      "A hirdetésből érkező érdeklődő órákon belül dönt. Ha az első válasz másnap érkezik, addigra már mással egyeztetett.",
    metrics: [
      { k: "Űrlap kitöltve", c: "var(--viz-blue)", v: "14:30", d: "hirdetésből érkezett" },
      { k: "Első válasz", c: "var(--viz-amber)", v: "Másnap", d: "amikor épp jut rá idő" },
      { k: "Az érdeklődő", c: "var(--stone)", v: "Kihűlt", d: "már mással tárgyal" },
      { k: "A hirdetési költség", c: "var(--viz-red)", v: "Elment", d: "bevétel nem lett belőle" },
    ],
    markers: [
      { kind: "ink", left: "38%", top: "6%" },
      { kind: "dot", left: "44%", top: "70%" },
    ],
  },
  {
    tab: "No-show-k",
    desc:
      "Az elfelejtett időpont lyukat üt a naptárba. Emlékeztető és visszahívás nélkül a kieső óra bevétele végleg elveszik.",
    metrics: [
      { k: "Időpont", c: "var(--viz-cyan)", v: "9:00", d: "megerősítés nélkül" },
      { k: "A vendég", c: "var(--viz-amber)", v: "Nem jön el", d: "el is felejtette" },
      { k: "A naptárban", c: "var(--stone)", v: "Üres óra", d: "senki nem tölti fel" },
      { k: "Visszahívás", c: "var(--viz-red)", v: "Nincs", d: "nincs rá kapacitás" },
    ],
    markers: [
      { kind: "ink", left: "22%", top: "6%" },
      { kind: "bar", left: "28%", top: "56%" },
    ],
  },
  {
    tab: "Elalvó ügyfelek",
    desc:
      "A meglévő adatbázis tele van olyan ügyfelekkel, akik egyszer már fizettek — csak senki nem szól nekik, hogy ideje visszajönni.",
    metrics: [
      { k: "Utolsó látogatás", c: "var(--viz-purple)", v: "14 hónapja", d: "azóta csend" },
      { k: "Az adatbázis", c: "var(--viz-blue)", v: "Tele van", d: "névvel és telefonszámmal" },
      { k: "Megkeresés", c: "var(--stone)", v: "Nincs", d: "senkinek nem feladata" },
      { k: "Az ügyfél", c: "var(--viz-red)", v: "Máshová jár", d: "pedig elégedett volt" },
    ],
    markers: [
      { kind: "amber", left: "60%", top: "6%" },
      { kind: "dot", left: "66%", top: "70%" },
    ],
  },
];

const AXIS = ["00:00", "", "", "", "", "", "", "", "", "20:00", "", "23:00"];

export default function RealtimeDashboard() {
  const [tab, setTab] = useState(0);
  const pain = PAINS[tab];

  return (
    <section className="dash">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Hol szivárog a bevétel</span>
          <h2 className="dash__h">Négy lyuk. Mindegyik bezárható.</h2>
          <p className="dash__p">
            A legtöbb szolgáltató cég nem ügyfélhiánytól szenved — hanem attól,
            hogy a megkeresések egy része elvész útközben. A rendszert az Ön
            működésére szabjuk, és azt a lyukat zárja be, amelyik Önnél a
            legnagyobb.
          </p>
        </div>

        <div className="dash__card reveal" data-delay="1">
          {/* Tabs — one per pain point */}
          <div className="dash__tabs" role="tablist">
            {PAINS.map((p, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={tab === i}
                className={"dash__tab" + (tab === i ? " dash__tab--active" : "")}
                onClick={() => setTab(i)}
              >
                {p.tab}
              </button>
            ))}
          </div>

          <div className="dash__panel">
            <p className="dash__desc">{pain.desc}</p>

            <div className="dash__metrics">
              {pain.metrics.map((m, i) => (
                <div key={i}>
                  <div className="dash__metric-k">
                    <span className="dash__metric-dot" style={{ background: m.c }} />
                    {m.k}
                  </div>
                  <div className="dash__metric-v">{m.v}</div>
                  <div className="dash__metric-d flat">{m.d}</div>
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

              {pain.markers.map((m, i) =>
                m.kind === "bar" ? (
                  <div key={i} className="dash__gbar" style={{ left: m.left, top: m.top, height: "44px" }} />
                ) : m.kind === "dot" ? (
                  <div key={i} className="dash__gdot" style={{ left: m.left, top: m.top }} />
                ) : (
                  <div
                    key={i}
                    className={"dash__marker" + (m.kind === "amber" ? " dash__marker--amber" : "")}
                    style={{ left: m.left, top: m.top }}
                  >
                    <svg className="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
                  </div>
                )
              )}

              <div className="dash__axis">
                {AXIS.map((a, i) => (a ? <span key={i}>{a}</span> : <i key={i} />))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
