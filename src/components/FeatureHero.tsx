const LOG = [
  {
    time: "09:42",
    label: "Bejövő hívás fogadva",
    detail: "Kovács Anna időpontot kért · Lefoglalva: márc. 15. 10:30",
    tag: "Foglalás",
    ok: true,
  },
  {
    time: "10:17",
    label: "Munkaidő utáni hívás",
    detail: "Schmidt Béla sürgős kérdéssel hívott · Foglalás: márc. 16. 9:00",
    tag: "Foglalás",
    ok: false,
  },
  {
    time: "11:05",
    label: "No-show visszahívva",
    detail: "Tóth Péter elmulasztotta a 10:00-ást · Megerősítette: holnap 11:00",
    tag: "Visszahozva",
    ok: true,
  },
  {
    time: "14:52",
    label: "FB-lead → foglalás",
    detail: "Schmidt Andrea 14:30-kor töltötte ki az űrlapot · Foglalt, 22 percen belül",
    tag: "Konverzió",
    ok: true,
  },
  {
    time: "17:00",
    label: "Értékelési kérés küldve",
    detail: "3 napi látogatónak · 2 Google-ra irányítva, 1 privát csatornában kezelve",
    tag: "Értékelés",
    ok: false,
  },
];

const PANEL = [
  "Fogadja a hívást — munkaidő után is",
  "Lefoglalja az időpontot — a meglévő naptárába",
  "Visszahívja az elmaradtakat",
  "Utánköveti minden érdeklődőt",
];

export default function FeatureHero() {
  return (
    <section className="section" data-screen-label="Egy nap az Atriummal">
      <div className="container">
        <div className="fhero reveal">
          {/* Left — live activity preview */}
          <div className="fhero__preview">
            <div className="fhero__preview-bar">
              <span className="fhero__preview-live">
                <span className="fhero__preview-dot" />
                Aktivitás · ma
              </span>
              <span className="fhero__preview-date">2026 · márc. 15.</span>
            </div>
            <div className="fhero__feed">
              {LOG.map((item, i) => (
                <div className="fhero__row" key={i}>
                  <span className="fhero__row-time">{item.time}</span>
                  <div className="fhero__row-body">
                    <span className="fhero__row-label">{item.label}</span>
                    <span className="fhero__row-detail">{item.detail}</span>
                  </div>
                  <span className={"fhero__row-tag" + (item.ok ? " fhero__row-tag--ok" : "")}>
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
            <div className="fhero__feed-foot">
              <div><strong>5</strong> kezelt esemény</div>
              <div><strong>4</strong> új foglalás</div>
              <div className="fhero__feed-zero"><strong>0</strong> kihagyott hívás</div>
            </div>
          </div>

          {/* Right — dark panel */}
          <div className="fhero__panel">
            <span className="fhero__panel-eyebrow">Egy nap az Atriummal</span>
            <h2 className="fhero__panel-h">
              A rendszer dolgozik, miközben Ön a páciensekkel van.
            </h2>
            <ul className="fhero__panel-list">
              {PANEL.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <p className="fhero__panel-note">
              Amit a rendszer egy szokásos nap alatt elvégez — csendben, a
              háttérben, magyar nyelven. Egyetlen kihagyott hívás nélkül.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
