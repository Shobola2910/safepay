import type { DashboardStats, Device, PaymentCard, Transaction } from "@/types";

export const dashboardStats: DashboardStats = {
  totalSpent: 2480.5,
  monthlyVolume: 18620.2,
  activeDevices: 3,
  successRate: 99.2,
};

export const cards: PaymentCard[] = [
  {
    id: "card_01",
    holder: "Ismoilbek Shorustamov",
    last4: "2847",
    brand: "Visa",
    type: "Virtual",
    status: "active",
    color: "from-emerald-500 to-cyan-500",
    spendLimit: 2000,
  },
  {
    id: "card_02",
    holder: "Ismoilbek Shorustamov",
    last4: "1189",
    brand: "Mastercard",
    type: "Physical",
    status: "frozen",
    color: "from-slate-700 to-slate-900",
    spendLimit: 1200,
  },
];

export const devices: Device[] = [
  {
    id: "dev_01",
    name: "SafePay Ring Alpha",
    kind: "Ring",
    status: "connected",
    battery: 88,
    lastSync: "2026-03-11T08:45:00.000Z",
  },
  {
    id: "dev_02",
    name: "SafePay Watch S1",
    kind: "Watch",
    status: "connected",
    battery: 61,
    lastSync: "2026-03-11T08:10:00.000Z",
  },
  {
    id: "dev_03",
    name: "Merchant Test Phone",
    kind: "Phone",
    status: "needs_sync",
    battery: 37,
    lastSync: "2026-03-10T21:10:00.000Z",
  },
];

export const transactions: Transaction[] = [
  {
    id: "tx_01",
    merchant: "Metro Express",
    category: "Transport",
    amount: 2.5,
    currency: "USD",
    date: "2026-03-11T07:30:00.000Z",
    method: "Ring",
    status: "completed",
  },
  {
    id: "tx_02",
    merchant: "Urban Coffee",
    category: "Cafe",
    amount: 5.8,
    currency: "USD",
    date: "2026-03-10T15:20:00.000Z",
    method: "Watch",
    status: "completed",
  },
  {
    id: "tx_03",
    merchant: "Smart Mart",
    category: "Retail",
    amount: 48.99,
    currency: "USD",
    date: "2026-03-09T19:10:00.000Z",
    method: "QR",
    status: "pending",
  },
  {
    id: "tx_04",
    merchant: "FastFuel",
    category: "Fuel",
    amount: 62.0,
    currency: "USD",
    date: "2026-03-09T11:42:00.000Z",
    method: "Card",
    status: "failed",
  },
  {
    id: "tx_05",
    merchant: "Tashkent Mall",
    category: "Shopping",
    amount: 120.4,
    currency: "USD",
    date: "2026-03-08T13:05:00.000Z",
    method: "Ring",
    status: "completed",
  },
];
