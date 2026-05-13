"use client"

import { WstLogo } from "@/components/wst/wst-logo"
import { ArrowRight, Wallet, Upload, Database, Shield, Bot, Layers } from "lucide-react"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Architecture", href: "#architecture" },
  { label: "Docs", href: "#docs" },
  { label: "Pricing", href: "#pricing" },
]

const partners = [
  { name: "Walrus", icon: "W" },
  { name: "Sui", icon: "S" },
  { name: "Tatum", icon: "T" },
  { name: "MCP", icon: "M" },
]

const features = [
  {
    icon: Database,
    title: "Decentralized Storage",
    description: "Store your data securely on Walrus decentralized storage with 12x redundancy.",
  },
  {
    icon: Shield,
    title: "Blockchain Security",
    description: "All ownership and permissions are recorded on Sui blockchain for immutability.",
  },
  {
    icon: Bot,
    title: "AI-Native Interface",
    description: "Interact with your memories using natural language through our AI assistant.",
  },
  {
    icon: Layers,
    title: "Enterprise RPC",
    description: "Powered by Tatum enterprise-grade RPC for reliable blockchain access.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <WstLogo size="md" />
          
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              AI-NATIVE DECENTRALIZED MEMORY PROTOCOL
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Own Your{" "}
              <span className="text-primary">AI Memory</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              WST-Memory enables you to store, own, and interact with your memories, files, and digital identity on a decentralized infrastructure powered by Walrus, secured by Sui, and connected through Tatum RPC.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Wallet className="w-4 h-4" />
                Connect Wallet
              </Link>
              <Link
                href="/dashboard/upload"
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                <Upload className="w-4 h-4" />
                Upload Memory
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Launch App
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Partners */}
            <div className="pt-8 space-y-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Built On</p>
              <div className="flex items-center gap-6">
                {partners.map((partner) => (
                  <div key={partner.name} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-sm font-bold text-foreground">
                      {partner.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Central brain visualization placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">WST</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute top-8 left-0 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">W</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Walrus</p>
                    <p className="text-xs text-muted-foreground">Storage</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-0 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#4DA2FF]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#4DA2FF]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Sui</p>
                    <p className="text-xs text-muted-foreground">Network</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <span className="font-bold text-purple-500">T</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Tatum</p>
                    <p className="text-xs text-muted-foreground">RPC</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">AI</p>
                    <p className="text-xs text-muted-foreground">Agent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why WST-Memory?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A revolutionary approach to personal data ownership, combining decentralized storage with AI-powered interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Own Your Memory?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the decentralized memory revolution. Store, own, and interact with your data on your terms.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <WstLogo size="sm" />
          <p className="text-sm text-muted-foreground">
            &copy; 2026 WST-MEMORY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
