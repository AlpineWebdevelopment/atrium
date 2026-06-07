export default function HowItFits() {
  return (
    <section className="section" id="fits" data-screen-label="04 Hogyan illeszkedik">
      <div className="container">

        <div className="fits__intro">
          <h2 className="section__h">
            Az Ön csapata pontosan azt csinálja, amit eddig.
          </h2>
          <p className="section__lede" style={{ marginTop: "20px" }}>
            Az Atrium párhuzamosan fut a meglévő eszközei mellett —
            nem váltja le őket, és nem kéri a csapatot, hogy új felületet
            tanuljon. Az értékesítési munka csendben elindul a háttérben.
          </p>
        </div>

        <div className="fits__grid">
          <div className="fits__col">
            <div className="fits__step">01</div>
            <h3 className="fits__title">Az Ön számai mellett ülünk le.</h3>
            <p className="fits__body">
              30 perces megbeszélés. Megnézzük a hívásmintázatát, a beérkező
              leadeket, a kalendáriumát. A számai alapján mondjuk meg, hol
              szivárog a legtöbb.
            </p>
            <div className="fits__detail">
              <b>Idő:</b> 30–45 perc · <b>Hely:</b> online vagy az Ön irodájában
            </div>
          </div>

          <div className="fits__col">
            <div className="fits__step">02</div>
            <h3 className="fits__title">A meglévő rendszereibe köt.</h3>
            <p className="fits__body">
              A telefonszám marad. A naptár marad. A CRM marad. Az Atrium
              ezeket integrálja — a recepciója, a foglalási folyamata és a
              követés mind automatikussá válik.
            </p>
            <div className="fits__detail">
              <b>Setup:</b> 2–4 hét · <b>Csapatképzés:</b> nincs
            </div>
          </div>

          <div className="fits__col">
            <div className="fits__step">03</div>
            <h3 className="fits__title">A számok visszakerülnek Önhöz.</h3>
            <p className="fits__body">
              Minden hónap elején tiszta riport. Hány hívás érkezett, hány
              új foglalás, hány visszahozott ügyfél, mennyi forint a rendszer
              közvetlen haszna.
            </p>
            <div className="fits__detail">
              <b>Riport:</b> havonta · <b>Konzultáció:</b> negyedévente
            </div>
          </div>
        </div>

        <div className="fits__rule">
          <h3>
            Nincs adatmigráció.<br />
            Nincs csapatképzés.
          </h3>
          <p>
            Minden Atrium-engagement része egy EU-ban hosztolt
            GoHighLevel-instance, ahol a riportozási réteg és az operatív
            rálátásunk él. Ha Ön azt szeretné, költözhet rá a napi munkája
            is — ha nem, a két rendszer szinkronban marad. A választás az
            Öné, nem kötelező.
          </p>
        </div>

      </div>
    </section>
  );
}
