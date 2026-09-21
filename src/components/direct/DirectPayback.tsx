/* Payback, argued without a calculator: the number comes from the operator's
   own figures in the first conversation, and no number means no sale. */
export default function DirectPayback() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Nem hype.<br />Forint.</h2>
          <p className="dr-sub reveal" data-delay="1">
            Az első beszélgetésen az Ön számaiból számolunk. Nem ígérünk, nem festünk
            jövőképet, nem mutatunk más cégéről esettanulmányt. Összeadunk.
          </p>
          <p className="dr-statement reveal" data-delay="2">
            Ha nem jön ki, hogy megéri, nem adunk el semmit. Ezt kevés cég meri leírni.
            Mi ezért írtuk le.
          </p>
        </div>
      </div>
    </section>
  );
}
