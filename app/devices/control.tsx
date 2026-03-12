import { StyleSheet, Text, View } from 'react-native';
import { AppScreen } from '@/components/layout/AppScreen';
import { DeviceHero } from '@/components/devices/DeviceHero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ToggleRow } from '@/components/ui/ToggleRow';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StateMessageCard } from '@/components/ui/StateMessageCard';
import { colors, spacing, typography } from '@/constants/theme';
import { activityLog } from '@/data/mock';

export default function DeviceControlScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Wearable Control Center</Text>
      <Text style={styles.subtitle}>Freeze or unfreeze your device, enable Lost Mode, and manage tap payment behavior.</Text>
      <DeviceHero type="Ring" title="SafeRing X1" subtitle="Ready state • Protected by biometric confirmation" />
      <StateMessageCard title="Security status" description="Your wearable is active and protected. No suspicious access was detected." tone="success" />
      <Card>
        <SectionHeader title="Controls" />
        <ToggleRow title="Tap payments" subtitle="Allow payments from this wearable" enabled />
        <ToggleRow title="Low Power Mode" subtitle="Extend battery life during commute" enabled={false} />
        <ToggleRow title="Transit Mode" subtitle="Fast taps for public transport" enabled />
        <ToggleRow title="Lost Mode" subtitle="Protect this wearable if it goes missing" enabled={false} />
      </Card>
      <View style={styles.row}>
        <Button title="Freeze device" full={false} variant="danger" />
        <Button title="Unfreeze" full={false} variant="secondary" />
      </View>
      <Card>
        <SectionHeader title="Activity log" />
        {activityLog.map((item) => (
          <Text key={item} style={styles.log}>{item}</Text>
        ))}
      </Card>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  row: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  log: { color: colors.textSecondary, paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.stroke }
});
