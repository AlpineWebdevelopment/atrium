/* ÚJ — how we work + pricing logic. Gives a clear engagement/pricing signal
   without printing a rate card (value-based, per brand spec). */

const STEPS = [
  { n: "01", t: "Először az Ön számait nézzük meg — hol szivárog a bevétel, és mennyit ér egy ügyfél." },
  { n: "02", t: "Az árat ezekből a számokból szabjuk. Nincs rögzített árlista — egy általános ár úgyis félrevinné." },
  { n: "03", t: "Mi építjük, mi üzemeltetjük, és havonta megmutatjuk, mit hozott. Az eszközeit nem kell lecserélnie." },
  { n: "04", t: "Indulhat egy 30 napos, fix díjas belépővel is — előbb a számok, aztán a döntés." },
];

export default function WorkPricing() {
  return (
    <section className="wpr" id="hogyan-dolgozunk">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">új</span> Hogyan dolgozunk</span>
          <h2 className="dash__h">Beszélgetés, nem prezentáció.</h2>
          <p className="dash__p">
            Nem kész terméket árulunk, hanem az Ön működésére építünk — és az árat
            is az Ön számaiból számoljuk ki.
          </p>
        </div>
        <div className="wpr__grid reveal" data-delay="1">
          {STEPS.map((s, i) => (
            <div className="wpr__item" key={i}>
              <span className="wpr__n">{s.n}</span>
              <span className="wpr__t">{s.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
