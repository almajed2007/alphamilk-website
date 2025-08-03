"use client"

import { useState, useEffect } from "react"
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
      </div>

      <div className="text-center py-16">
        <div className="bg-gray-900 border border-teal-500/30 rounded-2xl p-12 max-w-md mx-auto">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
          <p className="text-gray-400">
            The trending tokens copier feature is currently under development. Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  )
}
