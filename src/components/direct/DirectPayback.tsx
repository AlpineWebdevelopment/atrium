/* Payback, argued without a calculator: two figures from their own data,
   and if the maths does not close, we walk. */
export default function DirectPayback() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Számok.<br />Semmi varázslat.</h2>
          <p className="dr-sub reveal" data-delay="1">
            Leülünk, elővesszük az Ön adatait, és kiszámoljuk, mit hozna és mibe kerül.
            Két szám. Vagy nagyobb az egyik, vagy nem.
          </p>
          <p className="dr-statement reveal" data-delay="2">
            Ha nem hozna többet, mint amibe kerül, elköszönünk. Ez ingyen volt,
            és megspórolt magának egy rossz döntést.
          </p>
        </div>
      </div>
    </section>
  );
}
