import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "green" | "yellow" | "red" | "gray" | "blue";
};

const toneMap = {
  green: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/20",
  yellow: "bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/20",
  red: "bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/20",
  gray: "bg-white/8 text-white/70 ring-1 ring-white/10",
  blue: "bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/20",
};

export function Badge({ children, tone = "gray" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        toneMap[tone],
      )}
    >
      {children}
    </span>
  );
}
