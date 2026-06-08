const INTEGRATIONS = [
  {
    name: "Google Calendar",
    note: "Naptár szinkron",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    name: "Microsoft 365",
    note: "Outlook / Teams",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    name: "GoHighLevel",
    note: "CRM & pipeline",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    name: "Make / Zapier",
    note: "Automatizáció",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>
      </svg>
    ),
  },
  {
    name: "SMS Gateway",
    note: "Kimenő SMS",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    name: "Email (SMTP)",
    note: "Visszaigazolók",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    name: "VoIP / SIP",
    note: "Telefonvonal",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 11.5 19.79 19.79 0 0 1 1.89 2.18 2 2 0 0 1 3.84 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    name: "EU Hosting",
    note: "GDPR-konform",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function Integrations() {
  return (
    <section className="section" id="integrations" data-screen-label="Integrációk">
      <div className="container">

        <div className="integrations__head reveal">
          <span className="eyebrow">Kompatibilitás</span>
          <h2 className="section__h">
            Illeszkedik a meglévő<br />eszközeihez.
          </h2>
          <p className="section__lede" style={{ maxWidth: 560 }}>
            Az Atrium nem váltja le a meglévő rendszereit — csatlakozik hozzájuk.
            A telefonszáma, a naptára és a CRM-je marad. Nincs adatmigráció, nincs
            csapatképzés, nincs új jelszó.
          </p>
        </div>

        <div className="integrations__grid reveal" data-delay="1">
          {INTEGRATIONS.map((item, i) => (
            <div className="integrations__tile" key={i}>
              <div className="integrations__tile-icon">{item.icon}</div>
              <div className="integrations__tile-name">{item.name}</div>
              <div className="integrations__tile-note">{item.note}</div>
            </div>
          ))}
        </div>

        <p className="integrations__note reveal" data-delay="2">
          Más rendszert használ? A bevezetés előtt egyeztetünk — az esetek többségében
          API vagy webhook útján megoldható az integráció.
        </p>

      </div>
    </section>
  );
}
