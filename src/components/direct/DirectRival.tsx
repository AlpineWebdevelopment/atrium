/* Competitor + FOMO: while the buyer sits through another demo, someone in
   their trade already runs it. A mechanism they recognise, not a market
   statistic. */
export default function DirectRival() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">A versenytársa nem nézi<br />a demókat. Használja.</h2>
          <div className="dr-rival__cols reveal" data-delay="1">
            <p>
              Amíg Önnek a huszadik AI-bemutatót tartják, valaki a szakmájában már
              élesben futtatja. Gyorsabban válaszol, egyetlen megkeresést sem enged el,
              és a munkák hozzá mennek. Nem beszél róla. Viszi a pénzt.
            </p>
            <p className="dr-quote">
              Minden hónap halogatás pénz. Nem a miénk — az Öné.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
