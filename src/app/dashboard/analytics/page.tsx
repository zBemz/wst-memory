"use client"

import { StatsCard } from "@/components/wst/stats-card"
import { Database, HardDrive, FileStack, Activity, TrendingUp } from "lucide-react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const storageData = [
  { name: "Jan", value: 0.5 },
  { name: "Feb", value: 0.8 },
  { name: "Mar", value: 1.2 },
  { name: "Apr", value: 1.5 },
  { name: "May", value: 2.0 },
  { name: "Jun", value: 2.45 },
]

const transactionData = [
  { name: "Mon", uploads: 12, transactions: 24 },
  { name: "Tue", uploads: 19, transactions: 38 },
  { name: "Wed", uploads: 8, transactions: 16 },
  { name: "Thu", uploads: 22, transactions: 44 },
  { name: "Fri", uploads: 15, transactions: 30 },
  { name: "Sat", uploads: 9, transactions: 18 },
  { name: "Sun", uploads: 14, transactions: 28 },
]

const aiUsageData = [
  { name: "Week 1", queries: 45 },
  { name: "Week 2", queries: 68 },
  { name: "Week 3", queries: 89 },
  { name: "Week 4", queries: 156 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Track your memory usage, transactions, and AI interactions.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Memories"
          value="128"
          change={21.5}
          variant="default"
          icon={<FileStack className="w-5 h-5" />}
        />
        <StatsCard
          title="Storage Used"
          value="2.45 GB"
          change={8.2}
          variant="warning"
          icon={<HardDrive className="w-5 h-5" />}
        />
        <StatsCard
          title="Total Transactions"
          value="2,450"
          change={15.3}
          variant="default"
          icon={<Activity className="w-5 h-5" />}
        />
        <StatsCard
          title="AI Queries"
          value="3,210"
          change={32.1}
          variant="default"
          icon={<TrendingUp className="w-5 h-5" />}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Storage Growth */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-6">Storage Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={storageData}>
                <defs>
                  <linearGradient id="storageGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F5A623" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#F5A623" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} tickFormatter={(v) => `${v}GB`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  formatter={(value: number) => [`${value} GB`, "Storage"]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#F5A623"
                  strokeWidth={2}
                  fill="url(#storageGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-6">Weekly Activity</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="uploads" fill="#4A90D9" radius={[4, 4, 0, 0]} />
                <Bar dataKey="transactions" fill="#F5A623" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#4A90D9]" />
              <span className="text-sm text-muted-foreground">Uploads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
              <span className="text-sm text-muted-foreground">Transactions</span>
            </div>
          </div>
        </div>

        {/* AI Usage Trend */}
        <div className="bg-card border border-border rounded-xl p-6 lg:col-span-2">
          <h3 className="font-semibold text-foreground mb-6">AI Usage Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={aiUsageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  formatter={(value: number) => [value, "AI Queries"]}
                />
                <Line
                  type="monotone"
                  dataKey="queries"
                  stroke="#7B68EE"
                  strokeWidth={2}
                  dot={{ fill: "#7B68EE", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
