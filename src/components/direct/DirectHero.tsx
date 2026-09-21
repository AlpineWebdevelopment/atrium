/* Hero. The whole page hangs on one contrast: the market is drowning in AI
   show, we are not that. Say it first, then say plainly what we sell. */
export default function DirectHero() {
  return (
    <section className="dr-hero">
      <div className="dr-wrap">
        <span className="dr-eyebrow reveal">Szolgáltató cégeknek</span>
        <h1 className="dr-h1 reveal" data-delay="1">
          Elég az<br />AI-cirkuszból.
        </h1>
        <p className="dr-lead reveal" data-delay="2">
          Mindenki AI-t árul: demókat, chatbotokat, jövőképeket. Mi AI értékesítési
          rendszert építünk — és bármit, ami ma gond a cégében és AI-jal megoldható.
          Nem bemutatjuk. Megcsináljuk, és forintban mérhető, mit hoz.
        </p>
        <div className="dr-cta-row reveal" data-delay="3">
          <a className="dr-btn" href="/foglalas?from=direct">Foglaljon időpontot</a>
          <span className="dr-cta-note">
            30 perc. Nincs demó. Ha nem éri meg, megmondjuk.
          </span>
        </div>
      </div>
    </section>
  );
}
