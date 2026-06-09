const FEATS = [
  { t: "Minden hívás fogadva", c: "var(--viz-purple)", d: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 11.5 19.8 19.8 0 0 1 1.89 2.18 2 2 0 0 1 3.84 0h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> },
  { t: "Időpontfoglalás", c: "var(--viz-blue)", d: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></> },
  { t: "No-show visszahívás", c: "var(--viz-cyan)", d: <><polyline points="1 4 1 10 7 10" /><path d="M3.5 15a9 9 0 1 0 .5-4.95" /></> },
  { t: "Reaktiváció", c: "var(--viz-green)", d: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="23 11 20 8 17 11" /></> },
  { t: "Lead-utánkövetés", c: "var(--viz-purple-2)", d: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
  { t: "Értékelések", c: "var(--viz-amber)", d: <polygon points="12 2 15 9 22 9.3 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9.3 9 9 12 2" /> },
  { t: "Riportálás", c: "var(--viz-blue)", d: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></> },
  { t: "Magyar nyelvű", c: "var(--viz-purple)", d: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" /></> },
  { t: "EU hosting", c: "var(--viz-cyan)", d: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
  { t: "GDPR-konform", c: "var(--viz-green)", d: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></> },
];

const PINS = [
  { name: "Telefon", x: 50, y: 4 },
  { name: "SMS", x: 90, y: 36 },
  { name: "Facebook", x: 76, y: 84 },
  { name: "Google", x: 22, y: 82 },
  { name: "Web űrlap", x: 8, y: 40 },
];

export default function Packages() {
  return (
    <section className="pkg" id="komponensek">
      <div className="wrap">
        <div className="pkg__grid reveal">
          {/* Left — pricing card */}
          <div className="pkg__left">
            <div className="pkg__top">
              <div>
                <div className="pkg__label">Teljes Rendszer</div>
                <div className="pkg__label-sub">
                  A teljes hét-komponensű stack, az Ön üzletére konfigurálva. A díjat
                  az Ön számai alapján szabjuk.
                </div>
              </div>
              <div className="pkg__toggle">
                <span className="on">Havi</span>
                <span>Éves<b className="save">−20%</b></span>
              </div>
            </div>

            <div className="pkg__price">
              <span className="pkg__price-num">2,5–4M</span>
              <span className="pkg__price-for">Ft <b>/ setup</b> · 900k–1,5M Ft / hó</span>
            </div>

            <div className="pkg__slider" aria-hidden="true">
              <span className="pkg__handle" />
              <span className="pkg__track-dot lit" />
              <span className="pkg__track-dot lit" />
              <span className="pkg__track-dot" />
              <span className="pkg__track-dot" />
              <span className="pkg__track-dot" />
              <span className="pkg__track-dot" />
              <span className="pkg__track-dot" />
              <span className="pkg__track-dot" />
              <span className="pkg__track-dot" />
            </div>
            <div className="pkg__label-sub" style={{ maxWidth: "none" }}>1–3 lokációra méretezve</div>

            <div className="pkg__cta-row">
              <button className="pkg__cta">Foglaljon 30 perces megbeszélést</button>
              <span className="pkg__cta-note">Nincs kötelezettség, nincs sürgetés.</span>
            </div>

            <div className="pkg__feats">
              {FEATS.map((f, i) => (
                <div className="pkg__feat" key={i}>
                  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke={f.c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{f.d}</svg>
                  {f.t}
                </div>
              ))}
            </div>
          </div>

          {/* Right — coverage */}
          <div className="pkg__right">
            <div className="pkg__cov-label">Szimulált lefedettség · <b>24/7</b></div>
            <div className="pkg__cov-num">1</div>
            <div className="pkg__cov-unit">hívás / perc is kezelhető</div>

            <div className="pkg__rings">
              <span className="pkg__ring r1" />
              <span className="pkg__ring r2" />
              <span className="pkg__ring r3" />
              {PINS.map((p, i) => (
                <span className="pkg__pin" key={i} style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                  <span className="pkg__pin-dot" />
                  {p.name}
                </span>
              ))}
            </div>

            <div className="pkg__cov-foot">
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" /></svg>
              5 csatorna · egy rendszer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
