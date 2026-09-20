/* The FOMO section, built from things that are checkable in the operator's own
   phone log rather than from invented scarcity. No countdown, no "3 helyek
   maradtak" — the urgency is that the loss repeats tomorrow. */
const MOMENTS = [
  { t: "19:47", k: "Hívás, munkaidő után", d: "Senki nem vette fel. A hívó nem hagyott üzenetet — lépett tovább." },
  { t: "14:30", k: "Űrlap a weboldalról", d: "A válasz másnap délelőtt ment ki. Addigra már beszélt valaki mással." },
  { t: "6 napja", k: "Kiküldött árajánlat", d: "Azóta csend. Nem nemet mondott — csak nem kérdezett rá senki." },
  { t: "tegnap", k: "Elmaradt időpont", d: "Nem jelent meg, nem hívták vissza. Az az óra üresen telt el." },
];

export default function DirectNow() {
  return (
    <section className="dr-now">
      <div className="dr-wrap">
        <h2 className="dr-h2 reveal">Ez ma is megtörtént Önnél.</h2>
        <div className="dr-moments">
          {MOMENTS.map((m, i) => (
            <div className="dr-moment reveal" data-delay={i + 1} key={m.t}>
              <span className="dr-moment__t">{m.t}</span>
              <h3 className="dr-moment__k">{m.k}</h3>
              <p className="dr-moment__d">{m.d}</p>
            </div>
          ))}
        </div>
        <p className="dr-now__close reveal" data-delay="5">
          Külön-külön egyik sem katasztrófa. Ezért nem is látszik. Együtt viszont
          ez a havi kiesése — és holnap ugyanennyi lesz.
        </p>
      </div>
    </section>
  );
}
