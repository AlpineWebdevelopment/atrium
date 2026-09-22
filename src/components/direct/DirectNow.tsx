/* Where the buyer's money went so far — telegraphic pairs, cost against a
   result they can check in their own numbers (revenue, hours, orders).
   Their own experience, not claims about named competitors. */
const SHOW = [
  "Demó: lenyűgöző volt. Bevétel belőle: nulla.",
  "Chatbot: udvarias. Ügyfelet hozott: egyet se.",
  "Automatizálás: beüzemelve. Megspórolt munkaóra: nulla.",
  "AI-előfizetés: minden hónapban. Plusz megrendelés: egy se.",
];

export default function DirectNow() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Ismerős?</h2>
          <div className="dr-cards dr-cards--2">
            {SHOW.map((t, i) => (
              <div className="dr-card dr-card--x reveal" data-delay={(i % 2) + 1} key={t}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
                <p>{t}</p>
              </div>
            ))}
          </div>
          <p className="dr-statement reveal" data-delay="3">
            Ez nem innováció. Ez lehúzás, jó marketinggel.
            <br />
            Mi azt mérjük, amit Ön: forintot, órát, megrendelést.
          </p>
        </div>
      </div>
    </section>
  );
}
