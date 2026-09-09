import type { Metadata } from "next";
import NavChatgpt from "@/components/NavChatgpt";
import HeroChatgpt from "@/components/HeroChatgpt";
import CtaPanelChatgpt from "@/components/CtaPanelChatgpt";
import PositioningChatgpt from "@/components/PositioningChatgpt";
import ProductChatgpt from "@/components/ProductChatgpt";
import CompareChatgpt from "@/components/CompareChatgpt";
import HowWeStartChatgpt from "@/components/HowWeStartChatgpt";
import FaqChatgpt from "@/components/FaqChatgpt";
import FooterChatgpt from "@/components/FooterChatgpt";
import ScrollReveal from "@/components/ScrollReveal";
import { FAQS } from "@/lib/chatgptHirdetes";

/* Segment landing: Atrium as the AI growth partner that runs a customer
   acquisition system on ChatGPT ads for Hungarian service businesses —
   question research, offer, ads, landing page, CRM, reporting. Automating
   the leads themselves is separate work, and the page says so. The
   platform facts and the honesty note live in the FAQ rather than in
   sections of their own, and the offer is folded into the hero rather
   than repeated in a panel under it.
   The offer panel sits directly under the hero as well as at the end, so a
   visitor who reads only the top of the page still sees what they get.
   Indexable, in the sitemap, FAQPage schema below. */

const TITLE = "ChatGPT hirdetés kezelés — ügyfélszerző rendszer szolgáltató cégeknek";
const DESCRIPTION =
  "A ChatGPT-ben 2026 augusztusától hirdetések jelennek meg Magyarországon. Az Atrium beállítja, hogy az Ön szakmájában az Ön cégét ajánlja a válasz alatt, és megcsinálja hozzá a teljes ügyfélszerző rendszert: kérdéskutatás, ajánlat, hirdetés, céloldal, CRM, riport.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/chatgpt-hirdetes" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/chatgpt-hirdetes",
  },
};

export default function ChatgptHirdetesPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="page page--chatgpt-hirdetes" data-screen-label="atriumscaling.com /chatgpt-hirdetes">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ScrollReveal />
      <NavChatgpt />
      <HeroChatgpt />
      <CompareChatgpt />
      <ProductChatgpt />
      <PositioningChatgpt />
      <HowWeStartChatgpt />
      <FaqChatgpt />
      <CtaPanelChatgpt
        id="kapcsolat"
        eyebrow="Következő lépés"
        title="Nézzük meg, milyen kérdésekre jönne szóba az Ön cége."
        body="A beszélgetésen végigvesszük, hol tart ma az érdeklődő-szerzése, és mit építenénk rá. Ha az Ön szakmája és régiója szabad, elkészítjük a kérdéstérképet, és Ön eldönti, indítjuk-e."
      />
      <FooterChatgpt />
    </div>
  );
}
