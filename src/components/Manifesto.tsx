/* ATRIUM-EDIT — Manifesto: clean statement card (heading, body, divided punchline). */
export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto__inner reveal">
        <span className="manifesto__eyebrow">A mi ígéretünk</span>
        <h2 className="manifesto__h">
          Eddig az AI-ról beszéltek Önnek. Mi a pénzéről beszélünk<span className="manifesto__dot">.</span>
        </h2>
        <p className="manifesto__p">
          Önt valószínűleg már megkereste pár cég fényes AI-bemutatóval, ami a meetingen jól mutatott, aztán semmit nem hozott. Mi nem AI-t árulunk, hanem egy dolgot szüntetünk meg: a kieső bevételt. Nem dolgozunk kitalált statisztikákkal és esettanulmányokkal — és ha nem tudunk segíteni, nyíltan megmondjuk a meetingen.
        </p>
        <div className="manifesto__rule" aria-hidden="true" />
        <p className="manifesto__punch">
          A látványosság nem a mi dolgunk — <span className="manifesto__hl">az Ön bevétele az.</span>
        </p>
      </div>
    </section>
  );
}
