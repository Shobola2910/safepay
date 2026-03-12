import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, gradients, typography } from '@/constants/theme';

export function SafePayLogo({ large = false, showTagline = false }: { large?: boolean; showTagline?: boolean }) {
  return (
    <View style={styles.wrap}>
      <View style={[styles.markWrap, large && styles.markWrapLarge]}>
        <LinearGradient colors={gradients.primary} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.mark, large && styles.markLarge]}>
          <View style={styles.ringOuter}>
            <View style={styles.ringInner} />
          </View>
        </LinearGradient>
      </View>
      <Text style={[styles.title, large && styles.titleLarge]}>SafePay</Text>
      {showTagline ? <Text style={styles.tagline}>Tap Smarter. Pay Safer.</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center' },
  markWrap: {
    marginBottom: 14,
    shadowColor: colors.primary,
    shadowOpacity: 0.45,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 }
  },
  markWrapLarge: { marginBottom: 18 },
  mark: {
    width: 84,
    height: 84,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center'
  },
  markLarge: { width: 120, height: 120, borderRadius: 36 },
  ringOuter: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ringInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.white
  },
  title: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '800',
    letterSpacing: 0.4
  },
  titleLarge: { fontSize: 34 },
  tagline: {
    marginTop: 8,
    color: colors.textSecondary,
    fontSize: typography.body
  }
});
