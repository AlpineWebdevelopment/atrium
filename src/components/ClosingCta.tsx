import ArrowRight from "./ArrowRight";

export default function ClosingCta() {
  return (
    <section className="closing" id="closing" data-screen-label="Záró CTA">
      <div className="container">

        <div className="closing__inner reveal">
          <span className="closing__eyebrow">Következő lépés</span>

          <h2 className="closing__h">
            Az Ön számai<br />
            alapján döntünk.
          </h2>

          <p className="closing__p">
            30 perces megbeszélés. Megnézzük a hívásait, a beérkező
            leadjeit, a no-show arányát. Megmondjuk, hol szivárog
            a bevétel — mielőtt bármiről dönt.
          </p>

          <div className="closing__actions">
            <button className="btn closing__btn">
              Foglaljon 30 perces megbeszélést
              <ArrowRight />
            </button>
            <span className="closing__note">
              Nincs kötelezettség · Nincs sürgetés · Ha nem áll össze a döntés, kap egy auditot
            </span>
          </div>

          <div className="closing__stats">
            <div className="closing__stat">
              <span className="closing__stat-num">30 perc</span>
              <span className="closing__stat-label">az egyetlen befektetés a döntés előtt</span>
            </div>
            <div className="closing__stat-div" />
            <div className="closing__stat">
              <span className="closing__stat-num">2–3 hét</span>
              <span className="closing__stat-label">átlagos bevezetési idő</span>
            </div>
            <div className="closing__stat-div" />
            <div className="closing__stat">
              <span className="closing__stat-num">60 nap</span>
              <span className="closing__stat-label">jellemző megtérülési idő</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
