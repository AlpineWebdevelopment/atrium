"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isNicheSlug } from "@/lib/niches";

/* Landings that ship their own booking page, so the visitor keeps that
   landing's header and footer instead of dropping into the site-wide one. */
const OWN_BOOKING_PAGE = ["chatgpt-hirdetes"];

/* Every "Foglaljon időpontot" CTA (button or link) and every #kapcsolat link
   navigates to the /foglalas booking page. Mounted once in the root layout so
   it works on every page — no need to give each CTA its own href.

   The landing the visitor came from and any UTM parameters on it ride along
   in the query string, so the booking can record which landing produced it
   (source_niche) and the campaign that brought the visitor there. Without
   this every booking arrived labeled "root" and the UTMs were lost on the
   client-side navigation. */
export default function BookingRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const go = () => {
      const slug = pathname.split("/")[1];
      const ownPage = OWN_BOOKING_PAGE.includes(slug);
      const target = ownPage ? `/${slug}/foglalas` : "/foglalas";
      if (pathname === target || pathname === "/foglalas") return;
      const params = new URLSearchParams(window.location.search);
      // A landing with its own booking page states the niche in that route, so
      // only the shared /foglalas needs to be told where the visitor came from.
      if (!ownPage && isNicheSlug(slug) && !params.has("from")) params.set("from", slug);
      const qs = params.toString();
      router.push(qs ? `${target}?${qs}` : target);
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
