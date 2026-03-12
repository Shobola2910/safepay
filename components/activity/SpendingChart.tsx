import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '@/constants/theme';

const bars = [28, 56, 42, 72, 49, 86, 64];

export function SpendingChart() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Monthly spending</Text>
      <Text style={styles.value}>$184.60</Text>
      <View style={styles.chart}>
        {bars.map((bar, index) => (
          <View key={index} style={styles.column}>
            <View style={[styles.bar, { height: bar }]} />
          </View>
        ))}
      </View>
      <View style={styles.legend}>
        <Text style={styles.legendText}>Transport 34%</Text>
        <Text style={styles.legendText}>Food 28%</Text>
        <Text style={styles.legendText}>Shopping 22%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceSoft,
    borderWidth: 1,
    borderColor: colors.stroke,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md
  },
  title: { color: colors.textSecondary, fontSize: 12 },
  value: { color: colors.text, fontSize: 28, fontWeight: '800', marginTop: 8, marginBottom: 16 },
  chart: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', height: 110 },
  column: {
    width: '12%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  bar: {
    width: '100%',
    borderRadius: radius.pill,
    backgroundColor: colors.primary
  },
  legend: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 },
  legendText: { color: colors.textSecondary, fontSize: 12 }
});
