import { AppShell } from "@/components/app-shell";
import { PageHeader } from "@/components/page-header";
import { SectionCard } from "@/components/section-card";
import { TransactionList } from "@/components/transaction-list";
import { transactions } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function TransactionsPage() {
  const completedValue = transactions
    .filter((item) => item.status === "completed")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <AppShell>
      <PageHeader
        eyebrow="Payment flow"
        title="Transactions"
        subtitle="Full history of wearable and alternative checkout events across your SafePay ecosystem."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <SectionCard>
          <div className="text-sm text-white/50">Completed volume</div>
          <div className="mt-3 text-3xl font-semibold text-white">{formatCurrency(completedValue)}</div>
        </SectionCard>
        <SectionCard>
          <div className="text-sm text-white/50">Pending reviews</div>
          <div className="mt-3 text-3xl font-semibold text-white">
            {transactions.filter((item) => item.status === "pending").length}
          </div>
        </SectionCard>
        <SectionCard>
          <div className="text-sm text-white/50">Failed attempts</div>
          <div className="mt-3 text-3xl font-semibold text-white">
            {transactions.filter((item) => item.status === "failed").length}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="All payments" subtitle="Sorted by most recent activity">
        <TransactionList items={transactions} />
      </SectionCard>
    </AppShell>
  );
}
