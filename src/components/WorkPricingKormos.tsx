/* ATRIUM-EDIT NK4 — fixed-package pricing for the nail niche page.
   Duplicated from WorkPricingSalon; nail-specific descriptions applied. */

const PACKAGES = [
  {
    n: "Próbahónap",
    sub: "30 nap, fix díj",
    d: "Az alap rendszer egy hónapra: minden hívást felvesz, foglal a naptárba, és emlékeztetőt küld. A végén a saját számaival dönt.",
    p: "39 000 Ft · egyszeri",
  },
  {
    n: "Alap",
    sub: "havi fix díj",
    d: "Hívásfogadás munka közben és zárás után, foglalás a megfelelő körmöshöz, emlékeztető, és az elmaradt időpontok visszahívása.",
    p: "49 000 Ft / hó",
  },
  {
    n: "Teljes szalon",
    sub: "havi fix díj",
    d: "Minden, ami az Alapban — plusz a régi vendégek visszahívása, értékeléskérés, a lemondott időpontok újratöltése a várólistáról, és havi riport.",
    p: "99 000 Ft / hó",
  },
];

export default function WorkPricingKormos() {
  return (
    <section className="wpr" id="hogyan-dolgozunk">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">körmösöknek</span> Csomagok</span>
          <h2 className="dash__h">Fix csomagok, fix árak.</h2>
          <p className="dash__p">
            Nincs rejtett tétel és nincs alkudozás — az árat előre látja, és azt választja,
            ami a szalonjának kell. Mi építjük, mi üzemeltetjük, és a meglévő naptárához kötjük.
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
          Mindegyik a meglévő naptárához kötve indul — semmit nem kell lecserélnie.
        </p>
      </div>
    </section>
  );
}
