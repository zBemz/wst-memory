import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentMemories from "@/components/dashboard/RecentMemories";
import StorageChart from "@/components/dashboard/StorageChart";
import TransactionPanel from "@/components/dashboard/TransactionPanel";
import AiAssistantPanel from "@/components/dashboard/AiAssistantPanel";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <StatsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-6">
          <RecentMemories />
          <TransactionPanel />
        </div>
        <div className="lg:col-span-5 space-y-6">
          <StorageChart />
          <AiAssistantPanel />
        </div>
      </div>
    </div>
  );
}