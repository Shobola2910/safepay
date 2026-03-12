# SafePay Mobile Code Map

## App routing
- `app/index.tsx` – redirects to splash
- `app/(auth)/*` – splash, onboarding, sign up, login, OTP
- `app/(tabs)/*` – main tab navigation: Home, Cards, Devices, Activity, Settings
- `app/cards/*` – add, verify, manage cards
- `app/devices/*` – pair device, device details, wearable control center
- `app/payments/*` – payment success and receipt
- `app/notifications.tsx` – alert center
- `app/security.tsx` – security center
- `app/support.tsx` – help & support
- `app/profile.tsx` – profile and account state

## Reusable UI system
- `components/ui/Button.tsx` – primary, secondary, ghost, danger buttons
- `components/ui/InputField.tsx` – shared text/password inputs
- `components/ui/OtpInput.tsx` – OTP boxes
- `components/ui/StatusPill.tsx` – success/warning/danger/info state chips
- `components/ui/StateMessageCard.tsx` – loading/success/warning/error style messaging blocks
- `components/ui/MetricCard.tsx` – dashboard metric widget
- `components/ui/QuickAction.tsx` – shortcut button tiles
- `components/ui/SearchBar.tsx` – activity search field
- `components/ui/ToggleRow.tsx` – settings/security toggles
- `components/ui/TabSwitcher.tsx` – segmented controls
- `components/ui/Card.tsx` – common premium surface wrapper

## Feature components
- `components/cards/*` – payment card carousel and stylized payment cards
- `components/devices/*` – connected device status and wearable hero mockups
- `components/activity/*` – transactions and spending chart
- `components/notifications/*` – notification list item
- `components/settings/*` – settings row layout

## Design system
- `constants/theme.ts` – colors, gradients, spacing, radius, typography
- `data/mock.ts` – demo user, cards, devices, transactions, notifications
- `types/index.ts` – shared app data models
