import { StyleSheet, Switch, Text, View } from 'react-native';
import { colors, spacing } from '@/constants/theme';

export function ToggleRow({ title, subtitle, enabled = true }: { title: string; subtitle?: string; enabled?: boolean }) {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <Switch value={enabled} thumbColor={colors.white} trackColor={{ false: '#445470', true: colors.primary }} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.md
  },
  title: { color: colors.text, fontWeight: '700', fontSize: 15 },
  subtitle: { color: colors.textSecondary, marginTop: 4, fontSize: 13 }
});
