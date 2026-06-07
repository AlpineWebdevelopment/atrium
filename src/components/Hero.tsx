import ArrowRight from "./ArrowRight";

export default function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="container">
        <span className="hero__eyebrow">
          Értékesítési rendszerek szolgáltató cégeknek
        </span>
        <h1 className="hero__title">A bevétel, ami eddig elveszett.</h1>
        <p className="hero__sub">
          Az Atrium egy magyar nyelvű AI-alapú értékesítési rendszer — minden hívást fogad,
          minden időpontot lefoglal, minden érdeklődőt utánkövet. Az Ön csapatának nem
          kell új eszközt tanulnia.
        </p>
        <div className="hero__actions">
          <button className="btn">
            Foglaljon időpontot
            <ArrowRight />
          </button>
          <a className="btn btn--ghost" href="#system">A komponensekről</a>
        </div>

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
    </section>
  );
}
