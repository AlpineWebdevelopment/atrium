import ArrowRight from "./ArrowRight";

const SERVICES = [
  {
    num: "01",
    name: "AI Recepció",
    tagline: "24/7 telefonos jelenlét",
    desc: "Minden bejövő hívás fogadva — munkaidőtől, hétvégétől, ünnepnaptól függetlenül. Természetes magyar beszéddel, nem gépi menüvel.",
    features: [
      "0–2 mp válaszidő, párhuzamos vonalkezelés",
      "Szándékfelismerés: időpont, kérdés, panasz, ajánlatkérés",
      "Közvetlen naptárba foglalás (Google, Outlook, iCal)",
      "Visszaigazoló SMS és email az ügyfélnek azonnal",
      "Munkaidő utáni és hétvégi hívások teljes lefedése",
    ],
    replaces: "1 teljes munkaidős recepciós",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 11.5 19.79 19.79 0 0 1 1.89 2.18 2 2 0 0 1 3.84 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    num: "02",
    name: "Értékesítési automatizáció",
    tagline: "Kihagyott bevétel visszaszerzése",
    desc: "No-show-k, hideg leadek, alvó ügyfelek — a rendszer prioritizálja és kontaktálja őket, az első 4 órában, amikor a visszanyerési arány a legmagasabb.",
    features: [
      "No-show visszahívás és SMS az optimális időablakban",
      "FB- és Google-lead azonnali követése perceken belül",
      "Alvó ügyfél-reaktiváció: 12+ hónapja nem jártak",
      "Értékelés-gyűjtés: elégedettet Google-ra, elégedetlent privát csatornára",
      "Kimenő SMS és email kampányok üzleti szabályok alapján",
    ],
    replaces: "Sales koordinátor + utánkövető admin",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/>
        <path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
  },
  {
    num: "03",
    name: "Riportálás és optimalizáció",
    tagline: "Átláthatóság, nem csak logok",
    desc: "Havonta tiszta számok: mit hozott vissza a rendszer, hol szivárog még a bevétel, mit kell módosítani. Ez az a réteg, ami a kapcsolatot vendorból partnerre fordítja.",
    features: [
      "Havi teljesítmény-riport: hívások, foglalások, bevétel-visszahozás",
      "Forrásonkénti bontás: telefon, FB, Google, walk-in",
      "Minden AI-hívás logolva, kulcsmondatok kiemelve",
      "GoHighLevel dashboard: valós idejű rálátás az összes folyamatra",
      "Negyedéves optimalizációs konzultáció az Atrium csapatával",
    ],
    replaces: "Havi riportáló + elemzési időkeret",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section section--alt" id="services" data-screen-label="Szolgáltatások">
      <div className="container">

        <div className="services__intro reveal">
          <div>
            <span className="eyebrow">Szolgáltatások</span>
            <h2 className="section__h">
              Három szolgáltatás.<br />
              Egy integrált rendszer.
            </h2>
          </div>
          <p className="section__lede">
            Nem modulokat vásárol, hanem egy működő rendszert. A három terület
            egymásra épül — a recepció nélkül nincs mit utánkövetni, az utánkövetés
            nélkül nincs mit mérni.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div className="services__card reveal" data-delay={String(i + 1) as "1" | "2" | "3"} key={i}>
              <div className="services__card-top">
                <div className="services__icon">{s.icon}</div>
                <span className="services__num">{s.num}</span>
              </div>
              <div className="services__name">{s.name}</div>
              <div className="services__tagline">{s.tagline}</div>
              <p className="services__desc">{s.desc}</p>
              <ul className="services__features">
                {s.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <div className="services__replaces">
                <span className="services__replaces-label">Kiváltja</span>
                <span className="services__replaces-val">{s.replaces}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
