import ArrowRight from "./ArrowRight";

const PROOF = [
  { num: "30 perc", label: "Befektetés a döntés előtt" },
  { num: "2–3 hét", label: "Átlagos bevezetési idő" },
  { num: "60 nap",  label: "Jellemző megtérülési idő" },
];

export default function ClosingCta() {
  return (
    <section className="closing" id="closing" data-screen-label="Záró CTA">
      <div className="container">
        <div className="closing__inner reveal">
          <span className="closing__eyebrow">Következő lépés</span>
          <h2 className="closing__h">
            Az Ön számai alapján döntünk.
          </h2>
          <p className="closing__p">
            30 perces megbeszélés. Megnézzük a hívásait, a beérkező leadjeit, a
            no-show arányát — és megmondjuk, hol szivárog a bevétel, mielőtt bármiről dönt.
          </p>
          <div className="closing__actions">
            <button className="btn closing__btn">
              Foglaljon 30 perces megbeszélést
              <ArrowRight />
            </button>
            <span className="closing__note">
              Nincs kötelezettség · nincs sürgetés · ha nem áll össze, kap egy auditot
            </span>
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
