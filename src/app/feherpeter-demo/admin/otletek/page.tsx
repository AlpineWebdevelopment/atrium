import type { Metadata } from "next";
import AdminOtletek from "../../../_demo/feherpeter/screens/AdminOtletek";

export const metadata: Metadata = { title: "Ötletek · Admin" };

export default function Page() {
  return <AdminOtletek />;
}
