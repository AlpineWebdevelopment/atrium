import ArrowRight from "./ArrowRight";

const PROOF = [
  { num: "30 perc", label: "Az egyetlen befektetés a döntés előtt" },
  { num: "2–3 hét", label: "Átlagos bevezetési idő" },
  { num: "60 nap",  label: "Jellemző megtérülési idő" },
];

export default function ClosingCta() {
  return (
    <section className="section" id="closing" data-screen-label="Záró CTA">
      <div className="container">
        <div className="closing__card reveal">
          <div className="closing__copy">
            <span className="eyebrow">Következő lépés</span>
            <h2 className="closing__h">
              Az Ön számai<br />alapján döntünk.
            </h2>
            <p className="closing__p">
              30 perces megbeszélés. Megnézzük a hívásait, a beérkező leadjeit,
              a no-show arányát. Megmondjuk, hol szivárog a bevétel — mielőtt
              bármiről dönt.
            </p>
            <p className="closing__note">
              Nincs kötelezettség. Nincs sürgetés. Ha nem áll össze a döntés,
              kap egy auditot a megbeszélés alapján.
            </p>
            <button className="btn">
              Foglaljon 30 perces megbeszélést
              <ArrowRight />
            </button>
          </div>
          <div className="closing__stats">
            {PROOF.map((p, i) => (
              <div className="closing__stat" key={i}>
                <span className="closing__stat-num">{p.num}</span>
                <span className="closing__stat-label">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
