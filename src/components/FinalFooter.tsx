import ArrowRight from "./ArrowRight";

export default function FinalFooter() {
  return (
    <section className="final" id="contact" data-screen-label="08 Kapcsolat">
      <div className="container">

        <div className="final__band">
          <h2 className="final__h">
            A bevétel, ami eddig elveszett.<br />
            <span className="signal">Visszafordítjuk.</span>
          </h2>
          <div className="final__side">
            <p>
              30 perces megbeszélés. A telefonját elővesszük, megnézzük honnan szivárog
              a bevétel, és megmondjuk, mit lehet vele kezdeni. Ha még nem áll össze a
              döntés, kap egy auditot a beszélgetés alapján.
            </p>
            <button className="btn">
              Foglaljon időpontot
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="final__honest">
          <span className="label">2026 · Új márka</span>
          <p>
            Új márka vagyunk, az első esettanulmányok 2026 folyamán érkeznek.
            Addig: nincs logófal, nincs „300 elégedett ügyfél". Helyette a saját
            számait nézzük meg a beszélgetésen, és onnan döntünk együtt.
          </p>
        </div>

        <div className="foot">
          <div className="foot__grid">
            <div>
              <span className="foot__brand">
                Atrium<span className="dot" aria-hidden="true" />
              </span>
              <div className="foot__tag">
                Értékesítési rendszerek, operátori szemmel.
              </div>
            </div>

            <div>
              <h4>A rendszer</h4>
              <ul>
                <li><a href="#system">Hét komponens</a></li>
                <li><a href="#fits">Hogyan illeszkedik</a></li>
                <li><a href="#report">Havi jelentés</a></li>
              </ul>
            </div>

            <div>
              <h4>Csomagok</h4>
              <ul>
                <li><a href="#offer">Ajánlat-létra</a></li>
                <li><a href="#defense">A márka védvonala</a></li>
              </ul>
            </div>

            <div>
              <h4>Kapcsolat</h4>
              <ul>
                <li><a href="mailto:hello@atriumscaling.com">hello@atriumscaling.com</a></li>
                <li><a href="#">+36 30 ___ ____</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Adatkezelés</a></li>
              </ul>
            </div>
          </div>

          <div className="foot__copy">
            <span>© 2026 Atrium · atriumscaling.com</span>
            <span>Adatkezelés · ÁSZF · GDPR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
