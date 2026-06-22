export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto__inner reveal">
        <div className="manifesto__card">
          <span className="manifesto__bang" aria-hidden="true">!</span>
          <div className="manifesto__body">
            <h2 className="manifesto__h">
              Eddig az AI-ról beszéltek Önnek. Mi a pénzéről beszélünk.
            </h2>
            <p className="manifesto__p">
              Önt valószínűleg már megkereste pár cég fényes AI-bemutatóval, ami a meetingen jól mutatott, aztán semmit nem hozott. Mi nem AI-t árulunk, hanem egy dolgot szüntetünk meg: a kieső bevételt. Nem dolgozunk kitalált statisztikákkal és esettanulmányokkal — és ha nem tudunk segíteni, nyíltan megmondjuk a meetingen. A látványosság nem a mi dolgunk — az Ön bevétele az.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
