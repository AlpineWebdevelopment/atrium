/* ATRIUM-EDIT KV11 — cégvezető napelem (solar) final CTA rebuild.
   KV11 heading: pending quotes + cooling paid leads as the hook.
   Body: 30 perces megbeszélés framing.
   Button: Foglaljon időpontot (consistent with Hero).
   KV12 trust strip repeated here. */

export default function FinalCtaNapelem() {
  return (
    <section className="final-cta" id="kapcsolat">
      <div className="wrap">
        <div className="final-cta__panel reveal">
          {/* ATRIUM-EDIT KV11 */}
          <h2 className="final-cta__h">
            Hány kifizetett lead hűl ki ma — és ki válaszol nekik időben?
          </h2>
          <p className="final-cta__p">
            30 perces megbeszélés. Az Ön lead-adataiból megnézzük, mennyi idő
            alatt érkezik válasz az ajánlatkérésekre, és hány árajánlat van most
            függőben — mielőtt bármiről dönt.
          </p>
          <button className="btn btn--lg final-cta__btn">Foglaljon időpontot</button>
          <span className="final-cta__note">
            Nincs kötelezettség · nincs sürgetés
          </span>

          {/* KV12 — trust strip */}
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
