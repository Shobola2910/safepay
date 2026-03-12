import { CardModel, DeviceModel, NotificationModel, TransactionModel } from '@/types';

export const user = {
  name: 'Ismoilbek',
  email: 'ismoilbek@safepay.app',
  phone: '+998 90 123 45 67',
  verified: true,
  plan: 'SafePay Plus'
};

export const cards: CardModel[] = [
  {
    id: 'card-1',
    brand: 'Visa',
    nickname: 'Daily Spend',
    last4: '1832',
    colorA: '#173F8F',
    colorB: '#09142C',
    holder: 'ISMOILBEK SHORUSTAMOV',
    expiry: '09/29',
    limit: '$250 / day'
  },
  {
    id: 'card-2',
    brand: 'Mastercard',
    nickname: 'Transit',
    last4: '4410',
    colorA: '#205A4C',
    colorB: '#0B1525',
    holder: 'ISMOILBEK SHORUSTAMOV',
    expiry: '11/28',
    limit: '$120 / day',
    frozen: false
  }
];

export const devices: DeviceModel[] = [
  {
    id: 'ring-x1',
    name: 'SafeRing X1',
    type: 'Ring',
    battery: 82,
    status: 'Ready to pay',
    signal: 'Strong',
    firmware: 'v2.4.1',
    assignedCardId: 'card-1'
  },
  {
    id: 'watch-pro',
    name: 'SafeWatch Pro',
    type: 'Watch',
    battery: 41,
    status: 'Connected',
    signal: 'Good',
    firmware: 'v1.9.7',
    assignedCardId: 'card-2'
  }
];

export const transactions: TransactionModel[] = [
  {
    id: 'tx-1',
    merchant: 'Tashkent Metro',
    category: 'Transport',
    amount: '$0.34',
    status: 'Approved',
    date: 'Today',
    time: '08:14 AM',
    device: 'SafeRing X1',
    card: 'Visa •••• 1832',
    location: 'Yunusobod Line'
  },
  {
    id: 'tx-2',
    merchant: 'Caffelito Coffee',
    category: 'Food',
    amount: '$4.80',
    status: 'Approved',
    date: 'Today',
    time: '09:48 AM',
    device: 'SafeWatch Pro',
    card: 'Mastercard •••• 4410',
    location: 'Tashkent City Mall'
  },
  {
    id: 'tx-3',
    merchant: 'Smart Bazaar',
    category: 'Shopping',
    amount: '$18.50',
    status: 'Approved',
    date: 'Yesterday',
    time: '06:22 PM',
    device: 'SafeRing X1',
    card: 'Visa •••• 1832',
    location: 'Chilonzor'
  },
  {
    id: 'tx-4',
    merchant: 'FastBus Tap',
    category: 'Transport',
    amount: '$0.40',
    status: 'Declined',
    date: 'Yesterday',
    time: '07:05 AM',
    device: 'SafeRing X1',
    card: 'Visa •••• 1832',
    location: 'Bus Route 58'
  }
];

export const notifications: NotificationModel[] = [
  {
    id: 'n1',
    title: 'Payment approved',
    body: 'Your SafeRing X1 paid $4.80 at Caffelito Coffee.',
    level: 'success',
    time: '2 min ago'
  },
  {
    id: 'n2',
    title: 'Low battery detected',
    body: 'SafeWatch Pro is at 19%. Turn on Low Power Mode to continue.',
    level: 'warning',
    time: '18 min ago'
  },
  {
    id: 'n3',
    title: 'Security notice',
    body: 'Biometric login is active. Your account is fully protected.',
    level: 'info',
    time: '1 hr ago'
  },
  {
    id: 'n4',
    title: 'Suspicious activity blocked',
    body: 'A duplicate tap attempt was automatically declined.',
    level: 'danger',
    time: 'Yesterday'
  }
];

export const activityLog = [
  'Tap payments enabled',
  'Default card switched to Visa •••• 1832',
  'Device firmware updated successfully',
  'Lost Mode checked — inactive'
];

export const supportFaq = [
  'How do I freeze my wearable instantly?',
  'How long does card verification take?',
  'What happens if my ring battery is low?',
  'How do I report an unauthorized payment?'
];
