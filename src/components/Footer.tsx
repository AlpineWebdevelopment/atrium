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
              Magyar nyelvű, AI-alapú értékesítési rendszer — minden hívás
              fogadva, minden időpont a naptárban.
            </p>
<a href="/#kapcsolat" className="btn footer__cta">Foglaljon időpontot</a>
          </div>

          <div>
            <h4>A rendszer</h4>
            <ul>
              <li><a href="/#rendszer-teljes">A teljes rendszer</a></li>
              <li><a href="/#crm">AI kvalifikáló CRM</a></li>
              <li><a href="/#egyedi">Egyedi rendszerek</a></li>
              <li><a href="/#indulas">Hogyan indulunk</a></li>
            </ul>
          </div>

          <div>
            <h4>Információ</h4>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/#gyik">GYIK</a></li>
              <li><a href="/#kapcsolat">Kapcsolat</a></li>
              <li><a href="#">Adatkezelés</a></li>
              <li><a href="#">ÁSZF</a></li>
            </ul>
          </div>

          <div>
            <h4>Kapcsolat</h4>
            <ul>
              <li><a href="mailto:hello@atriumscaling.com">hello@atriumscaling.com</a></li>
              <li><a href="/#kapcsolat">Időpontfoglalás</a></li>
              <li><a href="#">LinkedIn</a></li>
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
