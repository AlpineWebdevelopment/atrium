import type { Metadata } from "next";
import AdminSzintek from "../../../_demo/feherpeter/screens/AdminSzintek";

export const metadata: Metadata = { title: "Szintek és rangok · Admin" };

export default function Page() {
  return <AdminSzintek />;
}
