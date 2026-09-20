/* The urgency section, built from things checkable in the operator's own
   records rather than from invented scarcity. Deliberately spread across the
   whole funnel and every channel — a missed call is one leak of six, not the
   story. No countdown: the point is that the same amount leaks tomorrow. */
const LEAKS = [
  {
    k: "A megkeresés, amire nem jött válasz",
    d: "Csörgött a telefon munkaidő után. Jött egy üzenet vasárnap. Kitöltött valaki egy űrlapot. Egyikre sem válaszolt senki.",
  },
  {
    k: "A válasz, ami későn ment ki",
    d: "Másnap délelőtt már udvarias volt a válasz. Csak addigra beszélt valaki mással, aki elsőként ért oda.",
  },
  {
    k: "Az árajánlat, amire nem kérdezett rá senki",
    d: "Kiment, azóta csend. Nem nemet mondott a megrendelő — csak nem emlékeztette rá senki.",
  },
  {
    k: "Az időpont, ami elmaradt",
    d: "Nem jelent meg, nem hívták vissza, nem került a helyére más. Az az idő üresen telt el.",
  },
  {
    k: "A hirdetésre jött érdeklődő",
    d: "A hirdetés vitte a pénzt, az érdeklődő meg jött. Csak órák teltek el, mire beszélt vele valaki.",
  },
  {
    k: "A régi ügyfél, aki elmaradt",
    d: "Elégedett volt, csak azóta nem járt. Nem haragszik — egyszerűen nem jutott eszébe, és nem is juttatta senki.",
  },
];

export default function DirectNow() {
  return (
    <section className="dr-now">
      <div className="dr-wrap">
        <h2 className="dr-h2 reveal">A bevétel nem egy helyen folyik el.</h2>
        <p className="dr-sub reveal" data-delay="1">
          Ezért nem is látszik. Egyik pont sem elég nagy ahhoz, hogy feltűnjön.
        </p>
        <div className="dr-moments">
          {LEAKS.map((m, i) => (
            <div className="dr-moment reveal" data-delay={(i % 3) + 1} key={m.k}>
              <h3 className="dr-moment__k">{m.k}</h3>
              <p className="dr-moment__d">{m.d}</p>
            </div>
          ))}
        </div>
        <p className="dr-now__close reveal" data-delay="4">
          Külön-külön egyik sem katasztrófa. Együtt viszont ez a havi kiesése —
          és a jövő hónapban ugyanennyi lesz.
        </p>
      </div>
    </section>
  );
}
