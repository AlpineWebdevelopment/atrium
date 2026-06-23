"use client";
import { useState } from "react";

const PAINS = [
  {
    tab: "Foglalt kéz, csörgő telefon",
    desc: "Festés közben, műköröm alatt, masszázsnál nem lehet felvenni a telefont. A vendég nem vár — a következő szalont hívja.",
    metrics: [
      { k: "Hívás érkezik", c: "var(--ink)", v: "14:22", d: "kezelés közben" },
      { k: "A vonal", c: "var(--stone)", v: "Nem elérhető", d: "senki nem veszi fel" },
      { k: "A vendég", c: "var(--stone)", v: "Nem vár", d: "nem hagy üzenetet" },
      { k: "A foglalás", c: "var(--viz-red)", v: "Elveszik", d: "elveszett bevétel" },
    ],
    loss: { v: "≈ 480 000 Ft", per: "/ hó", math: "~8 elveszett vendég × ~60 000 Ft átlagos éves vendégi érték" },
  },
  {
    tab: "No-show-k",
    desc: "Az elfelejtett időpont üres széket jelent. Emlékeztető nélkül a kieső kezelési idő bevétele végleg elveszik — és a várólistán lévők sem tudják kitölteni.",
    metrics: [
      { k: "Időpont", c: "var(--ink)", v: "10:00", d: "festés, műköröm, masszázs" },
      { k: "A vendég", c: "var(--stone)", v: "Nem jön el", d: "elfelejtette" },
      { k: "A székben", c: "var(--stone)", v: "Üres hely", d: "senki nem tölti fel" },
      { k: "Emlékeztető", c: "var(--viz-red)", v: "Nincs", d: "nincs rá kapacitás" },
    ],
    loss: { v: "≈ 240 000 Ft", per: "/ hó", math: "~12 no-show × ~20 000 Ft kezelési díj" },
  },
  {
    tab: "Lassú visszahívás",
    desc: "Egy vendég foglalási igénye percek alatt kihűl. Ha az első válasz csak órákon belül jön, addigra már más szalonnál foglalt.",
    metrics: [
      { k: "Foglalási igény", c: "var(--ink)", v: "13:45", d: "Instagram, webchat, SMS" },
      { k: "Első válasz", c: "var(--stone)", v: "3 óra múlva", d: "amikor épp jut rá idő" },
      { k: "A vendég", c: "var(--stone)", v: "Más szalonban", d: "már foglalt máshol" },
      { k: "A hirdetési költség", c: "var(--viz-red)", v: "Elment", d: "bevétel nem lett belőle" },
    ],
    loss: { v: "≈ 320 000 Ft", per: "/ hó", math: "~8 kihűlt érdeklődő × ~40 000 Ft átlagos éves vendégi érték" },
  },
  {
    tab: "Lemondások kezelése",
    desc: "A hirtelen lemondás üres helyet hagy — de ha nincs várólistakezelés, az a hely üresen marad. A rendszer azonnal értesíti a várólistán lévőket.",
    metrics: [
      { k: "Lemondás érkezik", c: "var(--ink)", v: "Hirtelen", d: "24 órán belül" },
      { k: "Értesítés", c: "var(--stone)", v: "Nincs", d: "várólistán lévőknek" },
      { k: "A szék", c: "var(--stone)", v: "Üresen marad", d: "bevétel elveszik" },
      { k: "Visszahívás", c: "var(--viz-red)", v: "Nincs", d: "nincs kapacitás rá" },
    ],
    loss: { v: "≈ 180 000 Ft", per: "/ hó", math: "~9 töltetlen lemondás × ~20 000 Ft kezelési díj" },
  },
];

function GfxFunnel() {
  const COLS = 13, ROWS = 3, W = 800, H = 200, MX = 38, MY = 36;
  const gx = (W - 2 * MX) / (COLS - 1);
  const gy = (H - 2 * MY) / (ROWS - 1);
  const D = 3.8;
  const serious: Record<string, "k" | "v"> = {
    "2,0": "k", "7,0": "k", "9,1": "v", "5,2": "k", "11,2": "k",
  };
  const color = (st: string) => (st === "v" ? "#BC6285" : st === "k" ? "#010E1E" : "rgba(1,14,30,0.13)");
  const dots: { x: number; y: number; st: string }[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      dots.push({ x: MX + c * gx, y: MY + r * gy, st: serious[`${c},${r}`] || "n" });
    }
  }
  const flagged = dots.filter((d) => d.st !== "n");
  return (
    <div className="qual">
      <svg className="qual__svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Minden hívásból csak néhány komoly foglalási szándék">
        <defs>
          <linearGradient id="qScanS" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(1,14,30,0)" />
            <stop offset="50%" stopColor="rgba(1,14,30,0.12)" />
            <stop offset="100%" stopColor="rgba(1,14,30,0)" />
          </linearGradient>
        </defs>
        <rect x="-90" y="0" width="90" height={H} fill="url(#qScanS)">
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
        <span className="qual__leg"><i className="qual__leg-dot" style={{ background: "#BC6285" }} />Visszatérő vendég</span>
        <span className="qual__note">Az előszűrés kiemeli a komolyakat — Ön már csak velük foglalkozik.</span>
      </div>
    </div>
  );
}

function GfxCalls() {
  const bars = [34, 58, 80, 52, 70, 96, 120, 104, 92, 116, 78, 100, 88, 112];
  const bw = 1000 / bars.length;
  const closeX = 720;
  const baseY = 178;
  return (
    <div className="dash__chart">
      <svg className="dash__svg" viewBox="0 0 1000 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gAnsS" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#010E1E" />
            <stop offset="55%" stopColor="#010E1E" />
            <stop offset="100%" stopColor="#BC6285" />
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
        <path d="M36,95 C90,58 150,40 215,52 C285,64 320,108 385,108 C450,108 480,86 545,90 C610,94 650,74 690,84" fill="none" stroke="url(#gAnsS)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="calls-dots" aria-hidden="true">
        <span className="calls-dot" style={{ background: "#BC6285" }} />
      </div>
      <div className="funnel__stage funnel__stage--tr">
        <b>Zárás után</b><span>senki nem veszi fel</span>
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

function GfxCooling() {
  return (
    <div className="dash__chart">
      <svg className="dash__svg" viewBox="0 0 1000 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gCoolS" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#010E1E" />
            <stop offset="55%" stopColor="#8C8579" />
            <stop offset="100%" stopColor="#C46C64" />
          </linearGradient>
          <linearGradient id="gCoolFillS" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(1,14,30,0.16)" />
            <stop offset="100%" stopColor="rgba(1,14,30,0)" />
          </linearGradient>
        </defs>
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="60" y1={y} x2="950" y2={y} stroke="rgba(1,14,30,0.06)" strokeWidth="1" />
        ))}
        <path d="M60,52 C220,58 380,94 560,128 C720,158 850,168 950,172 L950,190 L60,190 Z" fill="url(#gCoolFillS)" />
        <path id="coolPathS" d="M60,52 C220,58 380,94 560,128 C720,158 850,168 950,172" fill="none" stroke="url(#gCoolS)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="cool-dots" aria-hidden="true">
        <span className="cool-dot cool-dot--start" />
        <span className="cool-dot cool-dot--lead" />
        <span className="cool-dot cool-dot--mid" />
        <span className="cool-dot cool-dot--end" />
      </div>
      <div className="funnel__stage" style={{ left: "2%", top: "15%", transform: "translateY(-50%)" }}>
        <b>Foglalási igény</b><span>13:45</span>
      </div>
      <div className="funnel__stage" style={{ left: "50%", top: "49%" }}>
        <b>Kihűlőben</b><span>válasz nélkül</span>
      </div>
      <div className="funnel__stage" style={{ right: "2%", left: "auto", top: "75%", transform: "translateY(-50%)" }}>
        <b>Első válasz</b><span>3 óra múlva</span>
      </div>
      <div className="dash__axis">
        {["13:45", "", "", "", "", "", "", "", "", "", "", "17:00"].map((a, i) => (a ? <span key={i}>{a}</span> : <i key={i} />))}
      </div>
    </div>
  );
}

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
  const label = (s: Slot["s"]) => (s === "noshow" ? "lemondás" : s === "lost" ? "üres" : "");
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
        <span className="cal__sum-item"><i className="cal__sum-dot cal__sum-dot--amber" />{noshow} lemondás</span>
        <span className="cal__sum-item"><i className="cal__sum-dot cal__sum-dot--red" />{lost} üres szék</span>
        <span className="cal__sum-note">várólistakezelés nélkül a bevétel végleg elveszik</span>
      </div>
    </div>
  );
}

const GRAPHICS = [GfxFunnel, GfxCalls, GfxCooling, GfxCalendar];

export default function RealtimeDashboardSalon() {
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
            A legtöbb szépségszalon nem vendéghiánytól szenved — hanem
            attól, hogy a foglalások egy része elvész útközben. A rendszert
            az Ön szalonjára szabjuk, és azt a lyukat zárja be, amelyik
            Önnél a legnagyobb.
          </p>
          <p className="dash__exnote">
            Az alábbi számok példák — élesben az Ön valós adataira szabva.
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
