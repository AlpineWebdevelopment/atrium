/* "Hogyan indul" — the engagement without numbers. Three steps, no package,
   no price; the ad account stays the client's. CTA repeated. */

const STEPS = [
  {
    n: "01",
    t: "Egy beszélgetés.",
    d: "Ön elmondja, hol vesznek el az érdeklődők. Mi elmondjuk, mit épít erre a rendszer — konkrétan, az Ön cégére.",
    ico: <g><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></g>,
  },
  {
    n: "02",
    t: "Az Ön számai.",
    d: "Az ár az Ön számaiból jön ki: hány érdeklődő, mekkora egy munka értéke, mennyi vész el. Nem árlista, nem csomag.",
    ico: <g><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></g>,
  },
  {
    n: "03",
    t: "A rendszer és a hirdetés együtt.",
    d: "A ChatGPT hirdetési fiók az Öné marad, a költést közvetlenül az OpenAI-nak fizeti. A rendszer az Ön cégére épül, mi üzemeltetjük, és havonta megmutatja, mi lett belőle.",
    ico: <g><path d="M12 2v9" /><path d="M18.4 6.6a9 9 0 1 1-12.8 0" /></g>,
  },
];

export default function HowWeStartChatgpt() {
  return (
    <section className="how cg-how" id="indulas">
      <div className="wrap">
        <div className="how__card reveal">
          <div className="dash__intro">
            <span className="dash__eyebrow">Hogyan indul</span>
            <h2 className="dash__h">Beszélgetés, nem prezentáció.</h2>
          </div>

          <div className="how__grid">
            {STEPS.map((s, i) => (
              <div className="how__step" data-delay={i + 1} key={s.n}>
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

          <div className="how__cta">
            <a className="btn btn--lg" href="#kapcsolat">Foglaljon időpontot.</a>
          </div>
        </div>
      </div>
    </section>
  );
}
