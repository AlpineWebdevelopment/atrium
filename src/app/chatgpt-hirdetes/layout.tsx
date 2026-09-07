import { Bricolage_Grotesque, Figtree } from "next/font/google";

/* This landing runs on its own type pairing — Bricolage Grotesque for
   headlines, Figtree for body — loaded only on this route. The variables are
   picked up by the .page--chatgpt-hirdetes overrides in globals.css; the nav
   in the root layout keeps the site fonts. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage-src",
  display: "swap",
});
const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree-src",
  display: "swap",
});

export default function ChatgptHirdetesLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${bricolage.variable} ${figtree.variable} cg-fonts`}>{children}</div>;
}
