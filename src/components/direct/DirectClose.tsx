/* The close. Three steps, one CTA, on the same ground as the page. */
const STEPS = [
  { n: "01", t: "Időpont.", d: "Fél óra, online." },
  { n: "02", t: "Számolás.", d: "Az Ön adataiból, nem diáról." },
  { n: "03", t: "Indítás.", d: "Semmit nem kell lecserélnie." },
];

export default function DirectClose() {
  return (
    <section className="dr-close" id="kapcsolat">
      <div className="dr-wrap">
        <div className="dr-close__panel reveal">
          <h2 className="dr-h2">Fél óra.<br />Egyenes beszéd.</h2>
          <p className="dr-close__p">
            Elmondja, mi viszi a pénzt vagy az idejét. Megmondjuk, mit tudunk vele
            kezdeni, mennyiért és mikorra. Igen vagy nem — ködösítés nélkül.
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
