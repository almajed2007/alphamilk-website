"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, TrendingUp, BarChart3 } from "lucide-react"

const validateSolanaAddress = (address: string): boolean => {
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/
  return base58Regex.test(address)
}

const CONTRACT_ADDRESS = "FtcFnPQtjmCQATjByrp7GXBuDTy1ALQQDUCkUYDmMiLK"

// Validate contract address
if (!validateSolanaAddress(CONTRACT_ADDRESS)) {
  console.error("Invalid contract address in trading section:", CONTRACT_ADDRESS)
}

export function TradingSection() {
  const tradingPlatforms = [
    {
      name: "Jupiter",
      description: "Best prices on Solana",
      icon: "🪐",
      url: `https://jup.ag/tokens/${CONTRACT_ADDRESS}`,
      color: "from-green-500 to-blue-500",
    },
    {
      name: "Birdeye",
      description: "Analytics & Data",
      icon: "🦅",
      url: `https://birdeye.so/token/${CONTRACT_ADDRESS}?chain=solana`,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "DexScreener",
      description: "Price Charts",
      icon: "📊",
      url: `https://dexscreener.com/solana/${CONTRACT_ADDRESS}`,
      color: "from-purple-500 to-pink-500",
    },
  ]

  const handlePlatformClick = (url: string, platform: string) => {
    if (!validateSolanaAddress(CONTRACT_ADDRESS)) {
      alert("Invalid token address. Cannot open platform.")
      return
    }
    window.open(url, "_blank")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trade <span className="gradient-text">$MILK</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Access the best trading platforms and real-time analytics for AlphaMilk token
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
          {/* Trading Platforms */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-3 gap-6">
              {tradingPlatforms.map((platform, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                    <p className="text-gray-400 mb-4">{platform.description}</p>
                    <Button
                      onClick={() => handlePlatformClick(platform.url, platform.name)}
                      className={`w-full bg-gradient-to-r ${platform.color} hover:opacity-90`}
                    >
                      Open {platform.name}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network:</span>
                    <span className="text-white font-medium">Solana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Symbol:</span>
                    <span className="text-white font-medium">$MILK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Supply:</span>
                    <span className="text-white font-medium">1B MILK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 font-medium">Live</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Price Chart */}
        <div className="bg-gray-900/30 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-5 w-5 text-green-500" />
            <h3 className="text-xl font-bold text-white">Live Price Chart</h3>
          </div>

          <div className="relative w-full" style={{ paddingBottom: "60%" }}>
            <iframe
              src={
                validateSolanaAddress(CONTRACT_ADDRESS)
                  ? `https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15`
                  : "about:blank"
              }
              className="absolute inset-0 w-full h-full rounded-lg"
              title="MILK Token Price Chart"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
