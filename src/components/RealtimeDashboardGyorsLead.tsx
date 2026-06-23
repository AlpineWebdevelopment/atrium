/* Gyors lead-válasz leak section — structurally the simplest lane: not a full
   system, one lever (recovered leads), anchored on a cost they already accept
   (ad spend). The value is a range, because a recovered lead is worth whatever
   their customer is worth. No tabs — one focused view. Illustrative numbers;
   swap for the operator's real ad spend, cost-per-lead and customer value. */

/* ---- the lever: a paid lead that cools while it waits for a reply ---- */
function GfxLeadSpeed() {
  return (
    <div className="dash__chart">
      <svg className="dash__svg" viewBox="0 0 1000 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gCool" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#010E1E" />
            <stop offset="55%" stopColor="#8C8579" />
            <stop offset="100%" stopColor="#C46C64" />
          </linearGradient>
          <linearGradient id="gCoolFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(1,14,30,0.16)" />
            <stop offset="100%" stopColor="rgba(1,14,30,0)" />
          </linearGradient>
        </defs>
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="60" y1={y} x2="950" y2={y} stroke="rgba(1,14,30,0.06)" strokeWidth="1" />
        ))}
        <path d="M60,52 C220,58 380,94 560,128 C720,158 850,168 950,172 L950,190 L60,190 Z" fill="url(#gCoolFill)" />
        <path id="leadPath" d="M60,52 C220,58 380,94 560,128 C720,158 850,168 950,172" fill="none" stroke="url(#gCool)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="cool-dots" aria-hidden="true">
        <span className="cool-dot cool-dot--start" />
        <span className="cool-dot cool-dot--lead" />
        <span className="cool-dot cool-dot--mid" />
        <span className="cool-dot cool-dot--end" />
      </div>
      <div className="funnel__stage" style={{ left: "1%", top: "7%", transform: "none" }}>
        <b>Lead beérkezik</b><span>kifizetve</span>
      </div>
      <div className="funnel__stage" style={{ left: "50%", top: "30%", transform: "translateX(-50%)" }}>
        <b>Órák telnek</b><span>válasz nélkül</span>
      </div>
      <div className="funnel__stage" style={{ right: "1%", left: "auto", top: "54%", transform: "none" }}>
        <b>Kihűlt</b><span>a versenytársé</span>
      </div>
      <div className="dash__axis">
        {["beérkezik", "", "", "", "", "", "", "", "", "", "", "másnap"].map((a, i) => (a ? <span key={i}>{a}</span> : <i key={i} />))}
      </div>
    </div>
  );
}

const METRICS = [
  { k: "Hirdetési költség", c: "var(--ink)", v: "~200 000 Ft/hó", d: "amit a leadekre költ" },
  { k: "Beérkező lead", c: "var(--ink)", v: "~65 / hó", d: "~3 000 Ft / lead" },
  { k: "Lassú válasz", c: "var(--stone)", v: "~40%", d: "órák, vagy másnap" },
  { k: "A versenytárs", c: "var(--viz-red)", v: "Előbb hív", d: "övé lesz a lead" },
];

export default function RealtimeDashboardGyorsLead() {
  return (
    <section className="dash">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">A lassú válasz ára</span>
          <h2 className="dash__h">A leadekért már fizet. Beszéljen is velük.</h2>
          <p className="dash__p">
            A lassú utánkövetésnél kétszer veszít: elveszik a lead — és a
            hirdetési pénz is, amit megvett vele. A gyors válasz a kulcs: egy
            órán belül ~7× az esély, hogy egyáltalán eléri (HBR, 2011 —
            illusztratív, külföldi adat; a kapcsolatfelvételre értve, nem
            garantált eladásra). Aki előbb hív, az viszi a leadet.
          </p>
          <p className="dash__exnote">
            Az alábbi számok illusztratív példák — a valós hirdetési költséggel,
            lead-árral és ügyfélértékkel töltjük ki.
          </p>
        </div>

        <div className="dash__card reveal" data-delay="1">
          <div className="dash__panel">
            <p className="dash__desc">
              ~65 leadből havonta ~26 kap lassú vagy semmilyen első választ, mert
              a csapat épp dolgozik. A perceken belüli válasz ebből ~3–5-öt
              visszahoz — olyan ügyfeleket, akik különben kihűltek vagy a
              gyorsabbtól vásároltak volna.
            </p>

            <div className="dash__metrics">
              {METRICS.map((m, i) => (
                <div key={i}>
                  <div className="dash__metric-k">
                    <span className="dash__metric-dot" style={{ background: m.c }} />
                    {m.k}
                  </div>
                  <div className="dash__metric-v">{m.v}</div>
                  <div className="dash__metric-d flat">{m.d}</div>
                </div>
              ))}
            </div>

            <div className="dash__loss">
              <div className="dash__loss-l">
                <div className="dash__loss-head">
                  <svg className="dash__loss-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                    <polyline points="16 17 22 17 22 11" />
                  </svg>
                  <span className="dash__loss-label">Becsült kieső bevétel</span>
                </div>
                <span className="dash__loss-math">~3–5 elveszett lead × ügyfélérték — kis tételnél ~30 000 Ft, nagyobb szolgáltatásnál ~150 000 Ft — plusz a rájuk költött hirdetési pénz</span>
              </div>
              <div className="dash__loss-v">≈ 120 000 – 600 000 Ft<span>/ hó</span></div>
            </div>

            <GfxLeadSpeed />
          </div>
        </div>
      </div>
    </section>
  );
}
