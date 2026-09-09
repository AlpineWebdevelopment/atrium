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

/* The first argument, drawn: a list of results where nothing stands out,
   against a single recommended answer. Markup rather than an image so it
   reflows and picks up the page's own type and colour. */
function AnswerSlot() {
  return (
    <figure className="cg-slot reveal" data-delay="1">
      <div className="cg-slot__side">
        <span className="cg-slot__label">Egy találati lista</span>
        <div className="cg-slot__rows" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="cg-slot__row" key={i} style={{ width: `${92 - i * 6}%` }} />
          ))}
        </div>
        <span className="cg-slot__note">Az Ön cége valahol a sorban.</span>
      </div>
      <div className="cg-slot__side cg-slot__side--answer">
        <span className="cg-slot__label">Egy válasz a ChatGPT-ben</span>
        <div className="cg-slot__answer" aria-hidden="true">
          <span className="cg-slot__row" style={{ width: "88%" }} />
          <span className="cg-slot__row" style={{ width: "72%" }} />
          <div className="cg-slot__card">
            <span className="cg-slot__card-tag">Szponzorált</span>
            <span className="cg-slot__card-logo">A.</span>
            <span className="cg-slot__card-lines">
              <span className="cg-slot__row cg-slot__row--strong" style={{ width: "54%" }} />
              <span className="cg-slot__row" style={{ width: "84%" }} />
            </span>
          </div>
        </div>
        <span className="cg-slot__note">Az Ön cége az egyetlen ajánlott.</span>
      </div>
    </figure>
  );
}

export default function PositioningChatgpt() {
  return (
    <section className="wpr cg-why" id="miert-most">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow cg-eyebrow-txt">Miért most</span>
          <h2 className="dash__h">Új felület, kevés hirdető, kész vásárlási szándék.</h2>
        </div>
        <AnswerSlot />
        <div className="cg-why__grid reveal" data-delay="2">
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
