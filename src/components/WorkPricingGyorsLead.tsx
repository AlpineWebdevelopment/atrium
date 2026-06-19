/* ATRIUM-EDIT LR8 — pricing for the lead-response service.
   Price is a placeholder — set before publishing.
   Volume and channel count drive the final number; shown at the consultation.
   No fabricated anchor. */

export default function WorkPricingGyorsLead() {
  return (
    <section className="wpr wpr--alt" id="ar">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">árazás</span> Fix díj</span>
          {/* ATRIUM-EDIT LR8 */}
          <h2 className="dash__h">Egy szám. Nincs rejtett tétel.</h2>
          <p className="dash__p">
            A havidíj a lead-volumentől és a csatornák számától függ.
            A megbeszélésen — a saját számaiból kiindulva — megmutatjuk
            a pontos összeget, mielőtt bármiről dönt.
          </p>
        </div>
        <div className="wpr__grid reveal" data-delay="1">
          <div className="wpr__item">
            <span className="wpr__n">fix díj</span>
            <span className="wpr__t">
              <em style={{ fontStyle: "normal", opacity: 0.6, fontSize: "0.85em" }}>havi, a csatornák és volumen alapján</em>
              <br />
              Minden beérkező lead kezelése: azonnali válasz, kvalifikáció,
              foglalás vagy átadás, utánkövetés — és havi riport az
              eredményekről.
            </span>
            {/* LR8 — price placeholder; do not publish without confirming */}
            <b className="wpr__t" style={{ marginTop: "0.5rem", display: "block", opacity: 0.45, fontFamily: "var(--font-mono)", letterSpacing: "0.04em", fontSize: "0.9em" }}>
              [Havidíj — beállítandó] Ft / hó
            </b>
          </div>
        </div>
        <p className="dash__p reveal" data-delay="2" style={{ marginTop: "1.5rem", textAlign: "center" }}>
          Nincs setup-díj, nincs hosszú távú kötelezettség az első
          hónapban — a saját számaiból látja, megéri-e.
        </p>
      </div>
    </section>
  );
}
