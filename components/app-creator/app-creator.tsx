"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletConnectionButton } from "@/components/wallet/wallet-connection-button"
import { TokenAnalyzer } from "./token-analyzer"
import { AppGenerator } from "./app-generator"
import { Search, Zap, Copy, DollarSign, Shield, Sparkles, Target } from "lucide-react"

export function AppCreator() {
  const { connected } = useWallet()
  const [tokenAddress, setTokenAddress] = useState("")
  const [currentStep, setCurrentStep] = useState<"input" | "analyze" | "generate" | "deploy">("input")
  const [tokenData, setTokenData] = useState<any>(null)

  const handleAnalyzeToken = () => {
    if (!tokenAddress.trim()) return
    setCurrentStep("analyze")
  }

  const features = [
    {
      icon: <Copy className="h-8 w-8 text-blue-500" />,
      title: "1-Click Token Copy",
      description: "Paste any Solana token address and instantly copy all its details",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "From concept to launch in under 60 seconds",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "Pay with $MILK",
      description: "Use $MILK tokens for all app creation fees",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Secure & Verified",
      description: "All generated tokens are audited and secure",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
            <span className="text-blue-600">APP</span> CREATOR 🚀
          </h1>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-6">
              🔥 Copy viral meme coins in <span className="font-bold text-orange-600">1-CLICK</span>!
              <br />
              Paste token address → Get all details → Pay with <span className="font-bold text-green-600">$MILK</span> →
              Launch! 🚀
            </p>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl mb-6">
              <h3 className="text-2xl font-bold mb-3">💡 The PEPE Rush Solution!</h3>
              <p className="text-lg">
                When meme coins go viral, everyone rushes to copy them manually.
                <br />
                <span className="font-bold">We make it 1-click easy!</span> 🎯
              </p>
            </div>

            {!connected && (
              <div className="space-y-4">
                <p className="text-lg font-bold text-gray-700">🔗 Connect wallet to start creating!</p>
                <WalletConnectionButton className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg" />
              </div>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main App Creator Interface */}
        <div className="max-w-4xl mx-auto">
          {currentStep === "input" && (
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">🎯 Enter Token Address to Copy</h2>
                  <p className="text-lg text-gray-600">Paste any Solana token address and we'll analyze it for you!</p>
                </div>

                <div className="space-y-6">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Enter Solana token address (e.g., So11111111111111111111111111111111111111112)"
                      value={tokenAddress}
                      onChange={(e) => setTokenAddress(e.target.value)}
                      className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl font-mono"
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleAnalyzeToken}
                      disabled={!connected || !tokenAddress.trim()}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 text-lg flex items-center justify-center gap-2"
                    >
                      <Sparkles className="h-5 w-5" />
                      {connected ? "ANALYZE TOKEN" : "CONNECT WALLET FIRST"}
                      <Target className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Example Tokens */}
                  <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                    <h3 className="font-bold text-blue-800 mb-3">🔥 Try These Viral Tokens:</h3>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      {[
                        { name: "BONK", address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263" },
                        { name: "WIF", address: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm" },
                      ].map((token, index) => (
                        <button
                          key={index}
                          onClick={() => setTokenAddress(token.address)}
                          className="text-left p-3 bg-white rounded border-2 border-blue-200 hover:bg-blue-50 transition-colors"
                        >
                          <div className="font-bold text-blue-800">{token.name}</div>
                          <div className="text-xs font-mono text-blue-600">{token.address.slice(0, 20)}...</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === "analyze" && (
            <TokenAnalyzer
              tokenAddress={tokenAddress}
              onAnalysisComplete={(data) => {
                setTokenData(data)
                setCurrentStep("generate")
              }}
              onBack={() => setCurrentStep("input")}
            />
          )}

          {currentStep === "generate" && tokenData && (
            <AppGenerator
              tokenData={tokenData}
              onGenerationComplete={() => setCurrentStep("deploy")}
              onBack={() => setCurrentStep("analyze")}
            />
          )}

          {currentStep === "deploy" && (
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">App Successfully Created!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Your token copy has been deployed to the Solana blockchain!
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                    <h3 className="font-bold text-green-800 mb-3">✅ Deployment Complete</h3>
                    <p className="text-sm text-green-700">
                      Your token is now live on Solana mainnet and ready for trading!
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                    <h3 className="font-bold text-blue-800 mb-3">💰 $MILK Payment Processed</h3>
                    <p className="text-sm text-blue-700">Thank you for using $MILK tokens for your app creation!</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => {
                      setCurrentStep("input")
                      setTokenAddress("")
                      setTokenData(null)
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                  >
                    🚀 Create Another App
                  </Button>
                  <Button
                    onClick={() => window.open("https://dexscreener.com", "_blank")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  >
                    📊 View on DexScreener
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Bottom Benefits Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">
                💸 Built-In <span className="text-yellow-300">$MILK</span> Utility! 🥛
              </h3>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="text-xl font-bold mb-3">🔥 Constant Buy Pressure</h4>
                  <p className="text-lg">Every token launch requires $MILK payment = recurring demand for our token!</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">📈 Viral Token Rush</h4>
                  <p className="text-lg">When meme coins go viral, everyone rushes to copy → more $MILK burns!</p>
                </div>
              </div>
              <p className="text-xl font-bold">
                🎯 The more successful meme coins appear, the more valuable $MILK becomes! 🌟
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
