/* Where the buyer's money went so far — telegraphic pairs, cost against a
   result they can check in their own numbers (revenue, hours, orders).
   Their own experience, not claims about named competitors.

   The result is broken at the colon so every card is struck out twice, the
   same shape at every width: the label on one stroke, the number on the
   next. */
const SHOW = [
  { a: "Demó: lenyűgöző volt.", b1: "Bevétel belőle:", b2: "nulla." },
  { a: "Chatbot: udvarias.", b1: "Ügyfelet hozott:", b2: "egyet se." },
  { a: "Automatizálás: beüzemelve.", b1: "Megspórolt óra:", b2: "nulla." },
  { a: "AI-előfizetés: minden hónapban.", b1: "Új megrendelés:", b2: "egy se." },
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
                    <mark className="dr-card__hl">{t.b1}<br />{t.b2}</mark>
                  </span>
                </p>
              </div>
            ))}
          </div>
          {/* One sentence: two of them ran over three lines on a phone and the
              line broke the punch. */}
          <p className="dr-statement reveal" data-delay="3">
            Ez nem innováció, csak lehúzás, jó marketinggel.
          </p>
        </div>
      </div>
    </section>
  );
}
