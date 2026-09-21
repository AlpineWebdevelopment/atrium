/* What we sell, in two statements — deliberately not a service list; the
   services get their own page. */
const WHAT = [
  {
    n: "A",
    t: "AI értékesítési rendszer",
    d: "Ott, ahol a pénze most is folyik el: a megkereséstől a lezárt megrendelésig. Élesben fut, ügyfelekkel — nem egy vetítésben.",
  },
  {
    n: "B",
    t: "És bármi, ami AI-jal megoldható",
    d: "Ha valami a cégében időt vagy pénzt zabál, és AI-jal megoldható, megoldjuk. Ha nem oldható meg, kimondjuk. Ennyi.",
  },
];

export default function DirectWhat() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">AI, ami dolgozik.<br />Nem ami szerepel.</h2>
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
