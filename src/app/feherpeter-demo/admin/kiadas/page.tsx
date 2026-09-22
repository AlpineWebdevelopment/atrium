import type { Metadata } from "next";
import AdminKiadas from "../../../_demo/feherpeter/screens/AdminKiadas";

export const metadata: Metadata = { title: "Kiadás · Admin" };

export default function Page() {
  return <AdminKiadas />;
}
