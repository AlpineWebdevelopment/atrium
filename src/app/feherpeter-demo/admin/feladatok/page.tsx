import type { Metadata } from "next";
import AdminFeladatok from "../../../_demo/feherpeter/screens/AdminFeladatok";

export const metadata: Metadata = { title: "Heti feladatok · Admin" };

export default function Page() {
  return <AdminFeladatok />;
}
