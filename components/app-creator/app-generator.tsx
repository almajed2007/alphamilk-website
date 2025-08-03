"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useWallet } from "@solana/wallet-adapter-react"
import { ArrowLeft, DollarSign, Rocket, Settings, Sparkles, Target } from "lucide-react"

interface AppGeneratorProps {
  tokenData: any
  onGenerationComplete: () => void
  onBack: () => void
}

export function AppGenerator({ tokenData, onGenerationComplete, onBack }: AppGeneratorProps) {
  const { connected, publicKey } = useWallet()
  const [step, setStep] = useState<"customize" | "payment" | "generating">("customize")
  const [customization, setCustomization] = useState({
    name: `Alpha${tokenData.name}`,
    symbol: `A${tokenData.symbol}`,
    description: `The alpha version of ${tokenData.name} - ${tokenData.description}`,
    supply: tokenData.totalSupply,
    decimals: tokenData.decimals,
    website: "",
    twitter: "",
    telegram: "",
  })
  const [milkBalance, setMilkBalance] = useState(1250) // Mock MILK balance
  const [generationProgress, setGenerationProgress] = useState(0)

  const creationFee = 50 // 50 MILK tokens
  const hasEnoughMilk = milkBalance >= creationFee

  const handleCustomizationChange = (field: string, value: string | number) => {
    setCustomization((prev) => ({ ...prev, [field]: value }))
  }

  const handleProceedToPayment = () => {
    if (!hasEnoughMilk) {
      alert("Insufficient $MILK balance! Please buy more $MILK tokens.")
      return
    }
    setStep("payment")
  }

  const handleConfirmPayment = async () => {
    setStep("generating")

    // Simulate token generation process
    const steps = [
      "Initializing token creation...",
      "Copying original token metadata...",
      "Generating custom token parameters...",
      "Creating token mint account...",
      "Setting up token metadata...",
      "Deploying to Solana blockchain...",
      "Verifying deployment...",
      "Token creation complete!",
    ]

    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setGenerationProgress(((i + 1) / steps.length) * 100)
    }

    setTimeout(() => {
      onGenerationComplete()
    }, 1000)
  }

  if (step === "generating") {
    return (
      <Card className="shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🚀 Creating Your Token...</h2>
          </div>

          <div className="max-w-md mx-auto mb-6">
            <div className="bg-gray-200 rounded-full h-4 mb-4">
              <div
                className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${generationProgress}%` }}
              ></div>
            </div>
            <p className="text-lg font-bold text-gray-800">{generationProgress.toFixed(0)}% Complete</p>
          </div>

          <div className="space-y-3 text-left max-w-lg mx-auto">
            {[
              "🔧 Copying token metadata and parameters",
              "⚡ Deploying to Solana blockchain",
              "🛡️ Setting up security features",
              "🎨 Applying your customizations",
              "✅ Finalizing token creation",
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <div
                  className={`w-3 h-3 rounded-full ${
                    generationProgress > (index + 1) * 20 ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mt-6">
            Please wait while we create your token copy. This usually takes 1-2 minutes.
          </p>
        </CardContent>
      </Card>
    )
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
            <h2 className="text-2xl font-bold text-gray-800">
              {step === "customize" ? "🎨 Customize Your Token" : "💰 Confirm Payment"}
            </h2>
            <div></div>
          </div>
        </CardContent>
      </Card>

      {step === "customize" && (
        <>
          {/* Original vs Copy Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">📋 Original Token</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={tokenData.image || "/placeholder.svg"}
                    alt={tokenData.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-200"
                  />
                  <div>
                    <div className="font-bold">{tokenData.name}</div>
                    <div className="text-sm text-gray-600">{tokenData.symbol}</div>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <div>
                    <strong>Supply:</strong> {tokenData.totalSupply.toLocaleString()}
                  </div>
                  <div>
                    <strong>Decimals:</strong> {tokenData.decimals}
                  </div>
                  <div>
                    <strong>Market Cap:</strong> ${(tokenData.marketCap / 1e6).toFixed(2)}M
                  </div>
                  <div>
                    <strong>Holders:</strong> {tokenData.holders.toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">✨ Your Copy Token</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-green-600 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold">
                    {customization.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-bold text-green-800">{customization.name}</div>
                    <div className="text-sm text-green-600">{customization.symbol}</div>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <div>
                    <strong>Supply:</strong> {customization.supply.toLocaleString()}
                  </div>
                  <div>
                    <strong>Decimals:</strong> {customization.decimals}
                  </div>
                  <div>
                    <strong>Status:</strong> <span className="text-green-600 font-bold">Ready to Deploy</span>
                  </div>
                  <div>
                    <strong>Fee:</strong> <span className="text-orange-600 font-bold">{creationFee} $MILK</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customization Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Customize Your Token
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Token Name</label>
                  <Input
                    value={customization.name}
                    onChange={(e) => handleCustomizationChange("name", e.target.value)}
                    className="border-2 border-gray-300 rounded-xl"
                    placeholder="Enter token name"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-2">Token Symbol</label>
                  <Input
                    value={customization.symbol}
                    onChange={(e) => handleCustomizationChange("symbol", e.target.value.toUpperCase())}
                    className="border-2 border-gray-300 rounded-xl"
                    placeholder="Enter token symbol"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-2">Description</label>
                <Textarea
                  value={customization.description}
                  onChange={(e) => handleCustomizationChange("description", e.target.value)}
                  className="border-2 border-gray-300 rounded-xl h-24"
                  placeholder="Describe your token"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Total Supply</label>
                  <Input
                    type="number"
                    value={customization.supply}
                    onChange={(e) => handleCustomizationChange("supply", Number.parseInt(e.target.value))}
                    className="border-2 border-gray-300 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-2">Decimals</label>
                  <Input
                    type="number"
                    value={customization.decimals}
                    onChange={(e) => handleCustomizationChange("decimals", Number.parseInt(e.target.value))}
                    className="border-2 border-gray-300 rounded-xl"
                    min="0"
                    max="18"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MILK Balance & Fee */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🥛</div>
                  <div>
                    <div className="font-bold text-gray-800">Your $MILK Balance</div>
                    <div className="text-2xl font-bold text-green-600">{milkBalance.toLocaleString()} MILK</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-800">Creation Fee</div>
                  <div className="text-2xl font-bold text-orange-600">{creationFee} MILK</div>
                </div>
              </div>

              {!hasEnoughMilk && (
                <div className="bg-red-50 border-2 border-red-200 text-red-800 p-4 rounded-xl mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">⚠️</span>
                    <span className="font-bold">Insufficient $MILK Balance</span>
                  </div>
                  <p className="text-sm">You need {creationFee - milkBalance} more $MILK tokens to create this app.</p>
                  <Button
                    onClick={() =>
                      window.open("https://jup.ag/tokens/BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD", "_blank")
                    }
                    className="mt-3 bg-red-600 hover:bg-red-700 text-white"
                  >
                    🚀 Buy $MILK Now
                  </Button>
                </div>
              )}

              <div className="flex gap-4">
                <Button
                  onClick={handleProceedToPayment}
                  disabled={!hasEnoughMilk}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 text-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  {hasEnoughMilk ? "Proceed to Payment" : "Need More $MILK"}
                  <Target className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {step === "payment" && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">💰 Confirm Payment & Deploy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Payment Summary */}
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <h3 className="font-bold text-blue-800 mb-4 text-xl">📋 Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Token Name:</span>
                  <span className="font-bold">{customization.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Token Symbol:</span>
                  <span className="font-bold">{customization.symbol}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Supply:</span>
                  <span className="font-bold">{customization.supply.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Decimals:</span>
                  <span className="font-bold">{customization.decimals}</span>
                </div>
                <hr className="border-blue-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Creation Fee:</span>
                  <span className="font-bold text-orange-600">{creationFee} $MILK</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button onClick={() => setStep("customize")} variant="outline" className="flex-1">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Customize
              </Button>
              <Button
                onClick={handleConfirmPayment}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 text-lg flex items-center justify-center gap-2"
              >
                <DollarSign className="h-5 w-5" />
                Pay {creationFee} $MILK & Deploy
                <Rocket className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
