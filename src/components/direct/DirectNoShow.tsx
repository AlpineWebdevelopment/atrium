/* "We know what we are doing", argued by what the buyer will not get —
   the things they have already been burned by. Deliberately no list of what
   the system does: services live on their own page, this page sells the call. */
const NOT = [
  "Demót, ami a meetingen szép, aztán semmit nem hoz.",
  "Kitalált statisztikát és idegen cégek esettanulmányait.",
  "Ígéretet, mielőtt láttuk volna a számait.",
  "Hónapokig tartó bevezetést tanácsadói díjjal.",
];

export default function DirectNoShow() {
  return (
    <section className="dr-show">
      <div className="dr-wrap">
        <h2 className="dr-h2 reveal">Nem prezentálunk.<br />Megcsináljuk.</h2>
        <div className="dr-show__col dr-show__col--not reveal" data-delay="1">
          <h3 className="dr-show__ch">Amit nem kap tőlünk</h3>
          <ul>
            {NOT.map((t) => (
              <li key={t}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="dr-show__honest reveal" data-delay="2">
          <b>Amit kap:</b> egy számot, amit ellenőrizni tud — és valakit, aki ezt a
          számot vissza is hozza.
        </p>
      </div>
    </section>
  );
}
