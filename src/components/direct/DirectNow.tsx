import DirectKicker from "./DirectKicker";

/* The circus — what the buyer has already sat through. Stated as their own
   experience, not as claims about named competitors. */
const SHOW = [
  "Egy demó, ami a meetingen lenyűgöző volt, aztán semmit nem hozott.",
  "Egy chatbot a weboldalon, amit senki nem használ.",
  "Egy negyvenoldalas stratégia az AI-transzformációról.",
  "Egy tanácsadó, aki elmondta, mit kéne csinálni — és elment.",
];

export default function DirectNow() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap dr-grid">
        <DirectKicker n="01" label="Az AI-show" />
        <div className="dr-body">
          <h2 className="dr-h2 reveal">Ismerős?</h2>
          <div className="dr-cards dr-cards--2">
            {SHOW.map((t, i) => (
              <div className="dr-card dr-card--x reveal" data-delay={(i % 2) + 1} key={t}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
                <p>{t}</p>
              </div>
            ))}
          </div>
          <p className="dr-statement reveal" data-delay="3">Ez az AI-show. Mi nem ezt csináljuk.</p>
        </div>
      </div>
    </section>
  );
}
