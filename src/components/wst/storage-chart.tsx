"use client"

import { cn } from "@/lib/utils"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface StorageChartProps {
  data: {
    name: string
    value: number
    color: string
  }[]
  total: string
  className?: string
}

export function StorageChart({ data, total, className }: StorageChartProps) {
  return (
    <div className={cn("bg-card border border-border rounded-xl p-5", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Storage Analytics</h3>
        <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
          <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-6">
        {/* Chart */}
        <div className="relative w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">{total}</span>
            <span className="text-xs text-muted-foreground">Total Used</span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name}</span>
              </div>
              <span className="text-sm font-medium text-foreground">
                {item.value.toFixed(2)} GB
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
