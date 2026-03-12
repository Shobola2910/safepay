import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { DeviceHero } from '@/components/devices/DeviceHero';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { StatusPill } from '@/components/ui/StatusPill';
import { colors, spacing, typography } from '@/constants/theme';
import { devices } from '@/data/mock';

export default function DevicesScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Wearable Devices</Text>
      <Text style={styles.subtitle}>Pair a ring or watch, assign cards, and control payment access instantly.</Text>
      <DeviceHero />
      <View style={styles.rowButtons}>
        <Button title="Pair Device" full={false} onPress={() => router.push('/devices/pair')} />
        <Button title="Control Center" full={false} variant="secondary" onPress={() => router.push('/devices/control')} />
      </View>

      <Card>
        <SectionHeader title="Connected wearables" />
        {devices.map((device) => (
          <View key={device.id} style={styles.deviceRow}>
            <View>
              <Text style={styles.deviceTitle}>{device.name}</Text>
              <Text style={styles.deviceMeta}>{device.type} • Battery {device.battery}% • Firmware {device.firmware}</Text>
            </View>
            <StatusPill label={device.status} tone={device.status === 'Ready to pay' ? 'success' : 'info'} />
          </View>
        ))}
      </Card>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  rowButtons: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  deviceRow: { paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.stroke },
  deviceTitle: { color: colors.text, fontWeight: '700', marginBottom: 4 },
  deviceMeta: { color: colors.textSecondary, fontSize: 13 }
});
