"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, TrendingUp, Zap, Eye, DollarSign } from "lucide-react"
import { useWallet } from "@solana/wallet-adapter-react"

interface TrendingToken {
  address: string
  name: string
  symbol: string
  price: number
  priceChange24h: number
  volume24h: number
  marketCap: number
  holders: number
  description: string
  image?: string
  website?: string
  twitter?: string
  telegram?: string
}

export function TrendingTokens() {
  const { connected } = useWallet()
  const [trendingTokens, setTrendingTokens] = useState<TrendingToken[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedToken, setSelectedToken] = useState<TrendingToken | null>(null)

  // Mock trending tokens data (in real app, fetch from Birdeye/Jupiter API)
  useEffect(() => {
    const mockTokens: TrendingToken[] = [
      {
        address: "So11111111111111111111111111111111111111112",
        name: "Wrapped SOL",
        symbol: "SOL",
        price: 98.45,
        priceChange24h: 5.2,
        volume24h: 2500000,
        marketCap: 45000000000,
        holders: 1250000,
        description: "Native Solana token wrapped for DeFi compatibility",
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        name: "USD Coin",
        symbol: "USDC",
        price: 1.0,
        priceChange24h: 0.1,
        volume24h: 1800000,
        marketCap: 25000000000,
        holders: 890000,
        description: "Fully reserved digital dollar backed by short-term U.S. Treasuries",
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
        name: "Bonk",
        symbol: "BONK",
        price: 0.000025,
        priceChange24h: 15.8,
        volume24h: 850000,
        marketCap: 1500000000,
        holders: 450000,
        description: "The first Solana dog coin for the people, by the people",
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        address: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
        name: "Ethereum",
        symbol: "ETH",
        price: 2340.67,
        priceChange24h: -2.1,
        volume24h: 1200000,
        marketCap: 280000000000,
        holders: 320000,
        description: "Ethereum bridged to Solana for cross-chain DeFi",
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        address: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
        name: "Marinade SOL",
        symbol: "mSOL",
        price: 105.23,
        priceChange24h: 4.7,
        volume24h: 680000,
        marketCap: 890000000,
        holders: 125000,
        description: "Liquid staking token representing staked SOL on Marinade",
        image: "/placeholder.svg?height=64&width=64",
      },
      {
        address: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
        name: "Raydium",
        symbol: "RAY",
        price: 1.85,
        priceChange24h: 8.3,
        volume24h: 420000,
        marketCap: 185000000,
        holders: 89000,
        description: "Automated market maker and liquidity provider on Solana",
        image: "/placeholder.svg?height=64&width=64",
      },
    ]

    setTimeout(() => {
      setTrendingTokens(mockTokens)
      setLoading(false)
    }, 1500)
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`
    return `$${num.toFixed(2)}`
  }

  const formatPrice = (price: number) => {
    if (price < 0.001) return `$${price.toFixed(8)}`
    if (price < 1) return `$${price.toFixed(6)}`
    return `$${price.toFixed(2)}`
  }

  const handleCopyToken = (token: TrendingToken) => {
    setSelectedToken(token)
    // This will trigger the token copying modal
  }

  if (loading) {
    return (
      <div className="retro-card p-8 text-center">
        <div className="retro-spinner mx-auto mb-4"></div>
        <p className="retro-text">Loading trending tokens...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="retro-card p-6">
        <h2 className="retro-title text-3xl font-bold text-center mb-4">
          🔥 Trending Tokens <span className="retro-neon">COPIER</span> 🚀
        </h2>
        <p className="retro-text text-center mb-6">
          Copy trending Solana tokens in just <span className="retro-3d-text font-bold">2 CLICKS</span>! Leverage market
          vibes without revealing the original token identity! 🎯
        </p>

        {!connected && (
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 rounded-xl border-4 border-amber-800 text-center mb-6">
            <p className="font-bold">🔗 Connect your wallet to start copying trending tokens!</p>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingTokens.map((token, index) => (
          <Card key={token.address} className="retro-card hover:scale-105 transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={token.image || "/placeholder.svg"}
                    alt={`${token.name} logo`}
                    className="w-12 h-12 rounded-full border-2 border-amber-600"
                  />
                  <div>
                    <CardTitle className="retro-subtitle text-lg">{token.symbol}</CardTitle>
                    <p className="retro-text text-sm opacity-80">{token.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="retro-3d-text font-bold">{formatPrice(token.price)}</div>
                  <div className={`text-sm font-bold ${token.priceChange24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {token.priceChange24h >= 0 ? "+" : ""}
                    {token.priceChange24h.toFixed(2)}%
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-2 rounded-lg border-2 border-blue-300">
                  <div className="flex items-center gap-1 mb-1">
                    <DollarSign className="h-3 w-3 text-blue-600" />
                    <span className="font-bold text-blue-800">Volume 24h</span>
                  </div>
                  <div className="retro-text font-bold">{formatNumber(token.volume24h)}</div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-2 rounded-lg border-2 border-green-300">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="font-bold text-green-800">Market Cap</span>
                  </div>
                  <div className="retro-text font-bold">{formatNumber(token.marketCap)}</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-2 rounded-lg border-2 border-purple-300">
                <div className="flex items-center gap-1 mb-1">
                  <Eye className="h-3 w-3 text-purple-600" />
                  <span className="font-bold text-purple-800">Holders</span>
                </div>
                <div className="retro-text font-bold">{token.holders.toLocaleString()}</div>
              </div>

              <p className="retro-text text-xs opacity-75 line-clamp-2">{token.description}</p>

              <Button
                onClick={() => handleCopyToken(token)}
                disabled={!connected}
                className="retro-button w-full text-white font-bold py-2 flex items-center justify-center gap-2"
                style={{
                  background: connected
                    ? "linear-gradient(45deg, #ff6b35, #f7931e)"
                    : "linear-gradient(45deg, #9ca3af, #6b7280)",
                }}
              >
                <Copy className="h-4 w-4" />
                {connected ? "COPY TOKEN" : "CONNECT WALLET"}
                <Zap className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Token Copying Modal */}
      {selectedToken && <TokenCopyModal token={selectedToken} onClose={() => setSelectedToken(null)} />}
    </div>
  )
}

// Token Copy Modal Component
function TokenCopyModal({ token, onClose }: { token: TrendingToken; onClose: () => void }) {
  const { connected, publicKey } = useWallet()
  const [step, setStep] = useState(1)
  const [customization, setCustomization] = useState({
    name: `Alpha${token.name}`,
    symbol: `A${token.symbol}`,
    description: `The alpha version of ${token.name} - ${token.description}`,
    supply: 1000000000,
    decimals: 9,
  })

  const handleCopyToken = async () => {
    if (!connected || !publicKey) return

    setStep(2)

    // Simulate token creation process
    setTimeout(() => {
      setStep(3)
      // Here you would integrate with Solana token creation
      console.log("Creating token with:", customization)
    }, 3000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="retro-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="retro-title text-2xl font-bold">
              Copy <span className="retro-neon">{token.symbol}</span> Token 🚀
            </h3>
            <Button onClick={onClose} variant="ghost" className="text-2xl">
              ×
            </Button>
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border-4 border-amber-600">
                <h4 className="retro-subtitle font-bold mb-3">📋 Token Details to Copy</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Original:</strong> {token.name} ({token.symbol})
                    <br />
                    <strong>Price:</strong> {token.price < 0.001 ? token.price.toFixed(8) : token.price.toFixed(4)}
                    <br />
                    <strong>Market Cap:</strong> ${(token.marketCap / 1e6).toFixed(2)}M
                  </div>
                  <div>
                    <strong>Volume 24h:</strong> ${(token.volume24h / 1e6).toFixed(2)}M
                    <br />
                    <strong>Holders:</strong> {token.holders.toLocaleString()}
                    <br />
                    <strong>Change 24h:</strong> {token.priceChange24h.toFixed(2)}%
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="retro-subtitle font-bold">🎨 Customize Your Copy</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="retro-text font-bold block mb-2">Token Name</label>
                    <input
                      type="text"
                      value={customization.name}
                      onChange={(e) => setCustomization({ ...customization, name: e.target.value })}
                      className="w-full p-3 border-4 border-amber-600 rounded-xl retro-text bg-yellow-50"
                    />
                  </div>

                  <div>
                    <label className="retro-text font-bold block mb-2">Token Symbol</label>
                    <input
                      type="text"
                      value={customization.symbol}
                      onChange={(e) => setCustomization({ ...customization, symbol: e.target.value.toUpperCase() })}
                      className="w-full p-3 border-4 border-amber-600 rounded-xl retro-text bg-yellow-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="retro-text font-bold block mb-2">Description</label>
                  <textarea
                    value={customization.description}
                    onChange={(e) => setCustomization({ ...customization, description: e.target.value })}
                    className="w-full p-3 border-4 border-amber-600 rounded-xl retro-text bg-yellow-50 h-24"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="retro-text font-bold block mb-2">Total Supply</label>
                    <input
                      type="number"
                      value={customization.supply}
                      onChange={(e) => setCustomization({ ...customization, supply: Number.parseInt(e.target.value) })}
                      className="w-full p-3 border-4 border-amber-600 rounded-xl retro-text bg-yellow-50"
                    />
                  </div>

                  <div>
                    <label className="retro-text font-bold block mb-2">Decimals</label>
                    <input
                      type="number"
                      value={customization.decimals}
                      onChange={(e) =>
                        setCustomization({ ...customization, decimals: Number.parseInt(e.target.value) })
                      }
                      className="w-full p-3 border-4 border-amber-600 rounded-xl retro-text bg-yellow-50"
                      min="0"
                      max="18"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={onClose} variant="outline" className="flex-1 retro-button bg-gray-400">
                  Cancel
                </Button>
                <Button onClick={handleCopyToken} className="flex-1 retro-button text-white">
                  🚀 CREATE COPY TOKEN
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="text-center space-y-6">
              <div className="retro-spinner mx-auto"></div>
              <h4 className="retro-title text-xl">Creating Your Token Copy...</h4>
              <p className="retro-text">
                🔨 Deploying {customization.symbol} to Solana blockchain...
                <br />⚡ This usually takes 30-60 seconds
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4">🎉</div>
              <h4 className="retro-title text-2xl text-green-600">Token Created Successfully!</h4>
              <div className="retro-card p-4 bg-gradient-to-r from-green-100 to-emerald-100">
                <p className="retro-text">
                  <strong>Token Name:</strong> {customization.name}
                  <br />
                  <strong>Symbol:</strong> {customization.symbol}
                  <br />
                  <strong>Supply:</strong> {customization.supply.toLocaleString()}
                  <br />
                  <strong>Contract:</strong> <code className="bg-white px-2 py-1 rounded">Creating...</code>
                </p>
              </div>
              <div className="flex gap-4">
                <Button onClick={onClose} className="flex-1 retro-button text-white">
                  🎯 CREATE ANOTHER
                </Button>
                <Button onClick={onClose} className="flex-1 retro-button text-white">
                  📊 VIEW TOKEN
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
