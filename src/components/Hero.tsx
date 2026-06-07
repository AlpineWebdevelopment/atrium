import ArrowRight from "./ArrowRight";

const SYSTEM_ITEMS = [
  { num: "01", hu: "Fogadja a hívást." },
  { num: "02", hu: "Lefoglalja az időpontot." },
  { num: "03", hu: "Visszahívja az elmaradtakat." },
  { num: "04", hu: "Visszahozza a régieket." },
  { num: "05", hu: "Utánköveti az érdeklődőt." },
  { num: "06", hu: "Kéri az értékelést." },
  { num: "07", hu: "Megmutatja, mi működik." },
];

export default function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">

      {/* Two-column grid */}
      <div className="container">
        <div className="hero__grid">

          {/* Left — main content */}
          <div className="hero__main">
            <span className="hero__eyebrow">
              Értékesítési rendszerek szolgáltató cégeknek
            </span>
            <h1 className="hero__title">A bevétel, ami eddig elveszett.</h1>
            <p className="hero__sub">
              Az Atrium egy magyar nyelvű AI-alapú értékesítési rendszer — minden
              hívást fogad, minden időpontot lefoglal, minden érdeklődőt utánkövet.
              Az Ön csapatának nem kell új eszközt tanulnia.
            </p>
            <div className="hero__actions">
              <button className="btn">
                Foglaljon időpontot
                <ArrowRight />
              </button>
              <a className="btn btn--ghost" href="#system">A komponensekről</a>
            </div>
          </div>

          {/* Right — ink panel: system at a glance */}
          <div className="hero__aside">
            <div className="hero__aside-label">A rendszer · 7 komponens</div>
            <div className="hero__aside-list">
              {SYSTEM_ITEMS.map((item) => (
                <div key={item.num} className="hero__aside-row">
                  <span className="hero__aside-num">{item.num}</span>
                  <span className="hero__aside-hu">{item.hu}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Full-width manifest strip */}
      <div className="hero__strip">
        <div className="container">
          <div className="hero__manifest" aria-label="A rendszer alapjai">
            <div>
              <span className="k">Nyelv</span>
              <span className="v">Magyar, formális Ön-megszólítás</span>
            </div>
            <div>
              <span className="k">Motor</span>
              <span className="v">AI-ügynökök, hangon és írásban</span>
            </div>
            <div>
              <span className="k">Integráció</span>
              <span className="v">Az Ön meglévő naptárába és CRM-jébe</span>
            </div>
            <div>
              <span className="k">Adatkezelés</span>
              <span className="v">EU-ban hosztolva, GDPR-konform</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
