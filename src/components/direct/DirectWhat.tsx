/* What we sell, in two statements — deliberately not a service list; the
   services get their own page. */
const WHAT = [
  {
    n: "A",
    t: "AI értékesítési rendszer",
    d: "A megkeresésből megrendelést csinál. Ügyfelekkel fut, éles forgalomban — nem vásznon, nem tesztkörnyezetben.",
  },
  {
    n: "B",
    t: "Ami még pénzt éget, megoldjuk",
    d: "Ha a cégében valami időt vagy pénzt éget, és AI-jal kezelhető, kezeljük. Ha nem, megmondjuk, és nem raboljuk tovább az idejét.",
  },
];

export default function DirectWhat() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Két dolgot csinálunk.<br />Azt viszont élesben.</h2>
          <div className="dr-cards dr-cards--2">
            {WHAT.map((w, i) => (
              <div className="dr-card dr-card--what reveal" data-delay={i + 1} key={w.n}>
                <span className="dr-card__n">{w.n}</span>
                <h3 className="dr-card__t">{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
