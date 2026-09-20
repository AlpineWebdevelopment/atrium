/* The close. Three steps, one CTA, the same trust strip the other landings
   carry. Signal green appears exactly once on this page — on the calculator
   figure — so everything here stays Ink. */
const STEPS = [
  { n: "01", t: "Foglaljon időpontot.", d: "30 perc, online. Nincs prezentáció." },
  { n: "02", t: "Átnézzük a számait.", d: "Hívásnapló, árajánlatok, naptár. Ebből jön ki az ár." },
  { n: "03", t: "A rendszer élesedik.", d: "A meglévő eszközeihez kötve. A csapatának nem kell semmit lecserélnie." },
];

export default function DirectClose() {
  return (
    <section className="dr-close" id="kapcsolat">
      <div className="dr-wrap">
        <div className="dr-close__panel reveal">
          <h2 className="dr-h2">Nézzük meg, mennyi az Öné.</h2>
          <p className="dr-close__p">
            Hozza a hívásnaplóját és az elmúlt hónap árajánlatait. Fél óra alatt
            kiderül, van-e itt visszahozható pénz — és ha nincs, azt is megmondjuk.
          </p>

          <div className="dr-steps">
            {STEPS.map((s) => (
              <div className="dr-step" key={s.n}>
                <span className="dr-step__n">{s.n}</span>
                <h3 className="dr-step__t">{s.t}</h3>
                <p className="dr-step__d">{s.d}</p>
              </div>
            ))}
          </div>

          <a className="dr-btn dr-btn--lg" href="/foglalas?from=direct">Foglaljon időpontot</a>

          <div className="dr-badges">
            <span className="dr-badge">Magyar nyelvű</span>
            <span className="dr-badge">EU-s adattárolás</span>
            <span className="dr-badge">GDPR-megfelelő</span>
          </div>
        </div>
      </div>
    </section>
  );
}
