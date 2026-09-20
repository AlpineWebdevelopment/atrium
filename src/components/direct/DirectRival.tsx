/* The competitor angle. Stated as a mechanism the operator can verify from
   their own experience, not as a market statistic — the brand does not
   publish numbers it cannot stand behind. Channel-agnostic on purpose: the
   race is about who responds first, wherever the enquiry arrived. */
export default function DirectRival() {
  return (
    <section className="dr-rival">
      <div className="dr-wrap">
        <div className="dr-rival__inner reveal">
          <h2 className="dr-h2">Aki Önt keresi,<br />nem csak Önt keresi.</h2>
          <div className="dr-rival__cols">
            <p>
              Nyitva van előtte három találat, és mindhármat megkeresi — hívja, ír nekik,
              kitölti az űrlapot. Nem a legjobb szakembert választja ki, mert azt ebből a
              három találatból nem tudja eldönteni. Azt választja, aki elsőként válaszol,
              értelmesen kikérdezi, és ad egy időpontot.
            </p>
            <p>
              Ez nem jövőkép. Magyar szolgáltató cégek ma is így fogadják a megkeresést,
              és nem hirdetik, hogy egy rendszer csinálja. Nem az a kérdés, hogy a
              szakmájában bevezeti-e valaki. Az, hogy Ön előbb vagy később teszi meg —
              és mennyit hagy addig az asztalon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
