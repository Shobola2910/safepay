import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { SafePayLogo } from '@/components/branding/SafePayLogo';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { colors, spacing, typography } from '@/constants/theme';

export default function SignUpScreen() {
  return (
    <AppScreen>
      <View style={styles.header}>
        <SafePayLogo />
        <Text style={styles.title}>Create your SecurePay account</Text>
        <Text style={styles.subtitle}>Set up your wearable payment control center in under two minutes.</Text>
      </View>

      <InputField label="Full name" placeholder="Enter your full name" icon={<Ionicons name="person-outline" size={18} color={colors.textMuted} />} />
      <InputField label="Phone number" placeholder="+998 90 123 45 67" icon={<Ionicons name="call-outline" size={18} color={colors.textMuted} />} />
      <InputField label="Email" placeholder="you@example.com" icon={<Ionicons name="mail-outline" size={18} color={colors.textMuted} />} />
      <InputField label="Password" placeholder="Create a secure password" secureTextEntry icon={<Ionicons name="lock-closed-outline" size={18} color={colors.textMuted} />} />
      <InputField label="Confirm password" placeholder="Repeat your password" secureTextEntry icon={<Ionicons name="shield-checkmark-outline" size={18} color={colors.textMuted} />} />

      <View style={styles.checkboxRow}>
        <View style={styles.checkbox}>
          <Ionicons name="checkmark" size={14} color={colors.white} />
        </View>
        <Text style={styles.checkText}>I agree to the Terms, Privacy Policy, and secure card tokenization rules.</Text>
      </View>

      <Button title="Create Account" onPress={() => router.push('/otp')} />
      <Text style={styles.footer}>
        Already have an account? <Text style={styles.link} onPress={() => router.push('/login')}>Sign in</Text>
      </Text>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: { marginBottom: spacing.lg, marginTop: spacing.sm },
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.lg, marginBottom: 8 },
  subtitle: { color: colors.textSecondary, lineHeight: 22 },
  checkboxRow: { flexDirection: 'row', gap: 10, marginBottom: spacing.lg },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2
  },
  checkText: { flex: 1, color: colors.textSecondary, lineHeight: 20, fontSize: 13 },
  footer: { textAlign: 'center', color: colors.textSecondary, marginTop: spacing.sm },
  link: { color: colors.primary, fontWeight: '700' }
});
