import ArrowRight from "./ArrowRight";

const STATS = [
  { num: "412", lbl: "fogadott hívás egy hónapban" },
  { num: "87", lbl: "új foglalás a naptárba" },
  { num: "3,2M", lbl: "Ft visszahozott bevétel" },
  { num: "0", lbl: "kihagyott hívás" },
];

const SCENE = [
  { k: "Munkaidő utáni hívás", v: "73", sig: false },
  { k: "FB-lead → foglalás", v: "31", sig: false },
  { k: "No-show visszahívva", v: "22", sig: true },
  { k: "Új Google értékelés", v: "7", sig: false },
];

export default function Showcase() {
  return (
    <section className="show" id="komponensek">
      <div className="wrap">
        <div className="show__head reveal">
          <h2 className="show__h">
            Hét komponens.<br />Egy integrált rendszer.
          </h2>
          <p className="show__p">
            A Teljes Rendszer mindig mind a hét komponenst tartalmazza, az Ön
            üzletére konfigurálva: recepció, foglalás, no-show visszahívás,
            reaktiváció, utánkövetés, értékelések és riportálás. Egyetlen
            vásárlás, egy integráció.
          </p>
        </div>

        <div className="show__grid reveal" data-delay="1">
          {/* Big slide card */}
          <div className="slide">
            <div className="slide__title">Egy nap az Atriummal.</div>
            <div className="slide__stats">
              {STATS.map((s, i) => (
                <div key={i}>
                  <div className="slide__stat-num">{s.num}</div>
                  <div className="slide__stat-lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Side scene */}
          <div className="show__scene">
            <div className="sa__scene-grid" />
            <div className="show__scene-card">
              {SCENE.map((r, i) => (
                <div className="show__scene-row" key={i}>
                  <span className="show__scene-k">{r.k}</span>
                  <span className={"show__scene-v" + (r.sig ? " sig" : "")}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="show__foot reveal" data-delay="2">
          <div className="show__foot-l">
            <strong>A rendszer</strong>
            <span>Recepció, foglalás, utánkövetés és riportálás — niche-re hangolva.</span>
          </div>
          <div className="show__arrows">
            <button className="show__arrow" aria-label="Előző">
              <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 19l-7-7 7-7" /></svg>
            </button>
            <button className="show__arrow" aria-label="Következő"><ArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
