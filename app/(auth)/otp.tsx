import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { OtpInput } from '@/components/ui/OtpInput';
import { StateMessageCard } from '@/components/ui/StateMessageCard';
import { colors, spacing, typography } from '@/constants/theme';

export default function OtpScreen() {
  return (
    <AppScreen>
      <View style={styles.header}>
        <Text style={styles.title}>Secure verification required</Text>
        <Text style={styles.subtitle}>Enter the 6-digit code sent to your phone to finish setting up SafePay.</Text>
      </View>
      <Card>
        <OtpInput digits={6} />
        <Button title="Confirm Code" onPress={() => router.replace('/home')} />
        <Text style={styles.resend}>Didn’t receive the code? Resend in 00:32</Text>
      </Card>
      <StateMessageCard title="Protected by tokenization" description="Your payment cards are never stored directly on your wearable device." tone="info" />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: { marginTop: spacing.lg, marginBottom: spacing.lg },
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginBottom: 8 },
  subtitle: { color: colors.textSecondary, lineHeight: 22 },
  resend: { textAlign: 'center', color: colors.textMuted, marginTop: spacing.sm }
});
