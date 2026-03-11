import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/badge";
import { PageHeader } from "@/components/page-header";
import { SectionCard } from "@/components/section-card";

const securityOptions = [
  {
    title: "Biometric re-authentication",
    description: "Require biometric confirmation before sensitive actions.",
    enabled: true,
  },
  {
    title: "Auto-freeze on anomaly",
    description: "Temporarily lock card token after suspicious activity.",
    enabled: true,
  },
  {
    title: "Merchant risk screening",
    description: "Flag unusual merchants before approval.",
    enabled: false,
  },
];

export default function SettingsPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Configuration"
        title="Settings"
        subtitle="Control security, transaction policies, notifications, and deployment-ready environment placeholders."
      />

      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Environment" subtitle="Starter values prepared for production deployment">
          <div className="space-y-3 text-sm">
            <div className="rounded-2xl bg-white/5 p-4 text-white/70">
              NEXT_PUBLIC_APP_NAME=<span className="font-semibold text-white">SafePay</span>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 text-white/70">
              DATABASE_URL=<span className="font-semibold text-white/60">add when backend is ready</span>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 text-white/70">
              NEXTAUTH_SECRET=<span className="font-semibold text-white/60">add during auth phase</span>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Security toggles" subtitle="UX pattern for future backend controls">
          <div className="space-y-3">
            {securityOptions.map((option) => (
              <div
                key={option.title}
                className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="font-medium text-white">{option.title}</div>
                  <p className="mt-1 text-sm text-white/60">{option.description}</p>
                </div>
                <Badge tone={option.enabled ? "green" : "gray"}>
                  {option.enabled ? "Enabled" : "Disabled"}
                </Badge>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
