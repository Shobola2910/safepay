import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '@/constants/theme';
import { TransactionModel } from '@/types';

export function TransactionItem({ item }: { item: TransactionModel }) {
  const tones = item.status === 'Approved' ? colors.success : item.status === 'Declined' ? colors.danger : colors.warning;
  const iconName = item.category === 'Transport' ? 'train' : item.category === 'Food' ? 'cafe' : 'bag-handle';

  return (
    <View style={styles.row}>
      <View style={styles.iconWrap}>
        <Ionicons name={iconName} size={18} color={colors.primary} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.merchant}>{item.merchant}</Text>
        <Text style={styles.meta}>{item.date} • {item.time} • {item.device}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={[styles.status, { color: tones }]}>{item.status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.stroke
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: radius.md,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center'
  },
  merchant: { color: colors.text, fontWeight: '700', marginBottom: 4 },
  meta: { color: colors.textSecondary, fontSize: 12 },
  amount: { color: colors.text, fontWeight: '800', marginBottom: 4 },
  status: { fontSize: 12, fontWeight: '700' }
});
