/* Competitor + FOMO: while the buyer is still sitting through demos,
   someone in their trade already runs it. A mechanism they can recognise,
   not a market statistic. */
export default function DirectRival() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">A versenytársa már nem kísérletezik.<br />Használja.</h2>
          <div className="dr-rival__cols reveal" data-delay="1">
            <p>
              Miközben Ön a következő AI-demót nézi, valaki a szakmájában már élesben
              használja. Gyorsabban válaszol, nem felejt el visszaszólni, és a munkák
              hozzá mennek. Nem hirdeti. Csak nő.
            </p>
            <p className="dr-quote">
              Nem az a kérdés, hogy bevezeti-e. Hanem hogy mennyit hagy addig az asztalon,
              amíg halogatja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
