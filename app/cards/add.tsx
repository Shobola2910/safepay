import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { Card } from '@/components/ui/Card';
import { StateMessageCard } from '@/components/ui/StateMessageCard';
import { colors, spacing, typography } from '@/constants/theme';

export default function AddCardScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Add a bank card</Text>
      <Text style={styles.subtitle}>Scan your card or enter the details manually. SafePay stores only encrypted payment tokens.</Text>
      <Card>
        <View style={styles.scanRow}>
          <View style={styles.scanBox}><Ionicons name="scan" size={28} color={colors.primary} /></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.scanTitle}>Quick scan</Text>
            <Text style={styles.scanMeta}>Use your camera to capture card details instantly.</Text>
          </View>
          <Button title="Scan" full={false} variant="secondary" />
        </View>
      </Card>
      <InputField label="Cardholder name" placeholder="Enter cardholder name" />
      <InputField label="Card number" placeholder="1234 5678 9012 3456" />
      <View style={styles.row}>
        <View style={{ flex: 1 }}><InputField label="Expiry date" placeholder="09/29" /></View>
        <View style={{ width: 10 }} />
        <View style={{ flex: 1 }}><InputField label="CVV" placeholder="123" secureTextEntry /></View>
      </View>
      <InputField label="Billing address" placeholder="Street, city, postal code" />
      <StateMessageCard title="Encrypted card storage" description="Card data is tokenized before it reaches your wearable devices." tone="info" />
      <Button title="Add Card" onPress={() => router.push('/cards/verify')} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  scanRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  scanBox: {
    width: 62,
    height: 62,
    borderRadius: 20,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scanTitle: { color: colors.text, fontWeight: '800', marginBottom: 4 },
  scanMeta: { color: colors.textSecondary, fontSize: 13, lineHeight: 18 },
  row: { flexDirection: 'row' }
});
