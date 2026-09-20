/* Direct-response hero. The subject is lost revenue, not the phone: the phone
   is only one of the places it leaks. One claim, one action. The sub-line
   states the offer's terms up front so the click is informed, not curious. */
export default function DirectHero() {
  return (
    <section className="dr-hero">
      <div className="dr-wrap">
        <span className="dr-eyebrow reveal">Szolgáltató cégeknek · 30 perces beszélgetés</span>
        <h1 className="dr-h1 reveal" data-delay="1">
          Nem egy nagy hiba viszi el a bevételét.<br />Húsz apró.
        </h1>
        <p className="dr-lead reveal" data-delay="2">
          Az Atrium egy magyar nyelvű, AI-alapú értékesítési rendszer. Fogadja a megkeresést —
          telefonon, űrlapon, e-mailben, Messengeren, Instagramon, WhatsAppon —, kikérdezi,
          időpontot foglal, utánamegy a kiküldött árajánlatnak, és visszahívja azt, aki hónapok
          óta nem jelentkezett. Nem marketinget adunk el: azt a keresletet hozzuk vissza,
          ami ma csendben elszivárog.
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
