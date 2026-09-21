/* What the buyer actually walks away with. Three columns under a heavy
   rule, no capability list. */
const GET = [
  { t: "Rendszert, ami dolgozik.", d: "Holnap is, éjjel is, hétvégén is." },
  { t: "Számot, ami stimmel.", d: "Az Ön adataiból. Bármikor ellenőrizheti." },
  { t: "Embert, aki viszi.", d: "Önnek dolga nincs vele." },
];

export default function DirectNoShow() {
  return (
    <section className="dr-sec">
      <div className="dr-wrap">
        <div className="dr-center">
          <h2 className="dr-h2 reveal">Beszélni bárki tud.<br />Mi szállítunk.</h2>
          <div className="dr-cols3">
            {GET.map((g, i) => (
              <div className="dr-col reveal" data-delay={i + 1} key={g.t}>
                <h3 className="dr-col__t">{g.t}</h3>
                <p>{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
