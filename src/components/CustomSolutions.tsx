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
const MAP_W = 1000, MAP_H = 470;
const ROOT = { x: 142, y: MAP_H / 2, r: 48 };
const NODE_X = 500;
const nodeY = (i: number) => 46 + i * ((MAP_H - 92) / (MAP_NODES.length - 1));

/* ATRIUM-EDIT — taxonomy regrouped into bespoke, outside-the-core categories
   (no industry menu, no overlap with the standard system). */
const CATEGORIES = [
  {
    h: "Adminisztráció és papírmunka",
    c: "#9662BC",
    ico: "doc" as IconKey,
    items: [
      "A számlákból és bizonylatokból kiszedi és táblázatba rendezi az adatokat",
      "A beérkező űrlapokat és e-maileket egy helyre gyűjti",
      "A papíron lévő adatokat kereshető formába viszi",
      "A visszatérő heti és havi adminisztrációt elvégzi",
      "Az ismétlődő dokumentumokat magától kitölti",
    ],
  },
  {
    h: "Belső információ és keresés",
    c: "#628FBC",
    ico: "search" as IconKey,
    items: [
      "A céges dokumentumokban másodpercek alatt megtalálja a választ",
      "A csapat ismétlődő kérdéseire a cég saját anyagaiból felel",
      "A hosszú dokumentumokból kiemeli a lényeget",
      "Az értekezletekből összefoglalót és teendőlistát készít",
      "Az új belépőt végigvezeti a fontos tudnivalókon",
    ],
  },
  {
    h: "Ügyfélszolgálat és támogatás",
    c: "#62BCAC",
    ico: "chat" as IconKey,
    items: [
      "A gyakori kérdésekre azonnal, a cég saját anyagaiból válaszol",
      "A beérkező megkereséseket témakör szerint rendezi és továbbítja",
      "Előkészíti a válaszokat a visszatérő ügyfélkérdésekre",
      "A panaszokból kiemeli a lényeget, és jelzi, mi sürgős",
      "Több nyelven is válaszol, ha külföldi ügyfél ír",
    ],
  },
  {
    h: "Adat és rendszerek",
    c: "#BCA162",
    ico: "refresh" as IconKey,
    items: [
      "Két rendszer vagy táblázat között átviszi az adatot",
      "Szinkronban tartja a külön kezelt adatokat",
      "Kiszűri a duplikátumokat és a hibás sorokat",
      "Egy helyre gyűjti a szétszórt adatokat",
      "Jelez, ha egy fontos szám eltér a megszokottól",
    ],
  },
];

const FIT = [
  "Egy feladatot ma emberek csinálnak kézzel, újra meg újra",
  "A piacon kapható eszközök nem tudják azt, amire szüksége van",
  "Számít a megbízhatóság — nem elég, hogy „valahogy működjön”",
  "Kész befektetni egy tartós eredménybe",
  "Szeretne részt venni a fejlesztésben, nem csak átvenni egy kész dobozt",
];

const NOFIT = [
  "A legolcsóbb lehetőséget keresi, nem a jól működőt",
  "Még nincs konkrét probléma, csak az AI érdekli önmagában",
  "Kész terméket vár holnapra, fejlesztési idő nélkül",
  "Nem akar időt szánni rá, hogy közösen pontosítsuk a feladatot",
];

const GUARANTEES = [
  {
    t: "Fix ár, működő eredmény",
    d: "A fejlesztést fix áron és egy közösen meghatározott, működő eredményre vállaljuk. Ha a megbeszélt működéshez több körre van szükség, az a mi dolgunk — nem kerül többe.",
  },
  {
    t: "Folyamatos rálátás",
    d: "Nem egy fekete doboz épül. Rendszeresen megmutatjuk, hol tartunk, és bármikor kérdezhet. A kész rendszert részletes dokumentációval adjuk át.",
  },
  {
    t: "Az Öné marad",
    d: "Amit megépítünk, az az Öné. A kész rendszert és a teljes dokumentációt átadjuk, így a működése soha nem függ kizárólag tőlünk.",
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
