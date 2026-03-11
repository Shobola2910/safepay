import { Badge } from "@/components/badge";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Transaction } from "@/types";

type TransactionListProps = {
  items: Transaction[];
  compact?: boolean;
};

function statusTone(status: Transaction["status"]) {
  if (status === "completed") return "green" as const;
  if (status === "pending") return "yellow" as const;
  return "red" as const;
}

export function TransactionList({ items, compact = false }: TransactionListProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-4 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/40">
        <div>Merchant</div>
        <div>Date</div>
        <div>Method</div>
        <div className="text-right">Amount</div>
      </div>

      <div className="divide-y divide-white/8">
        {items.slice(0, compact ? 4 : items.length).map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-4 px-4 py-4 text-sm text-white/80"
          >
            <div>
              <div className="font-medium text-white">{item.merchant}</div>
              <div className="mt-1 text-xs text-white/45">{item.category}</div>
            </div>
            <div className="self-center text-white/65">{formatDate(item.date)}</div>
            <div className="self-center">
              <div>{item.method}</div>
              <div className="mt-1">
                <Badge tone={statusTone(item.status)}>{item.status}</Badge>
              </div>
            </div>
            <div className="self-center text-right font-medium text-white">
              {formatCurrency(item.amount, item.currency)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
