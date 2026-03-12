import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafePayLogo } from '@/components/branding/SafePayLogo';
import { colors, gradients } from '@/constants/theme';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => router.replace('/onboarding'), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={gradients.app} style={styles.container}>
      <View style={styles.glow} />
      <SafePayLogo large showTagline />
      <Text style={styles.loading}>Securing your wearable wallet...</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bg },
  glow: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 999,
    backgroundColor: 'rgba(47,128,255,0.12)',
    shadowColor: colors.primary,
    shadowOpacity: 0.4,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 0 }
  },
  loading: {
    marginTop: 24,
    color: colors.textSecondary,
    fontSize: 14,
    letterSpacing: 0.4
  }
});
