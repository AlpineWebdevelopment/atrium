import ArrowRight from "./ArrowRight";

const TABS = [
  "Hívásfogadás",
  "Időpontfoglalás",
  "No-show visszahívás",
  "Lead-utánkövetés",
  "Értékelések",
  "Riportálás",
];

const TRUST = [
  "Google Calendar",
  "Microsoft 365",
  "GoHighLevel",
  "Make / Zapier",
  "VoIP / SIP",
  "EU Hosting",
];

/* small floating nodes around the canvas — pos in % */
const NODES = [
  { x: 22, y: 26, s: 34, t: "01", k: "" },
  { x: 74, y: 20, s: 30, t: "", k: "sig" },
  { x: 84, y: 52, s: 40, t: "★", k: "" },
  { x: 16, y: 60, s: 38, t: "", k: "ink" },
  { x: 32, y: 80, s: 30, t: "SMS", k: "" },
  { x: 70, y: 78, s: 34, t: "", k: "sig" },
];

export default function Hero() {
  return (
    <section className="hero" id="rendszer">
      <div className="wrap">
        <div className="hero__grid">
          {/* Left — copy */}
          <div className="hero__content reveal reveal--instant visible">
            <h1 className="hero__title">
              A bevétel,<br />ami eddig elveszett.
            </h1>
            <p className="hero__sub">
              Az Atrium egy magyar nyelvű AI-alapú értékesítési rendszer
              szolgáltató cégeknek — minden hívást fogad, minden időpontot
              lefoglal, minden érdeklődőt utánkövet.
            </p>
            <div className="hero__actions">
              <button className="btn">Foglaljon időpontot</button>
              <a className="btn btn--ghost" href="#komponensek">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                A rendszerről
              </a>
            </div>
          </div>

          {/* Right — canvas / network diagram */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · élő rendszer</span>
            </div>
            <div className="canvas__stage">
              <svg className="canvas__net" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="50" y1="50" x2="22" y2="26" />
                <line x1="50" y1="50" x2="74" y2="20" />
                <line x1="50" y1="50" x2="84" y2="52" />
                <line x1="50" y1="50" x2="16" y2="60" />
                <line x1="50" y1="50" x2="32" y2="80" />
                <line x1="50" y1="50" x2="70" y2="78" />
              </svg>

              {NODES.map((n, i) => (
                <span
                  key={i}
                  className={"node" + (n.k === "sig" ? " node--sig" : n.k === "ink" ? " node--ink" : "")}
                  style={{
                    left: `${n.x}%`, top: `${n.y}%`,
                    width: n.s, height: n.s,
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  {n.t}
                </span>
              ))}

              <div className="canvas__center">
                AI értékesítési rendszer <span className="sig">✦</span> magyarul
              </div>

              <div className="canvas__pill">
                <span className="sig" /> 412 hívás fogadva · 0 kihagyva
              </div>
            </div>
          </div>
        </div>

        {/* Tab strip */}
        <div className="tabs" role="list" aria-label="Mit csinál a rendszer">
          {TABS.map((t, i) => (
            <span className={"tab" + (i === 0 ? " tab--active" : "")} role="listitem" key={i}>{t}</span>
          ))}
        </div>

        {/* Trust bar */}
        <div className="trust">
          <span className="trust__label">
            Illeszkedik a meglévő eszközeihez — nincs adatmigráció, nincs csapatképzés
          </span>
          <div className="trust__row">
            {TRUST.map((t, i) => (
              <span className="trust__item" key={i}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
