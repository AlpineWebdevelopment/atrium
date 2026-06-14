/* Custom AI builds — detailed, light, engaging.
   Example projects, capability categories, fit, and guarantees.
   Copy paraphrased to avoid banned vocab (megoldás, AI ügynökség, …). */

type IconKey =
  | "target" | "search" | "doc" | "globe" | "send" | "plus"
  | "trend" | "chat" | "refresh" | "layers";

const ICON_PATHS: Record<IconKey, React.ReactNode> = {
  target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.6" fill="currentColor" /></>),
  search: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M8 11h6M11 8v6" /></>),
  doc: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h6M8 17h4" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></>),
  send: (<><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></>),
  plus: (<><path d="M12 5v14M5 12h14" /></>),
  trend: (<><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></>),
  chat: (<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>),
  refresh: (<><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></>),
  layers: (<><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>),
};

const PROJECTS: { ico: IconKey; t: string; d: string; who: string; c: string }[] = [
  {
    ico: "target",
    t: "AI lead-generálás & minősítés",
    d: "Proaktívan keresi a potenciális ügyfeleket LinkedIn, weboldal-látogatók és adatbázisok alapján. Automatikusan minősít, szegmentál és személyre szabott kampányt indít — emberi beavatkozás nélkül.",
    who: "Ügynökségeknek & B2B",
    c: "#7C5CFF",
  },
  {
    ico: "search",
    t: "AI SEO delivery platform",
    d: "Elemzi a kliensoldalakat, feltárja a hibákat, tartalom-ajánlásokat generál, optimalizálja a meta-adatokat és automata riportot küld. 50 kliens 2 ember helyett.",
    who: "Ügynökségeknek",
    c: "#4AA3FF",
  },
  {
    ico: "doc",
    t: "Dokumentum-kinyerő ügynök",
    d: "Nagy adatbázisokból és archívumokból pontosan megtalálja és kivonja a kért adatot — ott, ahol ma órákba telik a keresés.",
    who: "Jogi cégeknek, könyvelőknek, kórházaknak",
    c: "#54CFC0",
  },
  {
    ico: "globe",
    t: "Többnyelvű ügyfélszolgálati AI",
    d: "10+ nyelven, a belső rendszerekkel folyamatos szinkronban: ticket-létrehozás, státusz-ellenőrzés, gyakori kérdések kezelése — automatikusan.",
    who: "Multinacionális cégeknek",
    c: "#E8A33D",
  },
  {
    ico: "send",
    t: "Kimenő értékesítési AI",
    d: "Cold call és LinkedIn outreach: személyre szabott megkereséseket generál, követi a válaszokat, és csak az érett leadet adja át az értékesítőnek.",
    who: "B2B pipeline-építésre",
    c: "#6DBC61",
  },
];

/* mind-map: the projects + an open-ended node, fanning from one root */
const MAP_NODES = [
  ...PROJECTS,
  { ico: "plus" as IconKey, t: "Az Ön ötlete", d: "", who: "bármi, amit AI megold", c: "#6DBC61" },
];
const MAP_W = 1000, MAP_H = 470;
const ROOT = { x: 142, y: MAP_H / 2, r: 48 };
const NODE_X = 500;
const nodeY = (i: number) => 46 + i * ((MAP_H - 92) / (MAP_NODES.length - 1));

const CATEGORIES = [
  {
    h: "Értékesítés & marketing",
    c: "#7C5CFF",
    ico: "trend" as IconKey,
    items: [
      "Automatikus lead-nurturing",
      "Személyre szabott email-kampány AI",
      "Dinamikus ajánlat-generátor",
      "Ár-kalkulátor és ajánlatküldő",
      "Prospect-research és minősítés",
    ],
  },
  {
    h: "Ügyfélszolgálat & támogatás",
    c: "#4AA3FF",
    ico: "chat" as IconKey,
    items: [
      "Többnyelvű support több csatornán",
      "Ticket-routing és prioritizálás",
      "Tudásbázis-keresés és válaszgenerálás",
      "Proaktív probléma-észlelés",
      "Automatikus eszkaláció",
    ],
  },
  {
    h: "Operációs automatizálás",
    c: "#54CFC0",
    ico: "refresh" as IconKey,
    items: [
      "Dokumentum-feldolgozás és kategorizálás",
      "Adatkinyerés és elemzés",
      "Automata jelentés-generálás",
      "Folyamat-monitorozás és anomália-észlelés",
      "Készletkezelés és előrejelzés",
    ],
  },
  {
    h: "Iparág-specifikus",
    c: "#E8A33D",
    ico: "layers" as IconKey,
    items: [
      "Egészségügy — beteg-kommunikáció",
      "Jogi — contract review & compliance",
      "Pénzügy — fraud-detection és kockázat",
      "E-commerce — dinamikus árazás, ajánló",
      "HR — CV-screening és előszűrés",
    ],
  },
];

const FIT = [
  "Specifikus folyamatot szeretne automatizálni",
  "Elégedetlen az általános rendszerekkel",
  "Komoly üzleti problémát akar AI-val kezelni",
  "Nyitott a befektetésre, ha az ROI egyértelmű",
  "Partnert keres, nem csak szolgáltatót",
];

const NOFIT = [
  "Csak „kipróbálná” az AI-t minimális költséggel",
  "Nincs konkrét problémája, csak a divatot követi",
  "Türelmetlen, és nem érti a fejlesztési folyamatot",
  "Gyors fixet keres, nem stratégiai fejlesztést",
];

const GUARANTEES = [
  {
    t: "Teljesítmény-garancia",
    d: "Ha az AI nem éri el az előre megbeszélt KPI-okat, extra költség nélkül optimalizálunk, amíg eléri.",
  },
  {
    t: "Átláthatóság-garancia",
    d: "Kétheti demók, nyílt kódbázis-hozzáférés, részletes dokumentáció. Mindig tudja, min dolgozunk és mire megy a pénze.",
  },
  {
    t: "Exit-garancia",
    d: "Ha 3 hónap után nem elégedett, átveszi a teljes kódbázist és a dokumentációt, és bárkivel folytathatja.",
  },
];

export default function CustomSolutions() {
  return (
    <section className="cux" id="egyedi">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Egyedi fejlesztés</span>
          <h2 className="dash__h">Ha a csomag nem elég, megépítjük az Ön rendszerét.</h2>
          <p className="dash__p">
            Ha az előre gyártott csomagok nem illenek az Ön igényeihez, egyedi AI
            rendszert építünk — pontosan arra, amire szüksége van. Nem általános
            AI-ról és próbálgatásról beszélünk: konkrét üzleti problémára konkrét
            AI rendszert tervezünk és fejlesztünk.
          </p>
        </div>

        {/* Example projects */}
        <div className="cux__sec reveal" data-delay="1">
          <h3 className="cux__sec-h"><span>Példa projektek</span></h3>
          {/* desktop: mind-map — one root fanning out to the projects */}
          <svg className="cux__map" viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img" aria-label="Egyedi AI — példa projektek">
            <defs>
              {MAP_NODES.map((n, i) => (
                <linearGradient key={i} id={`gmap${i}`} gradientUnits="userSpaceOnUse" x1={ROOT.x} y1={ROOT.y} x2={NODE_X} y2={nodeY(i)}>
                  <stop offset="0%" stopColor="rgba(1,14,30,0.16)" />
                  <stop offset="100%" stopColor={n.c} />
                </linearGradient>
              ))}
            </defs>
            {MAP_NODES.map((n, i) => {
              const y = nodeY(i);
              return <path key={i} d={`M${ROOT.x + ROOT.r},${ROOT.y} C 330,${ROOT.y} 360,${y} ${NODE_X - 22},${y}`} fill="none" stroke={`url(#gmap${i})`} strokeWidth="2" />;
            })}
            <circle cx={ROOT.x} cy={ROOT.y} r={ROOT.r} fill="var(--bone)" stroke="#6DBC61" strokeWidth="2" />
            <circle cx={ROOT.x} cy={ROOT.y} r={ROOT.r} fill="none" stroke="#6DBC61" strokeWidth="2">
              <animate attributeName="r" values={`${ROOT.r};${ROOT.r + 20}`} dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <text className="cux__map-root" x={ROOT.x} y={ROOT.y - 4} textAnchor="middle">Egyedi</text>
            <text className="cux__map-root" x={ROOT.x} y={ROOT.y + 14} textAnchor="middle">AI</text>
            {MAP_NODES.map((n, i) => {
              const y = nodeY(i);
              return (
                <g key={i}>
                  <circle cx={NODE_X} cy={y} r="19" fill="var(--bone)" stroke={n.c} strokeWidth="2" />
                  <svg x={NODE_X - 11} y={y - 11} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={n.c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ color: n.c }}>
                    {ICON_PATHS[n.ico]}
                  </svg>
                  <text className="cux__map-t" x={NODE_X + 30} y={y - 2}>{n.t}</text>
                  <text className="cux__map-sub" x={NODE_X + 30} y={y + 15} fill={n.c}>{n.who}</text>
                </g>
              );
            })}
          </svg>

          {/* mobile: vertical spine version of the same map */}
          <div className="cux__maplist">
            {MAP_NODES.map((n, i) => (
              <div className="cux__mapitem" key={i} style={{ ["--pc" as string]: n.c } as React.CSSProperties}>
                <span className="cux__mapitem-dot" />
                <b className="cux__mapitem-t">{n.t}</b>
                <span className="cux__mapitem-sub">{n.who}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What we can build */}
        <div className="cux__sec reveal">
          <h3 className="cux__sec-h"><span>Amit tudunk építeni</span></h3>
          <div className="cux__cats">
            {CATEGORIES.map((cat, i) => (
              <div className="cux__catcol" key={i} style={{ ["--pc" as string]: cat.c } as React.CSSProperties}>
                <div className="cux__catcol-head">
                  <span className="cux__catcol-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICON_PATHS[cat.ico]}</svg>
                  </span>
                  <b className="cux__catcol-t">{cat.h}</b>
                </div>
                <div className="cux__catcol-branch">
                  {cat.items.map((it, j) => (
                    <div className="cux__catcol-item" key={j}>{it}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fit / not fit */}
        <div className="cux__fit reveal">
          <div className="cux__fit-col cux__fit-col--yes">
            <div className="cux__fit-h"><span className="cux__fit-badge">✓</span>Önnek való, ha…</div>
            <ul>
              {FIT.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </div>
          <div className="cux__fit-col cux__fit-col--no">
            <div className="cux__fit-h"><span className="cux__fit-badge">✕</span>Nem Önnek való, ha…</div>
            <ul>
              {NOFIT.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </div>
        </div>

        {/* Guarantees */}
        <div className="cux__sec reveal">
          <h3 className="cux__sec-h"><span>Garancia</span></h3>
          <div className="cux__guar">
            {GUARANTEES.map((g, i) => (
              <div className="cux__g" key={i}>
                <svg className="cux__g-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5l8-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <h4 className="cux__g-t">{g.t}</h4>
                <p className="cux__g-d">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
