import { StyleSheet, Text, View } from 'react-native';
import { AppScreen } from '@/components/layout/AppScreen';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatusPill } from '@/components/ui/StatusPill';
import { colors, spacing, typography } from '@/constants/theme';
import { user } from '@/data/mock';

export default function ProfileScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Verification status, contact info, preferences, and membership details.</Text>
      <Card>
        <View style={styles.hero}>
          <View style={styles.avatar}><Text style={styles.avatarText}>I</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.meta}>{user.email}</Text>
            <Text style={styles.meta}>{user.phone}</Text>
          </View>
          <StatusPill label="Verified" tone="success" />
        </View>
      </Card>
      <Card>
        <SectionHeader title="Account status" />
        <Text style={styles.item}>Plan: <Text style={styles.value}>{user.plan}</Text></Text>
        <Text style={styles.item}>Wearable payments: <Text style={styles.value}>Active</Text></Text>
        <Text style={styles.item}>Preferred language: <Text style={styles.value}>English</Text></Text>
        <Text style={styles.item}>Transaction notifications: <Text style={styles.value}>Enabled</Text></Text>
      </Card>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  hero: { flexDirection: 'row', gap: spacing.md, alignItems: 'center' },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarText: { color: colors.primary, fontWeight: '800', fontSize: 30 },
  name: { color: colors.text, fontSize: 20, fontWeight: '800', marginBottom: 4 },
  meta: { color: colors.textSecondary, marginBottom: 4 },
  item: { color: colors.textSecondary, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.stroke },
  value: { color: colors.text, fontWeight: '700' }
});
