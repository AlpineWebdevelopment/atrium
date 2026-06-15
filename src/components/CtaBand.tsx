/* One calm mid-page CTA band — adds a conversion point between the system
   explanation and the rest, without the stacked-CTA spam Meridian uses. */

export default function CtaBand() {
  return (
    <section className="ctaband reveal">
      <div className="wrap">
        <div className="ctaband__inner">
          <div className="ctaband__txt">
            <h3 className="ctaband__h">Kíváncsi, hol szivárog az Ön bevétele?</h3>
            <p className="ctaband__p">
              30 perc alatt megnézzük a számait, és megmondjuk — kötelezettség nélkül.
            </p>
          </div>
          <a href="#kapcsolat" className="btn btn--lg ctaband__cta">Foglaljon időpontot</a>
        </div>
      </div>
    </section>
  );
}
