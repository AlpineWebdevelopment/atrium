/* Custom AI builds — detailed, light, engaging.
   Example projects, capability categories, fit, and guarantees.
   Copy paraphrased to avoid banned vocab (megoldás, AI ügynökség, …). */

type IconKey = "target" | "search" | "doc" | "globe" | "send";

function Icon({ k }: { k: IconKey }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (k) {
    case "target":
      return (<svg {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.6" fill="currentColor" /></svg>);
    case "search":
      return (<svg {...common}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /><path d="M8 11h6M11 8v6" /></svg>);
    case "doc":
      return (<svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h6M8 17h4" /></svg>);
    case "globe":
      return (<svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></svg>);
    case "send":
      return (<svg {...common}><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4z" /></svg>);
  }
}

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

const CATEGORIES = [
  {
    h: "Értékesítés & marketing",
    c: "#7C5CFF",
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
          <div className="cux__projects">
            {PROJECTS.map((p, i) => (
              <div className="cux__proj" key={i} style={{ ["--pc" as string]: p.c } as React.CSSProperties}>
                <span className="cux__proj-ico"><Icon k={p.ico} /></span>
                <h4 className="cux__proj-t">{p.t}</h4>
                <p className="cux__proj-d">{p.d}</p>
                <span className="cux__proj-who">{p.who}</span>
              </div>
            ))}
            <div className="cux__proj cux__proj--more">
              <span className="cux__proj-plus">+</span>
              <h4 className="cux__proj-t">Az Ön ötlete</h4>
              <p className="cux__proj-d">
                Bármilyen folyamat, amit AI-val meg lehet építeni — egyetlen
                automatizálástól az egész működését átfogó rendszerig.
              </p>
            </div>
          </div>
        </div>

        {/* What we can build */}
        <div className="cux__sec reveal">
          <h3 className="cux__sec-h"><span>Amit tudunk építeni</span></h3>
          <div className="cux__cats">
            {CATEGORIES.map((cat, i) => (
              <div className="cux__cat" key={i} style={{ ["--pc" as string]: cat.c } as React.CSSProperties}>
                <h4 className="cux__cat-h"><span className="cux__cat-dot" />{cat.h}</h4>
                <ul>
                  {cat.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Fit / not fit */}
        <div className="cux__fit reveal">
          <div className="cux__fit-col cux__fit-col--yes">
            <h3 className="cux__fit-h">Önnek való, ha…</h3>
            <ul>
              {FIT.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </div>
          <div className="cux__fit-col cux__fit-col--no">
            <h3 className="cux__fit-h">Nem Önnek való, ha…</h3>
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
