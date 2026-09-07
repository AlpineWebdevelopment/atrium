/* "Miért most" — three arguments, not statistics. The competitor makes the
   same three points; we make them without inventing numbers. */

const ARGS = [
  {
    n: "01",
    b: "A válasz alatt az Ön cége áll.",
    s: "Amikor valaki az Ön szakmájában kér tanácsot, a válasz alatt nem egy tízes lista jelenik meg, hanem egyetlen ajánlott lehetőség. A kérdés pillanatában ér oda, nem három nappal később — és olyan emberhez, aki éppen dönt.",
  },
  {
    n: "02",
    b: "A felület ma még üres.",
    s: "A ChatGPT-hirdetés Magyarországon hetek óta létezik. Az Ön szakmájában valószínűleg még senki nem csinálja. Nincs licitháború, nincs húsz versenytárs ugyanarra a kérdésre. Aki most tanulja meg, mi működik, annak jövőre adatelőnye lesz.",
  },
  {
    n: "03",
    b: "Az emberek a ChatGPT-től kérdeznek.",
    s: "Melyik szakembert hívják. Kire bízzák a felújítást, a könyvelést, az esküvői fotózást. Ezek a döntések egyre gyakrabban egy beszélgetésben dőlnek el — és az Ön cége ma még nincs benne abban a beszélgetésben.",
  },
];

export default function PositioningChatgpt() {
  return (
    <section className="wpr cg-leak" id="miert-most">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Miért most</span>
          <h2 className="dash__h">Új felület, kevés hirdető, kész vásárlási szándék.</h2>
        </div>
        <div className="wpr__grid cg-leak__grid reveal" data-delay="1">
          {ARGS.map((l) => (
            <div className="wpr__item" key={l.n}>
              <span className="wpr__n">{l.n}</span>
              <span className="wpr__t">
                <span className="cg-lead">{l.b}</span>
                <br />
                {l.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
