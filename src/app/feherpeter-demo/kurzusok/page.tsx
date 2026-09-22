import type { Metadata } from "next";
import Kurzusok from "../../_demo/feherpeter/screens/Kurzusok";

export const metadata: Metadata = { title: "Kurzusok" };

export default function Page() {
  return <Kurzusok />;
}
