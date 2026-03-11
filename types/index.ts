export type CardStatus = "active" | "frozen" | "expired";
export type DeviceStatus = "connected" | "inactive" | "needs_sync";
export type TransactionStatus = "completed" | "pending" | "failed";

export type PaymentCard = {
  id: string;
  holder: string;
  last4: string;
  brand: "Visa" | "Mastercard";
  type: "Virtual" | "Physical";
  status: CardStatus;
  color: string;
  spendLimit: number;
};

export type Device = {
  id: string;
  name: string;
  kind: "Ring" | "Watch" | "Phone";
  status: DeviceStatus;
  battery: number;
  lastSync: string;
};

export type Transaction = {
  id: string;
  merchant: string;
  category: string;
  amount: number;
  currency: string;
  date: string;
  method: "Ring" | "Watch" | "QR" | "Card";
  status: TransactionStatus;
};

export type DashboardStats = {
  totalSpent: number;
  monthlyVolume: number;
  activeDevices: number;
  successRate: number;
};
