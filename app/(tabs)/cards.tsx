import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { CardCarousel } from '@/components/cards/CardCarousel';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { StateMessageCard } from '@/components/ui/StateMessageCard';
import { colors, spacing, typography } from '@/constants/theme';
import { cards } from '@/data/mock';

export default function CardsScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Card Management</Text>
      <Text style={styles.subtitle}>Add, verify, freeze, and assign cards to your wearables.</Text>
      <CardCarousel />
      <View style={styles.actions}>
        <Button title="Add Card" full={false} onPress={() => router.push('/cards/add')} icon={<Ionicons name="add" size={18} color={colors.white} />} />
        <Button title="Manage" full={false} variant="secondary" onPress={() => router.push('/cards/manage')} />
      </View>

      <StateMessageCard title="Secure card storage" description="All payment methods are tokenized and protected with banking-grade encryption." tone="info" />

      <Card>
        <SectionHeader title="Saved cards" />
        {cards.map((card) => (
          <View key={card.id} style={styles.row}>
            <View>
              <Text style={styles.cardTitle}>{card.nickname}</Text>
              <Text style={styles.cardMeta}>{card.brand} •••• {card.last4}</Text>
            </View>
            <Text style={styles.limit}>{card.limit}</Text>
          </View>
        ))}
      </Card>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  actions: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.stroke },
  cardTitle: { color: colors.text, fontWeight: '700' },
  cardMeta: { color: colors.textSecondary, marginTop: 4 },
  limit: { color: colors.textSecondary, fontWeight: '700' }
});
