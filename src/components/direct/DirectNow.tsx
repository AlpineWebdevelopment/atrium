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
    <section className="dr-now">
      <div className="dr-wrap">
        <h2 className="dr-h2 reveal">Ismerős?</h2>
        <div className="dr-show__col dr-show__col--not reveal" data-delay="1">
          <ul>
            {SHOW.map((t) => (
              <li key={t}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="dr-now__close reveal" data-delay="2">
          Ez az AI-show. Mi nem ezt csináljuk.
        </p>
      </div>
    </section>
  );
}
