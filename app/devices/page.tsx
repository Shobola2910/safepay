import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/badge";
import { PageHeader } from "@/components/page-header";
import { SectionCard } from "@/components/section-card";
import { devices } from "@/lib/mock-data";

function tone(status: string) {
  if (status === "connected") return "green" as const;
  if (status === "needs_sync") return "yellow" as const;
  return "gray" as const;
}

export default function DevicesPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Wearable ecosystem"
        title="Devices"
        subtitle="Pair and monitor wearable hardware connected to your SafePay payment identity."
      />

      <div className="grid gap-4 xl:grid-cols-3">
        {devices.map((device) => (
          <SectionCard key={device.id} className="h-full">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm text-white/50">{device.kind}</div>
                <h3 className="mt-1 text-xl font-semibold text-white">{device.name}</h3>
              </div>
              <Badge tone={tone(device.status)}>{device.status}</Badge>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm text-white/55">
                  <span>Battery</span>
                  <span>{device.battery}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/8">
                  <div
                    className="h-2 rounded-full bg-cyan-400"
                    style={{ width: `${device.battery}%` }}
                  />
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-sm text-white/65">
                Last sync: {new Date(device.lastSync).toLocaleString("en-GB")}
              </div>
            </div>
          </SectionCard>
        ))}
      </div>

      <SectionCard title="Next phase logic" subtitle="Recommended backend/device features">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Pair by QR or NFC", "Fast device enrollment without manual typing."],
            ["Remote unlink", "Instantly disconnect lost or stolen hardware."],
            ["Firmware health", "Show update availability and sync reliability analytics."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="text-base font-semibold text-white">{title}</div>
              <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </AppShell>
  );
}
