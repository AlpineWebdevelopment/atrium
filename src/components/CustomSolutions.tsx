/* Custom-scoped work — the bespoke logic that falls outside the seven core
   components. Operator language, no productized "AI projects" menu (per spec). */

const CORE = [
  { t: "Fogadja a hívást", c: "#7C5CFF" },
  { t: "Lefoglalja az időpontot", c: "#9B7BFF" },
  { t: "Visszahívja az elmaradtakat", c: "#4AA3FF" },
  { t: "Visszahozza a régieket", c: "#54CFC0" },
  { t: "Utánköveti az érdeklődőt", c: "#34C759" },
  { t: "Kéri az értékelést", c: "#E8A33D" },
  { t: "Megmutatja, mi működik", c: "#8C8579" },
];

const STEPS = [
  { n: "01", t: "Ön elmondja, hol akad el", d: "Egy folyamat, amire nincs kész recept a hét komponensben." },
  { n: "02", t: "Megtervezzük a logikát", d: "Pontosan az Ön működésére — nem általános sablonra." },
  { n: "03", t: "Megépítjük és bekötjük", d: "Az Ön meglévő eszközeihez, az Ön számai mellett mérve." },
];

const EXAMPLES = [
  "egyedi minősítési szabály a beérkező érdeklődőkre",
  "két rendszer összekötése, amelyek ma nem beszélnek egymással",
  "visszatérő riport, amit a könyvelője kér",
];

export default function CustomSolutions() {
  return (
    <section className="cux" id="egyedi">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Egyedi fejlesztés</span>
          <h2 className="dash__h">Amit a hét komponens nem fed le, megépítjük.</h2>
          <p className="dash__p">
            Nem a céget igazítjuk a rendszerhez — a rendszert építjük a cég köré.
            Ha az Ön folyamata kívül esik a hét komponensen, megépítjük rá az
            egyedi logikát: pontosan arra, amire szüksége van, az Ön számai mellett.
          </p>
        </div>

        <div className="cux__build reveal" data-delay="1">
          {/* Architecture: the productized core + the one bespoke module */}
          <div className="cux__arch">
            <div className="cux__core">
              <span className="cux__panel-h">A teljes rendszer · 7 komponens</span>
              <ul className="cux__core-list">
                {CORE.map((it, i) => (
                  <li key={i}>
                    <span className="cux__dot" style={{ background: it.c }} />
                    {it.t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cux__link" aria-hidden="true">
              <span className="cux__link-plus">+</span>
            </div>

            <div className="cux__custom">
              <span className="cux__panel-h cux__panel-h--sig">Egyedi modul</span>
              <span className="cux__custom-dot" />
              <span className="cux__custom-k">Az Ön egyedi folyamata</span>
              <span className="cux__custom-d">
                Egyedi logika, amit csak az Ön cége igényel — a hét komponensen túl,
                a meglévő eszközeihez kötve.
              </span>
            </div>
          </div>

          {/* How a custom build runs */}
          <div className="cux__steps">
            {STEPS.map((s, i) => (
              <div className="cux__step" key={i}>
                <span className="cux__step-n">{s.n}</span>
                <b className="cux__step-t">{s.t}</b>
                <span className="cux__step-d">{s.d}</span>
              </div>
            ))}
          </div>

          <p className="cux__eg">
            <b>Például</b>
            {EXAMPLES.map((e, i) => (
              <span key={i} className="cux__eg-item">
                {e}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
