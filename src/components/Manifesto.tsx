/* ATRIUM-EDIT — Manifesto: editorial pull-quote composition (ghost glyph, marker rule, callout punchline). */
export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto__inner reveal">
        <div className="manifesto__top" aria-hidden="true">
          <span className="manifesto__mark" />
          <span className="manifesto__hair" />
        </div>

        <h2 className="manifesto__h">
          Eddig az AI-ról beszéltek Önnek. Mi a pénzéről beszélünk<span className="manifesto__dot">.</span>
        </h2>

        <p className="manifesto__p">
          Önt valószínűleg már megkereste pár cég fényes AI-bemutatóval, ami a meetingen jól mutatott, aztán semmit nem hozott. Mi nem AI-t árulunk, hanem egy dolgot szüntetünk meg: a kieső bevételt. Nem dolgozunk kitalált statisztikákkal és esettanulmányokkal — és ha nem tudunk segíteni, nyíltan megmondjuk a meetingen.
        </p>

        <p className="manifesto__punch">
          A látványosság nem a mi dolgunk — az Ön bevétele az.
        </p>
      </div>
    </section>
  );
}
