import type { Metadata } from "next";
import Kozosseg from "../../_demo/feherpeter/screens/Kozosseg";

export const metadata: Metadata = { title: "Közösség" };

export default function Page() {
  return <Kozosseg />;
}
