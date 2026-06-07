const LOG = [
  {
    time: "09:42",
    label: "Bejövő hívás fogadva",
    detail: "Kovács Anna időpontot kért · Lefoglalva: márc. 15. 10:30",
    tag: "Foglalás",
  },
  {
    time: "10:17",
    label: "Munkaidő utáni hívás",
    detail: "Schmidt Béla sürgős kérdéssel hívott · Foglalás: márc. 16. 9:00",
    tag: "Foglalás",
  },
  {
    time: "11:05",
    label: "No-show visszahívva",
    detail: "Tóth Péter elmulasztotta a 10:00-ást · Megerősítette: holnap 11:00",
    tag: "Visszahozva",
  },
  {
    time: "14:52",
    label: "FB-lead → foglalás",
    detail: "Schmidt Andrea 14:30-kor töltötte ki az űrlapot · Foglalt, 22 percen belül",
    tag: "Konverzió",
  },
  {
    time: "17:00",
    label: "Értékelési kérés küldve",
    detail: "3 napi látogatónak · 2 Google-ra irányítva, 1 privát csatornában kezelve",
    tag: "Értékelés",
  },
];

const SUMMARY = [
  { num: "5", key: "Kezelt esemény" },
  { num: "4", key: "Új foglalás" },
  { num: "0", key: "Kihagyott hívás" },
  { num: "Ön", key: "Páciensekkel volt" },
];

export default function ActivityLog() {
  return (
    <section className="section" data-screen-label="Egy nap az Atriummal">
      <div className="container">

        <div className="log-head reveal">
          <h2 className="section__h">
            Egy nap az Atriummal.
          </h2>
          <p className="section__lede">
            Amit a rendszer egy szokásos nap alatt elvégez — miközben az
            Ön csapata a páciensekkel és ügyfelekkel foglalkozik.
          </p>
        </div>

        <div className="log-cards reveal" data-delay="1">
          {LOG.map((item, i) => (
            <div key={i} className="log-card">
              <div className="log-card__time">{item.time}</div>
              <div className="log-card__body">
                <div className="log-card__label">{item.label}</div>
                <div className="log-card__detail">{item.detail}</div>
              </div>
              <span className="log-card__tag">{item.tag}</span>
            </div>
          ))}
        </div>

        <div className="log-stats reveal" data-delay="2">
          {SUMMARY.map((s, i) => (
            <div key={i} className="log-stat">
              <span className="log-stat__num">{s.num}</span>
              <span className="log-stat__key">{s.key}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
