/* ATRIUM-EDIT — Manifesto: asymmetric left-axis, before/after contrast typography. */
export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto__inner reveal">
        <h2 className="manifesto__h">
          <span className="manifesto__past">Eddig az AI-ról beszéltek Önnek.</span>
          <span className="manifesto__now">
            Mi a <span className="manifesto__now-key">pénzéről</span> beszélünk.
          </span>
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
