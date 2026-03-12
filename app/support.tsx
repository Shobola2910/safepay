import { StyleSheet, Text } from 'react-native';
import { AppScreen } from '@/components/layout/AppScreen';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { colors, spacing, typography } from '@/constants/theme';
import { supportFaq } from '@/data/mock';

export default function SupportScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>Help & Support</Text>
      <Text style={styles.subtitle}>Fast answers, live support, and security reporting tools built for a financial product.</Text>
      <Card>
        <SectionHeader title="Frequently asked questions" />
        {supportFaq.map((item) => (
          <Text key={item} style={styles.item}>{item}</Text>
        ))}
      </Card>
      <Button title="Start live chat" />
      <Button title="Report lost wearable" variant="secondary" />
      <Button title="Report unauthorized payment" variant="danger" />
      <Card>
        <SectionHeader title="Support tickets" />
        <Text style={styles.item}>#SP-1132 • Battery sync issue • In progress</Text>
        <Text style={styles.item}>#SP-1089 • Card verification follow-up • Resolved</Text>
      </Card>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: typography.title, fontWeight: '800', marginTop: spacing.md },
  subtitle: { color: colors.textSecondary, lineHeight: 22, marginTop: 8, marginBottom: spacing.md },
  item: { color: colors.textSecondary, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.stroke, lineHeight: 20 }
});
