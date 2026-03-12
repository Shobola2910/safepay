import { StyleSheet, Text } from 'react-native';
import { AppScreen } from '@/components/layout/AppScreen';
import { Card } from '@/components/ui/Card';
import { NotificationItem } from '@/components/notifications/NotificationItem';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { colors, spacing, typography } from '@/constants/theme';
import { notifications } from '@/data/mock';

export default function NotificationsScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.subtitle}>Payment approvals, suspicious activity, battery warnings, and device events appear here.</Text>
      <Card>
        <SectionHeader title="Priority updates" />
        {notifications.map((item) => (
          <NotificationItem key={item.id} item={item} />
        ))}
      </Card>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md }
});
