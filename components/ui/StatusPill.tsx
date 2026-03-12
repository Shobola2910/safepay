import { StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '@/constants/theme';

const mapping = {
  success: { bg: colors.successSoft, text: colors.success },
  warning: { bg: colors.warningSoft, text: colors.warning },
  danger: { bg: colors.dangerSoft, text: colors.danger },
  info: { bg: colors.primarySoft, text: colors.primary }
};

export function StatusPill({ label, tone = 'info' }: { label: string; tone?: keyof typeof mapping }) {
  return (
    <View style={[styles.pill, { backgroundColor: mapping[tone].bg }]}>
      <Text style={[styles.label, { color: mapping[tone].text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: radius.pill,
    alignSelf: 'flex-start'
  },
  label: {
    fontSize: 12,
    fontWeight: '700'
  }
});
