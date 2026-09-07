/* FAQ for /chatgpt-hirdetes. Q&A pairs come from src/lib/chatgptHirdetes.ts
   so the page's FAQPage JSON-LD renders the same text. Answers that state a
   fact carry their source link inline. */
"use client";
import { useState } from "react";
import { FAQS, SOURCES } from "@/lib/chatgptHirdetes";

export default function FaqChatgpt() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq cg-faq" id="gyik">
      <div className="wrap">
        <div className="faq__head reveal">
          <span className="dash__eyebrow">Gyakori kérdések</span>
          <h2 className="faq__h">A kérdések, amelyeket a ChatGPT-hirdetésről feltesznek.</h2>
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
                    {f.sources && f.sources.length > 0 && (
                      <p className="cg-faq__src">
                        Forrás:{" "}
                        {f.sources.map((k, j) => (
                          <span key={k}>
                            <a href={SOURCES[k].url} target="_blank" rel="noopener noreferrer">{SOURCES[k].label}</a>
                            {j < f.sources!.length - 1 ? " · " : ""}
                          </span>
                        ))}
                      </p>
                    )}
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
