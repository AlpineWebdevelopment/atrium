import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Általános Szerződési Feltételek (ÁSZF)",
  description:
    "Az Atrium Általános Szerződési Feltételei — a szolgáltatások nyújtására vonatkozó szerződéses feltételek.",
  alternates: { canonical: "/aszf" },
};

export default function AszfPage() {
  return <LegalDoc slug="aszf" />;
}
