import type { Metadata } from "next";
import AdminKurzusok from "../../../_demo/feherpeter/screens/AdminKurzusok";

export const metadata: Metadata = { title: "Kurzusok · Admin" };

export default function Page() {
  return <AdminKurzusok />;
}
