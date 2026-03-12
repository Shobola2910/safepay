import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { AppScreen } from '@/components/layout/AppScreen';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { colors, spacing, typography } from '@/constants/theme';

export default function PaymentSuccessScreen() {
  return (
    <AppScreen scroll={false}>
      <View style={styles.container}>
        <View style={styles.iconWrap}><Ionicons name="checkmark" size={38} color={colors.white} /></View>
        <Text style={styles.title}>Payment approved</Text>
        <Text style={styles.subtitle}>Your wearable payment was completed successfully.</Text>

        <Card>
          <Text style={styles.amount}>$4.80</Text>
          <Text style={styles.meta}>Caffelito Coffee • Today, 09:48 AM</Text>
          <Text style={styles.meta}>Card used: Mastercard •••• 4410</Text>
          <Text style={styles.meta}>Device used: SafeWatch Pro</Text>
        </Card>

        <Button title="View Receipt" />
        <Button title="Share Receipt" variant="secondary" />
        <Button title="Report Issue" variant="ghost" />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  iconWrap: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: spacing.lg
  },
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', textAlign: 'center' },
  subtitle: { color: colors.textSecondary, marginTop: 10, marginBottom: spacing.xl, textAlign: 'center' },
  amount: { color: colors.text, fontSize: 34, fontWeight: '800', textAlign: 'center', marginBottom: 10 },
  meta: { color: colors.textSecondary, textAlign: 'center', marginBottom: 8 }
});
