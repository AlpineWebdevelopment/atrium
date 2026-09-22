import {
  BookOpen,
  Calendar,
  CheckSquare,
  Gauge,
  Layers,
  Lightbulb,
  MessageCircle,
  MessageSquare,
  Rows3,
  Settings2,
  Users,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { BASE } from "../data/config";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const MEMBER_NAV: NavItem[] = [
  { href: `${BASE}/kozosseg`, label: "Közösség", icon: MessageSquare },
  { href: `${BASE}/feladatok`, label: "Heti feladat", icon: CheckSquare },
  { href: `${BASE}/kurzusok`, label: "Kurzusok", icon: BookOpen },
  { href: `${BASE}/naptar`, label: "Naptár", icon: Calendar },
  { href: `${BASE}/tagok`, label: "Tagok", icon: Users },
  { href: `${BASE}/kerdezz`, label: "Kérdezz Pétertől", icon: MessageCircle },
  { href: `${BASE}/profil`, label: "Profil", icon: UserRound },
];

export const ADMIN_NAV: NavItem[] = [
  { href: `${BASE}/admin`, label: "Áttekintés", icon: Gauge },
  { href: `${BASE}/admin/kurzusok`, label: "Kurzusok", icon: BookOpen },
  { href: `${BASE}/admin/szintek`, label: "Szintek és rangok", icon: Layers },
  { href: `${BASE}/admin/feladatok`, label: "Heti feladatok", icon: CheckSquare },
  { href: `${BASE}/admin/kiadas`, label: "Kiadás", icon: Rows3 },
  { href: `${BASE}/admin/tagok`, label: "Tagok", icon: Users },
  { href: `${BASE}/admin/esemenyek`, label: "Események", icon: Settings2 },
  { href: `${BASE}/admin/otletek`, label: "Ötletek", icon: Lightbulb },
];
