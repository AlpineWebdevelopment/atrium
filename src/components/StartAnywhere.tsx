import ArrowRight from "./ArrowRight";

const FEATURES = [
  "Fogadja a hívást",
  "Lefoglalja az időpontot",
  "Utánköveti az érdeklődőt",
  "Megmutatja, mi működik",
];

export default function StartAnywhere() {
  return (
    <section className="sa">
      <div className="wrap">
        <div className="sa__panel reveal">
          {/* Scene with floating card */}
          <div className="sa__scene">
            <div className="sa__scene-grid" />
            <div className="sa__float">
              <div className="sa__float-q">
                „Jó napot, szeretnék időpontot foglalni jövő hétre…”
              </div>
              <div className="sa__float-row">
                <div className="sa__doc">
                  <span className="sa__doc-name">Hívás · 09:42</span>
                  <span className="sa__doc-line" />
                  <span className="sa__doc-line short" />
                </div>
                <div className="sa__doc">
                  <span className="sa__doc-name">Naptár</span>
                  <span className="sa__doc-line" />
                  <span className="sa__doc-line short" />
                </div>
              </div>
              <div className="sa__float-foot">
                <span className="ai">→ Időpont lefoglalva · SMS elküldve</span>
                <span className="sa__float-go"><ArrowRight /></span>
              </div>
            </div>
          </div>

          {/* Feature list */}
          <div className="sa__list">
            {FEATURES.map((f, i) => (
              <div className={"sa__feat" + (i === 0 ? " sa__feat--active" : "")} key={i}>
                {f}
              </div>
            ))}
            <p className="sa__note">
              Minden hívás, minden űrlap, minden elmaradt időpont — egyetlen
              rendszerbe fogva, magyar nyelven, az Ön meglévő naptárába kötve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
