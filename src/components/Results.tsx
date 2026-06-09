const METRICS = [
  {
    num: "0",
    unit: "",
    label: "Kihagyott hívás",
    sub: "Minden beérkező hívás megválaszolva — munkaidőtől függetlenül.",
  },
  {
    num: "22",
    unit: "perc",
    label: "Átlagos visszahívási idő",
    sub: "FB-lead és Google-érdeklődő esetén az első kapcsolatfelvételig.",
  },
  {
    num: "87",
    unit: "%",
    label: "Foglalási arány",
    sub: "Bejövő hívásból lefoglalt időponttá — az iparági átlag 54%.",
  },
  {
    num: "60",
    unit: "nap",
    label: "Jellemző megtérülés",
    sub: "A setup-díj visszahozva a rendszer által megfogott bevételből.",
  },
];

export default function Results() {
  return (
    <section className="section section--signal" id="results" data-screen-label="Eredmények">
      <div className="container">

        <div className="results__intro reveal">
          <span className="eyebrow">Munkahipotézis</span>
          <h2 className="section__h results__h">
            A számok, amelyek<br />számítanak.
          </h2>
          <p className="section__lede">
            Ezek az első 5–10 Pilot-engagement alapján kalibrálandó számok.
            A megbeszélésen a saját adatait nézzük meg — nem iparági átlagokat.
          </p>
        </div>

        <div className="results__grid reveal" data-delay="1">
          {METRICS.map((m, i) => (
            <div className="results__card" key={i}>
              <div className="results__num">
                {m.num}
                {m.unit && <span className="results__unit">{m.unit}</span>}
              </div>
              <div className="results__label">{m.label}</div>
              <p className="results__sub">{m.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
