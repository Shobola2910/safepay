export type DeviceStatus = 'Ready to pay' | 'Connected' | 'Frozen' | 'Offline' | 'Low battery' | 'Lost mode';

export type CardModel = {
  id: string;
  brand: string;
  nickname: string;
  last4: string;
  colorA: string;
  colorB: string;
  holder: string;
  expiry: string;
  frozen?: boolean;
  limit?: string;
};

export type DeviceModel = {
  id: string;
  name: string;
  type: 'Ring' | 'Watch';
  battery: number;
  status: DeviceStatus;
  signal: string;
  firmware: string;
  assignedCardId: string;
};

export type TransactionModel = {
  id: string;
  merchant: string;
  category: string;
  amount: string;
  status: 'Approved' | 'Declined' | 'Pending';
  date: string;
  time: string;
  device: string;
  card: string;
  location: string;
};

export type NotificationModel = {
  id: string;
  title: string;
  body: string;
  level: 'info' | 'success' | 'warning' | 'danger';
  time: string;
};
