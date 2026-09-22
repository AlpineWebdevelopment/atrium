import type { Metadata } from "next";
import Feladatok from "../../_demo/feherpeter/screens/Feladatok";

export const metadata: Metadata = { title: "Heti feladat" };

export default function Page() {
  return <Feladatok />;
}
