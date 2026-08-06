import {
  Bot,
  Building2,
  Columns3,
  LayoutDashboard,
  Mail,
  ChartColumn,
  Phone,
  Settings,
} from "lucide-react";

/* The demo lives in a private `_demo` folder, so it has no URL of its own.
   Thin route wrappers under src/app/repasi-demo/ mount it here. Every internal
   link is built from this constant — move the wrappers and the whole console
   follows. */
export const BASE = "/repasi-demo";

export const NAV = [
  { href: `${BASE}/attekintes`, cimke: "Áttekintés", ikon: LayoutDashboard },
  { href: `${BASE}/ugyfelek`, cimke: "Ügyfelek", ikon: Building2 },
  { href: `${BASE}/agentek`, cimke: "Agentek", ikon: Bot },
  { href: `${BASE}/hivasok`, cimke: "Hívások", ikon: Phone },
  { href: `${BASE}/uzenetek`, cimke: "Üzenetek", ikon: Mail },
  { href: `${BASE}/crm`, cimke: "CRM", ikon: Columns3 },
  { href: `${BASE}/riportok`, cimke: "Riportok", ikon: ChartColumn },
  { href: `${BASE}/beallitasok`, cimke: "Beállítások", ikon: Settings },
] as const;
