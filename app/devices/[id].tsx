import { StyleSheet, Text } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { DeviceHero } from '@/components/devices/DeviceHero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { colors, spacing, typography } from '@/constants/theme';
import { devices } from '@/data/mock';

export default function DeviceDetailsScreen() {
  const { id } = useLocalSearchParams();
  const device = devices.find((item) => item.id === id) || devices[0];

  return (
    <AppScreen>
      <Text style={styles.title}>Device details</Text>
      <Text style={styles.subtitle}>Review connection quality, battery, firmware, and assigned payment card.</Text>
      <DeviceHero type={device.type} title={device.name} subtitle={`${device.status} • Battery ${device.battery}%`} />
      <Card>
        <SectionHeader title="Device info" />
        <Text style={styles.row}>Connection strength: <Text style={styles.highlight}>{device.signal}</Text></Text>
        <Text style={styles.row}>Firmware version: <Text style={styles.highlight}>{device.firmware}</Text></Text>
        <Text style={styles.row}>Assigned card: <Text style={styles.highlight}>Visa •••• 1832</Text></Text>
      </Card>
      <Button title="Rename device" variant="secondary" />
      <Button title="Open control center" onPress={() => router.push('/devices/control')} />
      <Button title="Disconnect wearable" variant="danger" />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  row: { color: colors.textSecondary, marginBottom: spacing.md, fontSize: 15 },
  highlight: { color: colors.text, fontWeight: '700' }
});
