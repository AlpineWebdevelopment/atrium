/* ATRIUM-EDIT SZ6 — fixed packages for the beauty lane.
   Prices ON page (39 / 49 / 99 000 Ft — unconfirmed anchors; sign off before publishing).
   NO value-based / "az árat az Ön számaiból" language — that's the high-ticket lane.
   Reuses .wpr section + .wpr__grid / .wpr__item layout. */

const PACKAGES = [
  {
    n: "Próbahónap",
    sub: "30 nap, fix díj",
    d: "A foglalási asszisztens egy hónapra: válaszol az üzenetekre Messengeren és Instagramon, foglal, és emlékeztet. A hónap végén a saját tapasztalatával dönt.",
    p: "39 000 Ft · egyszeri",
  },
  {
    n: "Alap",
    sub: "havi fix díj",
    d: "Foglalás Messengeren, Instagramon és telefonon, automatikus emlékeztetővel és a lemondások feltöltésével várólistáról.",
    p: "49 000 Ft / hó",
  },
  {
    n: "Teljes",
    sub: "havi fix díj",
    d: "Minden, ami az Alapban — plusz az elmaradt vendégek visszahívása, a régiek visszahozása, értékeléskérés, és egy rövid havi kimutatás.",
    p: "99 000 Ft / hó",
  },
];

export default function WorkPricingSzepsegipar() {
  return (
    <section className="wpr wpr--alt" id="csomagok">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">csomagok</span> Fix árak</span>
          {/* ATRIUM-EDIT SZ6 */}
          <h2 className="dash__h">Fix csomagok, fix árak.</h2>
          <p className="dash__p">
            Az árat előre látja, és azt választja, ami a szalonjának kell. Mi
            építjük, mi üzemeltetjük, a meglévő naptárához kötve.
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
