import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Watch } from "lucide-react";

const features = [
  "Tap-to-pay with smart ring or smartwatch",
  "Instant card freeze and device control",
  "Live transaction tracking and fraud alerts",
  "Vercel-ready dashboard architecture",
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 md:px-6">
      <header className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
            <ShieldCheck className="size-6" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/45">SafePay</div>
            <div className="text-base font-semibold text-white">Wearable Payments</div>
          </div>
        </div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Open dashboard
          <ArrowRight className="size-4" />
        </Link>
      </header>

      <section className="grid flex-1 items-center gap-8 py-12 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles className="size-4" />
            Fast, secure, wearable-first checkout
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            SafePay web app for modern contactless payments.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            This starter project gives you a polished landing page, admin dashboard, API routes,
            cards, devices, transactions, and settings pages so you can push directly to GitHub
            and deploy on Vercel.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Launch admin panel
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore features
            </a>
          </div>

          <div id="features" className="mt-10 grid gap-3 sm:grid-cols-2">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-4 text-sm text-white/80">
                <CheckCircle2 className="size-5 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
          <div className="rounded-[1.6rem] border border-cyan-400/15 bg-slate-950/50 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/45">Primary device</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">SafePay Ring Alpha</h3>
              </div>
              <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-300">
                <Watch className="size-6" />
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-linear-to-br from-emerald-500 to-cyan-500 p-5 text-slate-950">
              <div className="text-sm font-medium">Virtual Card</div>
              <div className="mt-6 text-3xl font-semibold tracking-[0.24em]">**** 2847</div>
              <div className="mt-6 flex items-center justify-between text-sm font-medium">
                <span>SafePay Core</span>
                <span>Active</span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Spend</div>
                <div className="mt-2 text-xl font-semibold text-white">$2,480</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Success</div>
                <div className="mt-2 text-xl font-semibold text-white">99.2%</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Alerts</div>
                <div className="mt-2 text-xl font-semibold text-white">03</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
