/* Final CTA for /chatgpt-hirdetes: category line + the single CTA. */

export default function FinalCtaChatgpt() {
  return (
    <section className="final-cta cg-final" id="kapcsolat">
      <div className="wrap">
        <div className="final-cta__panel reveal">
          <span className="dash__eyebrow">AI értékesítési rendszer ChatGPT-ben hirdető szolgáltató cégeknek.</span>
          <h2 className="final-cta__h">A kattintást már megfizette. A rendszer arról gondoskodik, hogy ügyfél legyen belőle.</h2>
          <p className="final-cta__p">
            Harmincperces beszélgetés. Ön elmondja, hol vesznek el az érdeklődők; mi elmondjuk, mit épít erre a rendszer az Ön cégére, és az Ön számaiból mennyibe kerül.
          </p>
          <a className="btn btn--lg final-cta__btn" href="#kapcsolat">Foglaljon időpontot.</a>
          <span className="final-cta__note">Nincs kötelezettség · nincs sürgetés</span>
        </div>
      </div>
    </section>
  );
}
