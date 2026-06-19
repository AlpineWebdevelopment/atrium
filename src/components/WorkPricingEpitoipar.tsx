/* ATRIUM-EDIT KV7/KV8 — value-based pricing for construction.
   No price shown. ROI framing (KV7) included as a highlighted closing paragraph.
   KV-C2: QualifierCrm (cost-bar) excluded from the construction page entirely. */

const STEPS = [
  { n: "01", t: "Megnézzük a hívásait, az elmaradt érdeklődőit és a kiküldött árajánlatait — és kiszámoljuk, mennyibe kerül ma egy elszalasztott munka." },
  { n: "02", t: "Az árat ebből a számból szabjuk: a hívásaiból, az átlagos munkaértékből és az elmaradt érdeklődőkből. Nincs rögzített árlista — egy általános ár úgyis félrevinné." },
  { n: "03", t: "Mi építjük és üzemeltetjük — a meglévő naptárához és eszközeihez kötve. A csapatának semmit nem kell lecserélnie." },
  { n: "04", t: "Havonta megmutatjuk, mit hozott a rendszer: hány hívás futott be, hány felmérés lett belőle, és mennyi bevételt fogott meg." },
];

export default function WorkPricingEpitoipar() {
  return (
    <section className="wpr" id="hogyan-dolgozunk">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">árképzés</span> Hogyan dolgozunk</span>
          {/* ATRIUM-EDIT KV8 — value-based heading for construction */}
          <h2 className="dash__h">Az árat az Ön számaiból állítjuk össze.</h2>
          <p className="dash__p">
            Nincs rögzített árlista — egy általános ár úgyis félrevinné. A
            hívásaiból, az átlagos munkaértékből és az elmaradt érdeklődőkből
            számoljuk ki, mennyit ér Önnek a rendszer. A megbeszélésen együtt
            nézzük meg a számokat.
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
        {/* ATRIUM-EDIT KV7 — ROI framing; no fabricated figures */}
        <p className="dash__p reveal" data-delay="2" style={{ marginTop: "1.5rem", textAlign: "center" }}>
          Egy építőipari munka több százezertől több millió forintig ér. Ha a
          rendszer havonta egyetlen elszalasztott munkát visszahoz, már
          sokszorosan megtérült. Nem ígérünk százalékokat — a saját számaival
          együtt nézzük meg, mennyit hoz vissza.
        </p>
      </div>
    </section>
  );
}
