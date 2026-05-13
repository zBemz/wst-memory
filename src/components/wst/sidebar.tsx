"use client"

import { cn } from "@/lib/utils"
import { WstLogo } from "./wst-logo"
import {
  LayoutDashboard,
  FileText,
  Upload,
  Bot,
  Clock,
  BarChart3,
  Settings,
  ChevronLeft,
  Menu,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FileText, label: "Memories", href: "/dashboard/memories" },
  { icon: Upload, label: "Upload", href: "/dashboard/upload" },
  { icon: Bot, label: "AI Assistant", href: "/dashboard/assistant" },
  { icon: Clock, label: "Activity", href: "/dashboard/activity" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border shadow-sm"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      {/* Overlay for mobile */}
      {!collapsed && (
        <div
          className="lg:hidden fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
          onClick={() => setCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full bg-card border-r border-border z-50 transition-all duration-300 ease-out",
          collapsed ? "-translate-x-full lg:translate-x-0 lg:w-20" : "translate-x-0 w-64",
          "lg:translate-x-0",
          className
        )}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8 px-2">
            <WstLogo showText={!collapsed} size="md" />
            <button
              className="hidden lg:flex p-1.5 rounded-md hover:bg-muted transition-colors"
              onClick={() => setCollapsed(!collapsed)}
            >
              <ChevronLeft
                className={cn(
                  "w-4 h-4 text-muted-foreground transition-transform duration-300",
                  collapsed && "rotate-180"
                )}
              />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== "/dashboard" && pathname.startsWith(item.href))
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                    isActive
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setCollapsed(true)}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5 flex-shrink-0 transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )}
                  />
                  {!collapsed && (
                    <span className="text-sm">{item.label}</span>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}
