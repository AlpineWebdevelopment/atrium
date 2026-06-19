/* ATRIUM-EDIT SZ4 — three revenue leaks for the beauty operator.
   Problem-led: leaks before the product. No qualify-out / filtering language. */

const LEAKS = [
  {
    n: "01",
    b: "A lassú válasz.",
    s: "A vendég Instagramon ír időpontért, miközben Ön épp egy vendéggel van, tele kézzel. Egy óra múlva válaszol — mire a vendég kihűlt, vagy gyorsabb helyen foglalt. A kézi oda-vissza állandó, és lyukas.",
  },
  {
    n: "02",
    b: "A meg nem jelenés.",
    s: "Az üres szék elveszett bevétel; azt a slotot már nem lehet visszahozni.",
  },
  {
    n: "03",
    b: "Az elmaradt vendég.",
    s: "Az egyszer járt vendég sosem foglal újra, mert semmi nem hozza vissza.",
  },
];

export default function PositioningSzepsegipar() {
  return (
    <section className="wpr" id="problema">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">a probléma</span> Ahol elvész a foglalás</span>
          {/* ATRIUM-EDIT SZ4 */}
          <h2 className="dash__h">Itt szivárog el a foglalás.</h2>
        </div>
        <div className="wpr__grid reveal" data-delay="1">
          {LEAKS.map((l, i) => (
            <div className="wpr__item" key={i}>
              <span className="wpr__n">{l.n}</span>
              <span className="wpr__t">
                <b>{l.b}</b>
                <br />
                {l.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
