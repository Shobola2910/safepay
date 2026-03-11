import type { ReactNode } from "react";

import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-4 py-6 md:grid-cols-[280px_minmax(0,1fr)] md:px-6">
      <Sidebar />
      <main className="space-y-6">
        <Topbar />
        {children}
      </main>
    </div>
  );
}
