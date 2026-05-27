const BARS = [
  { lbl: "Munkaidő utáni hívás", w: "73%", num: 73 },
  { lbl: "No-show visszahívás",  w: "42%", num: 22 },
  { lbl: "Régi ügyfél vissza",   w: "28%", num: 11 },
  { lbl: "FB-lead → foglalás",   w: "58%", num: 31 },
  { lbl: "Új Google értékelés",  w: "18%", num: 7  },
];

export default function ReportPreview() {
  return (
    <section className="section" id="report" data-screen-label="05 Havi jelentés">
      <div className="container">
        <div className="report">
          <div className="report__copy">
            <p className="eyebrow">A hetedik komponens</p>
            <h2 className="section__h">
              Egy oldal a hónap végén. Számokban, amik mögött a saját számai állnak.
            </h2>
            <p>
              A jelentés nem műszerfal, amit Önnek kell megnyitnia. Havonta egyszer
              eljut Önhöz — emailben, PDF-ben, vagy konzultáción személyesen. Annyit
              tartalmaz, amennyit egy reggeli kávé alatt át lehet futni.
            </p>
            <div className="meta">
              Példa-jelentés · valós kliensszámok 2026-tól
            </div>
          </div>

          <div className="report__card" aria-label="Példa havi jelentés">
            <div className="report__head">
              <span className="t">Havi értesítő · Szolgáltató vállalkozás (példa)</span>
              <span className="d">2026 · Március</span>
            </div>
            <div className="report__body">
              <div className="report__kpis">
                <div className="report__kpi">
                  <div className="l">Fogadott hívás</div>
                  <div className="v">412</div>
                </div>
                <div className="report__kpi">
                  <div className="l">Új foglalás</div>
                  <div className="v">87</div>
                </div>
                <div className="report__kpi">
                  <div className="l">Megfogott bevétel</div>
                  <div className="v">3 240 000<small>Ft</small></div>
                </div>
              </div>

              <div className="report__bars" aria-label="Forrás-bontás">
                {BARS.map((bar, i) => (
                  <div className="report__bar" key={i}>
                    <span className="lbl">{bar.lbl}</span>
                    <span className="track">
                      <span className="fill" style={{ "--w": bar.w } as React.CSSProperties} />
                    </span>
                    <span className="num">{bar.num}</span>
                  </div>
                ))}
              </div>

              <div className="report__row">
                <span className="l">Rendszer közvetlen haszna · március</span>
                <span className="v">+ 2 340 000 Ft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
