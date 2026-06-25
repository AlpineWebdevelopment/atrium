"use client";
import { useState, useEffect, useRef } from "react";

const PAINS = [
  {
    tab: "Elmaradt hívások",
    desc: "",
    metrics: [
      { k: "Hívás érkezik", c: "var(--ink)", v: "19:47", d: "munkaidő után" },
      { k: "A vonal", c: "var(--stone)", v: "Hangposta", d: "senki nem veszi fel" },
      { k: "Üzenet", c: "var(--stone)", v: "Nincs", d: "a hívó nem hagy" },
      { k: "A hívó", c: "var(--viz-red)", v: "Továbblép", d: "a versenytárshoz fordul" },
    ],
    loss: { v: "≈ 5 400 000 Ft", per: "/ hó", math: "~12 elszalasztott hívás × ~25% záródás × ~1 800 000 Ft átlagos projekt" },
  },
  {
    tab: "Lassú visszajelzés",
    desc: "",
    metrics: [
      { k: "Ajánlatkérés beérkezik", c: "var(--ink)", v: "14:30", d: "hirdetésből érkezett" },
      { k: "Első válasz", c: "var(--stone)", v: "Másnap", d: "amikor épp jut rá idő" },
      { k: "Az érdeklődő", c: "var(--stone)", v: "Kihűlt", d: "már mással tárgyal" },
      { k: "A hirdetési költség", c: "var(--viz-red)", v: "Elment", d: "bevétel nem lett belőle" },
    ],
    loss: { v: "≈ 3 600 000 Ft", per: "/ hó", math: "~10 lassan megkeresett érdeklődő × ~20% záródás × ~1 800 000 Ft" },
  },
  {
    tab: "Elmaradt felmérések",
    desc: "",
    metrics: [
      { k: "Felmérési időpont", c: "var(--ink)", v: "9:00", d: "megerősítés nélkül" },
      { k: "A megrendelő", c: "var(--stone)", v: "Nem jelenik meg", d: "elfelejtette" },
      { k: "A nap", c: "var(--stone)", v: "Elveszett", d: "senki nem foglalja le" },
      { k: "Visszahívás", c: "var(--viz-red)", v: "Nincs", d: "nincs rá kapacitás" },
    ],
    loss: { v: "≈ 2 400 000 Ft", per: "/ hó", math: "~4 kiesett felmérés × ~33% záródás × ~1 800 000 Ft" },
  },
  {
    tab: "Lezáratlan árajánlatok",
    desc: "",
    metrics: [
      { k: "Ajánlat kiküldve", c: "var(--ink)", v: "Rendszeresen", d: "de ott marad válasz nélkül" },
      { k: "Utánkövetés", c: "var(--ink)", v: "Nincs", d: "senki nem kíséri végig" },
      { k: "A döntés", c: "var(--stone)", v: "Halasztva", d: "a megrendelő vár, aztán felejt" },
      { k: "A majdnem-kész üzlet", c: "var(--viz-red)", v: "Elveszik", d: "máshol köt ki" },
    ],
    loss: { v: "≈ 9 900 000 Ft", per: "/ hó", math: "~3 utánkövetetlen árajánlat havonta × ~3 300 000 Ft átlagos ajánlat" },
  },
];

function GfxCalls() {
  const bars = [34, 58, 80, 52, 70, 96, 120, 104, 92, 116, 78, 100, 88, 112];
  const bw = 1000 / bars.length;
  const closeX = 720;
  const baseY = 178;
  return (
    <div className="dash__chart">
      <svg className="dash__svg" viewBox="0 0 1000 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gAnsKv" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#010E1E" />
            <stop offset="55%" stopColor="#010E1E" />
            <stop offset="100%" stopColor="#6DBC61" />
          </linearGradient>
        </defs>
        {[44, 92, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="rgba(1,14,30,0.06)" strokeWidth="1" />
        ))}
        <rect x={closeX} y="0" width={1000 - closeX} height="190" fill="rgba(200,60,56,0.07)" />
        <line x1={closeX} y1="0" x2={closeX} y2="190" stroke="rgba(200,60,56,0.45)" strokeWidth="1.5" strokeDasharray="5 5" />
        {bars.map((h, i) => {
          const x = i * bw + bw * 0.18;
          const w = bw * 0.64;
          const after = i * bw + bw / 2 >= closeX;
          return <rect key={i} x={x} y={baseY - h} width={w} height={h} rx="3" fill={after ? "rgba(200,60,56,0.55)" : "rgba(1,14,30,0.18)"} />;
        })}
        <path d="M36,95 C90,58 150,40 215,52 C285,64 320,108 385,108 C450,108 480,86 545,90 C610,94 650,74 690,84" fill="none" stroke="url(#gAnsKv)" strokeWidth="3" strokeLinecap="round" />
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

function GfxCooling() {
  return (
    <div className="dash__chart">
      <svg className="dash__svg" viewBox="0 0 1000 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gCoolKv" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6DBC61" />
            <stop offset="55%" stopColor="#8C8579" />
            <stop offset="100%" stopColor="#C83C38" />
          </linearGradient>
          <linearGradient id="gCoolFillKv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(1,14,30,0.16)" />
            <stop offset="100%" stopColor="rgba(1,14,30,0)" />
          </linearGradient>
        </defs>
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="60" y1={y} x2="950" y2={y} stroke="rgba(1,14,30,0.06)" strokeWidth="1" />
        ))}
        <path d="M60,52 C220,58 380,94 560,128 C720,158 850,168 950,172 L950,190 L60,190 Z" fill="url(#gCoolFillKv)" />
        <path d="M60,52 C220,58 380,94 560,128 C720,158 850,168 950,172" fill="none" stroke="url(#gCoolKv)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="cool-dots cool-dots--ink" aria-hidden="true">
        <span className="cool-dot cool-dot--start" />
        <span className="cool-dot cool-dot--lead" />
        <span className="cool-dot cool-dot--mid" />
        <span className="cool-dot cool-dot--end" />
      </div>
      <div className="funnel__stage" style={{ left: "1%", top: "2%", transform: "none" }}>
        <b>Ajánlatkérés beérkezik</b><span>14:30</span>
      </div>
      <div className="funnel__stage" style={{ left: "50%", top: "29%", transform: "translateX(-50%)" }}>
        <b>Kihűlőben</b><span>válasz nélkül</span>
      </div>
      <div className="funnel__stage" style={{ right: "1%", left: "auto", top: "55%", transform: "none" }}>
        <b>Első válasz</b><span>másnap</span>
      </div>
      <div className="dash__axis">
        {["14:30", "", "", "", "", "", "", "", "", "", "", "másnap"].map((a, i) => (a ? <span key={i}>{a}</span> : <i key={i} />))}
      </div>
    </div>
  );
}

function GfxFelmeres() {
  type Slot = { t: string; s: "book" | "noshow" | "lost" };
  const times = ["8:00", "10:00", "13:00", "15:00"];
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
  const label = (s: Slot["s"]) => (s === "noshow" ? "kiesett" : s === "lost" ? "üres" : "");
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
        <span className="cal__sum-item"><i className="cal__sum-dot cal__sum-dot--amber" />{noshow} kiesett felmérés</span>
        <span className="cal__sum-item"><i className="cal__sum-dot cal__sum-dot--red" />{lost} elveszett nap</span>
        <span className="cal__sum-note">visszahívás nélkül a megrendelés végleg elveszik</span>
      </div>
    </div>
  );
}

function GfxQuotes() {
  type Row = { sub: string; val: string; s: "nema" | "won" };
  const rows: Row[] = [
    { sub: "5 napja — nincs utánkövetés", val: "3 800 000 Ft", s: "nema" },
    { sub: "ma — a rendszer utánkövette", val: "4 200 000 Ft", s: "won" },
    { sub: "8 napja — nincs utánkövetés", val: "2 100 000 Ft", s: "nema" },
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
            <span className="quo__val">{r.s === "nema" ? "−" : "+"}{r.val}</span>
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

const GRAPHICS = [GfxCalls, GfxCooling, GfxFelmeres, GfxQuotes];

export default function RealtimeDashboardKivitelezes() {
  const [tab, setTab] = useState(0);
  const pain = PAINS[tab];
  const Gfx = GRAPHICS[tab];
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sync = () => {
      const tabs = tabsRef.current?.querySelectorAll<HTMLElement>(".dash__tab");
      if (!tabs) return;
      tabs.forEach(t => { t.style.minHeight = ""; });
      const max = Math.max(...Array.from(tabs).map(t => t.offsetHeight));
      if (max > 0) tabs.forEach(t => { t.style.minHeight = max + "px"; });
    };
    sync();
    const ro = new ResizeObserver(sync);
    if (tabsRef.current) ro.observe(tabsRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="dash">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow" style={{ color: "#9360BA" }}>Hol szivárog a bevétel</span>
          <h2 className="dash__h">Négy hely, ahol a pénz szivárog<span className="heading-dot">.</span></h2>
          <p className="dash__exnote">
            Az alábbi számok példák — élesben az Ön valós adataira szabva.
          </p>
        </div>

        <div className="dash__card reveal" data-delay="1">
          <div className="dash__tabs" role="tablist" ref={tabsRef}>
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
            {pain.desc && <p className="dash__desc">{pain.desc}</p>}

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
