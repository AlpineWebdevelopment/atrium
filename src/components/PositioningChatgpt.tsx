/* "Miért most" — the three arguments for acting on ChatGPT ads now, each
   backed by three concrete points. This is the section that has to carry
   weight, so it sits on its own band and the cards are the largest on the
   page. One CTA at the end of the section, not one per card. */

const ARGS = [
  {
    n: "01",
    c: "var(--t-plum)",
    tag: "Elérhető formátum",
    b: "A válasz alatt az Ön cége áll.",
    s: "Amikor valaki az Ön szakmájában kér tanácsot, a válasz alatt az Ön ajánlata áll. Nem tizedik találat egy listában, hanem az egyetlen javasolt lehetőség abban a beszélgetésben.",
    points: [
      "A kérdés pillanatában ér oda, nem három nappal később",
      "A szándék már kész: aki kérdez, venni akar, nem nézelődik",
      "A hirdetés a válasz nyelvén szólal meg, nem üvölt bele",
    ],
  },
  {
    n: "02",
    c: "var(--t-sage)",
    tag: "Korlátozott hely",
    b: "Az Ön szakmájában még senki nem csinálja.",
    s: "Ez az a ritka pillanat, amikor egy felület még üres. Nincs licitháború, nincs húsz versenytárs ugyanarra a kérdésre. Aki most tanulja meg, mi működik, annak jövőre már adatelőnye lesz.",
    points: [
      "Alacsony verseny, olcsóbb figyelem",
      "Ön adja a mércét, nem Ön másolja",
      "Egy szakmában, egy régióban egy céggel dolgozunk",
    ],
  },
  {
    n: "03",
    c: "var(--t-clay)",
    tag: "Kérdés alapú célzás",
    b: "Az emberek mindent a ChatGPT-től kérdeznek.",
    s: "Melyik szakembert hívják. Melyik gépet vegyék. Kire bízzák a könyvelést. Ezek a döntések most egy beszélgetésben dőlnek el, és az Ön cége ma még nincs benne abban a beszélgetésben.",
    points: [
      "A kérdés a vásárlás első lépése, nem az utolsó",
      "Aki ott van a válaszban, azt ismerősként keresik meg",
      "Egy jó ajánlat itt nem zavaró, hanem hasznos",
    ],
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
              <h3 className="cg-why__b">{l.b}</h3>
              <p className="cg-why__s">{l.s}</p>
              <ul className="cg-why__list">
                {l.points.map((pt) => (
                  <li key={pt}><i aria-hidden="true" />{pt}</li>
                ))}
              </ul>
              <span className="cg-why__tag">{l.tag}</span>
            </div>
          ))}
        </div>
        <div className="sec-cta reveal" data-delay="2">
          <a className="btn btn--lg cg-btn" href="#kapcsolat">Foglaljon időpontot.</a>
        </div>
      </div>
    </section>
  );
}
