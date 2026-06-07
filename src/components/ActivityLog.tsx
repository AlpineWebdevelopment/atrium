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
    detail: "Schmidt Béla sürgős kérdéssel · Visszahívás, majd foglalás: márc. 16. 9:00",
    tag: "Foglalás",
    ok: true,
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
    ok: true,
  },
];

export default function ActivityLog() {
  return (
    <section className="section log-section" data-screen-label="Egy nap az Atriummal">
      <div className="container">

        <div className="log-section__head reveal">
          <h2 className="section__h">
            Egy nap az Atriummal.
          </h2>
          <p className="section__lede">
            Amit a rendszer egy szokásos nap alatt elvégez — miközben az
            Ön csapata a páciensekkel és ügyfelekkel foglalkozik.
          </p>
        </div>

        <div className="log-card reveal" data-delay="1">
          {/* Card header */}
          <div className="log-card__bar">
            <span className="log-card__live">
              <span className="log-card__dot" />
              Élő napló
            </span>
            <span className="log-card__date">2026 · márc. 15. · Atrium rendszernapló</span>
          </div>

          {/* Log items */}
          <div className="log-card__feed">
            {LOG.map((item, i) => (
              <div key={i} className="log-item" style={{ animationDelay: `${i * 120}ms` }}>
                <span className="log-item__time">{item.time}</span>
                <div className="log-item__body">
                  <div className="log-item__label">{item.label}</div>
                  <div className="log-item__detail">{item.detail}</div>
                </div>
                <span className={`log-item__tag${item.ok ? " log-item__tag--ok" : ""}`}>
                  {item.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Day summary */}
          <div className="log-card__summary">
            <div className="log-summary__label">Nap összefoglaló</div>
            <div className="log-summary__stats">
              <div className="log-summary__stat">
                <span className="log-summary__num">5</span>
                <span className="log-summary__key">Kezelt esemény</span>
              </div>
              <div className="log-summary__stat">
                <span className="log-summary__num">4</span>
                <span className="log-summary__key">Új foglalás</span>
              </div>
              <div className="log-summary__stat">
                <span className="log-summary__num">0</span>
                <span className="log-summary__key">Kihagyott hívás</span>
              </div>
              <div className="log-summary__stat">
                <span className="log-summary__num">Ön</span>
                <span className="log-summary__key">Páciensekkel volt</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
