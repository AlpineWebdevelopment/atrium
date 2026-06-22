/* ATRIUM-EDIT — Manifesto: single centered statement column, chart removed. */
export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto__inner reveal">
        <span className="manifesto__rule" aria-hidden="true" />
        <h2 className="manifesto__h">
          Eddig az AI-ról beszéltek Önnek. Mi a pénzéről beszélünk.
        </h2>
        <p className="manifesto__p">
          Önt valószínűleg már megkereste pár cég fényes AI-bemutatóval, ami a meetingen jól mutatott, aztán semmit nem hozott. Mi nem AI-t árulunk, hanem egy dolgot szüntetünk meg: a kieső bevételt. Nem dolgozunk kitalált statisztikákkal és esettanulmányokkal — és ha nem tudunk segíteni, nyíltan megmondjuk a meetingen.
          <span className="manifesto__punch">A látványosság nem a mi dolgunk — az Ön bevétele az.</span>
        </p>
      </div>
    </section>
  );
}
