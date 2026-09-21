/* Competitor + FOMO: someone in their trade has already moved. A mechanism
   they recognise, not a market statistic. */
export default function DirectRival() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Valaki a szakmájában<br />már lépett.</h2>
          <div className="dr-rival__cols reveal" data-delay="1">
            <p>
              Ő nem ül bemutatókon. Nála a telefon fel van véve, az ajánlatra rá van
              kérdezve, a naptár tele. Önt közben mindenki nyugtatja, hogy ráér még
              ezzel. Nem ér rá.
            </p>
            <p className="dr-quote">
              Amíg Ön dönt, ő szerződik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
