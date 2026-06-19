/* ATRIUM-EDIT SZ5 — focused product section: the "not a booking link" distinction.
   LIGHTWEIGHT: no SVG phase diagrams, no eight-channel chip row, no full system tour.
   6 capabilities in a simple caps grid. Lead line names the core differentiator. */

const ICONS: Record<string, React.ReactNode> = {
  chat:     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  bell:     <g><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></g>,
  users:    <g><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20v-1a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1" /><circle cx="17.5" cy="9" r="2.4" /><path d="M21.5 20v-.5a4 4 0 0 0-3-3.6" /></g>,
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  refresh:  <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
};

const CAPS = [
  { ic: "chat",     c: "#9E6B9E", t: "Válaszol az üzenetekre",          d: "Messengeren, Instagramon és telefonon, magyarul, másodpercek alatt." },
  { ic: "calendar", c: "#628FBC", t: "Foglal és visszaigazol",           d: "A szabad időpontot felajánlja, a naptárába írja, és visszaigazolja." },
  { ic: "bell",     c: "#62BCAC", t: "Emlékeztet",                      d: "Az időpont előtt, hogy a vendég meg is jelenjen." },
  { ic: "users",    c: "#BC6285", t: "Feltölti a lemondást",             d: "Ha valaki lemond, a felszabadult időpontot a várólistáról azonnal felajánlja." },
  { ic: "callback", c: "#BCA162", t: "Visszahívja az elmaradt vendéget", d: "A meg nem jelenésre újrafoglalási üzenetet küld." },
  { ic: "refresh",  c: "#6DBC61", t: "Visszahozza a régieket",           d: "A rég nem járt vendégnek szól egy rövid üzenettel: ideje a következő időpontnak?" },
];

export default function ProductSzepsegipar() {
  return (
    <section className="sys" id="termek">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A foglalási asszisztens</span>
          <h2 className="dash__h">Nem egy foglalási link.</h2>
          {/* ATRIUM-EDIT SZ5 — "not a booking link" lead line: the core differentiator */}
          <p className="dash__p">
            A rendszer magától, emberi módon megválaszolja az üzenetet Messengeren
            és Instagramon, és lefoglalja az időpontot — a vendégnek nem kell új
            alkalmazást megtanulnia.
          </p>
          <p className="sys__howline">
            Magyar nyelvű, AI-alapú rendszer — a meglévő naptárához kötve, a
            csapatának semmit nem kell lecserélnie.
          </p>
        </div>

        {/* SZ5 — 6-capability grid; lightweight, no phase diagrams */}
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

        {/* SZ9 — trust strip */}
        <div className="sys__badges reveal" data-delay="2">
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
