/* What we sell, in two statements — deliberately not a service list; the
   services get their own page. */
const WHAT = [
  {
    n: "A",
    t: "AI értékesítési rendszer",
    d: "A megkeresésből megrendelést csinál. Kevesebben morzsolódnak le, és nem kell elhinnie: heti riportban látja. A számok alapján hétről hétre jobbá tesszük.",
  },
  {
    n: "B",
    t: "Bármi, ami AI-jal megoldható",
    d: "Ha a cégében valami időt vagy pénzt éget, és AI-jal megoldható, megépítjük. Ha nem, megmondjuk, és nem raboljuk tovább az idejét.",
  },
];

export default function DirectWhat() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Amit mi AI-nak hívunk.</h2>
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
