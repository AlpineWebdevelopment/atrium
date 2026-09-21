/* Where their money went so far — telegraphic pairs, cost against result.
   Their own experience, not claims about named competitors. */
const SHOW = [
  "Demó: lenyűgöző volt. Bevétel belőle: nulla.",
  "Chatbot: udvarias. Ügyfelet hozott: egyet se.",
  "Stratégia: negyven oldal. Elolvasva: egyszer.",
  "Tanácsadó: kiszámlázta. Megcsinálni: Önre maradt.",
];

export default function DirectNow() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Mire ment el<br />eddig a pénze?</h2>
          <div className="dr-cards dr-cards--2">
            {SHOW.map((t, i) => (
              <div className="dr-card dr-card--x reveal" data-delay={(i % 2) + 1} key={t}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
                <p>{t}</p>
              </div>
            ))}
          </div>
          <p className="dr-statement reveal" data-delay="3">
            Ebből él egy egész iparág. Mi abból élünk, ami Önnek hoz pénzt.
          </p>
        </div>
      </div>
    </section>
  );
}
