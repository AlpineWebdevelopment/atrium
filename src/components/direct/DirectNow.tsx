/* Where the buyer's money went so far — telegraphic pairs, cost against a
   result they can check in their own numbers (revenue, hours, orders).
   Their own experience, not claims about named competitors. */
const SHOW = [
  { a: "Demó: lenyűgöző volt.", b: "Bevétel belőle: nulla." },
  { a: "Chatbot: udvarias.", b: "Ügyfelet hozott: egyet se." },
  { a: "Automatizálás: beüzemelve.", b: "Megspórolt munkaóra: nulla." },
  { a: "AI-előfizetés: minden hónapban.", b: "Plusz megrendelés: egy se." },
];

export default function DirectNow() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Ismerős?</h2>
          <div className="dr-cards dr-cards--2">
            {SHOW.map((t, i) => (
              <div className="dr-card dr-card--x reveal" data-delay={(i % 2) + 1} key={t.a}>
                <p>
                  <span className="dr-card__a">{t.a}</span>
                  <span className="dr-card__b">
                    <mark className="dr-card__hl">{t.b}</mark>
                  </span>
                </p>
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
