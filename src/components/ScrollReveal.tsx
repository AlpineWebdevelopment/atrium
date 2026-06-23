"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));

    // Elements already visible on load appear instantly, no animation
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("reveal--instant", "visible");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: "0px 0px 60px 0px" }
    );

    els.forEach((el) => {
      if (!el.classList.contains("visible")) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
