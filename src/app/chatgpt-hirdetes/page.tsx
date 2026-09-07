import type { Metadata } from "next";
import HeroChatgpt from "@/components/HeroChatgpt";
import WhatChangedChatgpt from "@/components/WhatChangedChatgpt";
import PositioningChatgpt from "@/components/PositioningChatgpt";
import ProductChatgpt from "@/components/ProductChatgpt";
import CompareChatgpt from "@/components/CompareChatgpt";
import FitChatgpt from "@/components/FitChatgpt";
import HonestyChatgpt from "@/components/HonestyChatgpt";
import HowWeStartChatgpt from "@/components/HowWeStartChatgpt";
import FaqChatgpt from "@/components/FaqChatgpt";
import FinalCtaChatgpt from "@/components/FinalCtaChatgpt";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { FAQS } from "@/lib/chatgptHirdetes";

/* Segment landing: Atrium as the AI growth partner that runs a customer
   acquisition system on ChatGPT ads for Hungarian service businesses —
   question research, offer, ads, landing page, lead handling, reporting.
   Indexable, in the sitemap, FAQPage schema below. */

const TITLE = "ChatGPT hirdetés kezelés — ügyfélszerző rendszer szolgáltató cégeknek";
const DESCRIPTION =
  "A ChatGPT-ben 2026 augusztusától hirdetések jelennek meg Magyarországon. Az Atrium beállítja, hogy az Ön szakmájában az Ön cégét ajánlja a válasz alatt, és megcsinálja hozzá a teljes ügyfélszerző rendszert: kérdéskutatás, ajánlat, hirdetés, céloldal, érdeklődő-kezelés, riport.";

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
      <HeroChatgpt />
      <WhatChangedChatgpt />
      <PositioningChatgpt />
      <ProductChatgpt />
      <CompareChatgpt />
      <FitChatgpt />
      <HowWeStartChatgpt />
      <HonestyChatgpt />
      <FaqChatgpt />
      <FinalCtaChatgpt />
      <Footer />
    </div>
  );
}
