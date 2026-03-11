import Link from "next/link";
import { ArrowRight, CreditCard, Radio, ReceiptText } from "lucide-react";

const actions = [
  {
    href: "/cards",
    title: "Add a new card",
    description: "Connect virtual or physical funding sources.",
    icon: CreditCard,
  },
  {
    href: "/devices",
    title: "Pair wearable",
    description: "Attach ring or watch to the payment profile.",
    icon: Radio,
  },
  {
    href: "/transactions",
    title: "Review payments",
    description: "Track successful, pending, and failed taps.",
    icon: ReceiptText,
  },
];

export function QuickActions() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Link
            key={action.href}
            href={action.href}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/8"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <Icon className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{action.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">{action.description}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
              Open <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
