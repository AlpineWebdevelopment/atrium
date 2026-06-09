export default function FinalCta() {
  return (
    <section className="final-cta" id="kapcsolat">
      <div className="wrap">
        <h2 className="final-cta__h reveal">
          Az Ön számai alapján döntünk.
        </h2>
        <p className="final-cta__p reveal" data-delay="1">
          30 perces megbeszélés. Megnézzük a hívásait, a beérkező leadjeit és a
          no-show arányát — és megmondjuk, hol szivárog a bevétel, mielőtt bármiről dönt.
        </p>
        <div className="reveal" data-delay="2">
          <button className="btn btn--lg">Foglaljon 30 perces megbeszélést</button>
          <span className="final-cta__note">
            Nincs kötelezettség · nincs sürgetés · ha nem áll össze, kap egy auditot
          </span>
        </div>
      </div>
    </section>
  );
}
