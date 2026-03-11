import { Search, UserCircle2 } from "lucide-react";

export function Topbar() {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/60 md:w-[380px]">
        <Search className="size-4" />
        <input
          className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
          placeholder="Search cards, devices, merchants..."
        />
      </label>

      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
        <UserCircle2 className="size-5" />
        Ismoilbek Shorustamov
      </div>
    </div>
  );
}
