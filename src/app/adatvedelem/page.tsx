import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató",
  description:
    "Az Atrium adatvédelmi tájékoztatója — hogyan kezeljük a személyes adatokat a GDPR és a magyar jog szerint.",
  alternates: { canonical: "/adatvedelem" },
};

export default function AdatvedelemPage() {
  return <LegalDoc slug="adatvedelem" />;
}
