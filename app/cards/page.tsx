import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/badge";
import { PageHeader } from "@/components/page-header";
import { SectionCard } from "@/components/section-card";
import { cards } from "@/lib/mock-data";

export default function CardsPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Funding sources"
        title="Cards & limits"
        subtitle="Manage all funding sources connected to rings, watches, and other SafePay checkout channels."
      />

      <div className="grid gap-4 xl:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`rounded-[2rem] border border-white/10 bg-linear-to-br ${card.color} p-6 text-slate-950 shadow-2xl shadow-black/10`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-medium opacity-80">{card.type} {card.brand}</div>
                <div className="mt-5 text-3xl font-semibold tracking-[0.24em]">**** {card.last4}</div>
              </div>
              <Badge tone={card.status === "active" ? "green" : card.status === "frozen" ? "yellow" : "red"}>{card.status}</Badge>
            </div>

            <div className="mt-10 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] opacity-65">Cardholder</div>
                <div className="mt-1 font-medium">{card.holder}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] opacity-65">Spend limit</div>
                <div className="mt-1 text-lg font-semibold">${card.spendLimit}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionCard title="Card controls" subtitle="Suggested actions for the next backend phase">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Freeze / unfreeze", "Instant card lockdown from dashboard or device risk event."],
            ["Adjust spend limits", "Daily, weekly, and merchant-category level control policies."],
            ["Replace compromised card", "Issue a new virtual token while keeping wearables active."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="text-base font-semibold text-white">{title}</div>
              <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Status summary" subtitle="Current health of your card inventory">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Active", value: cards.filter((c) => c.status === "active").length, tone: "green" },
            { label: "Frozen", value: cards.filter((c) => c.status === "frozen").length, tone: "yellow" },
            { label: "Expired", value: cards.filter((c) => c.status === "expired").length, tone: "red" },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/50">{item.label}</div>
                <Badge tone={item.tone as "green" | "yellow" | "red"}>{item.label}</Badge>
              </div>
              <div className="mt-3 text-3xl font-semibold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </SectionCard>
    </AppShell>
  );
}
