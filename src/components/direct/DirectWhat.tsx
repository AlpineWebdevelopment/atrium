/* "Amit mi AI-nak hívunk." — the AI sales system as the main offer (a large
   panel with a Bebas headline), and "anything AI can solve" beneath it as a
   "+" strip, an add-on rather than an equal. Deliberately not a service
   list; the services get their own page. */
const MAIN = {
  t: "AI értékesítési rendszer",
  d: "A megkeresésből megrendelést csinál. Kevesebben morzsolódnak le, és nem kell elhinnie: heti riportban látja. A számok alapján hétről hétre jobbá tesszük.",
};
const PLUS = {
  t: "Bármi, ami AI-jal megoldható",
  d: "Ha a cégében valami időt vagy pénzt éget, és AI-jal megoldható, megépítjük. Ha nem, megmondjuk, és nem raboljuk tovább az idejét.",
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
