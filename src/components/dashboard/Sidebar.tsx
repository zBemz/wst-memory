"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Upload, Brain, Clock, BarChart3, Settings, Archive } from "lucide-react";

const nav = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/dashboard/memories", icon: Archive, label: "Memories" },
  { href: "/dashboard/upload", icon: Upload, label: "Upload" },
  { href: "/dashboard/assistant", icon: Brain, label: "AI Assistant" },
  { href: "/dashboard/activity", icon: Clock, label: "Activity" },
  { href: "/dashboard/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 border-r border-white/10 bg-black/95 backdrop-blur-2xl flex flex-col">
      <div className="p-6 border-b border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center text-black font-black text-2xl">W</div>
        <div>
          <h1 className="text-3xl font-black tracking-tighter">WST</h1>
          <p className="text-amber-400 text-sm -mt-1">MEMORY</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all ${pathname === item.href
              ? "bg-amber-500 text-black font-semibold"
              : "hover:bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}