const BARS = [
  { lbl: "Munkaidő utáni hívás", w: "73%", num: 73 },
  { lbl: "No-show visszahívás",  w: "42%", num: 22 },
  { lbl: "Régi ügyfél vissza",   w: "28%", num: 11 },
  { lbl: "FB-lead → foglalás",   w: "58%", num: 31 },
];

const TOOLS = [
  "Google Calendar",
  "Microsoft 365",
  "GoHighLevel",
  "Make / Zapier",
  "SMS Gateway",
  "VoIP / SIP",
];

export default function FeatureDuo() {
  return (
    <section className="section" id="report" data-screen-label="Komoly üzletre építve">
      <div className="container">

        {/* Heading-left / paragraph-right (the "serious business" pattern) */}
        <div className="split-head reveal">
          <h2 className="section__h">Komoly üzletre építve.</h2>
          <p className="section__lede">
            Az Atrium operátorként gondolkodik, nem szoftvervendorként. A
            riportálás és az integráció nem extra — a rendszer alapszövete.
            Ön látja a számokat, és a meglévő eszközei a helyükön maradnak.
          </p>
        </div>

        <div className="duo">
          {/* Card 1 — Reporting / charts */}
          <div className="duo__card reveal" data-delay="1">
            <div className="duo__card-head">
              <span className="duo__card-eyebrow">A hetedik komponens</span>
              <h3 className="duo__card-h">Megmutatja, mi működik.</h3>
              <p className="duo__card-p">
                Egy oldal a hónap végén — honnan jön a bevétel, és hol szivárog még.
              </p>
            </div>
            <div className="duo__mock">
              <div className="duo__mock-bar">
                <span className="duo__mock-title">Havi értesítő · március</span>
                <span className="duo__mock-date">412 hívás · 87 foglalás</span>
              </div>
              <div className="duo__bars">
                {BARS.map((b, i) => (
                  <div className="duo__bar" key={i}>
                    <span className="duo__bar-lbl">{b.lbl}</span>
                    <span className="duo__bar-track">
                      <span className="duo__bar-fill" style={{ width: b.w }} />
                    </span>
                    <span className="duo__bar-num">{b.num}</span>
                  </div>
                ))}
              </div>
              <div className="duo__mock-foot">
                <span>Rendszer közvetlen haszna · március</span>
                <strong>+ 2 340 000 Ft</strong>
              </div>
            </div>
          </div>

          {/* Card 2 — Integrations / fits */}
          <div className="duo__card reveal" data-delay="2">
            <div className="duo__card-head">
              <span className="duo__card-eyebrow">Kompatibilitás</span>
              <h3 className="duo__card-h">Illeszkedik a meglévő eszközeihez.</h3>
              <p className="duo__card-p">
                Csatlakozik hozzájuk, nem váltja le őket. A telefonszáma, a naptára
                és a CRM-je marad.
              </p>
            </div>
            <div className="duo__mock duo__mock--tiles">
              {TOOLS.map((t, i) => (
                <div className="duo__tile" key={i}>
                  <span className="duo__tile-dot" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
