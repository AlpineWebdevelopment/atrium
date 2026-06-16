/* Hero — static brand tagline on the left; on the right a calm revenue chart:
   a flat "rendszer nélkül" line vs a rising "az Atriummal" line, the gap between
   them filled and labelled "visszaszerzett bevétel". Pictures the headline's
   promise — the revenue that was leaking, brought back. No hard numbers. */

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
              <a className="btn btn--ghost" href="#rendszer-teljes">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                A rendszerről
              </a>
            </div>
            <p className="hero__trust">
              Az Ön számaiból árazva · 30 perc · kötelezettség nélkül
            </p>
          </div>

          {/* Right — recovered-revenue chart */}
          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · havi bevétel</span>
            </div>
            <div className="canvas__stage canvas__stage--chart">
              <svg className="herochart" viewBox="0 0 520 340" preserveAspectRatio="xMidYMid meet" role="img" aria-label="A visszaszerzett bevétel">
                {/* baseline + 'ma' marker */}
                <line x1="44" y1="262" x2="486" y2="262" stroke="var(--line)" strokeWidth="1" />
                <line x1="44" y1="70" x2="44" y2="262" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 6" />

                {/* recovered-revenue band (gap between the two lines) */}
                <path d="M44 248 C 180 226, 320 150, 478 78 L 478 232 C 340 238, 180 244, 44 248 Z" fill="rgba(109,188,97,0.14)" />

                {/* without the system — flat */}
                <path d="M44 248 C 180 244, 340 238, 478 232" fill="none" stroke="var(--ink-35)" strokeWidth="1.6" strokeDasharray="5 5" />

                {/* with Atrium — rising */}
                <path className="herochart__rise" d="M44 248 C 180 226, 320 150, 478 78" fill="none" stroke="#34C759" strokeWidth="3" strokeLinecap="round" />

                {/* live end point */}
                <circle cx="478" cy="78" r="5" fill="#34C759" />
                <circle cx="478" cy="78" r="5" fill="none" stroke="#34C759" strokeWidth="2">
                  <animate attributeName="r" values="5;14" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
                </circle>

                {/* labels */}
                <text className="herochart__lbl herochart__lbl--sig" x="470" y="64" textAnchor="end">az Atriummal</text>
                <text className="herochart__lbl" x="470" y="224" textAnchor="end">rendszer nélkül</text>

                {/* recovered-revenue callout */}
                <g>
                  <rect x="150" y="150" width="170" height="28" rx="14" fill="var(--bone)" stroke="rgba(109,188,97,0.5)" />
                  <text className="herochart__cap" x="235" y="168" textAnchor="middle">visszaszerzett bevétel</text>
                </g>

                {/* axis hints */}
                <text className="herochart__ax" x="44" y="278" textAnchor="middle">ma</text>
                <text className="herochart__ax" x="486" y="278" textAnchor="end">idő →</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
