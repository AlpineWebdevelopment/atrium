/* The offer ladder on the root (general) page — calm, not a conversion grid.
   Four rungs: Pilot, Modular, Teljes Rendszer (the focus), Egyedi.
   Per brand spec: no rate card — pricing framed as "az Ön számaiból".
   The Pilot is the one productized fixed-fee wedge; described generally,
   not the niche-specific (dental) configuration. One Signal-green moment:
   the focus card. */

type Rung = {
  rung: string;
  name: string;
  for: string;
  price: string;
  items: string[];
  focus?: boolean;
};

const RUNGS: Rung[] = [
  {
    rung: "Belépő",
    name: "Atrium Pilot",
    for: "Egy konkrét feladat, 30 napra — hogy lássa a számokat, mielőtt dönt.",
    price: "Fix díj · 30 nap",
    items: [
      "Egy kiválasztott funkció — például hívásfogadás vagy elmaradt időpontok visszahívása",
      "30 nap, hosszú távú szerződés nélkül",
      "A végén kézzelfogható számok, és tiszta döntés a folytatásról",
    ],
  },
  {
    rung: "Köztes",
    name: "Atrium Modular",
    for: "Több funkció, de még nem a teljes rendszer — az Ön igényeire szabva.",
    price: "Egyedi árazás",
    items: [
      "A hét funkcióból a megfelelők kiválogatva",
      "Az Ön folyamataira és méretére igazítva",
      "Ugyanazok a bevált funkciók, kisebb terjedelemben",
    ],
  },
  {
    rung: "A teljes rendszer",
    name: "Atrium Teljes Rendszer",
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
    rung: "Egyedi",
    name: "Egyedi munka",
    for: "Amikor a feladat kilóg a rendszerből, és új logikát kér.",
    price: "A munkához szabva",
    items: [
      "Az Ön egyedi folyamatára épített fejlesztés",
      "Nem kész elemekből — kifejezetten a feladatra tervezve",
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
            <article className={"lad__card" + (r.focus ? " lad__card--focus" : "")} key={i}>
              {r.focus ? (
                <span className="lad__badge">{r.rung}</span>
              ) : (
                <span className="lad__rung">{r.rung}</span>
              )}
              <h3 className="lad__name">{r.name}</h3>
              <p className="lad__for">{r.for}</p>
              <div className="lad__price">{r.price}</div>
              <ul className="lad__list">
                {r.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="lad__foot reveal" data-delay="2">
          <a href="#kapcsolat" className="btn btn--lg">Foglaljon időpontot</a>
          <span className="lad__note">
            Nincs rögzített árlista — az árat a beszélgetésen, az Ön számaiból
            számoljuk ki. Kötelezettség nélkül.
          </span>
        </div>
      </div>
    </section>
  );
}
