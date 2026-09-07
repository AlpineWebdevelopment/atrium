/* ATRIUM-EDIT KV4 — four structural revenue leaks for the cégvezető buyer.
   "Missing calls while on site" framing removed — wrong for a firm with office staff.
   Leaks are structural / organisational, not personal. Uses wpr__grid layout. */

const LEAKS = [
  {
    n: "01",
    b: "A megkeresés lassan, egyenetlenül megy át.",
    s: "Egy-két irodai ember nem győzi a beérkező érdeklődést és árajánlatkérést. Néhány megkeresés áll, néhányra soha nincs válasz — és Ön sosem látja, melyiket veszítették el.",
  },
  {
    n: "02",
    b: "Az árajánlatokat senki nem követi utána.",
    s: "A cég sok ajánlatot küld ki, de az utánkövetés nem senkinek a feladata. A majdnem megnyert munkák csendben elhalnak. Az Önök munkaértékén ez a legnagyobb szivárgás.",
  },
  {
    n: "03",
    b: "A drága szakemberek ideje a szűretlen megkeresésekre megy el.",
    s: "A kalkulátorok és projektvezetők órákat töltenek nem komoly, rossz illeszkedésű megkeresésekkel, amiket ki kellett volna szűrni, mielőtt elérik őket.",
  },
  {
    n: "04",
    b: "Nincs rálátás.",
    s: "Ön nem tudja megmondani, hány megkeresés jött be, milyen gyorsan válaszoltak rá, vagy hány árajánlat van még függőben. A cég legdrágább részét vakon vezeti.",
  },
];

export default function PositioningEpitoipar() {
  return (
    <section className="wpr" id="problema">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">a probléma</span> Hol szivárog a bevétel</span>
          <h2 className="dash__h">A bevétel az értékesítés tetején szivárog — ott, ahova Ön nem lát.</h2>
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
      </div>
    </section>
  );
}
