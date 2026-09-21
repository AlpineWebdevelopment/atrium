import type { Metadata } from "next";
import { Onest, Geist, Geist_Mono, Lexend_Exa, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
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
/* Landing type (trial) — Lexend Exa (display) + Plus Jakarta Sans (body) +
   DM Mono (mono). Same register as the synkai.hu set tried before (wide
   display, geometric body) without reading as the same fonts. Drives the
   --font-display / --font-body / --font-mono tokens and the per-page
   overrides in globals.css, so every landing picks it up at once. Onest and
   Geist stay loaded for the surfaces not migrated (blog, legal pages, demos)
   via the Tailwind font-onest / font-geist utilities. */
const lexendExa = Lexend_Exa({
  subsets: ["latin", "latin-ext"], // latin-ext required for Hungarian glyphs (ő, ű, etc.)
  variable: "--font-lexend-exa-src",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta-src",
  display: "swap",
});
// DM Mono ships static weights only, so they are listed.
const dmMono = DM_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-dm-mono-src",
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
  title: { default: "Atrium — Értékesítési rendszerek szolgáltató cégeknek", template: "%s · Atrium" },
  description:
    "Az Atrium egy magyar nyelvű AI-alapú értékesítési rendszer — minden hívást fogad, minden időpontot lefoglal, minden érdeklődőt utánkövet.",
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
      className={`${onest.variable} ${geist.variable} ${geistMono.variable} ${lexendExa.variable} ${jakarta.variable} ${dmMono.variable}`}
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
