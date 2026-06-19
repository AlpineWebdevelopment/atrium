/* ATRIUM-EDIT LR4 — three lead-loss patterns, problem-led frame.
   LR5 — HBR stat callout with visible source line.
   Stat framed as meaningful contact / qualifying only — NOT closing a sale. */

const LEAKS = [
  {
    n: "01",
    b: "A késői válasz.",
    s: "A lead az első 5 percben elveszíthető. Aki elsőként válaszol, az foglalkozik az ügyféllel — aki késik, az fizeti a kattintást és nem látja viszont.",
  },
  {
    n: "02",
    b: "A meg nem keresett lead.",
    s: "A bejövő leadek egy részére egyszerűen senki nem válaszol. Kifizette a hirdetést — a bevétel elmaradt.",
  },
  {
    n: "03",
    b: "Az utánkövetés, ami kimarad.",
    s: "Az első üzenet után nincs második. A lead elhidegszik, holott még nem döntött — csak elfoglalt volt.",
  },
];

export default function PositioningGyorsLead() {
  return (
    <section className="wpr" id="problema">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">a probléma</span> Ahol elvész a lead</span>
          {/* ATRIUM-EDIT LR4 */}
          <h2 className="dash__h">Megfizeti a leadet. Aztán elengedi.</h2>
        </div>
        <div className="wpr__grid reveal" data-delay="1">
          {LEAKS.map((l, i) => (
            <div className="wpr__item" key={i}>
              <span className="wpr__n">{l.n}</span>
              <span className="wpr__t">
                <b>{l.b}</b>
                <br />
                {l.s}
              </span>
            </div>
          ))}
        </div>

        {/* ATRIUM-EDIT LR5 — HBR stat callout; framed as qualifying probability, not close rate */}
        <div className="reveal" data-delay="2" style={{ borderLeft: "3px solid var(--signal)", padding: "1.25rem 1.25rem 1.25rem 1.5rem", marginTop: "2.5rem", background: "color-mix(in srgb, var(--signal) 5%, var(--bone))", borderRadius: "0 8px 8px 0" }}>
          <p className="dash__p" style={{ margin: 0 }}>
            A Harvard Business Review kutatása szerint az első 5 percen
            belül megkeresett lead 21-szor nagyobb valószínűséggel
            minősül érdemi kontaktnak — az 5 percen túl várakozóhoz
            képest.
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", opacity: 0.5, letterSpacing: "0.04em", marginTop: "0.75rem", marginBottom: 0 }}>
            Forrás: Harvard Business Review — The Short Life of Online
            Sales Leads (2011). A statisztika az érdemi kapcsolatfelvétel
            valószínűségére vonatkozik, nem az eladási arányra.
          </p>
        </div>
      </div>
    </section>
  );
}
