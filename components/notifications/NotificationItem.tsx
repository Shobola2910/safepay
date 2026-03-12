import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '@/constants/theme';
import { NotificationModel } from '@/types';

const levels = {
  info: { color: colors.primary, bg: colors.primarySoft, icon: 'notifications' as const },
  success: { color: colors.success, bg: colors.successSoft, icon: 'checkmark-done' as const },
  warning: { color: colors.warning, bg: colors.warningSoft, icon: 'warning' as const },
  danger: { color: colors.danger, bg: colors.dangerSoft, icon: 'shield' as const }
};

export function NotificationItem({ item }: { item: NotificationModel }) {
  const tone = levels[item.level];
  return (
    <View style={styles.row}>
      <View style={[styles.iconWrap, { backgroundColor: tone.bg }]}>
        <Ionicons name={tone.icon} size={18} color={tone.color} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.stroke
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: { color: colors.text, fontWeight: '700', marginBottom: 4 },
  body: { color: colors.textSecondary, fontSize: 13, lineHeight: 18 },
  time: { color: colors.textMuted, fontSize: 12 }
});
