import { BellDot } from "lucide-react";

import { Badge } from "@/components/badge";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="text-sm font-medium text-cyan-300">{eyebrow}</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65 md:text-base">
          {subtitle}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Badge tone="blue">Live demo mode</Badge>
        <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">
          <BellDot className="size-4" />
          Alerts
        </button>
      </div>
    </div>
  );
}
