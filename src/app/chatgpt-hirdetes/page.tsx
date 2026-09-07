import type { Metadata } from "next";
import HeroChatgpt from "@/components/HeroChatgpt";
import WhatChangedChatgpt from "@/components/WhatChangedChatgpt";
import PositioningChatgpt from "@/components/PositioningChatgpt";
import ProductChatgpt from "@/components/ProductChatgpt";
import FitChatgpt from "@/components/FitChatgpt";
import HonestyChatgpt from "@/components/HonestyChatgpt";
import HowWeStartChatgpt from "@/components/HowWeStartChatgpt";
import FaqChatgpt from "@/components/FaqChatgpt";
import FinalCtaChatgpt from "@/components/FinalCtaChatgpt";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { FAQS } from "@/lib/chatgptHirdetes";

/* Segment landing: the AI sales system for service businesses that advertise
   in ChatGPT. Not a niche page and not a PPC-management page — ChatGPT Ads is
   the front of the funnel; what Atrium sells is what happens after the click.
   Indexable, in the sitemap, FAQPage schema below. */

const TITLE = "ChatGPT hirdetés szolgáltató cégeknek — AI értékesítési rendszer";
const DESCRIPTION =
  "2026 augusztusától a ChatGPT-ben is megjelennek hirdetések Magyarországon. Az Atrium AI értékesítési rendszere a ChatGPT-ből érkező érdeklődőt percek alatt visszahívja, lefoglalja az időpontot, és megmutatja, mi lett a hirdetési költésből.";

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
      <FitChatgpt />
      <HonestyChatgpt />
      <HowWeStartChatgpt />
      <FaqChatgpt />
      <FinalCtaChatgpt />
      <Footer />
    </div>
  );
}
