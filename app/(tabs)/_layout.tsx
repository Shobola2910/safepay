import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '@/constants/theme';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: '#08111F',
          borderTopColor: 'rgba(255,255,255,0.06)',
          height: 82,
          paddingBottom: 16,
          paddingTop: 10
        }
      }}
    >
      {[
        ['home', 'home-outline', 'Home'],
        ['cards', 'card-outline', 'Cards'],
        ['devices', 'hardware-chip-outline', 'Devices'],
        ['activity', 'stats-chart-outline', 'Activity'],
        ['settings', 'settings-outline', 'Settings']
      ].map(([name, icon, title]) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color, size }) => <Ionicons name={icon as any} size={size} color={color} />
          }}
        />
      ))}
    </Tabs>
  );
}
