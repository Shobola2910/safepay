import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '@/constants/theme';

export function TabSwitcher({ options, active }: { options: string[]; active: string }) {
  return (
    <View style={styles.wrap}>
      {options.map((option) => {
        const selected = option === active;
        return (
          <View key={option} style={[styles.tab, selected && styles.active]}>
            <Text style={[styles.text, selected && styles.activeText]}>{option}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceSoft,
    borderRadius: radius.pill,
    padding: 4,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.stroke
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: radius.pill,
    alignItems: 'center'
  },
  active: { backgroundColor: colors.primarySoft },
  text: { color: colors.textSecondary, fontWeight: '700', fontSize: 13 },
  activeText: { color: colors.primary }
});
