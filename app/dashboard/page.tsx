import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { QuickActions } from "@/components/quick-actions";
import { SectionCard } from "@/components/section-card";
import { StatCard } from "@/components/stat-card";
import { TransactionList } from "@/components/transaction-list";
import { cards, dashboardStats, devices, transactions } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="SafePay overview"
        title="Payment control center"
        subtitle="Monitor wearable payments, connected devices, card health, and live transaction status from one secure dashboard."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total spent"
          value={formatCurrency(dashboardStats.totalSpent)}
          hint="+12.4% vs last week"
        />
        <StatCard
          label="Monthly volume"
          value={formatCurrency(dashboardStats.monthlyVolume)}
          hint="Strong retail usage"
        />
        <StatCard
          label="Active devices"
          value={String(dashboardStats.activeDevices)}
          hint="1 device needs sync"
        />
        <StatCard
          label="Success rate"
          value={`${dashboardStats.successRate}%`}
          hint="Stable tap performance"
        />
      </div>

      <QuickActions />

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard
          title="Recent transactions"
          subtitle="Latest wearable and QR checkout activity"
        >
          <TransactionList items={transactions} compact />
        </SectionCard>

        <SectionCard title="System summary" subtitle="Quick visibility across payment assets">
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/50">Cards</div>
              <div className="mt-2 text-2xl font-semibold text-white">{cards.length}</div>
              <div className="mt-1 text-sm text-white/60">{cards.filter((c) => c.status === "active").length} active</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/50">Devices</div>
              <div className="mt-2 text-2xl font-semibold text-white">{devices.length}</div>
              <div className="mt-1 text-sm text-white/60">
                {devices.filter((d) => d.status === "connected").length} connected
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/50">Risk alerts</div>
              <div className="mt-2 text-2xl font-semibold text-white">3</div>
              <div className="mt-1 text-sm text-white/60">No critical fraud incidents</div>
            </div>
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
