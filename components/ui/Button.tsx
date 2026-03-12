import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, gradients, radius, spacing } from '@/constants/theme';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

export function Button({
  title,
  onPress,
  variant = 'primary',
  icon,
  full = true
}: {
  title: string;
  onPress?: () => void;
  variant?: Variant;
  icon?: ReactNode;
  full?: boolean;
}) {
  const content = (
    <View style={[styles.content, !full && styles.inline]}>
      {icon ? <View style={styles.icon}>{icon}</View> : null}
      <Text style={[styles.label, variant !== 'primary' && styles.labelAlt]}>{title}</Text>
    </View>
  );

  if (variant === 'primary' || variant === 'danger') {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => [styles.wrap, !full && styles.fit, pressed && styles.pressed]}>
        <LinearGradient colors={variant === 'danger' ? gradients.danger : gradients.primary} style={styles.gradient}>
          {content}
        </LinearGradient>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.wrap, !full && styles.fit, variant === 'secondary' ? styles.secondary : styles.ghost, pressed && styles.pressed]}>
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    borderRadius: radius.md,
    marginBottom: spacing.sm,
    overflow: 'hidden'
  },
  fit: { width: 'auto', alignSelf: 'flex-start' },
  gradient: {
    borderRadius: radius.md,
    minHeight: 54,
    justifyContent: 'center'
  },
  secondary: {
    minHeight: 54,
    justifyContent: 'center',
    borderRadius: radius.md,
    backgroundColor: colors.surfaceSoft,
    borderWidth: 1,
    borderColor: colors.stroke
  },
  ghost: {
    minHeight: 54,
    justifyContent: 'center',
    borderRadius: radius.md,
    backgroundColor: 'transparent'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg
  },
  inline: { paddingRight: spacing.xl },
  label: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700'
  },
  labelAlt: {
    color: colors.text
  },
  icon: { marginRight: 10 },
  pressed: { opacity: 0.9 }
});
