/* ATRIUM-EDIT FG12 — dental final CTA.
   Opens on the hidden lever: pending recall drift in the base.
   No fabricated figures. Button: Foglaljon időpontot (consistent site-wide). */

export default function FinalCtaFogaszat() {
  return (
    <section className="final-cta" id="kapcsolat">
      <div className="wrap">
        <div className="final-cta__panel reveal">
          {/* ATRIUM-EDIT FG12 */}
          <h2 className="final-cta__h">
            Tudja, hány páciense csúszott le a kontrollrendről?
          </h2>
          <p className="final-cta__p">
            30 perces megbeszélés. Megnézzük, hány aktív páciense van, és hányan
            maradtak le a kontrollról vagy a higiéniai kezelésről — és megmutatjuk,
            mennyit hoz vissza ebből a rendszer, mielőtt bármiről dönt.
          </p>
          <button className="btn btn--lg final-cta__btn">Foglaljon időpontot</button>
          <span className="final-cta__note">
            Nincs kötelezettség · nincs sürgetés
          </span>

          {/* FG13 — trust strip */}
          <div className="final-cta__badges">
            <span className="sys__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></svg>
              Magyar nyelvű
            </span>
            <span className="sys__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="8" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 8h.01M7 17h.01" /></svg>
              EU hosting
            </span>
            <span className="sys__badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5z" /><path d="M9 12l2 2 4-4" /></svg>
              GDPR-konform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
