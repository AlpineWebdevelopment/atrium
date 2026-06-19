"use client";
import { useState } from "react";

/* Four capability panels — outcome frame, not revenue-leak frame.
   Section: "Drasztikusan magasabb konverzió."
   Graphics unchanged; copy and metrics reframed to positive results. */
const PANELS = [
  {
    tab: "Tökéletes minősítés",
    desc:
      "A rendszer felteszi a megfelelő kérdéseket, és komoly érdeklőre szűr. Mire Ön leül tárgyalni, a másik fél már minősített — az Ön ideje a valódi tárgyalásra megy.",
    metrics: [
      { k: "Beérkező megkeresések", c: "var(--ink)",    v: "Minden nap",  d: "hívás, űrlap, üzenet" },
      { k: "Komoly érdeklők",       c: "var(--signal)", v: "Kiemelve",    d: "az előszűrés után" },
      { k: "Az Ön ideje",           c: "var(--signal)", v: "Megvédve",    d: "csak minősített partnerekkel" },
      { k: "Konverzió",             c: "var(--signal)", v: "Magasabb",    d: "kevesebb felesleges egyeztetéssel" },
    ],
    gain: {
      note: "A rendszer szűri a nézelődőket — Ön csak azokkal tárgyal, akik tényleg vásárolnának.",
      v: "Csak komoly vásárlók jutnak el Önhöz.",
    },
  },
  {
    tab: "24/7 híváskezelés",
    desc:
      "Minden hívást fogad, munkaidő után és hétvégén is. Egyetlen érdeklő sem kerül hangpostára — mindenki azonnal visszaigazolást kap.",
    metrics: [
      { k: "Fogadott hívások", c: "var(--signal)", v: "Minden",    d: "munkaidő után is" },
      { k: "Munkaidő",         c: "var(--signal)", v: "Nincs hatása", d: "rendszer 24/7 aktív" },
      { k: "Visszaigazolás",   c: "var(--signal)", v: "Azonnali",  d: "minden hívónak" },
      { k: "Elszalasztott lead", c: "var(--signal)", v: "Nulla",   d: "minden hívás feldolgozva" },
    ],
    gain: {
      note: "Minden hívás egy lehetőség — egyik sem vész el attól, hogy épp nem ér rá felvenni.",
      v: "24 óra, 7 nap — egy hívás sem vész el.",
    },
  },
  {
    tab: "Perceken belüli válasz",
    desc:
      "A hirdetésből érkező érdeklők perceken belül választ kapnak — amikor még a döntés előtt vannak. Az első reagáló viszi a legtöbb ügyletet.",
    metrics: [
      { k: "Érdeklő érkezett",  c: "var(--ink)",    v: "14:30",    d: "hirdetésből" },
      { k: "Első válasz",       c: "var(--signal)", v: "< 5 perc", d: "a rendszertől" },
      { k: "Az érdeklő",        c: "var(--signal)", v: "Aktív",    d: "döntés előtt van még" },
      { k: "Utánkövetés",       c: "var(--signal)", v: "Automatikus", d: "amíg választ ad" },
    ],
    gain: {
      note: "A lead az első percekben a legfogékonyabb — a leggyorsabb reagáló viszi az ügyletet.",
      v: "Gyorsabb válasz, több zárt ügylet.",
    },
  },
  {
    tab: "No-show csökkentés",
    desc:
      "Időpont előtt emlékeztet, utána visszahívja a no-show-t. A naptár lyukai bezárulnak — a kieső bevétel visszatér.",
    metrics: [
      { k: "Emlékeztető",    c: "var(--signal)", v: "Automatikus", d: "minden időpont előtt" },
      { k: "No-show arány",  c: "var(--signal)", v: "Csökken",     d: "visszaigazolással" },
      { k: "Üres slot",      c: "var(--signal)", v: "Feltöltve",   d: "várólistáról" },
      { k: "A naptár",       c: "var(--signal)", v: "Teli",        d: "kézi munka nélkül" },
    ],
    gain: {
      note: "Az emlékeztető és a visszahívás együtt tartja teli a naptárt — manuális utánkövetés nélkül.",
      v: "Teli naptár. Kézi munka nélkül.",
    },
  },
];

/* ---- Graphic 1: qualification as a pre-screening dot matrix ---- */
function GfxFunnel() {
  const COLS = 13, ROWS = 3, W = 800, H = 200, MX = 38, MY = 36;
  const gx = (W - 2 * MX) / (COLS - 1);
  const gy = (H - 2 * MY) / (ROWS - 1);
  const D = 3.8;
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
            <stop offset="0%" stopColor="rgba(1,14,30,0)" />
            <stop offset="50%" stopColor="rgba(1,14,30,0.12)" />
            <stop offset="100%" stopColor="rgba(1,14,30,0)" />
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
        <rect x={closeX} y="0" width={1000 - closeX} height="190" fill="rgba(109,188,97,0.07)" />
        <line x1={closeX} y1="0" x2={closeX} y2="190" stroke="rgba(109,188,97,0.45)" strokeWidth="1.5" strokeDasharray="5 5" />
        {bars.map((h, i) => {
          const x = i * bw + bw * 0.18;
          const w = bw * 0.64;
          const after = i * bw + bw / 2 >= closeX;
          return <rect key={i} x={x} y={baseY - h} width={w} height={h} rx="3" fill={after ? "rgba(109,188,97,0.55)" : "rgba(1,14,30,0.18)"} />;
        })}
        <path d="M36,95 C90,58 150,40 215,52 C285,64 320,108 385,108 C450,108 480,86 545,90 C610,94 650,74 690,84 C750,92 820,88 960,90" fill="none" stroke="url(#gAns)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="960" cy="90" r="5" fill="#6DBC61" stroke="var(--bone)" strokeWidth="2.5" />
      </svg>
      <div className="funnel__stage funnel__stage--tr">
        <b>Zárás után</b><span>rendszer fogadja</span>
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

/* ---- Graphic 3: interest staying high with fast response ---- */
function GfxCooling() {
  return (
    <div className="dash__chart">
      <svg className="dash__svg" viewBox="0 0 1000 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gFast" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#010E1E" />
            <stop offset="15%" stopColor="#6DBC61" />
            <stop offset="100%" stopColor="#6DBC61" />
          </linearGradient>
          <linearGradient id="gFastFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(109,188,97,0.14)" />
            <stop offset="100%" stopColor="rgba(109,188,97,0)" />
          </linearGradient>
          <linearGradient id="gCoolRef" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#010E1E" />
            <stop offset="55%" stopColor="#8C8579" />
            <stop offset="100%" stopColor="#C46C64" />
          </linearGradient>
        </defs>
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="60" y1={y} x2="950" y2={y} stroke="rgba(1,14,30,0.06)" strokeWidth="1" />
        ))}
        {/* slow response: interest cools (dashed, faded) */}
        <path d="M60,52 C220,58 380,94 560,128 C720,158 850,168 950,172" fill="none" stroke="url(#gCoolRef)" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 5" opacity="0.4" />
        {/* fast response: interest stays high */}
        <path d="M60,52 C120,48 200,46 950,50 L950,190 L60,190 Z" fill="url(#gFastFill)" />
        <path id="fastPath" d="M60,52 C120,48 200,46 950,50" fill="none" stroke="url(#gFast)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="60" cy="52" r="7" fill="#010E1E" stroke="var(--bone)" strokeWidth="3" />
        <circle cx="160" cy="47" r="7" fill="#6DBC61" stroke="var(--bone)" strokeWidth="3" />
        <circle cx="160" cy="47" r="7" fill="none" stroke="#6DBC61" strokeWidth="2">
          <animate attributeName="r" values="7;18" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="funnel__stage" style={{ left: "1%", top: "0", transform: "none" }}>
        <b>Érdeklődés beérkezik</b><span>14:30</span>
      </div>
      <div className="funnel__stage" style={{ left: "12%", top: "8%", transform: "none" }}>
        <b>Válasz</b><span style={{ color: "#6DBC61" }}>&lt; 5 perc</span>
      </div>
      <div className="funnel__stage" style={{ right: "1%", left: "auto", top: "8%", transform: "none" }}>
        <b>Érdeklő</b><span style={{ color: "#6DBC61" }}>Aktív marad</span>
      </div>
      <div className="dash__axis">
        {["14:30", "", "", "", "", "", "", "", "", "", "", "15:00"].map((a, i) => (a ? <span key={i}>{a}</span> : <i key={i} />))}
      </div>
    </div>
  );
}

/* ---- Graphic 4: week calendar, filled with reminders ---- */
function GfxCalendar() {
  type Slot = { s: "book" | "noshow" | "lost" };
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
  const label = (s: Slot["s"]) => (s === "noshow" ? "emlékeztető" : s === "lost" ? "visszahívva" : "");
  return (
    <div className="cal-wrap">
      <div className="cal">
        {states.map((col, i) => (
          <div className="cal__col" key={i}>
            <div className="cal__day">{days[i]}</div>
            {col.map((s, j) => (
              <div className={"cal__slot cal__slot--" + (s === "noshow" || s === "lost" ? "book" : s)} key={j}>
                <span className="cal__time">{times[j]}</span>
                {s !== "book" && <span className="cal__tag" style={{ color: "var(--signal)", borderColor: "var(--signal)", background: "color-mix(in srgb, var(--signal) 8%, var(--bone))" }}>{label(s)}</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="cal__sum">
        <span className="cal__sum-item"><i className="cal__sum-dot" style={{ background: "var(--signal)" }} />{noshow} emlékeztető kiküldve</span>
        <span className="cal__sum-item"><i className="cal__sum-dot" style={{ background: "var(--signal)" }} />{lost} üres slot visszahívva</span>
        <span className="cal__sum-note">a naptár teli marad — manuális utánkövetés nélkül</span>
      </div>
    </div>
  );
}

const GRAPHICS = [GfxFunnel, GfxCalls, GfxCooling, GfxCalendar];

export default function RealtimeDashboard() {
  const [tab, setTab] = useState(0);
  const panel = PANELS[tab];
  const Gfx = GRAPHICS[tab];

  return (
    <section className="dash">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Miért tér meg</span>
          {/* ATRIUM-EDIT — outcome frame: drasztikusan magasabb konverzió */}
          <h2 className="dash__h">Drasztikusan magasabb konverzió.</h2>
          <p className="dash__p">
            Több érdeklőből lesz ügyfél — tökéletes minősítéssel, soha el nem
            felejtett utánkövetéssel. Csak a komoly vásárlók jutnak el Önhöz.
          </p>
          <p className="dash__exnote">
            Az alábbi példák illusztrálják, hogyan működik a rendszer az Ön cégénél.
          </p>
        </div>

        <div className="dash__card reveal" data-delay="1">
          <div className="dash__tabs" role="tablist">
            {PANELS.map((p, i) => (
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
            <p className="dash__desc">{panel.desc}</p>

            <div className="dash__metrics">
              {panel.metrics.map((m, i) => (
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

            {/* Outcome statement — replaces the revenue-loss box */}
            <div className="dash__loss" style={{ borderColor: "color-mix(in srgb, var(--signal) 30%, var(--line))", background: "color-mix(in srgb, var(--signal) 5%, var(--bone))" }}>
              <div className="dash__loss-l">
                <div className="dash__loss-head">
                  <svg className="dash__loss-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--signal)" }}>
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  <span className="dash__loss-label" style={{ color: "var(--signal)" }}>Az eredmény</span>
                </div>
                <span className="dash__loss-math">{panel.gain.note}</span>
              </div>
              <div className="dash__loss-v" style={{ color: "var(--signal)", fontSize: "clamp(14px, 1.8vw, 18px)", maxWidth: "260px", textAlign: "right", lineHeight: 1.3 }}>
                {panel.gain.v}
              </div>
            </div>

            <Gfx />
          </div>
        </div>
      </div>
    </section>
  );
}
