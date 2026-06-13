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
  /*
   * Vertical pyramid funnel: wide top (100%) → narrow middle (~12%) → tiny bottom (~4%)
   * ViewBox 640×200 with preserveAspectRatio="none" so CSS px = viewBox units at any width.
   * hw = half-widths; y = vertical boundaries.
   */
  const cx = 320;
  const hw = { s1: 310, s2: 78, s3: 26 };
  const y  = { s1t: 6, s1b: 62, c1b: 112, s2b: 152, c2b: 168, s3b: 200 };

  return (
    <div className="funnel__chart" style={{ paddingTop: 0 }}>
      <svg className="funnel__svg" viewBox="0 0 640 200" preserveAspectRatio="none" style={{ height: 200 }}>
        <defs>
          <linearGradient id="gFV" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C5CFF" />
            <stop offset="65%" stopColor="#4AA3FF" />
            <stop offset="100%" stopColor="#54CFC0" />
          </linearGradient>
        </defs>

        {/* Stage 1: Beérkező — full-width bar (square bottom to join connector) */}
        <rect x={cx - hw.s1} y={y.s1t} width={hw.s1 * 2} height={y.s1b - y.s1t} rx="10" fill="#7C5CFF" />
        <rect x={cx - hw.s1} y={y.s1b - 10} width={hw.s1 * 2} height={10} fill="#7C5CFF" />

        {/* Connector 1→2: dramatic narrowing trapezoid */}
        <path d={`M${cx-hw.s1},${y.s1b} L${cx+hw.s1},${y.s1b} L${cx+hw.s2},${y.c1b} L${cx-hw.s2},${y.c1b} Z`} fill="url(#gFV)" />
        {/* Waste triangles (red tint on sides) */}
        <path d={`M${cx-hw.s1},${y.s1b} L${cx-hw.s2},${y.c1b} L${cx-hw.s1},${y.c1b} Z`} fill="rgba(215,55,55,0.13)" />
        <path d={`M${cx+hw.s1},${y.s1b} L${cx+hw.s2},${y.c1b} L${cx+hw.s1},${y.c1b} Z`} fill="rgba(215,55,55,0.13)" />
        {/* "84% elvész" annotation in left waste area */}
        <text x={cx - hw.s1 + 12} y={(y.s1b + y.c1b) / 2 + 4}
          fill="rgba(210,55,55,0.72)" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
          84% elvész
        </text>

        {/* Stage 2: Komoly szándék */}
        <rect x={cx - hw.s2} y={y.c1b} width={hw.s2 * 2} height={y.s2b - y.c1b} fill="#4AA3FF" />

        {/* Connector 2→3 */}
        <path d={`M${cx-hw.s2},${y.s2b} L${cx+hw.s2},${y.s2b} L${cx+hw.s3},${y.c2b} L${cx-hw.s3},${y.c2b} Z`} fill="#54CFC0" />
        <path d={`M${cx-hw.s2},${y.s2b} L${cx-hw.s3},${y.c2b} L${cx-hw.s2},${y.c2b} Z`} fill="rgba(215,55,55,0.07)" />
        <path d={`M${cx+hw.s2},${y.s2b} L${cx+hw.s3},${y.c2b} L${cx+hw.s2},${y.c2b} Z`} fill="rgba(215,55,55,0.07)" />

        {/* Stage 3: Vevő — rounded bottom */}
        <rect x={cx - hw.s3} y={y.c2b} width={hw.s3 * 2} height={y.s3b - y.c2b} rx="6" fill="#54CFC0" />

        {/* Pulse ring on vevő */}
        <circle cx={cx} cy={(y.c2b + y.s3b) / 2} r="0" fill="none" stroke="#54CFC0" strokeWidth="2" opacity="0">
          <animate attributeName="r" values="0;22" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Centered pill labels on each stage */}
      <div className="funnel__stage" style={{ left: "50%", top: 34 }}>
        <b>Beérkező megkeresés</b><span>100%</span>
      </div>
      <div className="funnel__stage" style={{ left: "50%", top: 132 }}>
        <b>Komoly szándék</b><span>~12%</span>
      </div>
      <div className="funnel__stage" style={{ left: "50%", top: 184 }}>
        <b>Vevő lesz</b><span>~4%</span>
      </div>

      {/* Waste stats row */}
      <div className="funnel__waste">
        <div className="funnel__waste-stat">
          <span className="funnel__waste-val">~13 óra</span>
          <span className="funnel__waste-lbl">elveszett vezető idő / hó</span>
        </div>
        <div className="funnel__waste-stat funnel__waste-stat--cost">
          <span className="funnel__waste-val">120 000 Ft</span>
          <span className="funnel__waste-lbl">rejtett bérköltség / hó</span>
        </div>
        <div className="funnel__waste-stat">
          <span className="funnel__waste-val">~1,4M Ft</span>
          <span className="funnel__waste-lbl">éves szintű veszteség</span>
        </div>
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
      <div className="funnel__stage" style={{ right: "2%", left: "auto", top: "88%", transform: "translateY(-50%)" }}>
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
