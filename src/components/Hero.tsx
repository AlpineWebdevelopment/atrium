import ArrowRight from "./ArrowRight";

export default function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="container">

        <div className="hero__grid">
          {/* ─── Left: content ─── */}
          <div className="hero__content">
            <span className="hero__eyebrow">
              Értékesítési rendszerek szolgáltató cégeknek
            </span>
            <h1 className="hero__title">
              A bevétel, ami eddig elveszett.
            </h1>
            <p className="hero__sub">
              Az Atrium egy magyar nyelvű AI-alapú értékesítési rendszer —
              minden hívást fogad, minden időpontot lefoglal, minden
              érdeklődőt utánkövet. Az Ön csapatának nem kell új eszközt
              tanulnia.
            </p>
            <div className="hero__actions">
              <button className="btn">
                Foglaljon időpontot
                <ArrowRight />
              </button>
              <a className="btn btn--ghost" href="#system">A komponensekről</a>
            </div>
          </div>

          {/* ─── Right: live system UI mockup ─── */}
          <div className="hero__ui" aria-hidden="true">
            {/* Window bar */}
            <div className="hero__ui-bar">
              <span className="hero__ui-live">
                <span className="hero__ui-live-dot" />
                Élő rendszer
              </span>
              <span className="hero__ui-bar-date">2026 · márc. 15.</span>
            </div>

            {/* Activity feed */}
            <div className="hero__ui-feed">
              <div className="hero__ui-item">
                <div className="hero__ui-icon">↙</div>
                <div>
                  <div className="hero__ui-label">Bejövő hívás fogadva</div>
                  <div className="hero__ui-meta">+36 30 112 3456 · 09:42</div>
                </div>
                <span className="hero__ui-badge">Foglalás</span>
              </div>

              <div className="hero__ui-item">
                <div className="hero__ui-icon hero__ui-icon--ok">✓</div>
                <div>
                  <div className="hero__ui-label">Időpont lefoglalva</div>
                  <div className="hero__ui-meta">Kovács Anna · márc. 15. 10:30</div>
                </div>
                <span className="hero__ui-badge hero__ui-badge--ok">SMS ✓</span>
              </div>

              <div className="hero__ui-item">
                <div className="hero__ui-icon">↗</div>
                <div>
                  <div className="hero__ui-label">No-show visszahívva</div>
                  <div className="hero__ui-meta">Tóth Péter · megerősítette</div>
                </div>
                <span className="hero__ui-badge">Visszahozva</span>
              </div>

              <div className="hero__ui-item">
                <div className="hero__ui-icon hero__ui-icon--ok">★</div>
                <div>
                  <div className="hero__ui-label">5★ értékelés beérkezett</div>
                  <div className="hero__ui-meta">Nagy Éva · Google · 10:15</div>
                </div>
                <span className="hero__ui-badge hero__ui-badge--ok">Új</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="hero__ui-stats">
              <div className="hero__ui-stat">
                <div className="hero__ui-stat-num">412</div>
                <div className="hero__ui-stat-label">Hívás / hó</div>
              </div>
              <div className="hero__ui-stat">
                <div className="hero__ui-stat-num">87</div>
                <div className="hero__ui-stat-label">Új foglalás</div>
              </div>
              <div className="hero__ui-stat">
                <div className="hero__ui-stat-num">3,2M</div>
                <div className="hero__ui-stat-label">Ft visszahozva</div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Manifest strip ─── */}
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
