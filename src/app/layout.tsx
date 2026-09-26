import type { Metadata } from "next";
import { Onest, Geist, Geist_Mono, Bebas_Neue, Outfit, Bricolage_Grotesque } from "next/font/google";
import Nav from "@/components/Nav";
import BookingRedirect from "@/components/BookingRedirect";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "latin-ext"], // latin-ext required for Hungarian glyphs (ő, ű, etc.)
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-onest-src",
  display: "swap",
});
const geist = Geist({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist-src",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist-mono-src",
  display: "swap",
});
/* Site type — Bebas Neue (headlines) + Outfit (everything else), the
   hírösweb.hu pairing, on every public surface: landings, blog, legal,
   offers, career, booking. Driven by the --font-headline / --font-display /
   --font-body tokens and the font-headline / font-outfit utilities in
   globals.css. Geist Mono stays the mono face.

   The wordmark keeps the type it always had — Onest by default, Bricolage
   Grotesque on /, /chatgpt-hirdetes and /direct — via --font-logo, which is
   why Onest and Bricolage are still loaded. Onest and Geist also stay for the
   client demos (_demo/*), which keep their own look.

   Bebas Neue is a condensed all-caps face with a single 400 weight;
   globals.css turns weight synthesis off and gives headlines positive
   tracking to suit it. */
const bebas = Bebas_Neue({
  subsets: ["latin", "latin-ext"], // latin-ext required for Hungarian glyphs (ő, ű, etc.)
  weight: "400",
  variable: "--font-bebas-src",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit-src",
  display: "swap",
});
// Wordmark only (the logo's weight is 600).
const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: "600",
  variable: "--font-bricolage-src",
  display: "swap",
});

export const SITE = {
  name: "Atrium",
  url: "https://atriumscaling.com",
  logo: "https://atriumscaling.com/logo.png",
  locale: "hu_HU",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Atrium · Értékesítési rendszerek szolgáltató cégeknek", template: "%s · Atrium" },
  description:
    "Az Atrium egy magyar nyelvű AI-alapú értékesítési rendszer: minden hívást fogad, minden időpontot lefoglal, minden érdeklődőt utánkövet.",
  openGraph: { type: "website", locale: SITE.locale, siteName: SITE.name },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/fav/icon_16x.png", sizes: "16x16", type: "image/png" },
      { url: "/fav/icon_32x.png", sizes: "32x32", type: "image/png" },
      { url: "/fav/icon_48x.png", sizes: "48x48", type: "image/png" },
      { url: "/fav/icon_64x.png", sizes: "64x64", type: "image/png" },
      { url: "/fav/icon_96x.png", sizes: "96x96", type: "image/png" },
      { url: "/fav/icon_128x.png", sizes: "128x128", type: "image/png" },
      { url: "/fav/icon_192x.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/fav/icon_192x.png", sizes: "192x192", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
  };
  return (
    <html
      lang="hu"
      className={`${onest.variable} ${geist.variable} ${geistMono.variable} ${bebas.variable} ${outfit.variable} ${bricolage.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="bg-bone text-ink">
        {/* Dark mode disabled — clear any previously stored preference so the
            site always renders light, even for visitors who toggled it before. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{localStorage.removeItem('theme');document.documentElement.classList.remove('dark')}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','917389961371271');fbq('track','PageView');`,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=917389961371271&ev=PageView&noscript=1" alt="" />
        </noscript>
        <Nav />
        <BookingRedirect />
        {children}
      </body>
    </html>
  );
}
