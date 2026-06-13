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
    { b: "Minden megkeresés", x: 10, y: 50, p: "100%" },
    { b: "Időt visz el", x: 38, y: 50, p: "~35%" },
    { b: "Komoly szándék", x: 66, y: 50, p: "~12%" },
    { b: "Vevő", x: 91, y: 50, p: "~4%" },
  ];
  /* leads flowing in; most peel off at the narrowings, a few reach the end */
  const flow = [
    { d: "M-20,116 L1020,118", dur: 3.4, b: 0, drop: false },
    { d: "M-20,125 L1020,126", dur: 3.0, b: 1.1, drop: false },
    { d: "M-20,134 L1020,124", dur: 3.7, b: 2.0, drop: false },
    { d: "M-20,120 L300,126 C334,150 350,212 358,252", dur: 2.4, b: 0.4, drop: true },
    { d: "M-20,128 L300,121 C334,150 352,216 362,252", dur: 2.7, b: 1.5, drop: true },
    { d: "M-20,132 L300,130 C334,152 348,210 356,252", dur: 2.5, b: 2.4, drop: true },
    { d: "M-20,122 L632,110 C664,136 676,206 684,252", dur: 3.1, b: 0.8, drop: true },
    { d: "M-20,130 L632,118 C664,140 678,210 686,252", dur: 3.3, b: 1.9, drop: true },
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
        {/* stage dividers */}
        <line x1="333" y1="20" x2="333" y2="230" stroke="rgba(1,14,30,0.10)" strokeWidth="1" strokeDasharray="3 6" />
        <line x1="666" y1="20" x2="666" y2="230" stroke="rgba(1,14,30,0.10)" strokeWidth="1" strokeDasharray="3 6" />
        <path d="M0,26 C180,26 250,63 333,63 C480,63 540,86 666,86 C820,86 880,94 1000,94 L1000,156 C880,156 820,164 666,164 C540,164 480,187 333,187 C250,187 180,224 0,224 Z" fill="rgba(124,92,255,0.16)" />
        <path d="M0,40 C180,40 250,77 333,77 C480,77 540,100 666,100 C820,100 880,108 1000,108 L1000,142 C880,142 820,150 666,150 C540,150 480,173 333,173 C250,173 180,210 0,210 Z" fill="url(#gFunnel)" />
        {/* flowing leads */}
        {flow.map((f, i) => (
          <circle key={i} r="3.4" fill="rgba(245,242,237,0.92)">
            <animateMotion dur={`${f.dur}s`} begin={`${f.b}s`} repeatCount="indefinite" path={f.d} />
            <animate attributeName="opacity" values={f.drop ? "0;1;1;0" : "0;1;1;0"} keyTimes={f.drop ? "0;0.12;0.62;1" : "0;0.08;0.9;1"} dur={`${f.dur}s`} begin={`${f.b}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      {stages.map((s, i) => (
        <div className="funnel__pct" key={`p${i}`} style={{ left: `${s.x}%` }}>{s.p}</div>
      ))}
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
  /* hourly call volume; bars past the close line are unanswered (red) */
  const bars = [34, 58, 80, 52, 70, 96, 120, 104, 92, 116, 78, 100, 88, 112];
  const bw = 1000 / bars.length;
  const closeX = 720;
  const baseY = 178;
  return (
    <div className="dash__chart">
      <svg className="dash__svg" viewBox="0 0 1000 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gAns" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C5CFF" />
            <stop offset="55%" stopColor="#4AA3FF" />
            <stop offset="100%" stopColor="#54CFC0" />
          </linearGradient>
        </defs>
        {/* gridlines */}
        {[44, 92, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="rgba(1,14,30,0.06)" strokeWidth="1" />
        ))}
        {/* after-hours zone */}
        <rect x={closeX} y="0" width={1000 - closeX} height="190" fill="rgba(224,82,78,0.07)" />
        <line x1={closeX} y1="0" x2={closeX} y2="190" stroke="rgba(224,82,78,0.45)" strokeWidth="1.5" strokeDasharray="5 5" />
        {/* volume bars */}
        {bars.map((h, i) => {
          const x = i * bw + bw * 0.18;
          const w = bw * 0.64;
          const after = i * bw + bw / 2 >= closeX;
          return <rect key={i} x={x} y={baseY - h} width={w} height={h} rx="3" fill={after ? "rgba(224,82,78,0.55)" : "rgba(124,92,255,0.30)"} />;
        })}
        {/* answered line — drops to zero after close */}
        <path d="M36,95 C90,58 150,40 215,52 C285,64 320,108 385,108 C450,108 480,86 545,90 C610,94 650,74 690,84" fill="none" stroke="url(#gAns)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="690" cy="84" r="5" fill="#54CFC0" stroke="var(--bone)" strokeWidth="2.5" />
      </svg>
      <div className="funnel__stage funnel__stage--tr">
        <b>Zárás után</b><span>hangposta, nincs válasz</span>
      </div>
      <div className="dash__marker dash__marker--amber dash__marker--pulse" style={{ left: "85%", top: "60%" }}>
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
        {/* gridlines */}
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="60" y1={y} x2="950" y2={y} stroke="rgba(1,14,30,0.06)" strokeWidth="1" />
        ))}
        {/* interest decay curve */}
        <path d="M60,35 C220,42 380,85 560,125 C720,158 850,168 950,172 L950,190 L60,190 Z" fill="url(#gCoolFill)" />
        <path id="coolPath" d="M60,35 C220,42 380,85 560,125 C720,158 850,168 950,172" fill="none" stroke="url(#gCool)" strokeWidth="3" strokeLinecap="round" />
        {/* the lead, sliding down the curve as time passes */}
        <circle r="6" fill="#E8A33D" stroke="var(--bone)" strokeWidth="2.5">
          <animateMotion dur="5s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.82;1" calcMode="linear">
            <mpath href="#coolPath" />
          </animateMotion>
          <animate attributeName="fill" values="#4AA3FF;#8C8579;#E0524E;#E0524E" keyTimes="0;0.5;0.82;1" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="35" r="7" fill="#4AA3FF" stroke="var(--bone)" strokeWidth="3" />
        <circle cx="60" cy="35" r="7" fill="none" stroke="#4AA3FF" strokeWidth="2">
          <animate attributeName="r" values="7;15" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="950" cy="172" r="7" fill="#E0524E" stroke="var(--bone)" strokeWidth="3" />
      </svg>
      <div className="funnel__stage" style={{ left: "16%", top: "14%" }}>
        <b>Érdeklődés beérkezik</b><span>14:30</span>
      </div>
      <div className="funnel__stage" style={{ left: "50%", top: "56%" }}>
        <b>Kihűlőben</b><span>válasz nélkül</span>
      </div>
      <div className="funnel__stage funnel__stage--r" style={{ top: "88%" }}>
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
  type Slot = { t: string; s: "book" | "noshow" | "lost" };
  const times = ["9:00", "11:00", "13:00", "15:00"];
  const states: Slot["s"][][] = [
    ["book", "book", "noshow", "book"],
    ["book", "lost", "book", "book"],
    ["book", "book", "book", "noshow"],
    ["noshow", "book", "lost", "book"],
    ["book", "book", "lost", "book"],
  ];
  const days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"];
  const all = states.flat();
  const noshow = all.filter((s) => s === "noshow").length;
  const lost = all.filter((s) => s === "lost").length;
  const label = (s: Slot["s"]) => (s === "noshow" ? "no-show" : s === "lost" ? "üres" : "");
  return (
    <div className="cal-wrap">
      <div className="cal">
        {states.map((col, i) => (
          <div className="cal__col" key={i}>
            <div className="cal__day">{days[i]}</div>
            {col.map((s, j) => (
              <div className={"cal__slot cal__slot--" + s} key={j}>
                <span className="cal__time">{times[j]}</span>
                {s !== "book" && <span className="cal__tag">{label(s)}</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="cal__sum">
        <span className="cal__sum-item"><i className="cal__sum-dot cal__sum-dot--amber" />{noshow} no-show</span>
        <span className="cal__sum-item"><i className="cal__sum-dot cal__sum-dot--red" />{lost} üres óra</span>
        <span className="cal__sum-note">visszahívás nélkül a bevétel végleg elveszik</span>
      </div>
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
