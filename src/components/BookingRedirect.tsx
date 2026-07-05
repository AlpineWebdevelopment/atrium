"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

/* Every "Foglaljon időpontot" CTA (button or link) and every #kapcsolat link
   navigates to the /foglalas booking page. Mounted once in the root layout so
   it works on every page — no need to give each CTA its own href. */
export default function BookingRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const go = () => {
      if (pathname !== "/foglalas") router.push("/foglalas");
    };
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const el = (e.target as HTMLElement)?.closest("a, button") as
        | HTMLAnchorElement
        | HTMLButtonElement
        | null;
      if (!el) return;
      const href = (el as HTMLAnchorElement).getAttribute?.("href") ?? "";
      const text = (el.textContent ?? "").trim().toLowerCase();
      const isCta = href.includes("#kapcsolat") || text.startsWith("foglaljon");
      if (isCta) {
        e.preventDefault();
        go();
      }
    }
    document.addEventListener("click", onClick);
    window.addEventListener("atrium:open-booking", go as EventListener);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("atrium:open-booking", go as EventListener);
    };
  }, [router, pathname]);

  return null;
}
