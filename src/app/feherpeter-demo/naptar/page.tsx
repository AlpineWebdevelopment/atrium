import type { Metadata } from "next";
import Naptar from "../../_demo/feherpeter/screens/Naptar";

export const metadata: Metadata = { title: "Naptár" };

export default function Page() {
  return <Naptar />;
}
