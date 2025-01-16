import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardContent } from "@/components/dashboard-content";

export function DashboardShell() {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      {/* Page content */}
      <main className="flex-1 overflow-y-auto bg-background p-4">
        <DashboardHeader />
        <div className="mt-4">
          <DashboardContent />
        </div>
      </main>
    </div>
  );
}
