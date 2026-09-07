/* "Amit nem mutatunk" — positioning, not a disclaimer. Three struck-out
   things the competitor's page is built on, then what we do instead. */

const NOT = ["Kitalált vélemények", "Kitalált számok", "Logófal"];

export default function HonestyChatgpt() {
  return (
    <section className="pos cg-honest" id="amit-nem-mutatunk">
      <div className="wrap">
        <div className="pos__inner cg-honest__inner reveal">
          <span className="dash__eyebrow cg-eyebrow-txt">Amit nem mutatunk</span>
          <div className="cg-honest__tags" aria-hidden="true">
            {NOT.map((t) => <span key={t}><s>{t}</s></span>)}
          </div>
          <h2 className="pos__h">Magyar kattintási ár, konverziós arány, megtérülési szám a ChatGPT-hirdetésről ma még nincs.</h2>
          <p className="pos__p">
            Aki ötcsillagos véleményekkel és megduplázott foglalásokkal hirdeti, az kitalálta. Ezen az oldalon minden szám vagy az OpenAI saját közlése, vagy oda van írva, hogy szemléltető. Az Ön kampányának valódi számait az első hetek adják, és azokat havonta megmutatjuk.
          </p>
        </div>
      </div>
    </section>
  );
}
