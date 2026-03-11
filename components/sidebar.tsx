"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCard,
  LayoutDashboard,
  Radio,
  ReceiptText,
  Settings,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/cards", label: "Cards", icon: CreditCard },
  { href: "/devices", label: "Devices", icon: Radio },
  { href: "/transactions", label: "Transactions", icon: ReceiptText },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:sticky md:top-6 md:h-[calc(100vh-3rem)]">
      <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
          <ShieldCheck className="size-6" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-white/45">SafePay</div>
          <div className="text-base font-semibold text-white">Admin Console</div>
        </div>
      </div>

      <nav className="mt-6 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                active
                  ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "text-white/70 hover:bg-white/8 hover:text-white",
              )}
            >
              <Icon className="size-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 rounded-3xl border border-cyan-400/15 bg-cyan-400/8 p-4 text-sm text-cyan-100">
        <div className="font-semibold">Vercel-ready starter</div>
        <p className="mt-2 text-cyan-100/75">
          UI, API routes, reusable components, and deployment structure are prepared.
        </p>
      </div>
    </aside>
  );
}
