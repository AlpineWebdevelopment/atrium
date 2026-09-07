/* "Mi változott" — the dated, sourced facts about ChatGPT Ads in Hungary.
   Every claim here maps to a link in the source line below the block. The
   one currency figure on the page (5 500 Ft) is OpenAI's own minimum daily
   budget, cited. No CPC, no user counts, no performance numbers. */
import SourceList from "@/components/SourceList";

export default function WhatChangedChatgpt() {
  return (
    <section className="wpr cg-changed" id="mi-valtozott">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Mi változott</span>
          <h2 className="dash__h">2026 augusztusától a ChatGPT-ben is megjelennek hirdetések Magyarországon.</h2>
        </div>

        <div className="cg-facts reveal" data-delay="1">
          <p className="cg-facts__p">
            Az ingyenes és a Go csomag felhasználói a válasz alatt egy megjelölt, szponzorált kártyát látnak — címmel, rövid leírással, képpel és linkkel. A kártya nem változtatja meg a választ.
          </p>
          <p className="cg-facts__p">
            A hirdetést a beszélgetés témája hívja elő, nem kulcsszó: az jelenik meg, ami a kérdéshez illik. Európában a rendszer induláskor nem személyre szabott — a beszélgetés kontextusa, a nyelv és a hozzávetőleges hely számít.
          </p>
          <p className="cg-facts__p">
            Az önkiszolgáló hirdetéskezelő 2026 szeptemberétől érhető el európai hirdetőknek. A napi minimális büdzsé forintos fiókban <span className="cg-num">5 500 Ft</span>. A hirdetési fiók a hirdető cégé, a költést közvetlenül az OpenAI-nak fizeti — nálunk is így marad.
          </p>
        </div>

        <SourceList keys={["expansion", "policies", "budget", "media1"]} delay={2} />
      </div>
    </section>
  );
}
