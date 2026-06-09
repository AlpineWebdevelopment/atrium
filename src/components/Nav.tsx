import ArrowRight from "./ArrowRight";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container">
        <div className="nav__inner">
          <a href="#" className="nav__brand" aria-label="Atrium">
            Atrium<span className="dot" aria-hidden="true" />
          </a>
          <nav className="nav__links" aria-label="primary">
            <a href="#system" className="nav__link">A rendszer</a>
            <a href="#fits" className="nav__link">Hogyan illeszkedik</a>
            <a href="#offer" className="nav__link">Csomagok</a>
            <a href="#faq" className="nav__link">GYIK</a>
            <a href="#contact" className="nav__link">Kapcsolat</a>
          </nav>
          <div className="nav__right">
            <ThemeToggle />
            <a href="#contact" className="nav__login">Bejelentkezés</a>
            <button className="nav__cta">
              Foglaljon időpontot
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
