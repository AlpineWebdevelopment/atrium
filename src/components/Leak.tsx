export default function Leak() {
  return (
    <section className="section section--alt" id="leak" data-screen-label="02 A szivárgás">
      <div className="container">

        <div className="leak__intro">
          <h2 className="section__h">
            Minden szolgáltató cégnél szivárog a bevétel.{" "}
            <em>
              A 9 órás hívás, ami hangpostára megy. A FB-érdeklődő, akit
              három nap múlva hívnak.
            </em>
          </h2>
          <p className="section__lede">
            Nem véletlen, és nem hanyagság. A front-of-house munka ritmusa
            ütközik a vásárlói viselkedéssel — és a különbség pénzben mérhető.
            Az Atrium ezeket a pontokat fogja meg.
          </p>
        </div>

        <div className="leak__grid">
          <div className="leak__cell">
            <div className="leak__num">82<span className="unit">%</span></div>
            <div className="leak__label">
              A szolgáltató vállalkozások többsége nem fogadja a hívásait
              munkaidő után. Este 6 és reggel 8 között hangposta.
            </div>
            <div className="leak__source">Iparági becslés · KKV szegmens</div>
          </div>
          <div className="leak__cell">
            <div className="leak__num">3<span className="unit">&nbsp;nap</span></div>
            <div className="leak__label">
              Egy átlagos magyar szolgáltató cégnek ennyi időbe telik
              visszahívni egy beérkezett FB-űrlapot.
            </div>
            <div className="leak__source">Átlagos lead-response · 2025</div>
          </div>
          <div className="leak__cell">
            <div className="leak__num">60<span className="unit">&nbsp;nap</span></div>
            <div className="leak__label">
              A rendszer ennyi idő alatt szokta visszafizetni saját magát
              a megfogott bevételből. Utána a többi felüljáró.
            </div>
            <div className="leak__source">Munkahipotézis · az első 5–10 Pilot kalibrálja</div>
          </div>
        </div>

      </div>
    </section>
  );
}
