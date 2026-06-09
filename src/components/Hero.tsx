import ArrowRight from "./ArrowRight";

const TABS = [
  "Fogadja a hívást",
  "Lefoglalja az időpontot",
  "Visszahívja az elmaradtakat",
  "Utánköveti az érdeklődőt",
  "Kéri az értékelést",
  "Megmutatja, mi működik",
];

const STACK = [
  "Magyar nyelvű",
  "EU-ban hosztolt",
  "GDPR-konform",
  "Google Calendar",
  "Microsoft 365",
  "GoHighLevel",
];

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

        {/* ─── Capability tab strip ─── */}
        <div className="hero__tabs" role="list" aria-label="Mit csinál a rendszer">
          {TABS.map((t, i) => (
            <span className={"hero__tab" + (i === 0 ? " hero__tab--active" : "")} role="listitem" key={i}>
              {t}
            </span>
          ))}
        </div>

        {/* ─── Compatibility strip (the brand-safe "logo wall") ─── */}
        <div className="hero__trust">
          <span className="hero__trust-label">
            Illeszkedik a meglévő eszközeihez — nincs adatmigráció, nincs csapatképzés
          </span>
          <div className="hero__trust-row">
            {STACK.map((s, i) => (
              <span className="hero__trust-item" key={i}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
