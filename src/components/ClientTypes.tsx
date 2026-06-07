const TYPES = [
  {
    name: "Fogászat",
    sub: "Magán fogászati rendelők",
    pain: "Munkaidő után csörög, és hangpostára megy. No-show-k emelik az üresen töltött helyeket. Az elégedett beteg elfelejtkezik az értékelésről.",
    caps: ["Hívás fogadás", "No-show recovery", "Értékelések"],
    wide: true,
  },
  {
    name: "Szépészet",
    sub: "Szépészeti és esztétikai rendelők",
    pain: "FB- és Instagram-leadek napokig válasz nélkül maradnak. Az utánkövetés kézi, esetleges.",
    caps: ["Lead follow-up", "Foglalás", "Értékelések"],
    wide: false,
  },
  {
    name: "Wellness",
    sub: "Szállodák, spa centerek",
    pain: "Lemondások üres helyeket hagynak. Alvó vendégek reaktiválása manuálisan nem valósul meg.",
    caps: ["Foglalás", "Reactivation", "Riport"],
    wide: false,
  },
  {
    name: "Iparos / Mesterember",
    sub: "Autószerelők, villany-, vízvezetékszerelők",
    pain: "Az árajánlat elmegy, de nem jön vissza döntés — és senki nem követi fel. Munkaidő utáni hívásokra senki sem megy be.",
    caps: ["Hívás fogadás", "Árajánlat follow-up", "Riport"],
    wide: true,
  },
];

export default function ClientTypes() {
  return (
    <section className="section section--alt types" id="kinek">
      <div className="container">

        <div className="types__head reveal">
          <h2 className="section__h">Kinek való?</h2>
          <p className="section__lede">
            A rendszer niche-agnosztikus architektúrával épül — de minden
            iparágban más komponens a legértékesebb. Négy iparág, ahol az
            Atrium a legtöbbet hozza vissza.
          </p>
        </div>

        <div className="types__grid">
          {TYPES.map((t, i) => (
            <div
              key={i}
              className={`types__card reveal${t.wide ? " types__card--wide" : ""}`}
              data-delay={String(i + 1)}
            >
              <div className="types__card-top">
                <div className="types__name">{t.name}</div>
                <div className="types__sub">{t.sub}</div>
              </div>
              <p className="types__pain">{t.pain}</p>
              <div className="types__caps">
                {t.caps.map((c, j) => (
                  <span key={j} className="types__tag">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
