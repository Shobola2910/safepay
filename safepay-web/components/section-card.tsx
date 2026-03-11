import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionCardProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
};

export function SectionCard({
  title,
  subtitle,
  children,
  className,
  action,
}: SectionCardProps) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl",
        className,
      )}
    >
      {(title || subtitle || action) && (
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            {title ? <h3 className="text-lg font-semibold text-white">{title}</h3> : null}
            {subtitle ? <p className="mt-1 text-sm text-white/60">{subtitle}</p> : null}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
