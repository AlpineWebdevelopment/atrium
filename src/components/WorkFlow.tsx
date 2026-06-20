/* Root-only merged section — "Hogyan indulunk el?" (HowWeStart) folded together
   with the value-based work/pricing logic (WorkPricing). One icon-step flow from
   the first conversation to a live system, with the price coming from the
   operator's own numbers. Niche pages keep their own HowWeStart + WorkPricing. */

const STEPS = [
  {
    n: "01",
    t: "Foglaljon időpontot",
    d: "Egy rövid beszélgetés. Nincs prezentáció és nincs sablonszöveg — megismerjük a cégét és azt, hogyan dolgozik ma.",
    ico: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  },
  {
    n: "02",
    t: "Átnézzük a számait",
    d: "Megnézzük, hol szivárog a bevétel, és mennyit ér egy ügyfél. Ez diagnózis, nem értékesítés.",
    ico: <g><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></g>,
  },
  {
    n: "03",
    t: "Az árat a számokból szabjuk",
    d: "Nincs rögzített árlista — egy általános ár úgyis félrevinné. Az árat pontosan ezekből a számokból szabjuk ki.",
    ico: <g><path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" /><path d="M7 7h.01" /></g>,
  },
  {
    n: "04",
    t: "A rendszer élesedik",
    d: "Mi építjük, mi üzemeltetjük, és havonta megmutatjuk, mit hozott. Az eszközeit nem kell lecserélnie.",
    ico: <g><path d="M12 2v9" /><path d="M18.4 6.6a9 9 0 1 1-12.8 0" /></g>,
  },
];

export default function WorkFlow() {
  return (
    <section className="how" id="hogyan-dolgozunk">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">új</span> Hogyan dolgozunk</span>
          <h2 className="dash__h">Beszélgetés, nem prezentáció.</h2>
          <p className="dash__p">
            Egy rövid beszélgetéssel indul, nem bemutatóval. Kész rendszert kap,
            az Ön működésére építve — és az árat is az Ön számaiból számoljuk ki.
          </p>
        </div>

        <div className="how__grid how__grid--4">
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
