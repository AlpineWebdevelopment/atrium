/* "Miért most" — three arguments on tinted cards with icons. */

const ARGS = [
  {
    n: "01",
    c: "var(--viz-green)",
    b: "A válasz alatt az Ön cége áll.",
    s: "Amikor valaki az Ön szakmájában kér tanácsot, a válasz alatt nem egy tízes lista jelenik meg, hanem egyetlen ajánlott lehetőség. A kérdés pillanatában ér oda, nem három nappal később — és olyan emberhez, aki éppen dönt.",
    ico: <g><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.6 5.8 21l1.4-7L2 9.3l7-.8z" /></g>,
  },
  {
    n: "02",
    c: "var(--viz-blue)",
    b: "A felület ma még üres.",
    s: "A ChatGPT-hirdetés Magyarországon hetek óta létezik. Az Ön szakmájában valószínűleg még senki nem csinálja. Nincs licitháború, nincs húsz versenytárs ugyanarra a kérdésre. Aki most tanulja meg, mi működik, annak jövőre adatelőnye lesz.",
    ico: <g><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 12h8" /></g>,
  },
  {
    n: "03",
    c: "var(--viz-purple)",
    b: "Az emberek a ChatGPT-től kérdeznek.",
    s: "Melyik szakembert hívják. Kire bízzák a felújítást, a könyvelést, az esküvői fotózást. Ezek a döntések egyre gyakrabban egy beszélgetésben dőlnek el — és az Ön cége ma még nincs benne abban a beszélgetésben.",
    ico: <g><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20v-1a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1" /><circle cx="17.5" cy="9" r="2.4" /><path d="M21.5 20v-.5a4 4 0 0 0-3-3.6" /></g>,
  },
];

export default function PositioningChatgpt() {
  return (
    <section className="wpr cg-why" id="miert-most">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow cg-eyebrow-txt" style={{ color: "var(--viz-blue)" }}>Miért most</span>
          <h2 className="dash__h">Új felület, kevés hirdető, kész vásárlási szándék.</h2>
        </div>
        <div className="cg-why__grid reveal" data-delay="1">
          {ARGS.map((l) => (
            <div className="cg-why__card" style={{ ["--c" as string]: l.c }} key={l.n}>
              <div className="cg-why__top">
                <span className="cg-why__ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{l.ico}</svg>
                </span>
                <span className="cg-why__n">{l.n}</span>
              </div>
              <span className="cg-why__b">{l.b}</span>
              <span className="cg-why__s">{l.s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
