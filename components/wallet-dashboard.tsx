"use client"

import { WalletInfo } from "@/components/wallet/wallet-info"
import { WalletConnectionButton } from "@/components/wallet/wallet-connection-button"
import { useWallet } from "@solana/wallet-adapter-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Coins, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

export function WalletDashboard() {
  const { connected } = useWallet()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Wallet Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect your Solana wallet to view your $MILK balance, track your holdings, and access exclusive features.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Wallet Connection & Info */}
          <div className="lg:col-span-1">
            {!connected ? (
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">🔗</div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">Connect Your Wallet</h3>
                  <p className="text-gray-600 mb-6">
                    Connect your Solana wallet to access your $MILK balance and exclusive holder features.
                  </p>
                  <WalletConnectionButton />
                </CardContent>
              </Card>
            ) : (
              <WalletInfo />
            )}
          </div>

          {/* Features & Actions */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Trading Card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Trading
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Trade $MILK on the best Solana DEXs with optimal pricing and low fees.
                  </p>
                  <div className="space-y-2">
                    <Button
                      className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                      onClick={() =>
                        window.open("https://jup.ag/tokens/BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD", "_blank")
                      }
                    >
                      Trade on Jupiter
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://dexscreener.com/solana/8blrdqtb4n2j4bygeaskdrng84nxbskwclhfbpsv89ie",
                          "_blank",
                        )
                      }
                    >
                      View Charts
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Analytics Card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Track $MILK performance, holder analytics, and market insights.</p>
                  <div className="space-y-2">
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      onClick={() =>
                        window.open(
                          "https://birdeye.so/token/BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD?chain=solana",
                          "_blank",
                        )
                      }
                    >
                      Birdeye Analytics
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://explorer.solana.com/address/BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD",
                          "_blank",
                        )
                      }
                    >
                      Solana Explorer
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Staking Card (Future Feature) */}
              <Card className="hover:shadow-lg transition-shadow opacity-75">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-yellow-600" />
                    Staking (Coming Soon)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Stake your $MILK tokens to earn rewards and participate in governance.
                  </p>
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              {/* NFT Card (Future Feature) */}
              <Card className="hover:shadow-lg transition-shadow opacity-75">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl">🖼️</span>
                    AlphaMilker NFTs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Exclusive NFT collection for $MILK holders with special utilities.
                  </p>
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Supported Wallets */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-8">Supported Wallets</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Phantom", icon: "👻" },
              { name: "Solflare", icon: "🔥" },
              { name: "Torus", icon: "🌀" },
              { name: "Ledger", icon: "🔒" },
              { name: "Coinbase", icon: "🔵" },
              { name: "Math Wallet", icon: "🧮" },
            ].map((wallet, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{wallet.icon}</div>
                <div className="text-sm font-medium text-gray-800">{wallet.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
