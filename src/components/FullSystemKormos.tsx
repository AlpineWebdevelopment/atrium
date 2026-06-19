/* ATRIUM-EDIT NR7-kormos — full-system block removed; replaced with focused booking-assistant block.
   Removed: system intro paragraph, Hogyan működik line, channel chip row, 01/02/03 funnel diagram,
   Teli naptár result line, integrations line, Mit tud a rendszer? capability grid.
   Kept: sys__badges trust strip. Layout: reuses existing wpr__grid / wpr__item.
   Nail vocab: körmöshöz (not mesterhez). */

const ITEMS = [
  {
    b: "Válaszol a foglalási üzenetekre",
    s: "Messengeren, Instagramon és a weboldalon, magyarul, percek alatt.",
  },
  {
    b: "Időpontot ad",
    s: "Felajánlja a szabad időpontokat, és a megfelelő körmöshöz foglal a naptárba.",
  },
  {
    b: "Visszaigazol és emlékeztet",
    s: "A vendég megerősítést kap, majd időben emlékeztetőt.",
  },
  {
    b: "Kezeli a lemondást",
    s: "Lemondás esetén felajánlja a felszabadult időpontot.",
  },
];

export default function FullSystemKormos() {
  return (
    <section className="sys" id="rendszer-teljes">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">AI foglalási asszisztens</span> Hogyan működik</span>
          <h2 className="dash__h">Mit csinál a foglalási asszisztens?</h2>
        </div>
        <div className="wpr__grid reveal" data-delay="1">
          {ITEMS.map((item, i) => (
            <div className="wpr__item" key={i}>
              <span className="wpr__n">{String(i + 1).padStart(2, "0")}</span>
              <span className="wpr__t">
                <b>{item.b}</b>
                <br />
                {item.s}
              </span>
            </div>
          ))}
        </div>
        <p className="dash__p reveal" data-delay="2" style={{ marginTop: "1.5rem", textAlign: "center" }}>
          Ennyi. Nincs új alkalmazás, nincs betanulás — a meglévő naptárához kötve fut.
        </p>
        <div className="sys__badges reveal" data-delay="3">
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
    </section>
  );
}
