import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <div className="nav__in">
          <a href="#" className="nav__brand" aria-label="Atrium">
            Atrium<span className="dot" aria-hidden="true" />
          </a>
          <nav className="nav__links" aria-label="primary">
            <a href="#rendszer" className="nav__link">A rendszer</a>
            <a href="#indulas" className="nav__link">Hogyan indulunk</a>
            <a href="#komponensek" className="nav__link">Komponensek</a>
            <a href="#gyik" className="nav__link">GYIK</a>
            <a href="#kapcsolat" className="nav__link">Kapcsolat</a>
          </nav>
          <div className="nav__right">
            <ThemeToggle />
            <button className="btn nav__cta">Foglaljon időpontot</button>
          </div>
        </div>
      </div>
    </header>
  );
}
