import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '@/constants/theme';

export function OtpInput({ digits = 6 }: { digits?: number }) {
  return (
    <View style={styles.row}>
      {Array.from({ length: digits }).map((_, index) => (
        <View key={index} style={[styles.box, index === 2 && styles.active]}>
          <Text style={styles.text}>{index < 3 ? index + 1 : ''}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
    gap: spacing.sm
  },
  box: {
    flex: 1,
    height: 62,
    backgroundColor: colors.surfaceSoft,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.stroke,
    alignItems: 'center',
    justifyContent: 'center'
  },
  active: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft
  },
  text: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: '700'
  }
});
