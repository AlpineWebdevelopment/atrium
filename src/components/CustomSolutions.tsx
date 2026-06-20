/* Custom AI builds — honest, on-brand version (root only).
   ATRIUM-EDIT EF0–EF7: replaced the Meridian-cloned skeleton (fabricated example
   portfolio, capability taxonomy, three guarantees) with: what we *can* build
   (niche examples), who it's for, and how we work. No banned vocab; AI named
   flatly; nothing framed as a delivered project. */

type IconKey = "doc" | "refresh" | "layers" | "search" | "globe";

const ICON_PATHS: Record<IconKey, React.ReactNode> = {
  doc: (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h6M8 17h4" /></>),
  refresh: (<><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></>),
  layers: (<><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>),
  search: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M8 11h6M11 8v6" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></>),
};

/* ATRIUM-EDIT EF3 — "Példa projektek" (fabricated agency portfolio) → "Mit
   építhetünk": what *can* be built, framed per niche, never as delivered work. */
const BUILDS: { ico: IconKey; t: string; d: string; who: string; c: string }[] = [
  {
    ico: "doc",
    t: "Árajánlat-utánkövető rendszer",
    d: "A kiküldött árajánlatokat utánköveti, amíg az ügyfél nem válaszol vagy el nem utasít.",
    who: "Kivitelező és gyártó cégeknek",
    c: "#9662BC",
  },
  {
    ico: "refresh",
    t: "Visszahívó motor a páciensbázisra",
    d: "Figyeli, ki esett ki az oltási vagy kontroll-rendből, és időben visszahívja.",
    who: "Állatorvosi és orvosi rendelőknek",
    c: "#628FBC",
  },
  {
    ico: "layers",
    t: "Több telephelyes irányítás",
    d: "A beérkező megkeresést a megfelelő telephelyhez, naptárhoz és csapathoz irányítja.",
    who: "Több fiókkal működő szolgáltatóknak",
    c: "#62BCAC",
  },
  {
    ico: "search",
    t: "Időpont előtti adatfelvétel",
    d: "A látogatás előtt összegyűjti a szükséges adatokat, hogy a rendelés felkészülten induljon.",
    who: "Szakorvosi rendelőknek",
    c: "#BCA162",
  },
  {
    ico: "globe",
    t: "Kétnyelvű foglalás",
    d: "A foglalási beszélgetést németül vagy angolul viszi, és magyarul adja át a csapatnak.",
    who: "Wellness szállodáknak és fogászati turizmusra",
    c: "#6DBC61",
  },
];

const MAP_NODES = BUILDS;
const MAP_W = 1000, MAP_H = 470;
const ROOT = { x: 142, y: MAP_H / 2, r: 48 };
const NODE_X = 500;
const nodeY = (i: number) => 46 + i * ((MAP_H - 92) / (MAP_NODES.length - 1));

/* ATRIUM-EDIT EF6 — "Garancia" (perf/transparency/exit, lifted from competitor)
   → "Ahogy dolgozunk": value-based pricing, open process, you own the build.
   The unbackable pre-revenue KPI promise is removed. */
const HOWWEWORK = [
  {
    t: "Az Ön számaiból árazunk.",
    d: "Az árat ahhoz kötjük, amit a fejlesztés valóban ér Önnek — nem egy átláthatatlan fejlesztői számlához.",
  },
  {
    t: "Kéthetente látja, hol tartunk.",
    d: "Nyitott folyamat, részletes dokumentáció. Mindig tudja, mire megy a pénze.",
  },
  {
    t: "Amit megépítünk, az az Öné.",
    d: "Nincs bezárva — a rendszer és a dokumentáció Önnél marad.",
  },
];

export default function CustomSolutions() {
  return (
    <section className="cux" id="egyedi">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Egyedi fejlesztés</span>
          {/* ATRIUM-EDIT EF0 — subhead */}
          <h2 className="dash__h">Amit a kész rendszer nem fed le, megépítjük.</h2>
          {/* ATRIUM-EDIT EF1 — intro paragraph */}
          <p className="dash__p">
            Néha a kész rendszer nem fedi le, amire Önnek szüksége van. Ilyenkor
            a saját működésére építünk rá — egy konkrét üzleti problémára, nem
            általános AI-ról. Ön elmondja, hol akad el; mi pontosan arra
            tervezzük és építjük meg.
          </p>
        </div>

        {/* The point: it starts from the operator's own idea, any scale */}
        <div className="cux__lead reveal" data-delay="1">
          <span className="cux__lead-kicker">Az Ön ötlete a kiindulópont</span>
          {/* ATRIUM-EDIT EF2 — scale line */}
          <p className="cux__lead-txt">
            A léptéket Ön szabja meg: lehet <b>egyetlen automatizálás</b>, néhány
            összekötött folyamat, vagy egy egész működést átfogó <b>rendszer</b>.
          </p>
          {/* ATRIUM-EDIT EF0 — scale chips: dropped "· ERP" */}
          <div className="cux__scale" aria-hidden="true">
            <div className="cux__scale-step">
              <span className="cux__scale-bar" style={{ height: "44px" }} />
              <span className="cux__scale-lbl">Egy automatizálás</span>
            </div>
            <div className="cux__scale-step">
              <span className="cux__scale-bar" style={{ height: "66px" }} />
              <span className="cux__scale-lbl">Több folyamat</span>
            </div>
            <div className="cux__scale-step cux__scale-step--full">
              <span className="cux__scale-bar" style={{ height: "90px" }} />
              <span className="cux__scale-lbl">Teljes rendszer</span>
            </div>
          </div>
        </div>

        {/* ATRIUM-EDIT EF3 — "Mit építhetünk" */}
        <div className="cux__sec reveal" data-delay="2">
          <h3 className="cux__sec-h"><span>Mit építhetünk</span></h3>
          {/* desktop: mind-map — one root fanning out to the builds */}
          <svg className="cux__map" viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img" aria-label="Egyedi AI — amit építhetünk">
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

        {/* ATRIUM-EDIT EF4 — removed the "Amit tudunk építeni" capability taxonomy
            (redundant with EF3, read as a horizontal AI-agency menu). */}

        {/* ATRIUM-EDIT EF5 — condensed fit lists */}
        <div className="cux__sec reveal">
          <h3 className="cux__sec-h"><span>Kinek való</span></h3>
          <div className="cux__fit">
            <div className="cux__fit-col cux__fit-col--yes">
              <div className="cux__fit-h"><span className="cux__fit-badge">✓</span>Önnek való</div>
              <p className="cux__fit-txt">
                Ha egy konkrét folyamatot szeretne automatizálni, a kész
                rendszereknél többre van szüksége, valós üzleti problémát akar
                megoldani — és partnert keres, nem csak szolgáltatót.
              </p>
            </div>
            <div className="cux__fit-col cux__fit-col--no">
              <div className="cux__fit-h"><span className="cux__fit-badge">✕</span>Nem Önnek való</div>
              <p className="cux__fit-txt">
                Ha terv nélkül, csak kíváncsiságból kísérletezne, ha nincs
                konkrét problémája, vagy ha azonnali gyors javítást vár, nem
                épített rendszert.
              </p>
            </div>
          </div>
        </div>

        {/* ATRIUM-EDIT EF6 — "Ahogy dolgozunk" */}
        <div className="cux__sec reveal">
          <h3 className="cux__sec-h"><span>Ahogy dolgozunk</span></h3>
          <div className="cux__guar">
            {HOWWEWORK.map((g, i) => (
              <div className="cux__g" key={i}>
                <span className="cux__g-node">
                  <svg className="cux__g-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5l8-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <h4 className="cux__g-t">{g.t}</h4>
                <p className="cux__g-d">{g.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ATRIUM-EDIT EF7 — CTA kept */}
        <div className="sec-cta reveal">
          <a href="#kapcsolat" className="btn btn--lg">Mondja el az ötletét</a>
        </div>
      </div>
    </section>
  );
}
