import { DashboardShell } from "@/components/dashboard-shell";

export default function Home() {
  return <DashboardShell />;
}

export type Transaction = {
  id: string;
  type: "income" | "expense";
  amount: number;
  description: string;
};
