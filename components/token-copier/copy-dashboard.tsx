"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingTokens } from "./trending-tokens"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletConnectionButton } from "@/components/wallet/wallet-connection-button"
import { Copy, Zap, TrendingUp, Shield, Clock, DollarSign } from "lucide-react"

export function CopyDashboard() {
  const { connected } = useWallet()
  const [activeTab, setActiveTab] = useState<"trending" | "my-copies" | "analytics">("trending")

  const features = [
    {
      icon: <Copy className="h-8 w-8 text-orange-500" />,
      title: "2-Click Copying",
      description: "Copy any trending token in just two clicks - no coding required!",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Anonymous Copying",
      description: "Create copies without revealing the original token identity.",
      color: "from-blue-400 to-teal-500",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Instant Deployment",
      description: "Deploy your copied token to Solana blockchain in under 60 seconds.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Market Intelligence",
      description: "Leverage real-time market data to copy the hottest trending tokens.",
      color: "from-green-400 to-emerald-500",
    },
  ]

  return (
    <section className="py-20 px-4 retro-gradient-bg retro-bg-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="retro-title text-5xl md:text-7xl font-bold mb-6">
            Token <span className="retro-neon">COPIER</span> 🚀
          </h1>
          <div className="retro-card max-w-4xl mx-auto p-8">
            <p className="retro-text text-xl mb-6">
              Copy trending Solana tokens in just <span className="retro-3d-text font-bold">2 CLICKS</span>! Leverage
              market vibes without revealing original identities! 🎯
            </p>

            {!connected ? (
              <div className="space-y-4">
                <p className="retro-subtitle font-bold">🔗 Connect your wallet to start copying!</p>
                <WalletConnectionButton className="retro-button text-white px-8 py-4 text-lg" />
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-xl border-4 border-amber-800 font-bold">
                  ✅ Wallet Connected
                </div>
                <div className="bg-gradient-to-r from-blue-400 to-teal-500 text-white px-6 py-3 rounded-xl border-4 border-amber-800 font-bold">
                  🎯 Ready to Copy
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="retro-card hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center border-4 border-amber-800`}
                >
                  {feature.icon}
                </div>
                <h3 className="retro-subtitle text-lg font-bold mb-3">{feature.title}</h3>
                <p className="retro-text text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="retro-card p-2 mb-8">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "trending", label: "🔥 Trending Tokens", icon: <TrendingUp className="h-4 w-4" /> },
              { id: "my-copies", label: "📋 My Copies", icon: <Copy className="h-4 w-4" /> },
              { id: "analytics", label: "📊 Analytics", icon: <DollarSign className="h-4 w-4" /> },
            ].map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`retro-button flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "bg-gradient-to-r from-gray-400 to-gray-500 text-white opacity-70"
                }`}
              >
                {tab.icon}
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === "trending" && <TrendingTokens />}

          {activeTab === "my-copies" && (
            <div className="retro-card p-8 text-center">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="retro-title text-2xl mb-4">Your Copied Tokens</h3>
              {connected ? (
                <div className="space-y-4">
                  <p className="retro-text">You haven't copied any tokens yet!</p>
                  <Button onClick={() => setActiveTab("trending")} className="retro-button text-white px-6 py-3">
                    🚀 Start Copying Tokens
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="retro-text">Connect your wallet to view your copied tokens</p>
                  <WalletConnectionButton />
                </div>
              )}
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="retro-subtitle flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Market Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="retro-text">Most Copied:</span>
                      <span className="retro-3d-text font-bold">BONK</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="retro-text">Trending Category:</span>
                      <span className="retro-3d-text font-bold">Meme Coins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="retro-text">Success Rate:</span>
                      <span className="retro-3d-text font-bold text-green-600">87%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="retro-subtitle flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    Copy Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="retro-text">Total Copies Today:</span>
                      <span className="retro-3d-text font-bold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="retro-text">Avg. Deploy Time:</span>
                      <span className="retro-3d-text font-bold">42s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="retro-text">Active Copiers:</span>
                      <span className="retro-3d-text font-bold">8,934</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="retro-subtitle flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-yellow-500" />
                    Revenue Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="retro-text">Avg. Copy ROI:</span>
                      <span className="retro-3d-text font-bold text-green-600">+234%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="retro-text">Best Performer:</span>
                      <span className="retro-3d-text font-bold">+1,847%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="retro-text">Copy Fee:</span>
                      <span className="retro-3d-text font-bold">0.1 SOL</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="retro-card p-8 md:p-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 text-6xl">🚀</div>
              <div className="absolute top-4 right-4 text-6xl">💎</div>
              <div className="absolute bottom-4 left-4 text-6xl">⚡</div>
              <div className="absolute bottom-4 right-4 text-6xl">🎯</div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">
                🎯 Ready to Copy the <span className="retro-neon">HOTTEST</span> Tokens? 🔥
              </h3>
              <p className="text-xl mb-6 drop-shadow-lg">
                Join thousands of traders who are leveraging market trends with our 2-click token copier!
              </p>
              {!connected ? (
                <WalletConnectionButton className="retro-button text-white px-8 py-4 text-lg" />
              ) : (
                <Button onClick={() => setActiveTab("trending")} className="retro-button text-white px-8 py-4 text-lg">
                  🚀 START COPYING NOW
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
