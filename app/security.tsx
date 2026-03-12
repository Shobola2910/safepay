import { StyleSheet, Text, View } from 'react-native';
import { AppScreen } from '@/components/layout/AppScreen';
import { Card } from '@/components/ui/Card';
import { ToggleRow } from '@/components/ui/ToggleRow';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { StateMessageCard } from '@/components/ui/StateMessageCard';
import { colors, spacing, typography } from '@/constants/theme';

export default function SecurityScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Security Center</Text>
      <Text style={styles.subtitle}>The core trust screen for biometrics, 2FA, fraud protection, and emergency controls.</Text>
      <StateMessageCard title="Fraud detection active" description="Real-time monitoring is enabled for duplicate taps, unusual locations, and rapid repeat attempts." tone="success" />
      <Card>
        <SectionHeader title="Access protection" />
        <ToggleRow title="Biometric login" subtitle="Use Face ID or fingerprint to open SafePay" enabled />
        <ToggleRow title="Two-factor authentication" subtitle="Require a second step for risky actions" enabled />
        <ToggleRow title="Transaction confirmation threshold" subtitle="Ask for confirmation above $50" enabled />
      </Card>
      <Card>
        <SectionHeader title="Emergency actions" />
        <View style={styles.row}>
          <Button title="Freeze all cards" full={false} variant="danger" />
          <Button title="Freeze wearable" full={false} variant="danger" />
        </View>
        <Button title="Emergency block" variant="danger" />
      </Card>
      <Card>
        <SectionHeader title="Trusted sessions" />
        <Text style={styles.line}>iPhone 15 Pro • Current session</Text>
        <Text style={styles.line}>MacBook Safari • Last active 2 hours ago</Text>
      </Card>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  row: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  line: { color: colors.textSecondary, paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.stroke }
});
