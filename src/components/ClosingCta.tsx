import ArrowRight from "./ArrowRight";

const PROOF = [
  { num: "30 perc", label: "Az egyetlen befektetés a döntés előtt" },
  { num: "2–3 hét", label: "Átlagos bevezetési idő" },
  { num: "60 nap", label: "Jellemző megtérülési idő" },
];

export default function ClosingCta() {
  return (
    <section className="section closing" id="closing" data-screen-label="Záró CTA">
      <div className="container">

        <div className="closing__body reveal">
          <div className="closing__copy">
            <span className="eyebrow">Következő lépés</span>
            <h2 className="closing__h">
              Az Ön számai alapján<br />
              döntünk — együtt.
            </h2>
            <p className="closing__p">
              30 perces megbeszélés. Megnézzük a hívásait, a beérkező leadjeit,
              a no-show arányát. Megmondjuk, hol szivárog a bevétel és mit lehet
              realisztikusan visszahozni — mielőtt bármiről dönt.
            </p>
            <p className="closing__p closing__p--small">
              Nincs kötelezettség. Nincs sürgetés. Ha nem áll össze a döntés,
              kap egy auditot a megbeszélés alapján.
            </p>
            <button className="btn closing__btn">
              Foglaljon 30 perces megbeszélést
              <ArrowRight />
            </button>
          </div>

          <div className="closing__proof">
            {PROOF.map((p, i) => (
              <div className="closing__proof-item" key={i}>
                <div className="closing__proof-num">{p.num}</div>
                <div className="closing__proof-label">{p.label}</div>
              </div>
            ))}
            <div className="closing__proof-note">
              Új márka vagyunk — az első esettanulmányok 2026 folyamán érkeznek.
              Addig a saját számait nézzük meg a megbeszélésen.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
