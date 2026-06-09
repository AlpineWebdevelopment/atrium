const LINES = [
  { k: "Fogadott hívás", v: "412" },
  { k: "Új foglalás", v: "87" },
  { k: "Visszahozott bevétel", v: "3,2M Ft" },
];

export default function Band() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="band__inner reveal">
          <div className="band__left">
            <div className="sa__scene-grid" />
            <div className="band__card">
              <div className="band__card-bar">
                <span className="band__card-dot" />
                <span>Havi értesítő · 2026 március</span>
              </div>
              {LINES.map((l, i) => (
                <div className="band__card-line" key={i}>
                  <span className="k">{l.k}</span>
                  <span className="v">{l.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="band__right">
            <p className="band__quote">
              „A bevételt, ami eddig elveszett, visszafordítjuk az Ön cégébe.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
