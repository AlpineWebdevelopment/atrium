/* "Hogyan indul" — three coloured steps on a connected line. */

const STEPS = [
  {
    n: "01",
    c: "var(--viz-blue)",
    t: "Egy beszélgetés.",
    d: "Ingyenes, 30 perc. Ön elmondja, mit csinál, kinek, és mennyit ér egy ügyfél. Mi elmondjuk, milyen kérdésekre jönne szóba a ChatGPT-ben, és mit építenénk rá.",
    ico: <g><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></g>,
  },
  {
    n: "02",
    c: "var(--viz-purple)",
    t: "48 órán belül kampányterv.",
    d: "A valós kérdések listája, három ajánlat-koncepció kész szövegekkel, a céloldal vázlata, és az ár az Ön számaiból. Kötelezettség nélkül; Ön dönti el, indítjuk-e.",
    ico: <g><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></g>,
  },
  {
    n: "03",
    c: "var(--viz-green)",
    t: "Indítás és üzemeltetés.",
    d: "Fiók, cégellenőrzés, céloldal, kampány. Az érdeklődőket a rendszer fogadja, Ön a naptárában látja őket. Havonta riport és egy beszélgetés arról, mit változtatunk.",
    ico: <g><path d="M12 2v9" /><path d="M18.4 6.6a9 9 0 1 1-12.8 0" /></g>,
  },
];

export default function HowWeStartChatgpt() {
  return (
    <section className="how cg-how" id="indulas">
      <div className="wrap">
        <div className="how__card cg-how__card reveal">
          <div className="dash__intro">
            <span className="dash__eyebrow cg-eyebrow-txt" style={{ color: "var(--viz-purple)" }}>Hogyan indul</span>
            <h2 className="dash__h">Beszélgetés, terv, indítás.</h2>
          </div>

          <div className="how__grid cg-how__grid">
            {STEPS.map((s, i) => (
              <div className="how__step cg-how__step" style={{ ["--c" as string]: s.c }} data-delay={i + 1} key={s.n}>
                <div className="how__node cg-how__node">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {s.ico}
                  </svg>
                  <span className="how__node-num">{s.n}</span>
                </div>
                <h3 className="how__title">{s.t}</h3>
                <p className="how__desc">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="how__cta">
            <a className="btn btn--lg cg-btn" href="#kapcsolat">Foglaljon időpontot.</a>
          </div>
          <p className="how__note cg-how__note">
            <b>Egy területen, egy régióban egy céggel dolgozunk.</b> Ha az Ön szakmája és régiója már foglalt, a beszélgetésen megmondjuk.
          </p>
        </div>
      </div>
    </section>
  );
}
