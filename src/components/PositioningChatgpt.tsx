/* "Miért most" — three arguments. Editorial columns: a numeral over a rule
   in the column's own muted hue, then the text. */

const ARGS = [
  {
    n: "01",
    c: "var(--t-plum)",
    b: "A válasz alatt az Ön cége áll.",
    s: "Amikor valaki az Ön szakmájában kér tanácsot, a válasz alatt nem egy tízes lista jelenik meg, hanem egyetlen ajánlott lehetőség. A kérdés pillanatában ér oda, nem három nappal később, és olyan emberhez, aki éppen dönt.",
  },
  {
    n: "02",
    c: "var(--t-sage)",
    b: "A felület ma még üres.",
    s: "A ChatGPT-hirdetés Magyarországon hetek óta létezik. Az Ön szakmájában valószínűleg még senki nem csinálja. Nincs licitháború, nincs húsz versenytárs ugyanarra a kérdésre. Aki most tanulja meg, mi működik, annak jövőre adatelőnye lesz.",
  },
  {
    n: "03",
    c: "var(--t-clay)",
    b: "Az emberek a ChatGPT-től kérdeznek.",
    s: "Melyik szakembert hívják. Kire bízzák a felújítást, a könyvelést, az esküvői fotózást. Ezek a döntések egyre gyakrabban egy beszélgetésben dőlnek el, és az Ön cége ma még nincs benne abban a beszélgetésben.",
  },
];

export default function PositioningChatgpt() {
  return (
    <section className="wpr cg-why" id="miert-most">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow cg-eyebrow-txt">Miért most</span>
          <h2 className="dash__h">Új felület, kevés hirdető, kész vásárlási szándék.</h2>
        </div>
        <div className="cg-why__grid reveal" data-delay="1">
          {ARGS.map((l) => (
            <div className="cg-why__card" style={{ ["--c" as string]: l.c }} key={l.n}>
              <span className="cg-why__n">{l.n}</span>
              <span className="cg-why__b">{l.b}</span>
              <span className="cg-why__s">{l.s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
