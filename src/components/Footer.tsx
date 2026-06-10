export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <span className="footer__brand">
              Atrium<span className="dot" aria-hidden="true" />
            </span>
            <p className="footer__sub">
              Értékesítési rendszerek, operátori szemmel. atriumscaling.com
            </p>
          </div>

          <div>
            <h4>A rendszer</h4>
            <ul>
              <li><a href="#komponensek">Hét komponens</a></li>
              <li><a href="#illeszkedik">Hogyan illeszkedik</a></li>
              <li><a href="#komponensek">Havi jelentés</a></li>
              <li><a href="#gyik">GYIK</a></li>
            </ul>
          </div>

          <div>
            <h4>Csomagok</h4>
            <ul>
              <li><a href="#csomagok">Atrium Pilot</a></li>
              <li><a href="#csomagok">Teljes Rendszer</a></li>
              <li><a href="#csomagok">Atrium Modular</a></li>
              <li><a href="#kapcsolat">Egyedi munka</a></li>
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

        <div className="footer__bottom">
          <span>© 2026 Atrium · atriumscaling.com</span>
          <span>Adatkezelés · ÁSZF · GDPR</span>
        </div>
      </div>
    </footer>
  );
}
