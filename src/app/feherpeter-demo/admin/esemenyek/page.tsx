import type { Metadata } from "next";
import AdminEsemenyek from "../../../_demo/feherpeter/screens/AdminEsemenyek";

export const metadata: Metadata = { title: "Események · Admin" };

export default function Page() {
  return <AdminEsemenyek />;
}
