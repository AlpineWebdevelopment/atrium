/* "Hogyan indul" — three steps on a connected line. Ink nodes; the colour
   in this section would compete with the step numbers. */

const STEPS = [
  {
    n: "01",
    t: "Egy beszélgetés.",
    d: "Ingyenes, 30 perc. Ön elmondja, mit csinál, kinek, és mennyit ér egy ügyfél. Mi elmondjuk, milyen kérdésekre jönne szóba a ChatGPT-ben, és mit építenénk rá.",
    ico: <g><path d="M20 13.5a2 2 0 0 1-2 2h-7l-4 3.5V15.5H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" /><path d="M8 8.5h8M8 11.5h5" /></g>,
  },
  {
    n: "02",
    t: "A kérdéstérkép.",
    d: "Megkapja a valós kérdések listáját az Ön szakmájából, mellé három ajánlat-koncepciót kész szövegekkel, a céloldal vázlatát és az árat az Ön számaiból. Kötelezettség nélkül; Ön dönti el, indítjuk-e.",
    ico: <g><path d="M13.5 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z" /><path d="M13.5 3.5V9H19" /><path d="M8.5 13h7M8.5 16.5h4.5" /></g>,
  },
  {
    n: "03",
    t: "Indítás és üzemeltetés.",
    d: "Fiók, cégellenőrzés, céloldal, kampány. Az érdeklődőket a rendszer fogadja, Ön a naptárában látja őket. Havonta riport és egy beszélgetés arról, mit változtatunk.",
    ico: <g><path d="M12 3v8.5" /><path d="M17.7 6.8a8 8 0 1 1-11.4 0" /></g>,
  },
];

export default function HowWeStartChatgpt() {
  return (
    <section className="how cg-how" id="indulas">
      <div className="wrap">
        <div className="how__card cg-how__card reveal">
          <div className="dash__intro">
            <span className="dash__eyebrow cg-eyebrow-txt">Hogyan indul</span>
            <h2 className="dash__h">Beszélgetés, terv, indítás.</h2>
          </div>

          <div className="how__grid cg-how__grid">
            {STEPS.map((s, i) => (
              <div className="how__step cg-how__step" data-delay={i + 1} key={s.n}>
                <div className="how__node cg-how__node">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
