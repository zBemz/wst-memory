import { Sidebar } from "@/components/wst/sidebar"
import { TopBar } from "@/components/wst/top-bar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-64">
        <TopBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
