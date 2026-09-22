/* Bento grid under "Amit mi AI-nak hívunk." — packages, technology, value,
   dashboard. Four columns, two equal rows: the value card is the big 2×2
   tile on the left; package and technology share the top right; the
   dashboard runs under them. Every tile fills its cell (title at the top,
   checklist pinned to the bottom), so there is no dead space. No
   illustrations, no published prices, no unverifiable figures. */

type Tile = { area: string; k: string; t: string; d: string; items: string[] };

const TILES: Tile[] = [
  {
    area: "val",
    k: "Érték",
    t: "Egy dolga van: pénzt hozni.",
    d: "Nem képgenerálás, nem csevegőablak a weboldal sarkában. Az a dolga, hogy több megkeresésből legyen megrendelés.",
    items: ["Több ügyfél, több foglalás, több bevétel", "Megtérülés az Ön számaiból, nem ígéretből", "Mérhető növekedés, nem bemutató"],
  },
  {
    area: "pack",
    k: "Csomag",
    t: "Az Ön cégére szabva",
    d: "A folyamatához és a méretéhez igazítjuk, a pár fős csapattól a nagyvállalatig.",
    items: ["Saját CRM minden csomagban", "Díj a cég méretéhez igazítva", "Folyamatos támogatás"],
  },
  {
    area: "tech",
    k: "Technológia",
    t: "Minden csatorna, egy memória",
    d: "Telefon, SMS, WhatsApp, Messenger, Instagram, e-mail, webchat — ugyanaz a beszélgetés.",
    items: ["Semmit nem kell kétszer elmondani", "Megkeresi a régi ügyfeleket", "Valós idejű CRM-szinkron"],
  },
  {
    area: "dash",
    k: "Irányítópult",
    t: "Minden adat egy helyen",
    d: "Egy felületen látja az összes beszélgetést, ügyfelet és eredményt, valós időben.",
    items: ["Minden beszélgetés visszanézhető", "Élő mutatók és statisztikák", "Több AI-ügynök egy helyen, mobilon is"],
  },
];

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="dr-bento__ok"><path d="M5 13l4 4L19 7" /></svg>
);

export default function DirectFeatures() {
  return (
    <section className="dr-sec dr-bento-sec">
      <div className="dr-wrap">
        <div className="dr-bento">
          {TILES.map((it, i) => (
            <div className={`dr-bento__card dr-bento__card--${it.area} reveal`} data-delay={i + 1} key={it.area}>
              <div className="dr-bento__top">
                <span className="dr-bento__k">{it.k}</span>
                <h3 className="dr-bento__t">{it.t}</h3>
                <p className="dr-bento__p">{it.d}</p>
              </div>
              <ul className="dr-bento__list">
                {it.items.map((t) => (
                  <li key={t}><Check /><span>{t}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
