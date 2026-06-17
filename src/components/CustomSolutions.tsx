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
    t: "AI érdeklődő-szerzés és minősítés",
    d: "Magától megtalálja a lehetséges ügyfeleket — LinkedInen, a weboldal látogatói és a meglévő adatbázisok alapján. Minősíti, csoportokba rendezi, és személyre szabott megkeresést indít. Ember nélkül.",
    who: "Ügynökségeknek és B2B-cégeknek",
    c: "#9662BC",
  },
  {
    ico: "search",
    t: "AI SEO-automatizálás",
    d: "Átnézi az ügyféloldalakat, megmutatja a hibákat, tartalmat javasol és rendbe teszi a meta-adatokat. A jelentés magától megy ki. Egy csapat 50 ügyfelet visz két ember helyett.",
    who: "Ügynökségeknek",
    c: "#628FBC",
  },
  {
    ico: "doc",
    t: "Dokumentum-kinyerő ügynök",
    d: "Több ezer dokumentum közül is másodpercek alatt megtalálja és kiemeli a kért adatot. Ott segít, ahol ma órákba telik a keresés.",
    who: "Jogi cégeknek, könyvelőknek, kórházaknak",
    c: "#62BCAC",
  },
  {
    ico: "globe",
    t: "Többnyelvű ügyfélszolgálati AI",
    d: "Tíznél több nyelven válaszol, és folyamatosan együtt mozog a belső rendszereivel. Rögzíti a megkeresést, megnézi a státuszt, kezeli a gyakori kérdéseket — magától.",
    who: "Multinacionális cégeknek",
    c: "#BCA162",
  },
  {
    ico: "send",
    t: "Kimenő értékesítési AI",
    d: "Hideghívásban és LinkedInen is személyre szabottan keresi meg a célpontokat. Figyeli a válaszokat, és csak az érett érdeklődőt adja tovább az értékesítőnek.",
    who: "B2B értékesítési csatorna építésére",
    c: "#6DBC61",
  },
];

/* mind-map: the projects + an open-ended node, fanning from one root */
const MAP_NODES = [
  ...PROJECTS,
  { ico: "plus" as IconKey, t: "Az Ön ötlete", d: "", who: "bármi, amit AI megold", c: "#6DBC61" },
];
/* Balanced two-sided radial map: the root sits in the centre and branches
   fan out symmetrically — three to the right, three to the left — so the
   graphic fills the section's width instead of floating in the middle. */
const MAP_W = 1200, MAP_H = 460;
const ROOT = { x: MAP_W / 2, y: MAP_H / 2, r: 46 };
const NODE_R = 19;
const COL_R = 902, COL_L = MAP_W - COL_R;
const ROWS_Y = [78, MAP_H / 2, MAP_H - 78];
const MAP_LAYOUT = MAP_NODES.map((n, i) => {
  const side = i < 3 ? "r" : "l";
  return { ...n, side, x: side === "r" ? COL_R : COL_L, y: ROWS_Y[i % 3] };
});

const CATEGORIES = [
  {
    h: "Értékesítés és marketing",
    c: "#9662BC",
    ico: "trend" as IconKey,
    items: [
      "Automatikus érdeklődő-gondozás",
      "Személyre szabott e-mail-kampányok",
      "Dinamikus ajánlat-generátor",
      "Ár-kalkulátor és ajánlatküldő",
      "Érdeklődő-kutatás és minősítés",
    ],
  },
  {
    h: "Ügyfélszolgálat és támogatás",
    c: "#628FBC",
    ico: "chat" as IconKey,
    items: [
      "Többnyelvű ügyfélszolgálat több csatornán",
      "Megkeresések irányítása és rangsorolása",
      "Tudásbázis-keresés és válaszadás",
      "Proaktív probléma-észlelés",
      "Automatikus eszkaláció",
    ],
  },
  {
    h: "Operációs automatizálás",
    c: "#62BCAC",
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
    c: "#BCA162",
    ico: "layers" as IconKey,
    items: [
      "Egészségügy — beteg-kommunikáció",
      "Jogi — szerződés-ellenőrzés és megfelelőség",
      "Pénzügy — csalásfelderítés és kockázatértékelés",
      "Webshop — dinamikus árazás és termékajánló",
      "HR — önéletrajz-szűrés és jelölt-előszűrés",
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
  "Gyors javítást keres, nem stratégiai fejlesztést",
];

const GUARANTEES = [
  {
    t: "Teljesítmény-garancia",
    d: "Ha a rendszer nem hozza a közösen kitűzött számokat, addig finomítjuk, amíg eléri — felár nélkül.",
  },
  {
    t: "Átláthatóság-garancia",
    d: "Kéthetente megmutatjuk, hol tartunk. A kódbázis nyitott, a dokumentáció részletes. Mindig látja, mire megy a pénze.",
  },
  {
    t: "Exit-garancia",
    d: "Ha három hónap után nem elégedett, átadjuk a teljes kódbázist és a dokumentációt. Onnan bárkivel folytathatja.",
  },
];

export default function CustomSolutions() {
  return (
    <section className="cux" id="egyedi">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Egyedi fejlesztés</span>
          <h2 className="dash__h">Amit a kész csomagok nem fednek le, azt megépítjük.</h2>
          <p className="dash__p">
            Néha a meglévő csomagok nem fedik le, amire Önnek szüksége van.
            Ilyenkor a saját folyamatára építünk AI-alapú rendszert — nem
            általánosságban, hanem egy konkrét üzleti problémára. Ön elmondja,
            hol akad el a működés; mi pontosan arra tervezzük és fejlesztjük meg.
          </p>
        </div>

        {/* The point: it starts from the operator's own idea, any scale */}
        <div className="cux__lead reveal" data-delay="1">
          <span className="cux__lead-kicker">Az Ön ötlete a kiindulópont</span>
          <p className="cux__lead-txt">
            Mondja el, mire van szüksége — a többit ránk bízhatja. Ön szabja meg
            a léptéket: lehet <b>egyetlen automatizálás</b>, néhány összekötött
            folyamat, vagy az egész cégét átfogó, testre szabott rendszer —{" "}
            <b>akár egy teljes ERP</b>.
          </p>
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
              <span className="cux__scale-lbl">Teljes rendszer · ERP</span>
            </div>
          </div>
        </div>

        {/* Example projects */}
        <div className="cux__sec reveal" data-delay="2">
          <h3 className="cux__sec-h"><span>Példa projektek</span></h3>
          {/* desktop: mind-map — centred root fanning out to both sides */}
          <svg className="cux__map" viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img" aria-label="Egyedi AI — példa projektek">
            <defs>
              {MAP_LAYOUT.map((n, i) => (
                <linearGradient key={i} id={`gmap${i}`} gradientUnits="userSpaceOnUse" x1={ROOT.x} y1={ROOT.y} x2={n.x} y2={n.y}>
                  <stop offset="0%" stopColor="rgba(1,14,30,0.16)" />
                  <stop offset="100%" stopColor={n.c} />
                </linearGradient>
              ))}
            </defs>
            {MAP_LAYOUT.map((n, i) => {
              const right = n.side === "r";
              const sx = ROOT.x + (right ? ROOT.r : -ROOT.r);
              const ex = n.x + (right ? -NODE_R : NODE_R);
              const c1x = ROOT.x + (right ? 150 : -150);
              const c2x = n.x + (right ? -150 : 150);
              return <path key={i} d={`M${sx},${ROOT.y} C ${c1x},${ROOT.y} ${c2x},${n.y} ${ex},${n.y}`} fill="none" stroke={`url(#gmap${i})`} strokeWidth="2" />;
            })}
            <circle cx={ROOT.x} cy={ROOT.y} r={ROOT.r} fill="var(--bone)" stroke="#6DBC61" strokeWidth="2" />
            <circle cx={ROOT.x} cy={ROOT.y} r={ROOT.r} fill="none" stroke="#6DBC61" strokeWidth="2">
              <animate attributeName="r" values={`${ROOT.r};${ROOT.r + 20}`} dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <text className="cux__map-root" x={ROOT.x} y={ROOT.y - 4} textAnchor="middle">Egyedi</text>
            <text className="cux__map-root" x={ROOT.x} y={ROOT.y + 14} textAnchor="middle">AI</text>
            {MAP_LAYOUT.map((n, i) => {
              const right = n.side === "r";
              const tx = n.x + (right ? 30 : -30);
              const anchor = right ? "start" : "end";
              return (
                <g key={i}>
                  <circle cx={n.x} cy={n.y} r={NODE_R} fill="var(--bone)" stroke={n.c} strokeWidth="2" />
                  <svg x={n.x - 11} y={n.y - 11} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={n.c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ color: n.c }}>
                    {ICON_PATHS[n.ico]}
                  </svg>
                  <text className="cux__map-t" x={tx} y={n.y - 2} textAnchor={anchor}>{n.t}</text>
                  <text className="cux__map-sub" x={tx} y={n.y + 15} fill={n.c} textAnchor={anchor}>{n.who}</text>
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

        <div className="sec-cta reveal">
          <a href="#kapcsolat" className="btn btn--lg">Mondja el az ötletét</a>
        </div>
      </div>
    </section>
  );
}
