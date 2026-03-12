import { AppScreen } from '@/components/layout/AppScreen';
import { SearchBar } from '@/components/ui/SearchBar';
import { SpendingChart } from '@/components/activity/SpendingChart';
import { Card } from '@/components/ui/Card';
import { TransactionItem } from '@/components/activity/TransactionItem';
import { TabSwitcher } from '@/components/ui/TabSwitcher';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { colors, spacing, typography } from '@/constants/theme';
import { transactions } from '@/data/mock';
import { StyleSheet, Text } from 'react-native';

export default function ActivityScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Transaction History</Text>
      <Text style={styles.subtitle}>Monitor wearable payments in real time with filters, status, and receipts.</Text>
      <SearchBar />
      <TabSwitcher options={['All', 'Transport', 'Food', 'Shopping']} active="All" />
      <SpendingChart />
      <Card>
        <SectionHeader title="Recent activity" action="Sort by newest" />
        {transactions.map((item) => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </Card>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md }
});
