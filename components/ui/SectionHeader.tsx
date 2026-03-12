import { StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '@/constants/theme';

export function SectionHeader({ title, action }: { title: string; action?: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {action ? <Text style={styles.action}>{action}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  title: {
    color: colors.text,
    fontWeight: '800',
    fontSize: typography.subtitle
  },
  action: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: typography.caption
  }
});
