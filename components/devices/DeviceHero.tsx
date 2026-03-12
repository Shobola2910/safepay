import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, gradients, radius, spacing } from '@/constants/theme';

export function DeviceHero({ type = 'Ring', title = 'SafeRing X1', subtitle = 'Connected and ready to pay' }: { type?: 'Ring' | 'Watch'; title?: string; subtitle?: string }) {
  const isRing = type === 'Ring';
  return (
    <LinearGradient colors={gradients.card} style={styles.card}>
      <View style={styles.orbit}>
        <LinearGradient colors={gradients.glow} style={styles.glow} />
        {isRing ? (
          <View style={styles.ringOuter}>
            <View style={styles.ringInner} />
          </View>
        ) : (
          <View style={styles.watchBody}>
            <View style={styles.watchFace}>
              <Ionicons name="lock-closed" size={26} color={colors.primary} />
            </View>
          </View>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: radius.lg,
    padding: spacing.xl,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.stroke
  },
  orbit: {
    width: 180,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center'
  },
  glow: {
    position: 'absolute',
    width: 170,
    height: 100,
    borderRadius: 100,
    bottom: 16
  },
  ringOuter: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 16,
    borderColor: '#133B83',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ringInner: { width: 16, height: 16, borderRadius: 8, backgroundColor: colors.primary },
  watchBody: {
    width: 120,
    height: 120,
    borderRadius: 32,
    backgroundColor: '#0C1830',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.stroke
  },
  watchFace: {
    width: 74,
    height: 74,
    borderRadius: 24,
    backgroundColor: '#081322',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: { color: colors.text, fontWeight: '800', fontSize: 22, marginTop: 12 },
  subtitle: { color: colors.textSecondary, marginTop: 6, textAlign: 'center' }
});
