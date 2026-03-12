import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '@/constants/theme';

const tones = {
  success: { bg: colors.successSoft, color: colors.success, icon: 'checkmark-circle' as const },
  warning: { bg: colors.warningSoft, color: colors.warning, icon: 'warning' as const },
  danger: { bg: colors.dangerSoft, color: colors.danger, icon: 'close-circle' as const },
  info: { bg: colors.primarySoft, color: colors.primary, icon: 'information-circle' as const }
};

export function StateMessageCard({ title, description, tone = 'info' }: { title: string; description: string; tone?: keyof typeof tones }) {
  return (
    <View style={[styles.wrap, { backgroundColor: tones[tone].bg }]}> 
      <Ionicons name={tones[tone].icon} size={20} color={tones[tone].color} />
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, { color: tones[tone].color }]}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    gap: spacing.md,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.stroke
  },
  title: { fontWeight: '800', marginBottom: 4, fontSize: 14 },
  description: { color: colors.textSecondary, fontSize: 13, lineHeight: 18 }
});
