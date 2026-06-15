/* The system as ONE lead's journey, grouped into three phases so it breathes:
   Megkeresés → Foglalás → Megtartás, flowing into the result. Each phase is a
   card with a gradient header banner and a mini-timeline of colourful step
   nodes. Riportálás folds into the result bar. */

const ICONS: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  chat: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  qualify: <g><rect x="5" y="4" width="14" height="18" rx="2" /><path d="M9 4V2.5h6V4" /><path d="M8.5 13l2 2 4-4.5" /></g>,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  confirm: <g><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></g>,
  bell: <g><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></g>,
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  refresh: <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  result: <g><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></g>,
};

const PHASES = [
  {
    n: "01", name: "Megkeresés", cap: "az első érintéstől a minősítésig", c: "#7C5CFF", g1: "#7C5CFF", g2: "#6E84FF",
    steps: [
      { ic: "phone", c: "#7C5CFF", t: "Hívásfogadás", s: "minden hívást felvesz, éjjel és hétvégén is" },
      { ic: "chat", c: "#8A6BFF", t: "Utánkövetés", s: "a webes érdeklődőt is percek alatt visszahívja" },
      { ic: "qualify", c: "#6E84FF", t: "Kvalifikáció", s: "felteszi a fontos kérdéseket, és minősíti az érdeklődőt" },
    ],
  },
  {
    n: "02", name: "Foglalás", cap: "időpont, megerősítve", c: "#4AA3FF", g1: "#4AA3FF", g2: "#54CFC0",
    steps: [
      { ic: "calendar", c: "#4AA3FF", t: "Időpontfoglalás", s: "egyenesen a naptárba, ütközés nélkül" },
      { ic: "confirm", c: "#41B6D8", t: "Visszaigazolás", s: "azonnal visszaigazolja a foglalást" },
      { ic: "bell", c: "#54CFC0", t: "Emlékeztető", s: "emlékeztet, hogy ne maradjon el a látogatás" },
    ],
  },
  {
    n: "03", name: "Megtartás", cap: "vissza, és újra", c: "#34C759", g1: "#34C759", g2: "#E8A33D",
    steps: [
      { ic: "callback", c: "#46C79A", t: "No-show visszahívás", s: "visszaszerzi az elmaradt időpontot" },
      { ic: "star", c: "#34C759", t: "Értékelés", s: "elégedett ügyféltől értékelést kér" },
      { ic: "refresh", c: "#E8A33D", t: "Reaktiválás", s: "hónapokkal később visszahozza a régit" },
    ],
  },
];

const POINTS = [
  { t: "Egységes memória", d: "Minden csatornán emlékszik a korábbi beszélgetésekre." },
  { t: "Proaktív megkeresés", d: "Nem csak válaszol — magától kezdeményez és újraaktivál." },
  { t: "Teljes CRM-szinkron", d: "Minden beszélgetés automatikusan a helyére kerül." },
  { t: "Kiszámítható, 24/7", d: "Emberi kiesés nélkül, egy csapat költségének töredékéért." },
];

export default function FullSystem() {
  return (
    <section className="sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A teljes rendszer</span>
          <h2 className="dash__h">Egy érdeklődő útja, az első hívástól a bevételig.</h2>
          <p className="dash__p">
            Nem különálló eszközök, és nem alapszintű automatizálás. Egy
            összehangolt, AI-alapú értékesítési rendszer: minden funkció egyetlen
            közös memóriával végigkíséri az érdeklődőt — magyarul, a háttérben,
            az Ön meglévő naptárához és eszközeihez kötve.
          </p>
        </div>

        <div className="jrn reveal" data-delay="1">
          <div className="jrn__phases">
            {PHASES.map((p, i) => (
              <div className="jph" key={i} style={{ ["--c" as string]: p.c, ["--g1" as string]: p.g1, ["--g2" as string]: p.g2 } as React.CSSProperties}>
                <div className="jph__head">
                  <span className="jph__num">{p.n}</span>
                  <span className="jph__headtxt">
                    <b className="jph__name">{p.name}</b>
                    <span className="jph__cap">{p.cap}</span>
                  </span>
                </div>
                <ul className="jph__steps">
                  {p.steps.map((st, j) => (
                    <li className="jph__step" key={j} style={{ ["--sc" as string]: st.c } as React.CSSProperties}>
                      <span className="jph__ico">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {ICONS[st.ic]}
                        </svg>
                      </span>
                      <span className="jph__steptxt">
                        <b>{st.t}</b>
                        <span>{st.s}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="jrn__result">
            <span className="jrn__result-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {ICONS.result}
              </svg>
            </span>
            <div className="jrn__result-txt">
              <b className="jrn__result-t">Több foglalás, több bevétel</b>
              <span className="jrn__result-s">és minden lépés mérve — riportálás</span>
            </div>
          </div>
        </div>

        <div className="sys__points reveal" data-delay="2">
          {POINTS.map((p, i) => (
            <div className="sys__point" key={i}>
              <b className="sys__point-t">{p.t}</b>
              <span className="sys__point-d">{p.d}</span>
            </div>
          ))}
        </div>

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
