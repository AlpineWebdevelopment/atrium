/* FAQ for /chatgpt-hirdetes. Q&A pairs come from src/lib/chatgptHirdetes.ts
   so the page's FAQPage JSON-LD renders the same text. */
"use client";
import { useState } from "react";
import { FAQS } from "@/lib/chatgptHirdetes";

export default function FaqChatgpt() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq cg-faq" id="gyik">
      <div className="wrap">
        <div className="faq__head reveal">
          <span className="dash__eyebrow cg-eyebrow-txt">Gyakori kérdések</span>
          <h2 className="faq__h">Amit a legtöbben kérdeznek.</h2>
        </div>
        <div className="faq__list reveal" data-delay="1">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={"faq__item" + (isOpen ? " faq__item--open" : "")} key={i}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <svg className="faq__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="faq__a-wrap">
                  <div className="faq__a">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
