const STEPS = [
  {
    n: "01",
    t: "Foglaljon időpontot",
    d: "Egy rövid beszélgetés. Nincs prezentáció és nincs sablonszöveg — megismerjük a cégét és azt, hogyan dolgozik ma.",
  },
  {
    n: "02",
    t: "Átnézzük a folyamatát",
    d: "Közösen végigmegyünk azon, hogyan érkezik Önhöz az ügyfél — és megkeressük, hol veszít bevételt. Ez diagnózis, nem értékesítés.",
  },
  {
    n: "03",
    t: "A rendszer élesedik",
    d: "Az Ön működésére konfigurálva építjük meg és kapcsoljuk be. A csapata ugyanúgy dolgozik tovább, mint eddig.",
  },
];

export default function HowWeStart() {
  return (
    <section className="how" id="indulas">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A folyamat</span>
          <h2 className="dash__h">Hogyan indulunk el?</h2>
          <p className="dash__p">
            Három lépés az első beszélgetéstől a működő rendszerig.
          </p>
        </div>

        <div className="how__grid">
          {STEPS.map((s, i) => (
            <div className="how__step reveal" data-delay={i + 1} key={i}>
              <span className="how__num">{s.n}</span>
              <h3 className="how__title">{s.t}</h3>
              <p className="how__desc">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="how__cta reveal" data-delay="3">
          <button className="btn btn--lg">Foglaljon időpontot</button>
        </div>
      </div>
    </section>
  );
}
