const CHART = [
  { lbl: "H", h: 42 },
  { lbl: "K", h: 64 },
  { lbl: "Sze", h: 52 },
  { lbl: "Cs", h: 86, sig: true },
  { lbl: "P", h: 70 },
  { lbl: "Szo", h: 38 },
];

const TILES = [
  { name: "Google Calendar", sig: false },
  { name: "Microsoft 365", sig: false },
  { name: "GoHighLevel", sig: true },
  { name: "Make / Zapier", sig: false },
  { name: "SMS Gateway", sig: false },
  { name: "VoIP / SIP", sig: false },
];

export default function FeatureCards() {
  return (
    <div className="fcards">
      {/* Card 1 — reporting / charts */}
      <div className="fcard reveal" data-delay="1">
        <div className="fcard__head">
          <svg className="fcard__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
          </svg>
          <span className="fcard__title">Megmutatja, mi működik</span>
        </div>
        <p className="fcard__desc">
          Tiszta havi nézet: honnan jön a bevétel, hol szivárog még, és mit
          hozott vissza a rendszer. Egy oldal a hónap végén.
        </p>
        <div className="fcard__mock">
          <div className="mock__bar-head">
            <span className="mock__bar-title">Havi értesítő</span>
            <span className="mock__bar-sub">412 hívás · 87 foglalás</span>
          </div>
          <div className="mock__chart">
            {CHART.map((c, i) => (
              <div className="mock__col" key={i}>
                <span
                  className={"mock__col-bar" + (c.sig ? " mock__col-bar--sig" : "")}
                  style={{ height: `${c.h}%` }}
                />
                <span className="mock__col-lbl">{c.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 2 — integrations */}
      <div className="fcard reveal" data-delay="2">
        <div className="fcard__head">
          <svg className="fcard__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" />
          </svg>
          <span className="fcard__title">Illeszkedik a meglévő eszközeihez</span>
        </div>
        <p className="fcard__desc">
          Csatlakozik hozzájuk, nem váltja le őket. A telefonszáma, a naptára
          és a CRM-je marad — egy kattintással összekötve.
        </p>
        <div className="fcard__mock">
          <div className="mock__tiles">
            {TILES.map((t, i) => (
              <div className={"mock__tile" + (t.sig ? " mock__tile--sig" : "")} key={i}>
                <span className="mock__tile-dot" />
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
