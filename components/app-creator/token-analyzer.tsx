"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, TrendingUp, Users, DollarSign, Droplets, Rocket } from "lucide-react"

interface TokenAnalyzerProps {
  tokenAddress: string
  onAnalysisComplete: (data: any) => void
  onBack: () => void
}

export function TokenAnalyzer({ tokenAddress, onAnalysisComplete, onBack }: TokenAnalyzerProps) {
  const [loading, setLoading] = useState(true)
  const [tokenData, setTokenData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    analyzeToken()
  }, [tokenAddress])

  const analyzeToken = async () => {
    setLoading(true)
    setError(null)

    try {
      // Simulate API call to analyze token
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // Mock token data (in real app, fetch from Solana RPC + Birdeye/Jupiter APIs)
      const mockData = {
        address: tokenAddress,
        name: "Viral Meme Token",
        symbol: "VIRAL",
        description: "The hottest meme token that's taking the crypto world by storm! 🔥",
        image: "/placeholder.svg?height=128&width=128",
        decimals: 9,
        totalSupply: 1000000000,
        circulatingSupply: 850000000,
        price: 0.00234,
        priceChange24h: 156.7,
        marketCap: 1987000,
        volume24h: 456000,
        holders: 12847,
        liquidity: 234000,
        liquidityLocked: true,
        contractVerified: true,
        honeypotRisk: "Low",
        website: "https://viralmeme.com",
        twitter: "https://twitter.com/viralmeme",
        telegram: "https://t.me/viralmeme",
        createdAt: "2024-01-15T10:30:00Z",
        creator: "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
        topHolders: [
          { address: "ABC...123", percentage: 15.2, amount: 152000000 },
          { address: "DEF...456", percentage: 8.7, amount: 87000000 },
          { address: "GHI...789", percentage: 6.3, amount: 63000000 },
        ],
        recentTransactions: [
          { type: "buy", amount: 50000, value: 117, timestamp: "2 min ago" },
          { type: "sell", amount: 25000, value: 58.5, timestamp: "5 min ago" },
          { type: "buy", amount: 100000, value: 234, timestamp: "8 min ago" },
        ],
      }

      setTokenData(mockData)
    } catch (err) {
      setError("Failed to analyze token. Please check the address and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleProceedToGenerate = () => {
    onAnalysisComplete(tokenData)
  }

  if (loading) {
    return (
      <Card className="shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔍 Analyzing Token...</h2>
          <div className="space-y-2 text-left max-w-md mx-auto">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Fetching token metadata...</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <span>Analyzing market data...</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <span>Checking liquidity & holders...</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div
                className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <span>Verifying contract security...</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Analysis Failed</h2>
          <p className="text-red-700 mb-6">{error}</p>
          <div className="flex gap-4 justify-center">
            <Button onClick={onBack} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
            <Button onClick={analyzeToken} className="bg-green-600 hover:bg-green-700 text-white">
              🔄 Retry Analysis
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!tokenData) return null

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`
    if (num >= 1e3) return `${(num / 1e3).toFixed(2)}K`
    return num.toFixed(2)
  }

  const formatPrice = (price: number) => {
    if (price < 0.001) return `$${price.toFixed(8)}`
    if (price < 1) return `$${price.toFixed(6)}`
    return `$${price.toFixed(2)}`
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Button onClick={onBack} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h2 className="text-2xl font-bold text-gray-800">📊 Token Analysis Complete</h2>
            <div></div>
          </div>

          <div className="bg-green-50 border-2 border-green-200 text-green-800 p-4 rounded-xl text-center">
            <p className="font-bold text-lg">✅ Token successfully analyzed! Ready to copy all details.</p>
          </div>
        </CardContent>
      </Card>

      {/* Token Overview */}
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start gap-6 mb-6">
            <img
              src={tokenData.image || "/placeholder.svg"}
              alt={`${tokenData.name} logo`}
              className="w-24 h-24 rounded-full border-4 border-gray-200"
            />
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {tokenData.name} ({tokenData.symbol})
              </h3>
              <p className="text-gray-600 mb-4">{tokenData.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-green-600">{formatPrice(tokenData.price)}</span>
                  <span className={`font-bold ${tokenData.priceChange24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {tokenData.priceChange24h >= 0 ? "+" : ""}
                    {tokenData.priceChange24h.toFixed(2)}%
                  </span>
                </div>
                {tokenData.website && (
                  <Button onClick={() => window.open(tokenData.website, "_blank")} variant="outline" size="sm">
                    🌐 Website <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-blue-50 border-2 border-blue-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-blue-800">Market Cap</div>
                <div className="text-xl font-bold text-blue-900">${formatNumber(tokenData.marketCap)}</div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-2 border-green-200">
              <CardContent className="p-4 text-center">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-green-800">Volume 24h</div>
                <div className="text-xl font-bold text-green-900">${formatNumber(tokenData.volume24h)}</div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-2 border-purple-200">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-purple-800">Holders</div>
                <div className="text-xl font-bold text-purple-900">{tokenData.holders.toLocaleString()}</div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-2 border-orange-200">
              <CardContent className="p-4 text-center">
                <Droplets className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-orange-800">Liquidity</div>
                <div className="text-xl font-bold text-orange-900">${formatNumber(tokenData.liquidity)}</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <Card className="shadow-lg">
        <CardContent className="p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Ready to Copy This Token?</h3>
          <p className="text-gray-600 mb-6">
            All token details have been analyzed and verified. Proceed to generate your copy!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onBack} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Input
            </Button>
            <Button
              onClick={handleProceedToGenerate}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              🚀 Generate Copy Token
              <Rocket className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
