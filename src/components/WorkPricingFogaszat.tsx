/* ATRIUM-EDIT FG9/FG10 — dental pricing + base ROI framing.
   FG9: "A nagyobb pénz a meglévő bázisban van." — the hidden lever.
   FG10: value-based, no price shown, meeting-first motion.
   Honest limit: "nem minden elmaradt páciens hozható vissza" is intentionally on the page. */

const STEPS = [
  {
    n: "01",
    t: "Megbeszélés",
    d: "30 perces hívás — megnézzük az aktív páciensek számát, az egy páciensre jutó éves értéket, és hogy a bázisból hányan maradtak le a kontroll- és higiéniai rendről.",
  },
  {
    n: "02",
    t: "Diagnózis",
    d: "Összerakjuk, hol a legnagyobb szivárgás: a meg nem válaszolt hívások, vagy a lemorzsolódó bázis — és melyik hozza vissza a nagyobb bevételt.",
  },
  {
    n: "03",
    t: "Ajánlat az Ön számaiból",
    d: "Az árat az aktív páciensek számából, az egy páciensre jutó éves értékből és a lecsúszott páciensek becsült arányából számítjuk. Nincs rögzített árlista.",
  },
  {
    n: "04",
    t: "Elindítás",
    d: "Csatlakoztatjuk a meglévő naptárhoz és eszközökhöz. A csapatnak nem kell rendszert váltania — az Atrium a háttérben dolgozik.",
  },
];

export default function WorkPricingFogaszat() {
  return (
    <section className="wpr wpr--alt" id="hogyan-dolgozunk">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Befektetés és folyamat</span>
          {/* ATRIUM-EDIT FG10 — value-based heading */}
          <h2 className="dash__h">Az árat az Ön számaiból állítjuk össze.</h2>
          <p className="dash__p">
            Nincs rögzített árlista. Az aktív páciensek számából, az egy
            páciensre jutó éves értékből és a lecsúszott páciensek becsült
            arányából számítjuk ki, mennyit ér Önnek a rendszer. A megbeszélésen
            együtt nézzük meg a számokat.
          </p>
          {/* ATRIUM-EDIT FG9 — base is the money; honest limit included intentionally */}
          <p className="dash__p">
            <b>A nagyobb pénz a meglévő bázisban van.</b> Egy rendelő több ezer
            aktív pácienssel, ahol egy részük lecsúszott a rendről, olyan
            visszatérő bevételt szerez vissza, ami sokszorosa a rendszer árának —
            és ez a bevétel olyan páciensekből jön, akik már az Önéi. Legyünk
            őszinték: nem minden elmaradt páciens hozható vissza. Aki költség miatt
            maradt el, azt nem ígérjük. Amit visszahozunk, az az elsodródott rész
            — aki csak elfelejtette, vagy sosem kapott emlékeztetőt.
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
          Az első megbeszélés nem kötelezi Önt semmire. Ha nem látunk valós
          visszahozható bázist az Önök számaiból — azt is megmondjuk.
        </div>
      </div>
    </section>
  );
}
