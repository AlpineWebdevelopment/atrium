/* Final CTA for /chatgpt-hirdetes: dark Ink panel, the promise, the single
   CTA, and the OpenAI-relationship note. */

export default function FinalCtaChatgpt() {
  return (
    <section className="final-cta cg-final" id="kapcsolat">
      <div className="wrap">
        <div className="final-cta__panel cg-final__panel reveal">
          <span className="cg-blob cg-blob--d" aria-hidden="true" /><span className="cg-blob cg-blob--e" aria-hidden="true" />
          <span className="dash__eyebrow cg-eyebrow-txt" style={{ color: "var(--viz-green)" }}>AI növekedési partner szolgáltató cégeknek</span>
          <h2 className="final-cta__h">Az Ön szakmájában ma még üres a válasz alatti hely. Foglalja el, mielőtt más teszi.</h2>
          <p className="final-cta__p">
            Ingyenes, 30 perces beszélgetés. Utána 48 órán belül kampányterv három koncepcióval, a céloldal vázlatával és az árral, az Ön számaiból. Ön dönti el, indítjuk-e.
          </p>
          <a className="btn btn--lg final-cta__btn cg-btn cg-btn--light" href="#kapcsolat">Foglaljon időpontot.</a>
          <span className="final-cta__note">Nincs kötelezettség · nincs sürgetés · az Atrium nem áll kapcsolatban az OpenAI-jal</span>
        </div>
      </div>
    </section>
  );
}
