/* What we sell, in two statements — deliberately not a service list; the
   services get their own page. */
const WHAT = [
  {
    n: "A",
    t: "AI értékesítési rendszer",
    d: "Ott kezdjük, ahol a legtöbb pénz marad az asztalon: a megkereséstől a lezárt megrendelésig. Élesben fut, nem egy prezentációban.",
  },
  {
    n: "B",
    t: "És bármi, ami AI-jal megoldható",
    d: "Ha van a cégében egy gond, ami időt vagy pénzt visz, és AI-jal megoldható, megoldjuk. Ha nem oldható meg, azt is megmondjuk.",
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
