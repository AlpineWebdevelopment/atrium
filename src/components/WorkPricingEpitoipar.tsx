/* ATRIUM-EDIT KV8/KV9 — cégvezető construction pricing rebuild.
   KV9: value-based heading, built from their numbers, no list price.
   KV8: ROI framing around quote recovery (munkaérték), not call volume.
   4 process steps with title + description. */

const STEPS = [
  {
    n: "01",
    t: "Megbeszélés",
    d: "30 perces hívás — megnézzük, hány megkeresés jön be, milyen gyorsan válaszolnak rájuk, és hány árajánlat van most nyitva.",
  },
  {
    n: "02",
    t: "Diagnózis",
    d: "Összerakjuk, hol szivárog a legtöbb bevétel: fogadásnál, szűrésnél, irányításnál vagy az utánkövetésnél.",
  },
  {
    n: "03",
    t: "Ajánlat az Önök számaiból",
    d: "Nincs rögzített árlista. Az ajánlatot a beérkező megkeresések számából, a jellemző munkaértékből és az elvárt hatásból számítjuk.",
  },
  {
    n: "04",
    t: "Elindítás",
    d: "Csatlakoztatjuk a meglévő eszközeihez. A csapatnak nem kell rendszert váltania — az Atrium a háttérben dolgozik.",
  },
];

export default function WorkPricingEpitoipar() {
  return (
    <section className="wpr wpr--alt" id="hogyan-dolgozunk">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">árképzés</span> Befektetés és folyamat</span>
          {/* ATRIUM-EDIT KV9 — value-based heading */}
          <h2 className="dash__h">Az árat az Ön számaiból állítjuk össze.</h2>
          <p className="dash__p">
            Nincs rögzített árlista. A beérkező megkeresések számából, a jellemző
            munkaértékből és az elvárt hatásból számítjuk az ajánlatot — nem egy
            standard csomagból, hanem az Önök valóságából.
          </p>
          {/* ATRIUM-EDIT KV8 — ROI framing; no fabricated numbers */}
          <p className="dash__p">
            <b>A megtérülés az Önök munkaértékén a legnagyobb.</b> Néhány
            visszahozott árajánlat negyedévente — olyanok, amelyek eddig csendben
            elhaltak, mert senki nem követte utána — önmagában megtérítik a
            rendszer költségét. A válasz gyorsasága és a szűrés tovább szaporítja
            azt.
          </p>
        </div>
        <div className="wpr__grid reveal" data-delay="1">
          {STEPS.map((s, i) => (
            <div className="wpr__item" key={i}>
              <span className="wpr__n">{s.n}</span>
              <span className="wpr__t">
                <b>{s.t}</b>
                <br />
                {s.d}
              </span>
            </div>
          ))}
        </div>
        <div className="wpr__note reveal" data-delay="2">
          Az első megbeszélés nem kötelezi Önt semmire. Ha nem látunk valós hatást
          az Önök számaiból — azt is megmondjuk.
        </div>
      </div>
    </section>
  );
}
