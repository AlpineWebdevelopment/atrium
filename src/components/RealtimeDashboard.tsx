"use client";
import { useState } from "react";

/* Four revenue leaks — each tab tells one problem's story, with its own graphic. */
const PAINS = [
  {
    tab: "Kvalifikálatlan érdeklődők",
    desc:
      "Megkeresés van — de a nagy része sosem lesz vevő. Aki mindenkivel végigbeszéli ugyanazt, az a komoly vevőktől veszi el az időt. A rendszer előszűr: mire Ön beszél valakivel, az már komoly.",
    metrics: [
      { k: "Megkeresés", c: "var(--ink)", v: "Minden nap", d: "hívás, űrlap, üzenet" },
      { k: "Ebből komoly", c: "var(--ink)", v: "A töredéke", d: "a többi csak nézelődik" },
      { k: "Az Ön ideje", c: "var(--stone)", v: "Órák", d: "ugyanazokra a kérdésekre" },
      { k: "Előszűrés", c: "var(--viz-red)", v: "Nincs", d: "mindenki sorra kerül" },
    ],
    loss: { v: "≈ 240 000 Ft", per: "/ hó", math: "~20 óra havonta előszűretlen beszélgetésre — a komoly vevők helyett" },
  },
  {
    tab: "Elszalasztott hívások",
    desc:
      "A hívások jó része munkaidő után, hétvégén vagy foglalt vonal mellett érkezik. Aki hangpostát kap, nem vár — a következő számot hívja.",
    metrics: [
      { k: "Hívás érkezik", c: "var(--ink)", v: "20:14", d: "munkaidő után" },
      { k: "A vonal", c: "var(--stone)", v: "Hangposta", d: "senki nem veszi fel" },
      { k: "Üzenet", c: "var(--stone)", v: "Nincs", d: "a hívó nem hagy" },
      { k: "A hívó", c: "var(--viz-red)", v: "Továbblép", d: "a következőt hívja" },
    ],
    loss: { v: "≈ 680 000 Ft", per: "/ hó", math: "~8 elszalasztott hívás × ~85 000 Ft átlagos munka" },
  },
  {
    tab: "Lassú utánkövetés",
    desc:
      "A hirdetésből érkező érdeklődő órákon belül dönt. Ha az első válasz másnap érkezik, addigra már mással egyeztetett.",
    metrics: [
      { k: "Űrlap kitöltve", c: "var(--ink)", v: "14:30", d: "hirdetésből érkezett" },
      { k: "Első válasz", c: "var(--stone)", v: "Másnap", d: "amikor épp jut rá idő" },
      { k: "Az érdeklődő", c: "var(--stone)", v: "Kihűlt", d: "már mással tárgyal" },
      { k: "A hirdetési költség", c: "var(--viz-red)", v: "Elment", d: "bevétel nem lett belőle" },
    ],
    loss: { v: "≈ 520 000 Ft", per: "/ hó", math: "~12 kihűlt érdeklődő × ~43 000 Ft + elment hirdetési költség" },
  },
  {
    tab: "No-show-k",
    desc:
      "Az elfelejtett időpont lyukat üt a naptárba. Emlékeztető és visszahívás nélkül a kieső óra bevétele végleg elveszik.",
    metrics: [
      { k: "Időpont", c: "var(--ink)", v: "9:00", d: "megerősítés nélkül" },
      { k: "A vendég", c: "var(--stone)", v: "Nem jön el", d: "el is felejtette" },
      { k: "A naptárban", c: "var(--stone)", v: "Üres óra", d: "senki nem tölti fel" },
      { k: "Visszahívás", c: "var(--viz-red)", v: "Nincs", d: "nincs rá kapacitás" },
    ],
    loss: { v: "≈ 360 000 Ft", per: "/ hó", math: "~12 no-show × ~30 000 Ft kezelés" },
  },
];

/* ---- Graphic 1: qualification as a pre-screening dot matrix ----
   Every inquiry is a dot; most are just browsing (grey), a few are serious
   (blue) or a customer (green). An AI scan sweeps across and flags the
   serious ones — so you only ever talk to those. */
function GfxFunnel() {
  const COLS = 13, ROWS = 3, W = 800, H = 200, MX = 38, MY = 36;
  const gx = (W - 2 * MX) / (COLS - 1);
  const gy = (H - 2 * MY) / (ROWS - 1);
  const D = 3.8; // sweep period
  const serious: Record<string, "k" | "v"> = {
    "2,0": "k", "7,0": "k", "9,1": "v", "5,2": "k", "11,2": "k",
  };
  const color = (st: string) => (st === "v" ? "#6DBC61" : st === "k" ? "#010E1E" : "rgba(1,14,30,0.13)");
  const dots: { x: number; y: number; st: string }[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      dots.push({ x: MX + c * gx, y: MY + r * gy, st: serious[`${c},${r}`] || "n" });
    }
  }
  const flagged = dots.filter((d) => d.st !== "n");
  return (
    <div className="qual">
      <svg className="qual__svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Minden megkeresésből csak néhány komoly">
        <defs>
          <linearGradient id="qScan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(98,143,188,0)" />
            <stop offset="35%" stopColor="rgba(98,143,188,0.22)" />
            <stop offset="65%" stopColor="rgba(150,98,188,0.22)" />
            <stop offset="100%" stopColor="rgba(150,98,188,0)" />
          </linearGradient>
        </defs>
        <rect x="-90" y="0" width="90" height={H} fill="url(#qScan)">
          <animate attributeName="x" values={`-90;${W}`} dur={`${D}s`} repeatCount="indefinite" />
        </rect>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.st === "n" ? 6 : 7.5} fill={color(d.st)} />
        ))}
        {flagged.map((d, i) => (
          <circle key={`f${i}`} cx={d.x} cy={d.y} r="7.5" fill="none" stroke={color(d.st)} strokeWidth="2">
            <animate attributeName="r" values="7.5;19;19" keyTimes="0;0.12;1" dur={`${D}s`} begin={`${((d.x / W) * D).toFixed(2)}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.85;0;0" keyTimes="0;0.12;1" dur={`${D}s`} begin={`${((d.x / W) * D).toFixed(2)}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      <div className="qual__legend">
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "rgba(1,14,30,0.2)" }} />Nézelődő</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#010E1E" }} />Komoly szándék</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#6DBC61" }} />Vevő</span>
        <span className="qual__note">Az előszűrés kiemeli a komolyakat — Ön már csak velük beszél.</span>
      </div>
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
            <stop offset="0%" stopColor="#010E1E" />
            <stop offset="55%" stopColor="#010E1E" />
            <stop offset="100%" stopColor="#6DBC61" />
          </linearGradient>
        </defs>
        {/* gridlines */}
        {[44, 92, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="rgba(1,14,30,0.06)" strokeWidth="1" />
        ))}
        {/* after-hours zone */}
        <rect x={closeX} y="0" width={1000 - closeX} height="190" fill="rgba(196,108,100,0.07)" />
        <line x1={closeX} y1="0" x2={closeX} y2="190" stroke="rgba(196,108,100,0.45)" strokeWidth="1.5" strokeDasharray="5 5" />
        {/* volume bars */}
        {bars.map((h, i) => {
          const x = i * bw + bw * 0.18;
          const w = bw * 0.64;
          const after = i * bw + bw / 2 >= closeX;
          return <rect key={i} x={x} y={baseY - h} width={w} height={h} rx="3" fill={after ? "rgba(196,108,100,0.55)" : "rgba(1,14,30,0.18)"} />;
        })}
        {/* answered line — drops to zero after close */}
        <path d="M36,95 C90,58 150,40 215,52 C285,64 320,108 385,108 C450,108 480,86 545,90 C610,94 650,74 690,84" fill="none" stroke="url(#gAns)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="690" cy="84" r="5" fill="#6DBC61" stroke="var(--bone)" strokeWidth="2.5" />
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
            <stop offset="0%" stopColor="#010E1E" />
            <stop offset="55%" stopColor="#8C8579" />
            <stop offset="100%" stopColor="#C46C64" />
          </linearGradient>
          <linearGradient id="gCoolFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(1,14,30,0.16)" />
            <stop offset="100%" stopColor="rgba(1,14,30,0)" />
          </linearGradient>
        </defs>
        {/* gridlines */}
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="60" y1={y} x2="950" y2={y} stroke="rgba(1,14,30,0.06)" strokeWidth="1" />
        ))}
        {/* interest decay curve */}
        <path d="M60,52 C220,58 380,94 560,128 C720,158 850,168 950,172 L950,190 L60,190 Z" fill="url(#gCoolFill)" />
        <path id="coolPath" d="M60,52 C220,58 380,94 560,128 C720,158 850,168 950,172" fill="none" stroke="url(#gCool)" strokeWidth="3" strokeLinecap="round" />
        {/* the lead, sliding down the curve as time passes */}
        <circle r="6" fill="#010E1E" stroke="var(--bone)" strokeWidth="2.5">
          <animateMotion dur="5s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.82;1" calcMode="linear">
            <mpath href="#coolPath" />
          </animateMotion>
          <animate attributeName="fill" values="#010E1E;#8C8579;#C46C64;#C46C64" keyTimes="0;0.5;0.82;1" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="52" r="7" fill="#010E1E" stroke="var(--bone)" strokeWidth="3" />
        <circle cx="60" cy="52" r="7" fill="none" stroke="#010E1E" strokeWidth="2">
          <animate attributeName="r" values="7;15" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="950" cy="172" r="7" fill="#C46C64" stroke="var(--bone)" strokeWidth="3" />
      </svg>
      <div className="funnel__stage" style={{ left: "1%", top: "0", transform: "none" }}>
        <b>Érdeklődés beérkezik</b><span>14:30</span>
      </div>
      <div className="funnel__stage" style={{ left: "50%", top: "30%", transform: "translateX(-50%)" }}>
        <b>Kihűlőben</b><span>válasz nélkül</span>
      </div>
      <div className="funnel__stage" style={{ right: "1%", left: "auto", top: "54%", transform: "none" }}>
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
          <p className="dash__exnote">
            Az alábbi számok példák — élesben az Ön valós adataira szabva.
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

            <div className="dash__loss">
              <div className="dash__loss-l">
                <div className="dash__loss-head">
                  <svg className="dash__loss-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                    <polyline points="16 17 22 17 22 11" />
                  </svg>
                  <span className="dash__loss-label">Becsült kieső bevétel</span>
                </div>
                <span className="dash__loss-math">{pain.loss.math}</span>
              </div>
              <div className="dash__loss-v">{pain.loss.v}<span>{pain.loss.per}</span></div>
            </div>

            <Gfx />
          </div>
        </div>
      </div>
    </section>
  );
}
