import { StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SettingsRow } from '@/components/settings/SettingsRow';
import { colors, spacing, typography } from '@/constants/theme';

export default function SettingsScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Fine-tune security, notifications, appearance, and support preferences.</Text>
      <Card>
        <SectionHeader title="Account" />
        <SettingsRow icon="person-outline" title="Profile" value="Verified" />
        <SettingsRow icon="card-outline" title="Payment methods" />
        <SettingsRow icon="watch-outline" title="Wearable devices" />
        <SettingsRow icon="shield-checkmark-outline" title="Security center" value="Strong" />
      </Card>
      <Card>
        <SectionHeader title="Preferences" />
        <SettingsRow icon="notifications-outline" title="Notifications" value="On" />
        <SettingsRow icon="language-outline" title="Language" value="English" />
        <SettingsRow icon="moon-outline" title="Appearance" value="Dark" />
        <SettingsRow icon="help-circle-outline" title="Help & Support" />
      </Card>
      <Text style={styles.link} onPress={() => router.push('/support')}>Open Help Center</Text>
      <Text style={styles.link} onPress={() => router.push('/security')}>Open Security Center</Text>
      <Text style={styles.link} onPress={() => router.push('/profile')}>Open Profile</Text>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  link: { color: colors.primary, fontWeight: '700', marginBottom: 10 }
});
