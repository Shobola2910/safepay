import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { DeviceHero } from '@/components/devices/DeviceHero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TabSwitcher } from '@/components/ui/TabSwitcher';
import { StatusPill } from '@/components/ui/StatusPill';
import { StateMessageCard } from '@/components/ui/StateMessageCard';
import { colors, spacing, typography } from '@/constants/theme';

export default function PairDeviceScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Pair a wearable device</Text>
      <Text style={styles.subtitle}>Connect a smart ring or smartwatch with Bluetooth or NFC and assign a default payment card.</Text>
      <TabSwitcher options={['Ring', 'Watch']} active="Ring" />
      <DeviceHero type="Ring" title="Searching for nearby devices" subtitle="Make sure your device is charged and close to your phone." />
      <Card>
        <View style={styles.listRow}>
          <View>
            <Text style={styles.name}>SafeRing X1</Text>
            <Text style={styles.meta}>Strong signal • Supports transit mode</Text>
          </View>
          <StatusPill label="Found" tone="success" />
        </View>
        <View style={styles.listRow}>
          <View>
            <Text style={styles.name}>SafeWatch Pro</Text>
            <Text style={styles.meta}>Good signal • Firmware up to date</Text>
          </View>
          <StatusPill label="Searching" tone="info" />
        </View>
        <View style={styles.listRow}>
          <View>
            <Text style={styles.name}>Ring Prototype 03</Text>
            <Text style={styles.meta}>Weak signal • Retry nearby</Text>
          </View>
          <StatusPill label="Failed" tone="danger" />
        </View>
      </Card>
      <StateMessageCard title="Pairing in progress" description="Search, found, connecting, connected, and failed states are included for real product UX." tone="warning" />
      <Button title="Connect SafeRing X1" onPress={() => router.push('/devices/ring-x1')} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  listRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.stroke },
  name: { color: colors.text, fontWeight: '700' },
  meta: { color: colors.textSecondary, fontSize: 13, marginTop: 4 }
});
