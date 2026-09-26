/* "Amit mi AI-nak hívunk." — the AI sales system as the main offer (a large
   panel with a Bebas headline), and bespoke work beneath it as a "+" strip,
   an add-on rather than an equal. Deliberately not a service list; the
   services get their own page. */
/* The line has to cover the whole path — first message, order, and the next
   one after it — without naming the steps: a list here would always be
   missing something, and whatever is missing reads as what we cannot do. */
const MAIN = {
  t: "AI értékesítési rendszer",
  d: "Végigkíséri az ügyfelet az első üzenettől a megrendelésig, onnantól a következőig. Ami közben elveszne, azt megfogja. Nem kell elhinnie: heti riportban látja, mit hozott, és a számok alapján hétről hétre jobbá tesszük.",
};
/* No examples here on purpose: the services page carries those, and it is
   always one click away. */
const PLUS = {
  t: "Egyedi AI megoldások",
  d: "Ha a kész csomag nem fedi le, amire szüksége van, pontosan arra építünk rendszert. Nem általánosságban beszélünk AI-ról: konkrét üzleti problémára konkrét megoldást tervezünk.",
};

export default function DirectWhat() {
  return (
    <section className="dr-sec" id="hogyan">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Amit mi AI-nak hívunk.</h2>
        </div>
        <div className="dr-what">
          <div className="dr-what__main reveal" data-delay="1">
            <span className="dr-what__k">A fő ajánlat</span>
            <h3 className="dr-what__t">{MAIN.t}</h3>
            <p className="dr-what__p">{MAIN.d}</p>
          </div>
          <div className="dr-what__plus reveal" data-delay="2">
            <span className="dr-what__sign" aria-hidden="true">+</span>
            <div>
              <h3 className="dr-what__pt">{PLUS.t}</h3>
              <p className="dr-what__pp">{PLUS.d}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
