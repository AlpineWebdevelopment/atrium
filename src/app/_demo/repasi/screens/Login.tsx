"use client";

import Link from "next/link";
import { APP_NAME } from "../lib/data";
import { Szoveglogo } from "../ui/Shell";
import { BASE } from "../ui/nav";

/* Static sign-in screen. The inputs are real inputs so the card looks alive,
   but nothing is read from them — the button is a link into the console. */
export default function Login() {
  return (
    <div className="flex min-h-full items-center justify-center px-6 py-16">
      <div className="w-full max-w-[352px]">
        <div className="mb-7 text-center">
          <Szoveglogo meret={26} />
        </div>

        <div className="a-card p-6">
          <h1 className="text-[15px] font-medium">Bejelentkezés</h1>
          <p className="mt-1 text-[13px] text-(--a-muted)">
            Adja meg a fiókjához tartozó adatokat.
          </p>

          <div className="mt-5 space-y-3.5">
            <label className="block">
              <span className="mb-1.5 block text-[12px] text-(--a-muted)">E-mail cím</span>
              <input
                type="email"
                className="a-input"
                defaultValue="norbert@atlas.example"
                autoComplete="off"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-[12px] text-(--a-muted)">Jelszó</span>
              <input type="password" className="a-input" defaultValue="demo-jelszo" autoComplete="off" />
            </label>
          </div>

          <Link href={`${BASE}/attekintes`} className="a-btn a-btn-primary mt-5 w-full">
            Bejelentkezés
          </Link>

          <p className="mt-4 text-center text-[12px] text-(--a-muted)">
            Elfelejtett jelszó esetén keresse a rendszergazdát.
          </p>
        </div>

        <p className="mt-5 text-center text-[12px] text-(--a-muted)">
          {APP_NAME} — demó környezet, kitalált adatokkal.
        </p>
      </div>
    </div>
  );
}
