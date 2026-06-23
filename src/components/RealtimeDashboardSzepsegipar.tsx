"use client";
import { useState } from "react";

/* Szépségszalon leak section — the value here is many tiny recoveries that add
   up (plus some genuine time saved), not one big job or a recurring-base
   backlog. That's why the offer is fixed-price and fast-close: the ROI is
   obvious even on cautious numbers. Illustrative figures for a small salon —
   the average ticket and no-show rate swing a lot, so these are placeholders. */
const PAINS = [
  {
    tab: "Megválaszolatlan DM",
    desc:
      "A foglalások nagy része Instagramon és Messengeren érkezik — gyakran amikor a keze tele van. A lassú válasz alatt a vendég mást foglal, vagy meggondolja magát. Az AI másodpercek alatt válaszol és időpontot ad — nem foglalási link, hanem tényleg megválaszolja az üzenetet.",
    metrics: [
      { k: "DM érkezik", c: "var(--ink)", v: "Instán, Messengeren", d: "miközben a keze tele van" },
      { k: "A válasz", c: "var(--ink)", v: "Késik", d: "nem ér rá azonnal" },
      { k: "A vendég", c: "var(--stone)", v: "Elpártol", d: "mást foglal vagy meggondolja" },
      { k: "A foglalás", c: "var(--viz-red)", v: "Elmarad", d: "csendben elsodródik" },
    ],
    loss: { v: "≈ 50 000 Ft", per: "/ hó", math: "~80 megkeresés havonta — a lassú válasz ~5 foglalást elsodor × ~10 000 Ft" },
  },
  {
    tab: "Elmaradt időpontok",
    desc:
      "Az üres szék visszahozhatatlan idő. Emlékeztető a vendégnek a vizit előtt, és várólista a lemondott helyek feltöltésére: a kettő együtt a kieső időpontok felét megmenti.",
    metrics: [
      { k: "Időpont", c: "var(--ink)", v: "~120 / hó", d: "vágás, festés, kezelés" },
      { k: "Emlékeztető", c: "var(--ink)", v: "Nincs", d: "a vendég elfelejti" },
      { k: "A szék", c: "var(--stone)", v: "Üresen marad", d: "~10–12% no-show" },
      { k: "A várólista", c: "var(--viz-red)", v: "Nem hív", d: "a szabad hely nem telik fel" },
    ],
    loss: { v: "≈ 60 000 Ft", per: "/ hó", math: "~12–14 no-show havonta — emlékeztetővel és várólistával ~6 visszahozható × ~10 000 Ft" },
  },
  {
    tab: "Elsodródott vendégek",
    desc:
      "Aki egyszer járt és nem foglalt újra, az nem elégedetlen — csak nem szólt neki senki. Egy finom „ideje a következő időpontnak?” visszahozza. A visszajáró vendég megszerzése nem kerül semmibe.",
    metrics: [
      { k: "Korábbi vendég", c: "var(--ink)", v: "Több száz", d: "egyszer járt, nem jött vissza" },
      { k: "Visszahívás", c: "var(--ink)", v: "Nincs", d: "senki nem szól neki" },
      { k: "A vendég", c: "var(--stone)", v: "Elsodródik", d: "csendben más szalonhoz" },
      { k: "A bevétel", c: "var(--viz-red)", v: "Elveszik", d: "pedig ingyen visszahozható" },
    ],
    loss: { v: "≈ 50 000 Ft", per: "/ hó", math: "~5 elsodródott vendég havonta finoman visszahívva × ~10 000 Ft" },
  },
];

/* ---- Graphic 1: a DM that cools while it waits for a reply ---- */
function GfxDM() {
  return (
    <div className="dash__chart">
      <svg className="dash__svg" viewBox="0 0 1000 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gCool" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6DBC61" />
            <stop offset="55%" stopColor="#8C8579" />
            <stop offset="100%" stopColor="#C46C64" />
          </linearGradient>
          <linearGradient id="gCoolFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(1,14,30,0.16)" />
            <stop offset="100%" stopColor="rgba(1,14,30,0)" />
          </linearGradient>
        </defs>
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="60" y1={y} x2="950" y2={y} stroke="rgba(1,14,30,0.06)" strokeWidth="1" />
        ))}
        <path d="M60,52 C220,58 380,94 560,128 C720,158 850,168 950,172 L950,190 L60,190 Z" fill="url(#gCoolFill)" />
        <path id="coolPath" d="M60,52 C220,58 380,94 560,128 C720,158 850,168 950,172" fill="none" stroke="url(#gCool)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="cool-dots" aria-hidden="true">
        <span className="cool-dot cool-dot--start" />
        <span className="cool-dot cool-dot--lead" />
        <span className="cool-dot cool-dot--mid" />
        <span className="cool-dot cool-dot--end" />
      </div>
      <div className="funnel__stage" style={{ left: "1%", top: "7%", transform: "none" }}>
        <b>DM érkezik</b><span>azonnal</span>
      </div>
      <div className="funnel__stage" style={{ left: "50%", top: "34%", transform: "translateX(-50%)" }}>
        <b>Válasz nélkül</b><span>percek telnek</span>
      </div>
      <div className="funnel__stage" style={{ right: "1%", left: "auto", top: "60%", transform: "none" }}>
        <b>Elpártol</b><span>mást foglal</span>
      </div>
      <div className="dash__axis">
        {["azonnal", "", "", "", "", "", "", "", "", "", "", "túl késő"].map((a, i) => (a ? <span key={i}>{a}</span> : <i key={i} />))}
      </div>
    </div>
  );
}

/* ---- Graphic 2: a week of appointments with no-show / empty gaps ---- */
function GfxAppointments() {
  type Slot = { s: "book" | "noshow" | "empty" };
  const times = ["9:00", "11:00", "14:00", "17:00"];
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
        <span className="cal__sum-note">emlékeztetővel és várólistával a szabad szék feltölthető</span>
      </div>
    </div>
  );
}

/* ---- Graphic 3: past clients — most drifted off, a gentle nudge brings some back ---- */
function GfxRebook() {
  const COLS = 14, ROWS = 3, W = 860, H = 200, MX = 40, MY = 36;
  const gx = (W - 2 * MX) / (COLS - 1);
  const gy = (H - 2 * MY) / (ROWS - 1);
  const D = 4;
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
      <svg className="qual__svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Egy finom visszahívás visszahozza az elsodródott vendéget">
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
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "rgba(1,14,30,0.2)" }} />Visszajáró</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#C46C64" }} />Elmaradt</span>
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#6DBC61" }} />Visszahozva</span>
        <span className="qual__note">Egy finom visszahívás visszahozza az elsodródott vendéget.</span>
      </div>
    </div>
  );
}

const GRAPHICS = [GfxDM, GfxAppointments, GfxRebook];

export default function RealtimeDashboardSzepsegipar() {
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
            A legtöbb szalon nem vendéghiánytól szenved — hanem attól, hogy apró
            bevételek csendben elszivárognak: a megválaszolatlan DM, az elmaradt
            időpont, a vissza nem hívott vendég. Egyenként kicsi, együtt sok — és
            a rendszer fix áron mindet bezárja.
          </p>
          <p className="dash__exnote">
            Az alábbi számok illusztratív példák egy kisebb szalonra — a valós
            átlagár és no-show arány szalononként erősen változik.
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
