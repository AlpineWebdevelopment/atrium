/* The close. Three steps, one CTA. Signal green appears exactly once on this
   page — on the calculator figure — so everything here stays Ink. */
const STEPS = [
  { n: "01", t: "Foglal egy időpontot.", d: "30 perc, online. Nincs prezentáció." },
  { n: "02", t: "Megnézzük a számait.", d: "Ebből jön ki, mennyit ér ez Önnek — és mennyibe kerül." },
  { n: "03", t: "Élesítjük.", d: "Önnek nem kell semmit lecserélnie." },
];

export default function DirectClose() {
  return (
    <section className="dr-close" id="kapcsolat">
      <div className="dr-wrap">
        <div className="dr-close__panel reveal">
          <h2 className="dr-h2">30 perc. Utána tudja,<br />mennyiről van szó.</h2>
          <p className="dr-close__p">
            Hozza az elmúlt hónapját. Ha nincs itt visszahozható pénz, megmondjuk — és ennyi.
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
        </div>
      </div>
    </section>
  );
}
