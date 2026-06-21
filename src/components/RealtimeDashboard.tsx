"use client";
import { useState } from "react";

/* Four revenue leaks — each tab tells one problem's story, with its own graphic. */
const PAINS = [
  {
    tab: "Kvalifikálatlan érdeklődők",
    desc:
      "Megkeresés van — de a nagy része sosem lesz vevő. Aki mindenkivel végigbeszéli ugyanazt, az a komoly vevőktől veszi el az időt. A rendszer előszűr: mire Ön beszél valakivel vagy árajánlatot küld, az már komoly.",
    metrics: [
      { k: "Megkeresés", c: "var(--stone)", v: "Minden nap", d: "hívás, űrlap, üzenet" },
      { k: "Ebből komoly", c: "#6DBC61", v: "A töredéke", d: "a többi csak nézelődik" },
      { k: "Az Ön ideje", c: "var(--stone)", v: "Órák", d: "ugyanazokra a kérdésekre" },
      { k: "Előszűrés", c: "var(--viz-amber)", v: "Nincs", d: "mindenki sorra kerül" },
    ],
    /* ATRIUM-EDIT LK1 — made math reconstructable: hours × hourly value = 240 000; old line had no visible bridge */
    loss: { v: "≈ 240 000 Ft", per: "/ hó", math: "~20 óra havonta előszűretlen beszélgetésre × ~12 000 Ft munkaóra-érték" },
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
    /* ATRIUM-EDIT LK2 — added ~40% close rate; old line implied 100% conversion (8 × 85 000 = 680 000 only if every call closes); new: 20 × 0,40 × 85 000 = 680 000 */
    loss: { v: "≈ 680 000 Ft", per: "/ hó", math: "~20 elszalasztott hívás × ~40% záródás × ~85 000 Ft munka" },
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
    /* ATRIUM-EDIT LK3 — added ~40% close rate; dropped dangling "+ elment hirdetési költség" not included in total; new: 30 × 0,40 × 43 000 ≈ 520 000 */
    loss: { v: "≈ 520 000 Ft", per: "/ hó", math: "~30 lassan követett érdeklődő × ~40% záródás × ~43 000 Ft" },
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
    /* ATRIUM-EDIT LK4 — de-medicalized "kezelés" → "elmaradt ügyfélérték"; math unchanged (booked slot = full value fair) */
    loss: { v: "≈ 360 000 Ft", per: "/ hó", math: "~12 no-show × ~30 000 Ft elmaradt ügyfélérték" },
  },
  {
    tab: "Lezáratlan árajánlat",
    desc:
      "Az árajánlat kiment — de senki nem kíséri végig. Az ügyfél halogat, aztán elfelejti, vagy mást választ. A majdnem-kész üzlet csendben elveszik. A rendszer utánkövet: emlékeztet, kérdez, lezár.",
    metrics: [
      { k: "Ajánlat kiküldve", c: "var(--ink)", v: "Rendszeresen", d: "de ott marad válasz nélkül" },
      { k: "Utánkövetés", c: "var(--ink)", v: "Nincs", d: "senki nem kíséri végig" },
      { k: "A döntés", c: "var(--stone)", v: "Halasztva", d: "az ügyfél vár, aztán felejt" },
      { k: "A majdnem-kész üzlet", c: "var(--viz-red)", v: "Elveszik", d: "máshol köt ki" },
    ],
    loss: { v: "≈ 900 000 Ft", per: "/ hó", math: "~3 utánkövetetlen árajánlat havonta × a nyertes munka töredéke" },
  },
];

/* ---- Graphic 1: qualification dot grid ----
   Perfect grid: gray=looker, dark=serious, green=customer.
   Green is largest and has a double-ring pulse; dark has a subtle single ring. */
function buildDots(COLS: number, ROWS: number, W: number, H: number, MX: number, MY: number, serious: Record<string, "k" | "v">) {
  const gx = (W - 2 * MX) / (COLS - 1);
  const gy = (H - 2 * MY) / (ROWS - 1);
  const dots: { x: number; y: number; st: string; idx: number }[] = [];
  let n = 0;
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      dots.push({ x: MX + c * gx, y: MY + r * gy, st: serious[`${c},${r}`] || "n", idx: n++ });
  return dots;
}

function DotSvg({ dots, R_N, R_K, R_V, W, H, cls }: { dots: ReturnType<typeof buildDots>; R_N: number; R_K: number; R_V: number; W: number; H: number; cls: string }) {
  const color = (st: string) => st === "v" ? "#6DBC61" : st === "k" ? "#010E1E" : "rgba(1,14,30,0.12)";
  const radius = (st: string) => st === "v" ? R_V : st === "k" ? R_K : R_N;
  return (
    <svg className={cls} viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Minden megkeresésből csak néhány komoly">
      {dots.map((d) => (
        <circle key={d.idx} cx={d.x} cy={d.y} r={radius(d.st)} fill={color(d.st)} opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin={`${d.idx * 0.036}s`} fill="freeze" />
        </circle>
      ))}
      {dots.filter((d) => d.st === "k").map((d, i) => (
        <circle key={`pk${i}`} cx={d.x} cy={d.y} r={R_K} fill="none" stroke="#010E1E" strokeWidth="1.2">
          <animate attributeName="r" values={`${R_K};${R_K + 13}`} dur="3.2s" begin={`${d.idx * 0.036 + 0.8}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.28;0" dur="3.2s" begin={`${d.idx * 0.036 + 0.8}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {dots.filter((d) => d.st === "v").map((d, i) => (
        <g key={`pv${i}`}>
          <circle cx={d.x} cy={d.y} r={R_V} fill="none" stroke="#6DBC61" strokeWidth="2">
            <animate attributeName="r" values={`${R_V};${R_V + 20}`} dur="2.2s" begin={`${d.idx * 0.036 + 0.8}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.75;0" dur="2.2s" begin={`${d.idx * 0.036 + 0.8}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={d.x} cy={d.y} r={R_V} fill="none" stroke="#6DBC61" strokeWidth="1.4">
            <animate attributeName="r" values={`${R_V};${R_V + 34}`} dur="2.2s" begin={`${d.idx * 0.036 + 1.1}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.45;0" dur="2.2s" begin={`${d.idx * 0.036 + 1.1}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function GfxFunnel() {
  const desktopDots = buildDots(11, 4, 800, 200, 40, 40, {
    "1,2": "k", "4,0": "k", "6,3": "k", "8,1": "k", "10,2": "k", "2,3": "k",
    "5,1": "v", "3,0": "v", "9,3": "v",
  });
  const mobileDots = buildDots(7, 3, 500, 180, 36, 40, {
    "1,1": "k", "4,0": "k", "5,2": "k",
    "2,0": "v", "6,1": "v", "3,2": "v",
  });
  return (
    <div className="qual">
      <DotSvg dots={desktopDots} R_N={4.5} R_K={6.5} R_V={9.5} W={800} H={200} cls="qual__svg qual__svg--desktop" />
      <DotSvg dots={mobileDots} R_N={7} R_K={10} R_V={15} W={500} H={180} cls="qual__svg qual__svg--mobile" />
      <div className="qual__legend">
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "rgba(1,14,30,0.32)" }} />Nézelődő</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#010E1E" }} />Komoly szándék</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#6DBC61" }} />Vevő</span>
        <span className="qual__note">Az előszűrés kiemeli a komolyakat — Ön már csak velük beszél.</span>
      </div>
      <p className="qual__clarify">
        <b>Komoly nem egyenlő nagy.</b> A rendszer a valódi szándékot nézi, nem a
        munka méretét — a nézelődőt szűri ki, nem a kisebb, de komoly vevőt.
      </p>
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
        <rect x={closeX} y="0" width={1000 - closeX} height="190" fill="rgba(200,60,56,0.07)" />
        <line x1={closeX} y1="0" x2={closeX} y2="190" stroke="rgba(200,60,56,0.45)" strokeWidth="1.5" strokeDasharray="5 5" />
        {/* volume bars */}
        {bars.map((h, i) => {
          const x = i * bw + bw * 0.18;
          const w = bw * 0.64;
          const after = i * bw + bw / 2 >= closeX;
          return <rect key={i} x={x} y={baseY - h} width={w} height={h} rx="3" fill={after ? "rgba(200,60,56,0.55)" : "rgba(1,14,30,0.18)"} />;
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
            <stop offset="100%" stopColor="#C83C38" />
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
          <animate attributeName="fill" values="#010E1E;#8C8579;#C83C38;#C83C38" keyTimes="0;0.5;0.82;1" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="52" r="7" fill="#010E1E" stroke="var(--bone)" strokeWidth="3" />
        <circle cx="60" cy="52" r="7" fill="none" stroke="#010E1E" strokeWidth="2">
          <animate attributeName="r" values="7;15" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="950" cy="172" r="7" fill="#C83C38" stroke="var(--bone)" strokeWidth="3" />
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

/* ---- Graphic 5: quotes sent that nobody chases — the nearly-won deal dies ---- */
function GfxQuotes() {
  type Row = { sub: string; val: string; s: "nema" | "won" };
  const rows: Row[] = [
    { sub: "3 napja — nincs utánkövetés", val: "1 200 000 Ft", s: "nema" },
    { sub: "ma — a rendszer utánkövette", val: "850 000 Ft", s: "won" },
    { sub: "6 napja — nincs utánkövetés", val: "480 000 Ft", s: "nema" },
    { sub: "9 napja — nincs utánkövetés", val: "360 000 Ft", s: "nema" },
  ];
  const nema = rows.filter((r) => r.s === "nema").length;
  return (
    <div className="quo">
      <div className="quo__list">
        {rows.map((r, i) => (
          <div className={"quo__row quo__row--" + r.s} key={i}>
            <span className="quo__ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h5M8 17h3" />
              </svg>
            </span>
            <span className="quo__main">
              <b>Árajánlat kiküldve</b>
              <span>{r.sub}</span>
            </span>
            <span className="quo__val">{r.val}</span>
            <span className="quo__tag">{r.s === "won" ? "Lezárva" : "Néma"}</span>
          </div>
        ))}
      </div>
      <div className="quo__sum">
        <span className="quo__sum-item"><i className="quo__sum-dot quo__sum-dot--red" />{nema} árajánlat utánkövetés nélkül</span>
        <span className="quo__sum-note">a majdnem-kész üzlet csendben elveszik</span>
      </div>
    </div>
  );
}

const GRAPHICS = [GfxFunnel, GfxCalls, GfxCooling, GfxCalendar, GfxQuotes];

export default function RealtimeDashboard() {
  const [tab, setTab] = useState(0);
  const pain = PAINS[tab];
  const Gfx = GRAPHICS[tab];

  return (
    <section className="dash">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Hol szivárog a bevétel</span>
          <h2 className="dash__h">Öt hely, ahol a pénz kicsúszik.</h2>
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

            <div className="dash__viz-frame">
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
      </div>
    </section>
  );
}
