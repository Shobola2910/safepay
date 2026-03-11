import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string;
  hint: string;
  className?: string;
};

export function StatCard({ label, value, hint, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-5",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/60">{label}</span>
        <div className="rounded-full bg-white/10 p-2 text-white/70">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
      <div className="mt-5 text-3xl font-semibold tracking-tight text-white">{value}</div>
      <p className="mt-2 text-sm text-emerald-300">{hint}</p>
    </div>
  );
}
