import { ReactNode } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, radius, spacing, typography } from '@/constants/theme';

export function InputField({
  label,
  placeholder,
  secureTextEntry,
  icon,
  value
}: {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  icon?: ReactNode;
  value?: string;
}) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.field}>
        {icon ? <View style={styles.icon}>{icon}</View> : null}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          secureTextEntry={secureTextEntry}
          value={value}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: spacing.md },
  label: {
    color: colors.textSecondary,
    fontSize: typography.caption,
    marginBottom: 8,
    fontWeight: '600'
  },
  field: {
    minHeight: 56,
    backgroundColor: colors.surfaceSoft,
    borderWidth: 1,
    borderColor: colors.stroke,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: { marginRight: 10 },
  input: { flex: 1, color: colors.text, fontSize: typography.body }
});
