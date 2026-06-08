const CAPS = [
  {
    hu: "Fogadja a hívást.",
    en: "Reception",
    desc: "Minden hívás. Munkaidő után, hétvégén, akkor is amikor a recepció más vonalon van. Magyarul, természetes beszéddel, nem gépi menüvel.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 11.5 19.79 19.79 0 0 1 1.89 2.18 2 2 0 0 1 3.84 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    hu: "Lefoglalja az időpontot.",
    en: "Scheduling",
    desc: "Az Ön meglévő naptárába foglal. Az ügyfél megerősítést kap, Ön egy bejegyzést a naptárban. Nincs külön rendszer, nincs új jelszó.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
  },
  {
    hu: "Visszahívja az elmaradtakat.",
    en: "No-show recovery",
    desc: "Minden elmaradt időpontot kimenő hívás és SMS követ abban az ablakban, amikor a visszanyerési arány a legmagasabb.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/>
        <path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
        <path d="M12 7v5l3 3"/>
      </svg>
    ),
  },
  {
    hu: "Visszahozza a régieket.",
    en: "Reactivation",
    desc: "Megkeresi azokat, akik elcsendesedtek: 12 hónapja nem jártak, félbehagyott kezelés, alvó ügyfél-rekordok.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <polyline points="23 11 20 8 17 11"/>
        <path d="M20 8v5"/>
      </svg>
    ),
  },
  {
    hu: "Utánköveti az érdeklődőt.",
    en: "Follow-up",
    desc: "Minden FB-lead, Google-űrlap, kapcsolat-felvétel kontaktálva — percek alatt, nem napok múlva.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    hu: "Kéri az értékelést.",
    en: "Reviews",
    desc: "Látogatás utáni nudge-ok: az elégedettet a nyilvános értékelésbe tereli, az elégedetlent egy privát csatornába.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    hu: "Megmutatja, mi működik.",
    en: "Reporting",
    desc: "Tiszta havi nézet: honnan jön a bevétel, hol szivárog, mit hozott vissza a rendszer. Ez az a réteg, ami a kapcsolatot vendorból partnerre fordítja.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section className="section" id="system" data-screen-label="03 A rendszer">
      <div className="container">

        <div className="caps__intro">
          <h2 className="section__h">
            Hét komponens, egy rendszer.
            Az operatív munkájához igazítva.
          </h2>
          <p className="section__lede">
            A Teljes Rendszer mindig mind a hét komponenst tartalmazza.
            A konfiguráció az Ön üzletére szabva. Egyetlen vásárlás, egy
            integráció — nem hét darab modul, amit Önnek kell összefogni.
          </p>
        </div>

        <div className="caps__grid">
          {CAPS.slice(0, 6).map((c, i) => (
            <div className="caps__card" key={i}>
              <div className="caps__card-icon">{c.icon}</div>
              <div className="caps__card-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="caps__card-body">
                <div className="caps__card-name">
                  {c.hu}
                  <em className="caps__card-en">{c.en}</em>
                </div>
                <div className="caps__card-desc">{c.desc}</div>
              </div>
            </div>
          ))}

          {/* 07 — spans 2 columns */}
          <div className="caps__card caps__card--wide">
            <div>
              <div className="caps__card-icon">{CAPS[6].icon}</div>
              <div className="caps__card-num" style={{ marginTop: "8px" }}>07</div>
              <div className="caps__card-name" style={{ fontSize: "22px", marginTop: "8px" }}>
                {CAPS[6].hu}
                <em className="caps__card-en">{CAPS[6].en}</em>
              </div>
            </div>
            <div className="caps__card-desc" style={{ marginTop: "4px" }}>
              {CAPS[6].desc}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
