import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { SafePayLogo } from '@/components/branding/SafePayLogo';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { Card } from '@/components/ui/Card';
import { colors, spacing, typography } from '@/constants/theme';

export default function LoginScreen() {
  return (
    <AppScreen>
      <View style={styles.header}>
        <SafePayLogo />
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to manage your cards, wearables, and payment security.</Text>
      </View>

      <InputField label="Email or phone" placeholder="Enter email or phone number" icon={<Ionicons name="person-outline" size={18} color={colors.textMuted} />} />
      <InputField label="Password" placeholder="Enter your password" secureTextEntry icon={<Ionicons name="lock-closed-outline" size={18} color={colors.textMuted} />} />
      <Text style={styles.forgot}>Forgot password?</Text>

      <Button title="Sign In" onPress={() => router.replace('/home')} />
      <Button title="Continue with Face ID" variant="secondary" icon={<Ionicons name="scan-circle-outline" size={20} color={colors.text} />} />

      <Card>
        <Text style={styles.socialTitle}>Or continue with</Text>
        <View style={styles.socialRow}>
          <View style={styles.socialBtn}><Ionicons name="logo-google" size={20} color={colors.text} /></View>
          <View style={styles.socialBtn}><Ionicons name="logo-apple" size={20} color={colors.text} /></View>
          <View style={styles.socialBtn}><Ionicons name="logo-facebook" size={20} color={colors.text} /></View>
        </View>
      </Card>

      <Text style={styles.footer}>
        Need an account? <Text style={styles.link} onPress={() => router.push('/signup')}>Create one</Text>
      </Text>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: { marginBottom: spacing.lg, marginTop: spacing.sm },
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.lg, marginBottom: 8 },
  subtitle: { color: colors.textSecondary, lineHeight: 22 },
  forgot: { color: colors.primary, textAlign: 'right', fontWeight: '700', marginBottom: spacing.lg },
  socialTitle: { color: colors.textSecondary, textAlign: 'center', marginBottom: spacing.md },
  socialRow: { flexDirection: 'row', justifyContent: 'center', gap: spacing.md },
  socialBtn: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: colors.surfaceSoft,
    borderWidth: 1,
    borderColor: colors.stroke,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: { textAlign: 'center', color: colors.textSecondary, marginTop: spacing.sm },
  link: { color: colors.primary, fontWeight: '700' }
});
