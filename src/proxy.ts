import { NextResponse, type NextRequest } from "next/server";

/* Maintenance break.

   While MAINTENANCE is true every page answers with the maintenance notice
   below, except the routes that must keep working:
   - the booking pages, so a visitor who already has a link can still book;
   - /adatvedelem and /aszf, because the booking form's consent points at the
     privacy notice and it has to stay reachable;
   - /api/* (excluded by the matcher), which carries the booking submit, the
     Retell / ElevenLabs call webhooks and the inbound email hook — blocking
     it would take the voice agents and the booking flow down with the site;
   - static files and Next assets (also excluded by the matcher).

   The notice goes out as 503 with Retry-After, so search engines treat it as
   a temporary outage and keep the indexed pages instead of replacing them.

   To end the break: set MAINTENANCE to false and deploy.

   MAINTENANCE_PATHS takes single pages down while the rest of the site stays
   up — the same notice, the same 503. Exact matches only. Empty now: the root
   carries the new landing, so there is nothing left to hold back. */
const MAINTENANCE = false;
const MAINTENANCE_PATHS: string[] = [];

const OPEN_PATHS = ["/foglalas", "/chatgpt-hirdetes/foglalas", "/adatvedelem", "/aszf"];

const PAGE = `<!doctype html>
<html lang="hu">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Karbantartás · Atrium</title>
<style>
  :root { --bone:#F5F2ED; --ink:#010E1E; --stone:#8C8579; --signal:#6DBC61; }
  * { box-sizing: border-box; }
  html, body { margin: 0; height: 100%; }
  body {
    display: flex; align-items: center; justify-content: center;
    padding: 32px 20px; background: var(--bone); color: var(--ink);
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  main { max-width: 520px; text-align: center; }
  .brand { font-weight: 600; font-size: 22px; letter-spacing: -0.02em; }
  .brand i { display: inline-block; width: 7px; height: 7px; margin-left: 2px; border-radius: 50%; background: var(--signal); }
  h1 { margin: 34px 0 0; font-size: clamp(28px, 6vw, 40px); line-height: 1.1; letter-spacing: -0.025em; font-weight: 650; }
  p { margin: 16px 0 0; font-size: 16.5px; line-height: 1.6; color: rgba(1,14,30,0.7); }
  .cta {
    display: inline-block; margin-top: 28px; padding: 14px 26px; border-radius: 14px;
    background: var(--ink); color: var(--bone); font-weight: 600; font-size: 15px; text-decoration: none;
  }
  .cta:hover { opacity: 0.92; }
  .note { margin-top: 26px; font-size: 14px; color: var(--stone); }
  .note a { color: inherit; }
</style>
</head>
<body>
<main>
  <div class="brand">Atrium<i></i></div>
  <h1>Karbantartás miatt rövid időre szünetelünk.</h1>
  <p>Az oldalt épp frissítjük, hamarosan újra elérhető lesz.</p>
  <a class="cta" href="/foglalas">Időpontfoglalás addig is</a>
  <p class="note">Kérdése van? Írjon nekünk: <a href="mailto:info@atriumscaling.com">info@atriumscaling.com</a></p>
</main>
</body>
</html>`;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // /direct was this landing's address while it was being built, and it went
  // out in links and bookmarks. It now lives at the root, so the old address
  // sends people there permanently instead of 404-ing.
  if (pathname === "/direct") {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }
  const pageDown = MAINTENANCE_PATHS.includes(pathname);
  if (!MAINTENANCE && !pageDown) return NextResponse.next();
  if (!pageDown && OPEN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return NextResponse.next();
  }
  return new NextResponse(PAGE, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "retry-after": "3600",
      "cache-control": "no-store",
    },
  });
}

export const config = {
  // Everything except API routes, Next assets and files with an extension
  // (favicon, robots.txt, sitemap.xml, images, fonts).
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
