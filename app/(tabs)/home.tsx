import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { DeviceStatusCard } from '@/components/devices/DeviceStatusCard';
import { Card } from '@/components/ui/Card';
import { CardCarousel } from '@/components/cards/CardCarousel';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { QuickAction } from '@/components/ui/QuickAction';
import { MetricCard } from '@/components/ui/MetricCard';
import { TransactionItem } from '@/components/activity/TransactionItem';
import { StateMessageCard } from '@/components/ui/StateMessageCard';
import { colors, spacing, typography } from '@/constants/theme';
import { transactions, user } from '@/data/mock';

export default function HomeScreen() {
  return (
    <AppScreen>
      <View style={styles.header}>
        <View>
          <Text style={styles.kicker}>Good morning</Text>
          <Text style={styles.name}>{user.name}</Text>
        </View>
        <View style={styles.notif}>
          <Ionicons name="notifications-outline" size={20} color={colors.text} onPress={() => router.push('/notifications')} />
        </View>
      </View>

      <DeviceStatusCard />
      <SectionHeader title="Default payment card" action="Manage" />
      <CardCarousel />

      <SectionHeader title="Quick actions" />
      <View style={styles.quickGrid}>
        <QuickAction label="Add Card" icon={<Ionicons name="add" size={20} color={colors.primary} />} onPress={() => router.push('/cards/add')} />
        <QuickAction label="Pair Device" icon={<Ionicons name="bluetooth" size={20} color={colors.primary} />} onPress={() => router.push('/devices/pair')} />
        <QuickAction label="Freeze Device" icon={<Ionicons name="snow" size={20} color={colors.primary} />} onPress={() => router.push('/devices/control')} />
        <QuickAction label="Transactions" icon={<Ionicons name="time" size={20} color={colors.primary} />} onPress={() => router.push('/activity')} />
      </View>

      <Card>
        <SectionHeader title="Spending summary" />
        <View style={styles.metricRow}>
          <MetricCard label="This week" value="$46.20" helper="12 payments" />
          <View style={{ width: 10 }} />
          <MetricCard label="Daily limit" value="$250" helper="78% remaining" />
        </View>
      </Card>

      <StateMessageCard title="Smart alert" description="Your ring is connected and ready to pay. Low-risk transit mode is active." tone="success" />

      <Card>
        <SectionHeader title="Recent transactions" action="See all" />
        {transactions.slice(0, 3).map((item) => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </Card>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.md, marginBottom: spacing.md },
  kicker: { color: colors.textSecondary, fontSize: 13 },
  name: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: 4 },
  notif: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: colors.surfaceSoft,
    borderWidth: 1,
    borderColor: colors.stroke,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quickGrid: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' },
  metricRow: { flexDirection: 'row' }
});
