/* Custom AI builds — concrete solutions for concrete business problems.
   Replaces the abstract trunk graph with the actual offering. */

const PROJECTS = [
  {
    t: "AI lead-generálás & minősítés",
    d: "Proaktívan keresi és minősíti a leadeket LinkedIn, weboldal-látogatók és adatbázisok alapján, majd személyre szabott kampányt indít — emberi beavatkozás nélkül.",
    who: "Ügynökségeknek & B2B",
    c: "#7C5CFF",
  },
  {
    t: "AI SEO-platform ügynökségeknek",
    d: "Elemzi a kliensoldalakat, feltárja a hibákat, tartalom- és meta-javaslatokat generál, automata riportot küld. 50 kliens 2 ember helyett.",
    who: "Ügynökségeknek",
    c: "#4AA3FF",
  },
  {
    t: "Dokumentum-kinyerő ügynök",
    d: "Nagy archívumokból másodpercek alatt megtalálja és kivonja a kért adatot — ahol ma órákba telik a keresés.",
    who: "Jogi cégeknek, könyvelőknek, kórházaknak",
    c: "#54CFC0",
  },
  {
    t: "Többnyelvű ügyfélszolgálati AI",
    d: "10+ nyelven, a belső rendszerekkel folyamatos szinkronban: ticket-nyitás, státusz-ellenőrzés, gyakori problémák — automatikusan.",
    who: "Multinacionális cégeknek",
    c: "#E8A33D",
  },
  {
    t: "Kimenő értékesítési AI",
    d: "Cold call és LinkedIn outreach: személyre szabott megkeresés, válaszkövetés, és csak az érett leadet adja át az értékesítőnek.",
    who: "B2B pipeline-építésre",
    c: "#6DBC61",
  },
];

const CATEGORIES = [
  {
    h: "Értékesítés & marketing",
    items: [
      "Lead-nurturing rendszerek",
      "Személyre szabott email-kampány AI",
      "Dinamikus ajánlat-generátor",
      "Prospect-research & minősítés",
    ],
  },
  {
    h: "Ügyfélszolgálat & támogatás",
    items: [
      "Többnyelvű support több csatornán",
      "Ticket-routing & prioritizálás",
      "Tudásbázis-keresés & válaszgenerálás",
      "Proaktív probléma-észlelés",
    ],
  },
  {
    h: "Operációs automatizálás",
    items: [
      "Dokumentum-feldolgozás & kategorizálás",
      "Adatkinyerés nagy adatbázisokból",
      "Automata jelentés-generálás",
      "Folyamat-monitorozás & anomália-észlelés",
    ],
  },
  {
    h: "Iparág-specifikus",
    items: [
      "Egészségügy — beteg-kommunikáció",
      "Jogi — contract review & compliance",
      "Pénzügy — fraud-detection & kockázat",
      "E-commerce — dinamikus árazás, HR — CV-screening",
    ],
  },
];

const FIT = [
  "Konkrét folyamatot akar automatizálni",
  "Elégedetlen az általános megoldásokkal",
  "Komoly üzleti problémát old meg AI-val",
  "Befektet, ha az ROI egyértelmű",
  "Partnert keres, nem csak szolgáltatót",
];

const NOFIT = [
  "Csak „kipróbálná” az AI-t minimális költséggel",
  "Nincs konkrét probléma, csak divatkövetés",
  "Türelmetlen, nem érti a fejlesztési folyamatot",
  "Gyors fixet keres, nem stratégiai megoldást",
];

const GUARANTEES = [
  {
    t: "Teljesítmény-garancia",
    d: "Ha az AI nem éri el a közösen kitűzött KPI-okat, extra költség nélkül optimalizálunk, amíg eléri.",
  },
  {
    t: "Átláthatóság-garancia",
    d: "Kétheti demók, nyílt kódbázis-hozzáférés, részletes dokumentáció. Mindig tudja, mire megy a pénze.",
  },
  {
    t: "Exit-garancia",
    d: "Ha 3 hónap után nem elégedett, átveszi a teljes kódbázist és dokumentációt, és bárkivel folytathatja.",
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
            Nem általános AI-ról és próbálgatásról beszélünk. Konkrét üzleti
            problémára tervezünk és fejlesztünk konkrét AI-megoldást — pontosan
            arra, amire szüksége van.
          </p>
        </div>

        {/* Showcase — example projects on the dark highlight panel */}
        <div className="cux__showcase reveal" data-delay="1">
          <span className="cux__kicker">Példa projektek</span>
          <div className="cux__projects">
            {PROJECTS.map((p, i) => (
              <div className="cux__proj" key={i} style={{ ["--pc" as string]: p.c } as React.CSSProperties}>
                <h3 className="cux__proj-t">{p.t}</h3>
                <p className="cux__proj-d">{p.d}</p>
                <span className="cux__proj-who">{p.who}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What we can build */}
        <div className="cux__block reveal">
          <h3 className="cux__block-h">Amit tudunk építeni</h3>
          <div className="cux__cats">
            {CATEGORIES.map((cat, i) => (
              <div className="cux__cat" key={i}>
                <h4 className="cux__cat-h">{cat.h}</h4>
                <ul>
                  {cat.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Who it's for / not for */}
        <div className="cux__fit reveal">
          <div className="cux__fit-col cux__fit-col--yes">
            <h3 className="cux__fit-h">Önnek való, ha…</h3>
            <ul>
              {FIT.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="cux__fit-col cux__fit-col--no">
            <h3 className="cux__fit-h">Nem Önnek való, ha…</h3>
            <ul>
              {NOFIT.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Guarantees */}
        <div className="cux__block reveal">
          <h3 className="cux__block-h">Garancia</h3>
          <div className="cux__guarantees">
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
