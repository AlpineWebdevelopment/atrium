export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand-col">
            <a href="#rendszer" className="footer__brand" aria-label="Atrium — az oldal tetejére">
              Atrium<span className="dot" aria-hidden="true" />
            </a>
            <p className="footer__sub">
              Magyar nyelvű AI értékesítési rendszer — minden hívás fogadva, minden időpont a naptárban, minden érdeklődő utánkövetve.
            </p>
            <a href="#kapcsolat" className="btn footer__cta">Foglaljon időpontot</a>
          </div>

          <div className="footer__links">
            <div>
              <h4>A rendszer</h4>
              <ul>
                <li><a href="#rendszer-teljes">A teljes rendszer</a></li>
                <li><a href="#egyedi">Egyedi fejlesztés</a></li>
                <li><a href="#hogyan-dolgozunk">Hogyan dolgozunk</a></li>
                <li><a href="#pelda">Példa Projektek</a></li>
              </ul>
            </div>
            <div>
              <h4>Információ</h4>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="#gyik">GYIK</a></li>
                <li><a href="/karrier">Karrier</a></li>
                <li><a href="#kapcsolat">Kapcsolat</a></li>
              </ul>
            </div>
            <div>
              <h4>Iparágak</h4>
              <ul>
                <li><a href="/fogaszat">Fogászat</a></li>
                <li><a href="/allatorvos">Állatorvos</a></li>
                <li><a href="/fizioterapia">Fizioterápia</a></li>
                <li><a href="/szepsegipar">Szépségipar</a></li>
                <li><a href="/epitoipar">Építőipar</a></li>
                <li><a href="/klima">Klíma</a></li>
                <li><a href="/napelem">Napelem</a></li>
                <li><a href="/gyors-lead-valasz">Gyors lead-válasz</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li><a href="/adatvedelem">Adatvédelmi tájékoztató</a></li>
                <li><a href="/aszf">ÁSZF</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Atrium · atriumscaling.com</span>
        </div>
      </div>
    </footer>
  );
}
