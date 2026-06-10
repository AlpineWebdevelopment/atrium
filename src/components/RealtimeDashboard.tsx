"use client";
import { useState } from "react";

/* Four revenue leaks — each tab tells one problem's story, with its own graphic. */
const PAINS = [
  {
    tab: "Kvalifikálatlan érdeklődők",
    desc:
      "Megkeresés van — de a nagy része sosem lesz vevő. Aki mindenkivel végigbeszéli ugyanazt, az a komoly vevőktől veszi el az időt. A rendszer előszűr: mire Ön beszél valakivel, az már komoly.",
    metrics: [
      { k: "Megkeresés", c: "var(--viz-purple)", v: "Minden nap", d: "hívás, űrlap, üzenet" },
      { k: "Ebből komoly", c: "var(--viz-blue)", v: "A töredéke", d: "a többi csak nézelődik" },
      { k: "Az Ön ideje", c: "var(--viz-amber)", v: "Órák", d: "ugyanazokra a kérdésekre" },
      { k: "Előszűrés", c: "var(--viz-red)", v: "Nincs", d: "mindenki sorra kerül" },
    ],
  },
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
  },
];

/* ---- Graphic 1: qualification funnel ---- */
function GfxFunnel() {
  const stages = [
    { b: "Minden megkeresés", x: 10, y: 50 },
    { b: "Időt visz el", x: 38, y: 50 },
    { b: "Komoly szándék", x: 66, y: 50 },
    { b: "Vevő", x: 91, y: 50 },
  ];
  return (
    <div className="funnel__chart">
      <svg className="funnel__svg" viewBox="0 0 1000 250" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gFunnel" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C5CFF" />
            <stop offset="50%" stopColor="#4AA3FF" />
            <stop offset="100%" stopColor="#54CFC0" />
          </linearGradient>
        </defs>
        <path d="M0,26 C180,26 250,63 333,63 C480,63 540,86 666,86 C820,86 880,94 1000,94 L1000,156 C880,156 820,164 666,164 C540,164 480,187 333,187 C250,187 180,224 0,224 Z" fill="rgba(124,92,255,0.16)" />
        <path d="M0,40 C180,40 250,77 333,77 C480,77 540,100 666,100 C820,100 880,108 1000,108 L1000,142 C880,142 820,150 666,150 C540,150 480,173 333,173 C250,173 180,210 0,210 Z" fill="url(#gFunnel)" />
      </svg>
      {stages.map((s, i) => (
        <div className="funnel__stage" key={i} style={{ left: `${s.x}%`, top: `${s.y}%` }}>
          <b>{s.b}</b>
        </div>
      ))}
    </div>
  );
}

/* ---- Graphic 2: call volume over the day, after-hours zone shaded ---- */
function GfxCalls() {
  return (
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
        </defs>
        {/* after-hours zone */}
        <rect x="720" y="0" width="280" height="190" fill="rgba(224,82,78,0.07)" />
        <line x1="720" y1="0" x2="720" y2="190" stroke="rgba(224,82,78,0.4)" strokeWidth="1.5" strokeDasharray="5 5" />
        <path d="M0,95 C40,52 70,32 110,42 C150,52 175,128 230,134 C295,140 330,100 385,105 C445,110 470,130 525,126 C585,122 620,92 685,102 C745,112 785,124 845,118 C905,112 955,124 1000,118 L1000,190 L0,190 Z" fill="url(#gTotal)" />
        <path d="M0,95 C40,52 70,32 110,42 C150,52 175,128 230,134 C295,140 330,100 385,105 C445,110 470,130 525,126 C585,122 620,92 685,102 C745,112 785,124 845,118 C905,112 955,124 1000,118" fill="none" stroke="url(#gAns)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="funnel__stage" style={{ left: "86%", top: "22%" }}>
        <b>Zárás után</b><span>hangposta</span>
      </div>
      <div className="dash__marker dash__marker--amber" style={{ left: "78%", top: "62%" }}>
        <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
      </div>
      <div className="dash__axis">
        {["08:00", "", "", "", "", "", "", "", "", "18:00", "", "23:00"].map((a, i) => (a ? <span key={i}>{a}</span> : <i key={i} />))}
      </div>
    </div>
  );
}

/* ---- Graphic 3: interest cooling between inquiry and first reply ---- */
function GfxCooling() {
  return (
    <div className="dash__chart">
      <svg className="dash__svg" viewBox="0 0 1000 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gCool" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4AA3FF" />
            <stop offset="55%" stopColor="#8C8579" />
            <stop offset="100%" stopColor="#E0524E" />
          </linearGradient>
          <linearGradient id="gCoolFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(74,163,255,0.20)" />
            <stop offset="100%" stopColor="rgba(74,163,255,0)" />
          </linearGradient>
        </defs>
        {/* interest decay curve */}
        <path d="M60,35 C220,42 380,85 560,125 C720,158 850,168 950,172 L950,190 L60,190 Z" fill="url(#gCoolFill)" />
        <path d="M60,35 C220,42 380,85 560,125 C720,158 850,168 950,172" fill="none" stroke="url(#gCool)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="60" cy="35" r="7" fill="#4AA3FF" stroke="var(--bone)" strokeWidth="3" />
        <circle cx="950" cy="172" r="7" fill="#E0524E" stroke="var(--bone)" strokeWidth="3" />
      </svg>
      <div className="funnel__stage" style={{ left: "16%", top: "14%" }}>
        <b>Érdeklődés beérkezik</b><span>14:30</span>
      </div>
      <div className="funnel__stage" style={{ left: "50%", top: "56%" }}>
        <b>Kihűlőben</b><span>válasz nélkül</span>
      </div>
      <div className="funnel__stage" style={{ left: "82%", top: "88%" }}>
        <b>Első válasz</b><span>másnap</span>
      </div>
      <div className="dash__axis">
        {["14:30", "", "", "", "", "", "", "", "", "", "", "másnap"].map((a, i) => (a ? <span key={i}>{a}</span> : <i key={i} />))}
      </div>
    </div>
  );
}

/* ---- Graphic 4: week calendar with no-show gaps ---- */
function GfxCalendar() {
  const days: { d: string; slots: ("book" | "noshow" | "lost" | "free")[] }[] = [
    { d: "Hétfő", slots: ["book", "book", "noshow", "book"] },
    { d: "Kedd", slots: ["book", "lost", "book", "book"] },
    { d: "Szerda", slots: ["book", "book", "book", "noshow"] },
    { d: "Csütörtök", slots: ["noshow", "book", "lost", "book"] },
    { d: "Péntek", slots: ["book", "book", "lost", "book"] },
  ];
  const label = (s: string) => (s === "noshow" ? "no-show" : s === "lost" ? "üresen maradt" : "");
  return (
    <div className="cal">
      {days.map((day, i) => (
        <div className="cal__col" key={i}>
          <div className="cal__day">{day.d}</div>
          {day.slots.map((s, j) => (
            <div className={"cal__slot" + (s !== "book" && s !== "free" ? ` cal__slot--${s}` : s === "book" ? " cal__slot--book" : "")} key={j}>
              {label(s)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const GRAPHICS = [GfxFunnel, GfxCalls, GfxCooling, GfxCalendar];

export default function RealtimeDashboard() {
  const [tab, setTab] = useState(0);
  const pain = PAINS[tab];
  const Gfx = GRAPHICS[tab];

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

            <Gfx />
          </div>
        </div>
      </div>
    </section>
  );
}
