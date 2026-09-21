/* The circus — what the buyer has already sat through, told the way they
   would tell it over a beer. Their own experience, not claims about named
   competitors. */
const SHOW = [
  "A demó, amitől mindenki elolvadt a meetingen. Aztán soha többé nem hallott róla senki.",
  "A chatbot, ami köszönni tud és elnézést kérni. Ügyfelet hozni nem.",
  "A negyvenoldalas AI-stratégia, amit pontosan egyszer nyitott meg valaki.",
  "A tanácsadó, aki órabérért mesélt a jövőről. A jövő azóta se jött el.",
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
            Ez az AI-show. Önnek pénzbe került, nekünk a szakmánkat járatja le.
            Nem kérünk belőle.
          </p>
        </div>
      </div>
    </section>
  );
}
