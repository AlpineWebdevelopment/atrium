/* ÚJ — the anti-AI-agency positioning band: states the wall vs the competitors,
   acknowledges niche tailoring, and flags the founder/case-study gap. */

export default function Positioning() {
  return (
    <section className="pos">
      <div className="wrap">
        <div className="pos__inner reveal">
          <span className="dash__eyebrow"><span className="newtag">új</span> Miben vagyunk mások</span>
          <h2 className="pos__h">Nem AI ügynökség vagyunk.</h2>
          <p className="pos__p">
            Értékesítési rendszereket építünk és üzemeltetünk szolgáltató
            cégeknek — magyarul, az Ön számai mellett. Az AI csak az eszköz; a
            lényeg, hogy a cége több ügyfelet zárjon, kevesebb kézi munkával.
          </p>
          {/* ATRIUM-EDIT A5 — removed niche list (fogorvos/kivitelező/szálloda/autószerelő); root page must not use the "logo-wall" horizontal pattern */}
          <p className="pos__niche">
            Minden cégnek a saját rendszere — a folyamatához és a számaihoz szabva.
          </p>
          {/* ATRIUM-EDIT A6 — deleted internal production note (Javaslat: amint van aláírt ügyfél…); not customer-facing copy */}
        </div>
      </div>
    </section>
  );
}
