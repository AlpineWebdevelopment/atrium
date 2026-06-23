"use client";
import { useState } from "react";

/* Állatorvos leak section — the vet value shape is different from construction:
   not one big job, but many small recurring recoveries anchored on the existing
   base. Recall on the drifted base is the lever, so we lead with it. Numbers are
   an illustrative model for a typical busy clinic — swap for the clinic's real
   base size, drift estimate, average visit value and no-show rate in the meeting. */
const PAINS = [
  {
    tab: "Lemorzsolódott páciensek",
    desc:
      "A meglévő bázis a legnagyobb tartalék. A páciensek negyede lecsúszik a menetrendről — de nem mind hozható vissza: aki ár miatt ment el, azt nem. Csak az elfeledetteket — akiket soha nem hívott vissza senki — éri el a recall. Ez a leggyorsabb, leglátványosabb tétel.",
    metrics: [
      { k: "A páciensbázis", c: "var(--ink)", v: "~2 500", d: "aktív gazdi és kedvenc" },
      { k: "Lemaradásban", c: "var(--ink)", v: "~625", d: "lecsúszott a menetrendről" },
      { k: "Visszanyerhető", c: "var(--stone)", v: "~300", d: "csak az elfeledettek" },
      { k: "Recall", c: "var(--viz-red)", v: "Nincs", d: "magától senki nem hívja vissza" },
    ],
    loss: { v: "≈ 800 000 Ft", per: "/ hó", math: "~300 elfeledett páciens — recall-lal ~40/hó visszahozható × ~20 000 Ft (kezdeti szakasz)" },
  },
  {
    tab: "Elmaradt időpontok",
    desc:
      "A szabad óra visszahozhatatlan. Egy elfelejtett oltás vagy kontroll lyukat üt a naptárba. Emlékeztető a vizit előtt és visszahívás után a felét visszahozza — és az olcsóbb, mint utólag pótolni.",
    metrics: [
      { k: "Időpont", c: "var(--ink)", v: "~600 / hó", d: "oltás, szűrés, kontroll" },
      { k: "Emlékeztető", c: "var(--ink)", v: "Nincs", d: "a gazdi elfelejti" },
      { k: "A gazdi", c: "var(--stone)", v: "Nem jön el", d: "~10–12% no-show" },
      { k: "A szabad óra", c: "var(--viz-red)", v: "Üresen marad", d: "visszahozhatatlan idő" },
    ],
    loss: { v: "≈ 450 000 Ft", per: "/ hó", math: "~60–70 elmaradt időpont havonta — emlékeztetővel ~fele visszanyerhető × ~15 000 Ft" },
  },
  {
    tab: "Elszalasztott hívások",
    desc:
      "Az ügyeleti hívás és az új gazdi telefonon érkezik — gyakran este, hétvégén vagy műtét közben. Aki hangpostát kap, a következő rendelőt hívja. Egy új gazdi nem egy vizit: egy évtizednyi oltás, szűrés és kezelés.",
    metrics: [
      { k: "Hívás érkezik", c: "var(--ink)", v: "Ügyeleti időben", d: "este, hétvégén, műtét közben" },
      { k: "A vonal", c: "var(--ink)", v: "Foglalt / zárva", d: "nincs, aki felvegye" },
      { k: "Az új gazdi", c: "var(--stone)", v: "Tovább lép", d: "a következő rendelőt hívja" },
      { k: "A páciens", c: "var(--viz-red)", v: "Elveszik", d: "egy évtizednyi ellátás" },
    ],
    loss: { v: "≈ 150 000 Ft", per: "/ hó", math: "~2–3 elveszett új gazdi havonta (évekig ~25 000 Ft/év) + 1–2 ügyeleti eset" },
  },
];

/* ---- Graphic 1: the base — most active, a quarter drifted, recall brings some back ---- */
function GfxRecall() {
  const COLS = 14, ROWS = 3, W = 860, H = 200, MX = 40, MY = 36;
  const gx = (W - 2 * MX) / (COLS - 1);
  const gy = (H - 2 * MY) / (ROWS - 1);
  const D = 4; // recall sweep period
  /* o = overdue (drifted), r = reactivated by recall; everything else active */
  const tag: Record<string, "o" | "r"> = {
    "1,0": "o", "4,0": "o", "7,0": "r", "9,0": "o", "12,0": "o",
    "0,1": "r", "2,1": "o", "6,1": "o", "9,1": "r", "11,1": "o",
    "3,2": "o", "5,2": "r", "8,2": "o", "11,2": "r", "13,2": "o",
  };
  const color = (st: string) => (st === "r" ? "#6DBC61" : st === "o" ? "#C46C64" : "rgba(1,14,30,0.13)");
  const dots: { x: number; y: number; st: string }[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      dots.push({ x: MX + c * gx, y: MY + r * gy, st: tag[`${c},${r}`] || "a" });
    }
  }
  const back = dots.filter((d) => d.st === "r");
  return (
    <div className="qual">
      <svg className="qual__svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A recall visszahozza az elfeledett pácienseket">
        <defs>
          <linearGradient id="rScan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(109,188,97,0)" />
            <stop offset="50%" stopColor="rgba(109,188,97,0.18)" />
            <stop offset="100%" stopColor="rgba(109,188,97,0)" />
          </linearGradient>
        </defs>
        <rect x="-90" y="0" width="90" height={H} fill="url(#rScan)">
          <animate attributeName="x" values={`-90;${W}`} dur={`${D}s`} repeatCount="indefinite" />
        </rect>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.st === "a" ? 6 : 7.5} fill={color(d.st)} />
        ))}
        {back.map((d, i) => (
          <circle key={`b${i}`} cx={d.x} cy={d.y} r="7.5" fill="none" stroke="#6DBC61" strokeWidth="2">
            <animate attributeName="r" values="7.5;19;19" keyTimes="0;0.12;1" dur={`${D}s`} begin={`${((d.x / W) * D).toFixed(2)}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.85;0;0" keyTimes="0;0.12;1" dur={`${D}s`} begin={`${((d.x / W) * D).toFixed(2)}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      <div className="qual__legend">
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "rgba(1,14,30,0.2)" }} />Aktív</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#C46C64" }} />Esedékes</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#6DBC61" }} />Visszahozva</span>
        <span className="qual__note">A recall végigmegy a bázison, és visszahozza az elfeledett pácienseket.</span>
      </div>
    </div>
  );
}

/* ---- Graphic 2: a week of appointments with no-show / empty gaps ---- */
function GfxAppointments() {
  type Slot = { s: "book" | "noshow" | "empty" };
  const times = ["8:00", "11:00", "14:00", "16:00"];
  const states: Slot["s"][][] = [
    ["book", "book", "noshow", "book"],
    ["book", "empty", "book", "book"],
    ["book", "book", "book", "noshow"],
    ["noshow", "book", "empty", "book"],
    ["book", "book", "empty", "book"],
  ];
  const days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"];
  const all = states.flat();
  const noshow = all.filter((s) => s === "noshow").length;
  const empty = all.filter((s) => s === "empty").length;
  const label = (s: Slot["s"]) => (s === "noshow" ? "no-show" : s === "empty" ? "üres" : "");
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
        <span className="cal__sum-item"><i className="cal__sum-dot cal__sum-dot--red" />{empty} üres óra</span>
        <span className="cal__sum-note">emlékeztetővel a fele megelőzhető vagy visszahozható</span>
      </div>
    </div>
  );
}

/* ---- Graphic 3: call volume over the day, after-hours zone shaded ---- */
function GfxCalls() {
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
        {[44, 92, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="rgba(1,14,30,0.06)" strokeWidth="1" />
        ))}
        <rect x={closeX} y="0" width={1000 - closeX} height="190" fill="rgba(196,108,100,0.07)" />
        <line x1={closeX} y1="0" x2={closeX} y2="190" stroke="rgba(196,108,100,0.45)" strokeWidth="1.5" strokeDasharray="5 5" />
        {bars.map((h, i) => {
          const x = i * bw + bw * 0.18;
          const w = bw * 0.64;
          const after = i * bw + bw / 2 >= closeX;
          return <rect key={i} x={x} y={baseY - h} width={w} height={h} rx="3" fill={after ? "rgba(196,108,100,0.55)" : "rgba(1,14,30,0.18)"} />;
        })}
        <path d="M36,95 C90,58 150,40 215,52 C285,64 320,108 385,108 C450,108 480,86 545,90 C610,94 650,74 690,84" fill="none" stroke="url(#gAns)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="calls-dots" aria-hidden="true">
        <span className="calls-dot" style={{ background: "#6DBC61" }} />
      </div>
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

const GRAPHICS = [GfxRecall, GfxAppointments, GfxCalls];

export default function RealtimeDashboardAllatorvos() {
  const [tab, setTab] = useState(0);
  const pain = PAINS[tab];
  const Gfx = GRAPHICS[tab];

  return (
    <section className="dash">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Hol szivárog a bevétel</span>
          <h2 className="dash__h">Három lyuk. Mindegyik bezárható.</h2>
          <p className="dash__p">
            A legtöbb állatorvosi rendelő nem pácienshiánytól szenved — hanem
            attól, hogy a meglévő bázis egy része lassan elsodródik, és a
            megkeresések egy része elvész útközben. A rendszert az Ön rendelőjére
            szabjuk, és azt a lyukat zárja be, amelyik Önnél a legnagyobb — a
            recall-lal kezdve, mert az a leggyorsabb, látható nyereség.
          </p>
          <p className="dash__exnote">
            Az alábbi számok illusztratív példák egy átlagos, forgalmas rendelőre
            — élesben az Ön valós számaival (bázisméret, lemaradók, átlagos vizit,
            no-show arány) töltjük ki.
          </p>
        </div>

        <div className="dash__card reveal" data-delay="1">
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
