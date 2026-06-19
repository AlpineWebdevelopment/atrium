/* ATRIUM-EDIT SS4 — fixed-package pricing section for the physio niche page.
   Replaces the shared value-based WorkPricing component.
   Reuses .wpr section + .wpr__grid / .wpr__item layout; no new colors. */

/* ATRIUM-EDIT NR4-physio — course-continuation descriptions replace call-answering framing */
const PACKAGES = [
  {
    n: "Próbahónap",
    sub: "30 nap, fix díj",
    d: "A folyamatkövető egy hónapra: figyeli, ki marad ki a kezelési sorból, és visszahívja a következő alkalomra. A hónap végén a saját számaival dönt.",
    p: "39 000 Ft · egyszeri",
  },
  {
    n: "Alap",
    sub: "havi fix díj",
    d: "A kezelési folyamatot megszakító páciensek visszahívása, időpontfoglalás a megfelelő terapeutához, és automatikus emlékeztető.",
    p: "49 000 Ft / hó",
  },
  {
    n: "Teljes rendelő",
    sub: "havi fix díj",
    d: "Minden, ami az Alapban — plusz a régen járt páciensek visszahívása, értékeléskérés, a lemondott időpontok újratöltése, és havi riport.",
    p: "99 000 Ft / hó",
  },
];

export default function WorkPricingPhysio() {
  return (
    <section className="wpr" id="hogyan-dolgozunk">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">gyógytornászoknak</span> Csomagok</span>
          <h2 className="dash__h">Fix csomagok, fix árak.</h2>
          <p className="dash__p">
            Nincs rejtett tétel és nincs alkudozás — az árat előre látja, és azt választja,
            ami a rendelőjének kell. Mi építjük, mi üzemeltetjük, és a meglévő naptárához kötjük.
          </p>
        </div>
        <div className="wpr__grid reveal" data-delay="1">
          {PACKAGES.map((pkg, i) => (
            <div className="wpr__item" key={i}>
              <span className="wpr__n">{pkg.n}</span>
              <span className="wpr__t">
                <em style={{ fontStyle: "normal", opacity: 0.6, fontSize: "0.85em" }}>{pkg.sub}</em>
                <br />
                {pkg.d}
              </span>
              <b className="wpr__t" style={{ marginTop: "0.5rem", display: "block" }}>{pkg.p}</b>
            </div>
          ))}
        </div>
        <p className="dash__p reveal" data-delay="2" style={{ marginTop: "1.5rem", textAlign: "center" }}>
          Mindegyik a meglévő naptárához kötve indul — a csapatának semmit nem kell lecserélnie.
        </p>
      </div>
    </section>
  );
}
