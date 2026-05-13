"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import {
  Wallet,
  Globe,
  Shield,
  Settings2,
  Trash2,
  Download,
  Link2,
  LogOut,
} from "lucide-react"

type SettingsTab = "general" | "wallet" | "network" | "privacy" | "advanced"

interface SettingsPanelProps {
  className?: string
}

export function SettingsPanel({ className }: SettingsPanelProps) {
  const [activeTab, setActiveTab] = useState<SettingsTab>("general")

  const tabs: { id: SettingsTab; label: string }[] = [
    { id: "general", label: "General" },
    { id: "wallet", label: "Wallet" },
    { id: "network", label: "Network" },
    { id: "privacy", label: "Privacy" },
    { id: "advanced", label: "Advanced" },
  ]

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your preferences and configuration.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-muted rounded-lg w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-all",
              activeTab === tab.id
                ? "bg-card text-primary shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Wallet Settings */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Wallet Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Connected Wallet</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    <span className="font-mono font-medium text-foreground">0xb7a3...7e28</span>
                  </div>
                </div>
                <button className="px-4 py-2 border border-destructive text-destructive rounded-lg text-sm font-medium hover:bg-destructive/10 transition-colors">
                  Disconnect
                </button>
              </div>
            </div>
          </div>

          {/* Network Settings */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Network Settings</h3>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Current Network</p>
                <div className="flex items-center gap-2 mt-1">
                  <svg className="w-5 h-5 text-[#4DA2FF]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <span className="font-medium text-foreground">Sui Mainnet</span>
                </div>
              </div>
              <button className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors">
                Change Network
              </button>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Theme Settings</h3>
            <div className="space-y-3">
              <label className="text-sm text-muted-foreground">Theme</label>
              <select className="w-full p-3 bg-muted/50 border border-border rounded-lg text-foreground outline-none focus:ring-2 focus:ring-primary/20">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
          </div>
        </div>

        {/* Controls Sidebar */}
        <div className="bg-card border border-border rounded-xl p-5 h-fit">
          <h3 className="font-semibold text-foreground mb-4">Controls</h3>
          <div className="space-y-2">
            {[
              { icon: Wallet, label: "Connect Wallet", variant: "default" },
              { icon: LogOut, label: "Disconnect Wallet", variant: "default" },
              { icon: Globe, label: "Switch Network", variant: "default" },
              { icon: Download, label: "Export Data", variant: "default" },
              { icon: Trash2, label: "Delete Memories", variant: "destructive" },
            ].map((action) => (
              <button
                key={action.label}
                className={cn(
                  "flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  action.variant === "destructive"
                    ? "border border-destructive text-destructive hover:bg-destructive/10"
                    : "border border-border text-foreground hover:bg-muted"
                )}
              >
                <action.icon className="w-4 h-4" />
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
