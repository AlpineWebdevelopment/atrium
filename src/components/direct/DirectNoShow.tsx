/* "We know what we are doing" — what the buyer gets instead of the show.
   Three columns under a heavy rule, no capability list. */
const GET = [
  { t: "Élesben működő rendszert.", d: "Nem demót, nem pilotot, nem ígéretet." },
  { t: "Egy számot, amit ellenőrizni tud.", d: "Forintban. Az Ön adataiból, nem a miénkből." },
  { t: "Valakit, aki üzemelteti.", d: "Nem Önnek kell pásztorolnia." },
];

export default function DirectNoShow() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Nem prezentálunk.<br />Megcsináljuk.</h2>
          <div className="dr-cols3">
            {GET.map((g, i) => (
              <div className="dr-col reveal" data-delay={i + 1} key={g.t}>
                <h3 className="dr-col__t">{g.t}</h3>
                <p>{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
