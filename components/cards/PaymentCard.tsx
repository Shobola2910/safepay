import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, radius, spacing } from '@/constants/theme';
import { CardModel } from '@/types';

export function PaymentCard({ card }: { card: CardModel }) {
  return (
    <LinearGradient colors={[card.colorA, card.colorB]} style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.brand}>{card.brand}</Text>
        <Ionicons name="shield-checkmark" size={18} color={colors.white} />
      </View>
      <Text style={styles.nickname}>{card.nickname}</Text>
      <Text style={styles.number}>••••  ••••  ••••  {card.last4}</Text>
      <View style={[styles.row, { alignItems: 'flex-end' }]}>
        <View>
          <Text style={styles.metaLabel}>CARDHOLDER</Text>
          <Text style={styles.metaValue}>{card.holder}</Text>
        </View>
        <View>
          <Text style={styles.metaLabel}>EXPIRES</Text>
          <Text style={styles.metaValue}>{card.expiry}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 290,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginRight: spacing.md,
    minHeight: 180,
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  brand: { color: colors.white, fontWeight: '800', fontSize: 18 },
  nickname: { color: 'rgba(255,255,255,0.72)', fontSize: 13, marginTop: 10 },
  number: { color: colors.white, fontSize: 20, fontWeight: '700', letterSpacing: 1.2, marginVertical: 18 },
  metaLabel: { color: 'rgba(255,255,255,0.6)', fontSize: 10, marginBottom: 4 },
  metaValue: { color: colors.white, fontSize: 12, fontWeight: '700' }
});
