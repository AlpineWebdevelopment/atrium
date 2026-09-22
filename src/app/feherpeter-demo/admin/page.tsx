import type { Metadata } from "next";
import AdminAttekintes from "../../_demo/feherpeter/screens/AdminAttekintes";

export const metadata: Metadata = { title: "Admin" };

export default function Page() {
  return <AdminAttekintes />;
}
