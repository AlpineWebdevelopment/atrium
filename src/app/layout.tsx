import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atrium — Értékesítési rendszerek szolgáltató cégeknek",
  description:
    "Az Atrium egy magyar nyelvű AI-alapú értékesítési rendszer — minden hívást fogad, minden időpontot lefoglal, minden érdeklődőt utánkövet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
