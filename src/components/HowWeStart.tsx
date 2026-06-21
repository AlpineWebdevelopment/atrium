const STEPS = [
  {
    n: "01",
    t: "Foglaljon időpontot",
    d: "Rövid beszélgetés a cégéről — nincs prezentáció.",
    ico: (
      <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>
    ),
  },
  {
    n: "02",
    t: "Átnézzük a számait",
    d: "Megnézzük, hol szivárog a bevétel, és ebből szabjuk ki az árat — nem árlistából.",
    ico: (
      <g><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></g>
    ),
  },
  {
    n: "03",
    t: "A rendszer élesedik",
    d: "Mi építjük és üzemeltetjük — havonta látja, mit hozott.",
    ico: (
      <g><path d="M12 2v9" /><path d="M18.4 6.6a9 9 0 1 1-12.8 0" /></g>
    ),
  },
];

export default function HowWeStart() {
  return (
    <section className="how" id="indulas">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Hogyan dolgozunk</span>
          <h2 className="dash__h">Beszélgetés, nem prezentáció.</h2>
        </div>

        <div className="how__grid">
          {STEPS.map((s, i) => (
            <div className="how__step reveal" data-delay={i + 1} key={i}>
              <div className="how__node">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {s.ico}
                </svg>
                <span className="how__node-num">{s.n}</span>
              </div>
              <h3 className="how__title">{s.t}</h3>
              <p className="how__desc">{s.d}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
