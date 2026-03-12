import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppScreen } from '@/components/layout/AppScreen';
import { Button } from '@/components/ui/Button';
import { DeviceHero } from '@/components/devices/DeviceHero';
import { TabSwitcher } from '@/components/ui/TabSwitcher';
import { colors, spacing, typography } from '@/constants/theme';

const slides = [
  {
    title: 'Pay with a tap from your wearable',
    description: 'Use a smart ring or smartwatch for instant contactless payments in public transport, cafes, and stores.',
    type: 'Ring' as const
  },
  {
    title: 'Move faster with no wallet needed',
    description: 'No card searching. No cash handling. Just a secure tap designed for busy daily life.',
    type: 'Watch' as const
  },
  {
    title: 'Stay fully in control',
    description: 'Freeze your wearable instantly, receive live payment alerts, and activate Lost Mode in one tap.',
    type: 'Ring' as const
  }
];

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);
  const current = slides[step];

  return (
    <AppScreen scroll={false}>
      <View style={styles.container}>
        <View style={styles.top}>
          <TabSwitcher options={['01', '02', '03']} active={`0${step + 1}`} />
          <DeviceHero type={current.type} title="SafePay" subtitle="Tap Smarter. Pay Safer." />
          <Text style={styles.title}>{current.title}</Text>
          <Text style={styles.description}>{current.description}</Text>
        </View>

        <View>
          {step < 2 ? (
            <Button title="Next" icon={<Ionicons name="arrow-forward" size={18} color={colors.white} />} onPress={() => setStep((value) => value + 1)} />
          ) : (
            <>
              <Button title="Get Started" onPress={() => router.push('/signup')} />
              <Button title="Sign In" variant="secondary" onPress={() => router.push('/login')} />
            </>
          )}
          <Text style={styles.skip} onPress={() => router.push('/login')}>Skip</Text>
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', paddingTop: spacing.md },
  top: { flex: 1 },
  title: {
    color: colors.text,
    fontSize: typography.hero,
    fontWeight: '800',
    lineHeight: 38,
    marginBottom: 12
  },
  description: { color: colors.textSecondary, fontSize: 15, lineHeight: 22 },
  skip: { textAlign: 'center', color: colors.textMuted, marginTop: 12, fontWeight: '700' }
});
