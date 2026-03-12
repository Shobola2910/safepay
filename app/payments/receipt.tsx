import { StyleSheet, Text } from 'react-native';
import { AppScreen } from '@/components/layout/AppScreen';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { colors, spacing, typography } from '@/constants/theme';

export default function ReceiptScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Receipt</Text>
      <Text style={styles.subtitle}>A premium receipt layout for sharing, export, and support follow-ups.</Text>
      <Card>
        <SectionHeader title="Payment details" />
        <Text style={styles.row}>Merchant: <Text style={styles.value}>Caffelito Coffee</Text></Text>
        <Text style={styles.row}>Amount: <Text style={styles.value}>$4.80</Text></Text>
        <Text style={styles.row}>Date & time: <Text style={styles.value}>Today, 09:48 AM</Text></Text>
        <Text style={styles.row}>Status: <Text style={styles.value}>Approved</Text></Text>
        <Text style={styles.row}>Device used: <Text style={styles.value}>SafeWatch Pro</Text></Text>
        <Text style={styles.row}>Card used: <Text style={styles.value}>Mastercard •••• 4410</Text></Text>
        <Text style={styles.row}>Location: <Text style={styles.value}>Tashkent City Mall</Text></Text>
        <Text style={styles.row}>Receipt ID: <Text style={styles.value}>SP-4902-1847</Text></Text>
        <Text style={styles.row}>Notes: <Text style={styles.value}>Contactless wearable tap completed normally.</Text></Text>
      </Card>
      <Button title="Share Receipt" />
      <Button title="Report Issue" variant="secondary" />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  row: { color: colors.textSecondary, marginBottom: spacing.md, lineHeight: 22 },
  value: { color: colors.text, fontWeight: '700' }
});
