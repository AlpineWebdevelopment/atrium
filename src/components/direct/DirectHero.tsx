/* Direct-response hero. No rotating phrase, no dashboard mockup, no second
   CTA — one claim, one action. The sub-line states the offer's terms up front
   so the click is informed rather than curious. */
export default function DirectHero() {
  return (
    <section className="dr-hero">
      <div className="dr-wrap">
        <span className="dr-eyebrow reveal">Szolgáltató cégeknek · 30 perces beszélgetés</span>
        <h1 className="dr-h1 reveal" data-delay="1">
          Ön nem hívásokat veszít.<br />Munkákat.
        </h1>
        <p className="dr-lead reveal" data-delay="2">
          Az Atrium egy magyar nyelvű, AI-alapú értékesítési rendszer. Felveszi a telefont
          éjjel és hétvégén is, kikérdezi az érdeklődőt, időpontot foglal, és utánamegy a
          kiküldött árajánlatnak. Nem marketinget adunk el — a keresletet hozzuk vissza,
          ami ma átmegy a versenytársához.
        </p>
        <div className="dr-cta-row reveal" data-delay="3">
          <a className="dr-btn" href="/foglalas?from=direct">Foglaljon időpontot</a>
          <span className="dr-cta-note">
            30 perc. Az Ön számaival dolgozunk. Ha nem tudunk segíteni, a meetingen megmondjuk.
          </span>
        </div>
      </div>
    </section>
  );
}
