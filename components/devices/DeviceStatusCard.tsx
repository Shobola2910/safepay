import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@/components/ui/Card';
import { StatusPill } from '@/components/ui/StatusPill';
import { colors } from '@/constants/theme';
import { devices, cards } from '@/data/mock';

export function DeviceStatusCard() {
  const device = devices[0];
  const card = cards.find((item) => item.id === device.assignedCardId);

  return (
    <Card>
      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Connected device</Text>
          <Text style={styles.title}>{device.name}</Text>
        </View>
        <StatusPill label={device.status} tone="success" />
      </View>
      <View style={styles.metrics}>
        <View style={styles.metricBlock}>
          <Text style={styles.metricValue}>{device.battery}%</Text>
          <Text style={styles.metricLabel}>Battery</Text>
        </View>
        <View style={styles.metricBlock}>
          <Text style={styles.metricValue}>{device.signal}</Text>
          <Text style={styles.metricLabel}>Signal</Text>
        </View>
        <View style={styles.metricBlock}>
          <Text style={styles.metricValue}>{card?.brand}</Text>
          <Text style={styles.metricLabel}>Assigned card</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 },
  label: { color: colors.textSecondary, fontSize: 12, marginBottom: 6 },
  title: { color: colors.text, fontSize: 20, fontWeight: '800' },
  metrics: { flexDirection: 'row', justifyContent: 'space-between' },
  metricBlock: { flex: 1 },
  metricValue: { color: colors.text, fontWeight: '800', fontSize: 16, marginBottom: 4 },
  metricLabel: { color: colors.textSecondary, fontSize: 12 }
});
