import { StyleSheet, Text, View } from 'react-native';
import { AppScreen } from '@/components/layout/AppScreen';
import { CardCarousel } from '@/components/cards/CardCarousel';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ToggleRow } from '@/components/ui/ToggleRow';
import { StateMessageCard } from '@/components/ui/StateMessageCard';
import { colors, spacing, typography } from '@/constants/theme';

export default function ManageCardsScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Manage cards</Text>
      <Text style={styles.subtitle}>Set defaults, edit nicknames, freeze cards, and control spending limits.</Text>
      <CardCarousel />
      <Card>
        <SectionHeader title="Card controls" />
        <ToggleRow title="Set as default card" subtitle="Used automatically for your primary wearable" enabled />
        <ToggleRow title="Card active" subtitle="Turn off to freeze this card instantly" enabled />
        <ToggleRow title="Spend limit enabled" subtitle="Daily wearable cap: $250" enabled />
        <View style={styles.row}>
          <Button title="Edit nickname" full={false} variant="secondary" />
          <Button title="Remove card" full={false} variant="danger" />
        </View>
      </Card>
      <StateMessageCard title="Card drawer preview" description="Use a slide-up detail drawer for card limits, receipts, and device assignment rules." tone="info" />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  row: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.sm }
});
