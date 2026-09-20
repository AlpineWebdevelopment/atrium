/* "Not an AI show." The negative list comes first because it is the part the
   buyer has already been burned by; the positive list is deliberately a plain
   verb list with no graphics, because a demo is exactly what this page argues
   against. The list covers the whole funnel, not just call answering. */
const NOT = [
  "Kitalált statisztikát arról, hogy a cégek hány százaléka használ már AI-t.",
  "Esettanulmányt olyan cégekről, amelyeket sosem látott.",
  "Negyvenoldalas prezentációt AI-transzformációról.",
  "Hónapokig tartó bevezetési projektet tanácsadói díjjal.",
  "Havi riportot, amiből nem derül ki, hozott-e pénzt.",
];

const YES = [
  "Fogadja a megkeresést — telefonon, űrlapon, e-mailben, chaten, közösségi üzenetben.",
  "Percek alatt válaszol, nem órák vagy napok múlva.",
  "Kikérdezi az érdeklődőt, és eldönti, komoly munka-e.",
  "Időpontot foglal, egyenesen a naptárába, ütközés nélkül.",
  "Emlékeztet, és ha valaki lemond, új időpontot egyeztet a helyére.",
  "Utánamegy a kiküldött árajánlatnak, amíg le nem zárul.",
  "Visszahívja a régi ügyfelet, aki hónapok óta nem jelentkezett.",
  "Egy helyen tartja az egészet, akkor is, ha az ügyfél csatornát vált.",
  "Havonta megmutatja, mit hozott — forintban, nem grafikonban.",
];

export default function DirectNoShow() {
  return (
    <section className="dr-show">
      <div className="dr-wrap">
        <h2 className="dr-h2 reveal">Nem AI-t adunk el.</h2>
        <div className="dr-show__grid">
          <div className="dr-show__col dr-show__col--not reveal" data-delay="1">
            <h3 className="dr-show__ch">Amit nem fog kapni</h3>
            <ul>
              {NOT.map((t) => (
                <li key={t}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="dr-show__col dr-show__col--yes reveal" data-delay="2">
            <h3 className="dr-show__ch">Amit igen</h3>
            <ul>
              {YES.map((t) => (
                <li key={t}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="dr-show__honest reveal" data-delay="3">
          <b>És amit nem csinál:</b> nem szerez új keresletet. Nem hoz Önnek olyan ügyfelet,
          aki eddig nem is hallott Önről. Azt hozza vissza, ami ma már megkeresi — és elveszik.
          Ha Önhöz ma nem érkezik megkeresés, ez a rendszer nem fogja megoldani. Ezt is
          megmondjuk a meetingen.
        </p>
      </div>
    </section>
  );
}
