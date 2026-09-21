/* Payback, argued without a calculator: the number comes from the
   operator's own figures in the first conversation, and no number means no
   sale. */
export default function DirectPayback() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Nem hype.<br />Forint.</h2>
          <p className="dr-sub reveal" data-delay="1">
            Az első beszélgetésen az Ön számaiból kiszámoljuk, mennyit hoz és mennyibe
            kerül. Nem a mi becslésünkből, nem egy esettanulmányból.
          </p>
          <p className="dr-statement reveal" data-delay="2">
            Ha nem jön ki, hogy megéri, nem adunk el semmit.
          </p>
        </div>
      </div>
    </section>
  );
}
