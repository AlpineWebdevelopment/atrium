const DONT = [
  "Nem mondjuk, hogy 10x bevétel három hónap alatt.",
  "Nem rakunk a weboldalra hamis vagy összeszerkesztett hangmintát.",
  'Nem írunk „300 elégedett ügyfél"-t név nélkül.',
  "Nem adunk ingyen hardvert. Az nem a mi mozdulatunk.",
  "Nem hordunk chat-widgetet ezen az oldalon. A márkának nincs chatbotja.",
  "Nem nevezzük magunkat AI ügynökségnek.",
];

const DO = [
  "Megnevezzük a klienseinket — amint van aláírt esettanulmányunk.",
  "Megmondjuk Önnek a számokat, amelyeket az első hónapokban a saját rendszerünkről tanulunk.",
  "Pontosan azt áraljuk, amit szállítunk. Az ajánlat-létra nyilvános.",
  "Magyarul beszélünk, formális Ön-megszólítással. A telefon másik végén is.",
  "Az AI-t engine-ként kezeljük, nem kategóriaként. Felismerhetően, de nem hangosítva.",
  "A megbeszélést sürgetés nélkül zárjuk. Ha még nem áll össze, kap egy auditot.",
];

export default function Defense() {
  return (
    <section className="section section--alt section--texture-grid" id="defense" data-screen-label="07 A márka védvonala">
      <div className="container">

        <div className="defense__intro">
          <span className="eyebrow">A márka védvonala</span>
          <h2 className="section__h">
            Amit nem csinálunk, az ugyanolyan fontos, mint amit igen.
          </h2>
          <p className="section__lede" style={{ marginTop: "20px" }}>
            A magyar AI-piacon sok minden zajos. Az Atrium a hangerővel
            ellentétes irányba dolgozik — az alábbi két lista nem
            marketingfogás, hanem belső mérce.
          </p>
        </div>

        <div className="defense__grid">
          <div className="defense__col">
            <h3 className="defense__h">Amit nem teszünk</h3>
            <ul className="defense__list">
              {DONT.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
          <div className="defense__col defense__col--do">
            <h3 className="defense__h">Amit teszünk</h3>
            <ul className="defense__list">
              {DO.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
