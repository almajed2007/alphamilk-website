"use client"

import { useState } from "react"
import { ArrowUpDown, Settings, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OrcaTradingWidget() {
  const [payAmount, setPayAmount] = useState("")
  const [receiveAmount, setReceiveAmount] = useState("")
  const [slippage, setSlippage] = useState("0.5")

  const handleSwap = () => {
    const orcaUrl =
      "https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD"
    window.open(orcaUrl, "_blank")
  }

  const handleFlipTokens = () => {
    setPayAmount(receiveAmount)
    setReceiveAmount(payAmount)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-6 shadow-2xl cursor-pointer hover:border-blue-400/30 transition-all duration-200"
        onClick={() =>
          window.open(
            "https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD",
            "_blank",
          )
        }
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <h3 className="text-white font-semibold text-lg">Trade on Orca</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs text-gray-300 bg-gray-700/50 px-2 py-1 rounded">Slippage: {slippage}%</div>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Pay Section */}
        <div className="mb-4">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Pay</span>
              <span className="text-gray-400 text-xs">Balance: 0</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={payAmount}
                onChange={(e) => setPayAmount(e.target.value)}
                placeholder="0"
                className="bg-transparent text-white text-2xl font-semibold flex-1 outline-none placeholder-gray-500"
              />
              <div className="flex items-center gap-2 bg-gray-700/50 px-3 py-2 rounded-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
                <span className="text-white font-medium">SOL</span>
              </div>
            </div>
            <div className="text-gray-400 text-sm mt-1">$0.00</div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center mb-4">
          <Button
            onClick={handleFlipTokens}
            variant="ghost"
            size="sm"
            className="bg-gray-700/50 hover:bg-gray-600/50 text-white p-2 rounded-full border border-gray-600/30"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Receive Section */}
        <div className="mb-6">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Receive</span>
              <span className="text-gray-400 text-xs">Balance: 0</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={receiveAmount}
                onChange={(e) => setReceiveAmount(e.target.value)}
                placeholder="0"
                className="bg-transparent text-white text-2xl font-semibold flex-1 outline-none placeholder-gray-500"
                readOnly
              />
              <div className="flex items-center gap-2 bg-gray-700/50 px-3 py-2 rounded-lg">
                <img src="/images/alphamilk-logo.png" alt="MILK" className="w-6 h-6 rounded-full" />
                <span className="text-white font-medium">MILK</span>
              </div>
            </div>
            <div className="text-gray-400 text-sm mt-1">$0.00</div>
          </div>
        </div>

        {/* Trade Button */}
        <Button
          onClick={handleSwap}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
        >
          Trade on Orca
          <ExternalLink className="h-4 w-4" />
        </Button>

        {/* Footer Info */}
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-xs">Powered by Orca • Best rates on Solana</p>
        </div>
      </div>
    </div>
  )
}
