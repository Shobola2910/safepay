import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '@/constants/theme';

export function MetricCard({ label, value, helper }: { label: string; value: string; helper?: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      {helper ? <Text style={styles.helper}>{helper}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.surfaceSoft,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.stroke,
    padding: spacing.md
  },
  label: { color: colors.textSecondary, fontSize: 12, marginBottom: 8 },
  value: { color: colors.text, fontSize: 22, fontWeight: '800' },
  helper: { color: colors.textMuted, fontSize: 12, marginTop: 6 }
});
