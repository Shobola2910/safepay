import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { OtpInput } from '@/components/ui/OtpInput';
import { StateMessageCard } from '@/components/ui/StateMessageCard';
import { colors, spacing, typography } from '@/constants/theme';

export default function VerifyCardScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Verify your card</Text>
      <Text style={styles.subtitle}>Your bank sent a one-time code to confirm that this payment method belongs to you.</Text>
      <Card>
        <Text style={styles.sectionTitle}>Bank verification</Text>
        <Text style={styles.sectionMeta}>Enter the secure code to activate this card for wearable payments.</Text>
        <OtpInput digits={4} />
        <Button title="Complete Verification" onPress={() => router.push('/cards/manage')} />
      </Card>
      <StateMessageCard title="Verification pending" description="Most card checks finish in under 30 seconds. Processing may take longer for some banks." tone="warning" />
      <StateMessageCard title="Card added successfully" description="Once verified, you can assign this card to your ring or watch instantly." tone="success" />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  sectionTitle: { color: colors.text, fontWeight: '800', fontSize: 18, marginBottom: 8 },
  sectionMeta: { color: colors.textSecondary, lineHeight: 20, marginBottom: spacing.md }
});
