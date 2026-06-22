/* ATRIUM-EDIT — Manifesto block: emotional pivot / positioning beat.
   Placed between RealtimeDashboard and FullSystem on the root page.
   Ink-on-Bone dramatic section; single Signal-green rule above heading. */

export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto__inner reveal">
        <span className="manifesto__rule" aria-hidden="true" />
        <h2 className="manifesto__h">
          Eddig az AI-ról beszéltek Önnek. Mi a pénzéről beszélünk.
        </h2>
        <p className="manifesto__p">
          Önt valószínűleg már megkereste pár cég fényes AI-bemutatóval, ami a meetingen jól mutatott, aztán semmit nem hozott. Mi nem AI-t árulunk, hanem egy dolgot szüntetünk meg: a kieső bevételt. Nem dolgozunk kitalált statisztikákkal és esettanulmányokkal — és ha nem tudunk segíteni, nyíltan megmondjuk a meetingen. A látványosság nem a mi dolgunk — az Ön bevétele az.
        </p>
      </div>
    </section>
  );
}
