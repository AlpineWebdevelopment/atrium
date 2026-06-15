/* The offer ladder on the root (general) page. Four rungs as equal-height
   cards, each with its own accent; the Full System is the highlighted focus.
   Per brand spec: no rate card — pricing framed as "az Ön számaiból". The
   Pilot is the productized fixed-fee wedge, described generally (not the
   niche-specific dental config). Single CTA everywhere: "Foglaljon időpontot". */

const ICONS: Record<string, React.ReactNode> = {
  flag: <g><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></g>,
  layers: <g><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></g>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  spark: <g><path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" /><path d="M19 14l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z" /></g>,
};

type Rung = {
  rung: string; name: string; for: string; price: string; acc: string; ico: string;
  items: string[]; focus?: boolean;
};

const RUNGS: Rung[] = [
  {
    rung: "Belépő", name: "Atrium Pilot", acc: "#4AA3FF", ico: "flag",
    for: "Egy konkrét feladat, 30 napra — hogy lássa a számokat, mielőtt dönt.",
    price: "Fix díj · 30 nap",
    items: [
      "Egy kiválasztott funkció — pl. hívásfogadás vagy elmaradt időpontok visszahívása",
      "30 nap, hosszú távú szerződés nélkül",
      "A végén kézzelfogható számok, tiszta döntés",
    ],
  },
  {
    rung: "Köztes", name: "Atrium Modular", acc: "#7C5CFF", ico: "layers",
    for: "Több funkció, de még nem a teljes rendszer — az Ön igényeire szabva.",
    price: "Egyedi árazás",
    items: [
      "A hét funkcióból a megfelelők kiválogatva",
      "Az Ön folyamataira és méretére igazítva",
      "Ugyanazok a bevált funkciók, kisebb terjedelemben",
    ],
  },
  {
    rung: "Leggyakoribb", name: "Atrium Teljes Rendszer", acc: "#34C759", ico: "star",
    for: "Mind a hét funkció, egyetlen összehangolt rendszerben.",
    price: "Az Ön számaiból",
    items: [
      "Hívásfogadás, foglalás, utánkövetés, visszahívás, reaktiválás, értékelés, riport",
      "A meglévő naptárához és eszközeihez kötve",
      "Havi riport és folyamatos felügyelet",
    ],
    focus: true,
  },
  {
    rung: "Egyedi", name: "Egyedi munka", acc: "#E8A33D", ico: "spark",
    for: "Amikor a feladat kilóg a rendszerből, és új logikát kér.",
    price: "A munkához szabva",
    items: [
      "Az Ön egyedi folyamatára épített fejlesztés",
      "Nem kész elemekből — a feladatra tervezve",
      "Az árat a munka terjedelme határozza meg",
    ],
  },
];

export default function Packages() {
  return (
    <section className="lad" id="csomagok">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Az ajánlat</span>
          <h2 className="dash__h">Onnan indul, ahol most tart.</h2>
          <p className="dash__p">
            A 30 napos belépőtől a teljes rendszerig. Az árat mindig az Ön
            számaiból számoljuk — egy általános árlista úgyis félrevinné.
          </p>
        </div>

        <div className="lad__grid reveal" data-delay="1">
          {RUNGS.map((r, i) => (
            <article
              className={"lad__card" + (r.focus ? " lad__card--focus" : "")}
              key={i}
            >
              {r.focus && <span className="lad__ribbon">{r.rung}</span>}
              <span className="lad__ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[r.ico]}
                </svg>
              </span>
              {!r.focus && <span className="lad__rung">{r.rung}</span>}
              <h3 className="lad__name">{r.name}</h3>
              <p className="lad__for">{r.for}</p>
              <div className="lad__price">{r.price}</div>
              <ul className="lad__list">
                {r.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
              <a href="#kapcsolat" className="lad__cta">Foglaljon időpontot</a>
            </article>
          ))}
        </div>

        <p className="lad__note reveal" data-delay="2">
          Nincs rögzített árlista — az árat a beszélgetésen, az Ön számaiból
          számoljuk ki. Kötelezettség nélkül.
        </p>
      </div>
    </section>
  );
}
