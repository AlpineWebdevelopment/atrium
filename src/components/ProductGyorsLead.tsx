/* ATRIUM-EDIT LR6 — five capabilities for the lead-response service.
   LR7 — math line: "Ezekért a leadekért már fizet..."
   CUTS: no quote follow-up (epitoipar lane only), no full-system grid, no channel chip row.
   Lightweight caps grid, same pattern as ProductSzepsegipar. */

const ICONS: Record<string, React.ReactNode> = {
  chat:     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  qualify:  <g><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></g>,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  refresh:  <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  bars:     <g><path d="M18 20V10M12 20V4M6 20v-6" /></g>,
};

const CAPS = [
  { ic: "chat",     c: "#628FBC", t: "Percek alatt válaszol",       d: "Minden beérkező leaddel azonnal felveszi a kapcsolatot — az első 5 perc a kritikus ablak." },
  { ic: "qualify",  c: "#AD83CC", t: "Kvalifikál",                   d: "Megerősíti az érdeklődést és felteszi az első kérdéseket, hogy Ön valóban minőségi leadekkel foglalkozzon." },
  { ic: "calendar", c: "#62BCAC", t: "Foglal vagy átad",             d: "Ha az ütemterv megengedi, időpontot vagy visszahívást foglal. Ha emberi döntés kell, azonnal értesíti Önt." },
  { ic: "refresh",  c: "#BCA162", t: "Utánamegy, amíg el nem éri",  d: "Ha nincs válasz az első üzenetre, más csatornán, más időpontban, más szövegezéssel próbál újra." },
  { ic: "bars",     c: "#2B64B8", t: "Riport",                       d: "Havonta megmutatja: hány lead érkezett, mennyit ért el a rendszer, milyen gyorsan — és hol veszett el." },
];

export default function ProductGyorsLead() {
  return (
    <section className="sys" id="termek">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A rendszer</span>
          {/* ATRIUM-EDIT LR6 */}
          <h2 className="dash__h">Öt dolog, ami nélkül elvész a lead.</h2>
          <p className="dash__p">
            Nem egy chatbot. Nem egy automatikus e-mail. Egy rendszer,
            amely felveszi a kapcsolatot, minősíti az érdeklődést, és
            addig megy utána, amíg valóban el nem éri — magyarul, emberi
            hangon.
          </p>
          <p className="sys__howline">
            Magyar nyelvű, AI-alapú rendszer — a meglévő CRM-jéhez és
            naptárához kötve, a csapatának semmit nem kell lecserélnie.
          </p>
        </div>

        {/* LR6 — 5-capability grid */}
        <div className="caps reveal" data-delay="1">
          <div className="caps__grid">
            {CAPS.map((c, i) => (
              <div className="caps__item" key={i}>
                <span className="caps__ico" style={{ color: c.c }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ICONS[c.ic]}</svg>
                </span>
                <b className="caps__t">{c.t}</b>
                <span className="caps__d">{c.d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LR7 — math line */}
        <p className="dash__p reveal" data-delay="2" style={{ marginTop: "2rem", textAlign: "center", fontStyle: "italic" }}>
          Ezekért a leadekért már fizet. A rendszer csak gondoskodik
          róla, hogy mind felvett legyen velük a kapcsolat.
        </p>

        {/* trust strip */}
        <div className="sys__badges reveal" data-delay="3">
          <span className="sys__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></svg>
            Magyar nyelvű
          </span>
          <span className="sys__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="8" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 8h.01M7 17h.01" /></svg>
            EU hosting
          </span>
          <span className="sys__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5z" /><path d="M9 12l2 2 4-4" /></svg>
            GDPR-konform
          </span>
        </div>
      </div>
    </section>
  );
}
