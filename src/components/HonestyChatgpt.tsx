/* "Amit nem mutatunk" — positioning, not a disclaimer. The competitor's
   page runs on placeholder testimonials and unsourced claims; ours runs on
   cited facts and labeled illustrations. Written with confidence. */

export default function HonestyChatgpt() {
  return (
    <section className="pos cg-honest" id="amit-nem-mutatunk">
      <div className="wrap">
        <div className="pos__inner cg-honest__inner reveal">
          <span className="dash__eyebrow">Amit nem mutatunk</span>
          <h2 className="pos__h">Kitalált véleményeket, kitalált számokat, logófalat.</h2>
          <p className="pos__p">
            Magyar kattintási ár, konverziós arány, megtérülési szám a ChatGPT-hirdetésről ma még nincs. Aki ötcsillagos véleményekkel és megduplázott foglalásokkal hirdeti, az kitalálta. Ezen az oldalon minden szám mögött forrás van, vagy oda van írva, hogy szemléltető. Az Ön kampányának valódi számait az első hetek adják — és azokat havonta megmutatjuk.
          </p>
        </div>
      </div>
    </section>
  );
}
