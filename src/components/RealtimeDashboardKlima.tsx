"use client";
import { useState } from "react";

/* Klíma leak section — the four revenue leaks a typical klímaszerviz runs.
   Numbers are an illustrative model for an average mid-size firm (swap for the
   operator's real figures in the meeting); the point is where the value comes
   from per component, not the figures themselves.
   TODO: confirm before publishing — all forint figures below are illustrative
   placeholders, to be replaced with the operator's real numbers in the meeting. */
const PAINS = [
  {
    tab: "Elszalasztott hívások",
    desc:
      "A komoly munkák telefonon indulnak — gyakran a hőségcsúcson, este vagy foglalt vonal mellett, amikor a csapat mind kint dolgozik. Aki hangpostát kap, nem vár: a következő szerelőt hívja. Egy elnyert beszerelés már sokszorosát hozza a rendszer árának.",
    metrics: [
      { k: "Hívás érkezik", c: "var(--ink)", v: "Hőségcsúcson", d: "amikor mindenki kint van" },
      { k: "A vonal", c: "var(--ink)", v: "Hangposta", d: "Ön a tetőn, a klímánál van" },
      { k: "A hívó", c: "var(--stone)", v: "Tovább lép", d: "a következő szerelőt hívja" },
      { k: "A beszerelés", c: "var(--viz-red)", v: "Elveszik", d: "máshol köt ki" },
    ],
    /* TODO: confirm before publishing — illustrative figure */
    loss: { v: "≈ 4 000 000 Ft", per: "/ hó", math: "~15 hívás havonta a csúcson kicsengve — egy elnyert beszerelés ~4 000 000 Ft" },
  },
  {
    tab: "Lassú utánkövetés",
    desc:
      "A weboldalról és hirdetésből érkező érdeklődő gyorsan dönt — a hőségben pedig azonnal. Aki előbb visszahív, az viszi a felmérést. Ha az első válasz csak másnap jön, a gyorsabb versenytárs már beszerelt.",
    metrics: [
      { k: "Érdeklődés", c: "var(--ink)", v: "Beérkezik", d: "űrlap, e-mail, hirdetés" },
      { k: "Első válasz", c: "var(--stone)", v: "Órák, napok", d: "amikor épp jut rá idő" },
      { k: "A versenytárs", c: "var(--stone)", v: "Gyorsabb", d: "ő ér oda előbb a felmérésre" },
      { k: "A felmérés", c: "var(--viz-red)", v: "Elveszik", d: "a gyorsabbé lesz" },
    ],
    /* TODO: confirm before publishing — illustrative figure; HBR 2011 stat is sourced */
    loss: { v: "≈ 4 000 000 Ft", per: "/ hó", math: "az első válasz lassú — 1 órán belül ~7× az esély a kapcsolatra (HBR, 2011)" },
  },
  {
    tab: "Lezáratlan ajánlat",
    desc:
      "A beszerelési ajánlat kiment — de senki nem kíséri végig. Az ügyfél halogat, aztán elfelejti, vagy mást választ. A majdnem-kész üzlet csendben elveszik. A rendszer utánkövet: emlékeztet, kérdez, lezár. Ez a legnagyobb tétel.",
    metrics: [
      { k: "Ajánlat kiküldve", c: "var(--ink)", v: "~20 / hó", d: "kimegy, és ott marad" },
      { k: "Utánkövetés", c: "var(--ink)", v: "Nincs", d: "senki nem kíséri végig" },
      { k: "A döntés", c: "var(--stone)", v: "Némaság", d: "nem nem — csak elhal" },
      { k: "A majdnem-kész üzlet", c: "var(--viz-red)", v: "Elveszik", d: "~8–10 ajánlat csendben" },
    ],
    /* TODO: confirm before publishing — illustrative figure */
    loss: { v: "≈ 8 000 000 Ft", per: "/ hó", math: "~8–10 utánkövetetlen ajánlat — 1–2 visszahozva ~4–8M Ft munka" },
  },
  {
    tab: "Lemorzsolódó karbantartás",
    desc:
      "Az esedékes karbantartás a visszatérő bevétel — de emlékeztető nélkül az ügyfél kiesik a körből, vagy a kiszállás üres címre fut ki. Elpazarolt idő, elveszett visszatérő ügyfél. A rendszer jelzi az esedékes karbantartásokat és újraegyeztet, mielőtt a kör szétesik.",
    metrics: [
      { k: "Karbantartás esedékes", c: "var(--ink)", v: "Hetente több", d: "visszatérő ügyfélkör" },
      { k: "Emlékeztető", c: "var(--ink)", v: "Nincs", d: "az ügyfél kiesik a körből" },
      { k: "A kiszállás", c: "var(--stone)", v: "Felesleges", d: "üres cím, elpazarolt idő" },
      { k: "Az ügyfél", c: "var(--viz-red)", v: "Lemorzsolódik", d: "vagy mást hív" },
    ],
    /* TODO: confirm before publishing — illustrative figure */
    loss: { v: "≈ 1 200 000 Ft", per: "/ hó", math: "~3–5 lemorzsolódó karbantartás havonta — kiesett visszatérő bevétel és felesleges kiszállás" },
  },
];

/* ---- Graphic 1: call volume over the day, after-hours zone shaded ---- */
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
        <b>Csúcson</b><span>hangposta, nincs válasz</span>
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

/* ---- Graphic 2: interest cooling between inquiry and first reply ---- */
function GfxCooling() {
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
        <b>Érdeklődés beérkezik</b><span>14:30</span>
      </div>
      <div className="funnel__stage" style={{ left: "50%", top: "34%", transform: "translateX(-50%)" }}>
        <b>Kihűlőben</b><span>válasz nélkül</span>
      </div>
      <div className="funnel__stage" style={{ right: "1%", left: "auto", top: "60%", transform: "none" }}>
        <b>Első válasz</b><span>másnap</span>
      </div>
      <div className="dash__axis">
        {["14:30", "", "", "", "", "", "", "", "", "", "", "másnap"].map((a, i) => (a ? <span key={i}>{a}</span> : <i key={i} />))}
      </div>
    </div>
  );
}

/* ---- Graphic 3: quotes sent that nobody chases — the nearly-won deal dies ---- */
function GfxQuotes() {
  type Row = { sub: string; val: string; s: "nema" | "won" };
  /* TODO: confirm before publishing — illustrative figures */
  const rows: Row[] = [
    { sub: "3 napja — nincs utánkövetés", val: "5 800 000 Ft", s: "nema" },
    { sub: "ma — a rendszer utánkövette", val: "4 200 000 Ft", s: "won" },
    { sub: "6 napja — nincs utánkövetés", val: "2 400 000 Ft", s: "nema" },
    { sub: "9 napja — nincs utánkövetés", val: "9 100 000 Ft", s: "nema" },
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
              <b>Ajánlat kiküldve</b>
              <span>{r.sub}</span>
            </span>
            <span className="quo__val">{r.val}</span>
            <span className="quo__tag">{r.s === "won" ? "Lezárva" : "Néma"}</span>
          </div>
        ))}
      </div>
      <div className="quo__sum">
        <span className="quo__sum-item"><i className="quo__sum-dot quo__sum-dot--red" />{nema} ajánlat utánkövetés nélkül</span>
        <span className="quo__sum-note">a majdnem-kész beszerelés csendben elveszik</span>
      </div>
    </div>
  );
}

/* ---- Graphic 4: week of maintenance visits with forgotten gaps ---- */
function GfxSurvey() {
  type Slot = { s: "book" | "miss" | "empty" };
  const times = ["8:00", "10:00", "13:00", "15:00"];
  const states: Slot["s"][][] = [
    ["book", "book", "miss", "book"],
    ["book", "empty", "book", "book"],
    ["book", "book", "book", "miss"],
    ["miss", "book", "empty", "book"],
    ["book", "book", "empty", "book"],
  ];
  const days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"];
  const all = states.flat();
  const miss = all.filter((s) => s === "miss").length;
  const empty = all.filter((s) => s === "empty").length;
  const label = (s: Slot["s"]) => (s === "miss" ? "elmaradt" : s === "empty" ? "üres" : "");
  /* map to the shared calendar classes: miss → noshow (amber), empty → lost (red) */
  const cls = (s: Slot["s"]) => (s === "miss" ? "noshow" : s === "empty" ? "lost" : "book");
  return (
    <div className="cal-wrap">
      <div className="cal">
        {states.map((col, i) => (
          <div className="cal__col" key={i}>
            <div className="cal__day">{days[i]}</div>
            {col.map((s, j) => (
              <div className={"cal__slot cal__slot--" + cls(s)} key={j}>
                <span className="cal__time">{times[j]}</span>
                {s !== "book" && <span className="cal__tag">{label(s)}</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="cal__sum">
        <span className="cal__sum-item"><i className="cal__sum-dot cal__sum-dot--amber" />{miss} elmaradt karbantartás</span>
        <span className="cal__sum-item"><i className="cal__sum-dot cal__sum-dot--red" />{empty} üres kiszállás</span>
        <span className="cal__sum-note">emlékeztető nélkül az ügyfél kiesik a körből</span>
      </div>
    </div>
  );
}

const GRAPHICS = [GfxCalls, GfxCooling, GfxQuotes, GfxSurvey];

export default function RealtimeDashboardKlima() {
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
            A legtöbb klímaszerviz nem munkahiánytól szenved — hanem attól,
            hogy a megkeresések egy része elvész útközben: a csúcson kicsengő
            hívás, lassú visszajelzés, utánkövetetlen ajánlat, lemorzsolódó
            karbantartás. A rendszert az Ön működésére szabjuk, és azt a lyukat
            zárja be, amelyik Önnél a legnagyobb.
          </p>
          <p className="dash__exnote">
            Az alábbi számok illusztratív példák egy átlagos klímaszervizre —
            élesben az Ön valós számaival (megkeresés, átlagos beszerelés,
            fedezet, záródás) töltjük ki.
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
