"use client"

import { useWallet, useConnection } from "@solana/wallet-adapter-react"
import { useEffect, useState } from "react"
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, Coins, ExternalLink, RefreshCw } from "lucide-react"

interface TokenBalance {
  mint: string
  amount: number
  decimals: number
  symbol?: string
}

export function WalletInfo() {
  const { publicKey, connected } = useWallet()
  const { connection } = useConnection()
  const [solBalance, setSolBalance] = useState<number | null>(null)
  const [milkBalance, setMilkBalance] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  // AlphaMilk token mint address
  const MILK_TOKEN_MINT = "BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD"

  useEffect(() => {
    setMounted(true)
  }, [])

  const fetchBalances = async () => {
    if (!publicKey || !connected) return

    setLoading(true)
    try {
      // Fetch SOL balance
      const solBalance = await connection.getBalance(publicKey)
      setSolBalance(solBalance / LAMPORTS_PER_SOL)

      // Fetch token accounts to find MILK balance
      const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
        programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
      })

      // Find MILK token account
      const milkAccount = tokenAccounts.value.find(
        (account) => account.account.data.parsed.info.mint === MILK_TOKEN_MINT,
      )

      if (milkAccount) {
        const balance = milkAccount.account.data.parsed.info.tokenAmount.uiAmount
        setMilkBalance(balance)
      } else {
        setMilkBalance(0)
      }
    } catch (error) {
      console.error("Error fetching balances:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (connected && publicKey && mounted) {
      fetchBalances()
    }
  }, [connected, publicKey, mounted])

  if (!mounted) {
    return null
  }

  if (!connected || !publicKey) {
    return (
      <Card className="bg-gray-50 border-gray-200">
        <CardContent className="p-6 text-center">
          <Wallet className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Connect your wallet to view balances</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-green-50 border-2 border-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-green-800">Wallet Info</span>
          <Button variant="ghost" size="sm" onClick={fetchBalances} disabled={loading} className="h-8 w-8 p-0">
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Wallet Address */}
        <div className="bg-white rounded-lg p-3 border">
          <div className="text-sm text-gray-600 mb-1">Wallet Address</div>
          <div className="flex items-center justify-between">
            <code className="text-sm font-mono text-gray-800">
              {publicKey.toString().slice(0, 8)}...{publicKey.toString().slice(-8)}
            </code>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(`https://explorer.solana.com/address/${publicKey.toString()}`, "_blank")}
              className="h-6 w-6 p-0"
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Balances */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-3 border text-center">
            <Coins className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <div className="text-sm text-gray-600">SOL Balance</div>
            <div className="text-lg font-bold text-purple-800">
              {loading ? "..." : solBalance !== null ? solBalance.toFixed(4) : "0.0000"}
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 border text-center">
            <div className="text-2xl mb-2">🥛</div>
            <div className="text-sm text-gray-600">MILK Balance</div>
            <div className="text-lg font-bold text-green-800">
              {loading ? "..." : milkBalance !== null ? milkBalance.toLocaleString() : "0"}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
            onClick={() => window.open(`https://jup.ag/tokens/${MILK_TOKEN_MINT}`, "_blank")}
          >
            Buy MILK
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
            onClick={() => window.open(`https://dexscreener.com/solana/${MILK_TOKEN_MINT}`, "_blank")}
          >
            View Chart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
