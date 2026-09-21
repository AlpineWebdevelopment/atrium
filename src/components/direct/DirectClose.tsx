/* The close, on the Ink ground so the page is framed dark at both ends.
   Three steps, one light CTA. Signal green appears exactly once on this page
   — on the calculator figure — so nothing here is green. */
const STEPS = [
  { n: "01", t: "Foglal egy időpontot.", d: "30 perc, online. Nincs prezentáció." },
  { n: "02", t: "Megnézzük a számait.", d: "Ebből jön ki, mit hoz és mennyibe kerül — nem egy prezentációból." },
  { n: "03", t: "Élesítjük.", d: "Önnek nem kell semmit lecserélnie." },
];

export default function DirectClose() {
  return (
    <section className="dr-close" id="kapcsolat">
      <div className="dr-wrap">
        <div className="dr-close__panel reveal">
          <h2 className="dr-h2">30 perc.<br />Demó nélkül.</h2>
          <p className="dr-close__p">
            Elmondja, mi a gond. Megmondjuk, megoldható-e AI-jal, mennyibe kerül és mennyit hoz. Ha nem éri meg, azt is.
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

          <a className="dr-btn dr-btn--light dr-btn--lg" href="/foglalas?from=direct">Foglaljon időpontot</a>
        </div>
      </div>
    </section>
  );
}
