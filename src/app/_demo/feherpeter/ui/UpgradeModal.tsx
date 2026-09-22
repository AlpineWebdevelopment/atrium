"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import type { TierId } from "../data/types";
import { useStore } from "../lib/store";
import { seatsLeft, tierLevel } from "../lib/access";
import { Button, Modal } from "./primitives";

/* One upgrade modal for the whole app. Any locked thing calls
   `openUpgrade("halado")` and the modal explains what that tier adds over the
   viewer's current one. For Belső kör it also shows the remaining seats. */

const Ctx = createContext<(tier: TierId) => void>(() => {});

export function useUpgrade() {
  return useContext(Ctx);
}

export function UpgradeProvider({ children }: { children: ReactNode }) {
  const [tier, setTier] = useState<TierId | null>(null);
  const open = useCallback((t: TierId) => setTier(t), []);
  const close = useCallback(() => setTier(null), []);
  const { tiers, myTier, config, role } = useStore();

  const target = tiers.find((t) => t.id === tier);
  const myLevel = tierLevel(tiers, myTier ?? undefined);
  const left = seatsLeft(config.innerCircleSeats, config.innerCircleTaken);
  const isGuest = role === "vendeg";

  return (
    <Ctx.Provider value={open}>
      {children}
      <Modal open={!!target} onClose={close} title={target ? (isGuest ? `Csatlakozz: ${target.name}` : `Váltás: ${target.name}`) : ""}>
        {target && (
          <div className="space-y-5">
            <p className="text-(--fp-muted-fg)">{target.tagline}</p>

            <div>
              <p className="fp-label">{isGuest ? "Mit kapsz" : myLevel < target.level ? "Mit ad hozzá a mostani szintedhez" : "Mit tartalmaz"}</p>
              <ul className="space-y-2">
                {(isGuest ? target.inclusions : target.adds).map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 flex-none text-(--fp-gold)" aria-hidden="true" />
                    {a}
                  </li>
                ))}
                {!isGuest &&
                  tiers
                    .filter((t) => t.level > myLevel && t.level < target.level)
                    .flatMap((t) => t.adds)
                    .map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm">
                        <Check size={16} className="mt-0.5 flex-none text-(--fp-gold)" aria-hidden="true" />
                        {a}
                      </li>
                    ))}
              </ul>
            </div>

            {target.id === "belso" && (
              <p className="rounded-(--fp-radius) bg-(--fp-secondary) px-4 py-3 text-sm">
                A Belső kör létszáma {config.innerCircleSeats} fő, mert a kiscsoportos alkalomnak valódi mérete van.{" "}
                <strong className="text-(--fp-gold)">{left} szabad hely</strong> van.
              </p>
            )}

            <div className="flex flex-col gap-3 border-t border-(--fp-border) pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm">
                <span className="fp-display text-xl">{target.priceLabel}</span>
                <span className="ml-2 text-xs text-(--fp-muted-fg)">szemléltető ár</span>
              </p>
              <Button onClick={close}>{isGuest ? "Csatlakozom" : "Váltok erre a szintre"}</Button>
            </div>
            <p className="text-xs text-(--fp-muted-fg)">Demo — a valódi verzióban itt fizetés és számlázás történik.</p>
          </div>
        )}
      </Modal>
    </Ctx.Provider>
  );
}
