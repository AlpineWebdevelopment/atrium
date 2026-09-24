import type { ReactNode } from "react";

/* The close. Three steps, one CTA, on the same ground as the page. */
const STEPS = [
  { n: "01", t: "Időpont.", d: "Fél óra, online." },
  { n: "02", t: "Számolás.", d: "Az Ön adataiból, nem ígéretből." },
  { n: "03", t: "Indítás.", d: "Semmit nem kell lecserélnie." },
];

export default function DirectClose({
  title = <>Fél óra beszélgetés.<br />Nem prezentáció.</>,
  lead = "Kérdezünk, Ön válaszol, aztán mi mondunk számokat. A végén tudni fogja, megéri-e — és ha nem éri meg, azt is kimondjuk.",
}: { title?: ReactNode; lead?: string }) {
  return (
    <section className="dr-close" id="kapcsolat">
      <div className="dr-wrap">
        <div className="dr-close__panel reveal">
          <h2 className="dr-h2">{title}</h2>
          <p className="dr-close__p">{lead}</p>

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
