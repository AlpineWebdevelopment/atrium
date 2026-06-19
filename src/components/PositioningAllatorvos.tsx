/* ATRIUM-EDIT AV4/AV5 — vet problem section.
   AV4: two leaks — the obvious (missed call) and the hidden (drifting base).
   AV5: route-not-filter framing line placed at the end of this section.
   No qualify-out / filtering language anywhere. */

const LEAKS = [
  {
    n: "01",
    b: "A meg nem válaszolt hívás.",
    s: "Zárás után, hétvégén, vagy amíg Ön épp egy állattal van, csörög a telefon. A vonal végén egy aggódó gazdi egy beteg kedvenccel. Hangposta. Leteszi, és a következő rendelőt hívja. Elveszett a vizit — és cserben maradt valaki egy nehéz pillanatban.",
  },
  {
    n: "02",
    b: "A lemorzsolódó páciens.",
    s: "A kedvencek lassan lecsúsznak az oltási és szűrési rendről, mert semmi nem figyelmezteti a gazdit. Visszahívó rendszer nélkül a rendelő azt sem tudja, hány páciense sodródott már el. A bázis csendben erodálódik — és a visszaszerezhető bevétel nagy része itt van.",
  },
];

export default function PositioningAllatorvos() {
  return (
    <section className="wpr" id="problema">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">a probléma</span> Két helyen veszít</span>
          {/* ATRIUM-EDIT AV4 */}
          <h2 className="dash__h">Két helyen veszít — az egyiket látja, a másikat nem.</h2>
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
        {/* ATRIUM-EDIT AV5 — route-not-filter framing; guard against any qualify-out language from construction template */}
        <p className="pos__niche reveal" data-delay="2" style={{ marginTop: "2rem", textAlign: "center" }}>
          <b>Itt nem szűrünk.</b> Minden gazdi egy évekig tartó kapcsolat — a rendszer dolga, hogy egyet se veszítsen el.
        </p>
      </div>
    </section>
  );
}
