import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentMemories from "@/components/dashboard/RecentMemories";
import StorageAnalytics from "@/components/dashboard/StorageAnalytics";
import TransactionPanel from "@/components/dashboard/TransactionPanel";
import AssistantPanel from "@/components/dashboard/AssistantPanel";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard Overview</h1>
          <div className="text-sm text-gray-500">Sui Mainnet • Connected</div>
        </div>

        {/* Stats Grid */}
        <StatsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10">
          {/* Recent Memories - Left */}
          <div className="lg:col-span-5">
            <RecentMemories />
          </div>

          {/* Storage Analytics */}
          <div className="lg:col-span-4">
            <StorageAnalytics />
          </div>

          {/* Recent Transactions */}
          <div className="lg:col-span-3">
            <TransactionPanel />
          </div>

          {/* AI Assistant - Full width */}
          <div className="lg:col-span-12 mt-4">
            <AssistantPanel />
          </div>
        </div>
      </div>
    </div>
  );
}