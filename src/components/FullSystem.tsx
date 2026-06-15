/* The system told as ONE lead's journey: a single contact travels through the
   functions and comes out as revenue. Desktop: horizontal timeline. Mobile: the
   same steps as a vertical timeline. Riportálás folds into the result node
   ("minden lépés mérve"), so all seven functions are represented. */

const ICONS: Record<number, React.ReactNode> = {
  0: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  1: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  2: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  3: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  4: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />,
  5: <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
};

const RESULT_ICON = (
  <g><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></g>
);

const JOURNEY = [
  { ic: 0, c: "#7C5CFF", time: "azonnal", t: "Hívásfogadás", s: "minden hívást felvesz, éjjel is" },
  { ic: 1, c: "#9B7BFF", time: "2 perc", t: "Lead-utánkövetés", s: "pár percen belül válaszol" },
  { ic: 2, c: "#4AA3FF", time: "aznap", t: "Időpontfoglalás", s: "egyenesen a naptárba" },
  { ic: 3, c: "#54CFC0", time: "ha nem jön", t: "No-show visszahívás", s: "visszaszerzi az elmaradtat" },
  { ic: 4, c: "#34C759", time: "utána", t: "Értékelés", s: "elégedett ügyféltől kéri" },
  { ic: 5, c: "#E8A33D", time: "30–90 nap", t: "Reaktiválás", s: "később visszahozza a régit" },
];

const POINTS = [
  { t: "Egységes memória", d: "Minden csatornán emlékszik a korábbi beszélgetésekre." },
  { t: "Proaktív megkeresés", d: "Nem csak válaszol — magától kezdeményez és újraaktivál." },
  { t: "Teljes CRM-szinkron", d: "Minden beszélgetés automatikusan a helyére kerül." },
  { t: "Kiszámítható, 24/7", d: "Emberi kiesés nélkül, egy csapat költségének töredékéért." },
];

function StepNode({ ic, result = false }: { ic?: number; result?: boolean }) {
  return (
    <span className={`jrn__node${result ? " jrn__node--result" : ""}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {result ? RESULT_ICON : ICONS[ic as number]}
      </svg>
    </span>
  );
}

export default function FullSystem() {
  return (
    <section className="sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A teljes rendszer</span>
          <h2 className="dash__h">Egy érdeklődő útja, az első hívástól a bevételig.</h2>
          <p className="dash__p">
            Nem különálló eszközök, és nem alapszintű automatizálás. Egy
            összehangolt, AI-alapú értékesítési rendszer: hét funkció egyetlen
            közös memóriával végigkíséri az érdeklődőt — magyarul, a háttérben,
            az Ön meglévő naptárához és eszközeihez kötve.
          </p>
        </div>

        <div className="dash__card reveal" data-delay="1">
          <div className="jrn">
            <span className="jrn__line" aria-hidden="true" />
            <span className="jrn__pulse" aria-hidden="true" />
            <ol className="jrn__steps">
              {JOURNEY.map((st, i) => (
                <li className="jrn__step" key={i} style={{ ["--c" as string]: st.c } as React.CSSProperties}>
                  <StepNode ic={st.ic} />
                  <div className="jrn__txt">
                    <span className="jrn__time">{st.time}</span>
                    <b className="jrn__title">{st.t}</b>
                    <span className="jrn__sub">{st.s}</span>
                  </div>
                </li>
              ))}
              <li className="jrn__step jrn__step--result" style={{ ["--c" as string]: "#34C759" } as React.CSSProperties}>
                <StepNode result />
                <div className="jrn__txt">
                  <span className="jrn__time">eredmény</span>
                  <b className="jrn__title">Több foglalás, több bevétel</b>
                  <span className="jrn__sub">minden lépés mérve — riportálás</span>
                </div>
              </li>
            </ol>
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
