"use client"

import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Button } from "@/components/ui/button"
import { Wallet, LogOut, Copy, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

interface WalletConnectionButtonProps {
  variant?: "default" | "hero" | "compact"
  className?: string
}

export function WalletConnectionButton({ variant = "default", className = "" }: WalletConnectionButtonProps) {
  const { wallet, publicKey, connected, disconnect } = useWallet()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button className={`bg-purple-600 hover:bg-purple-700 text-white ${className}`}>
        <Wallet className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    )
  }

  const copyAddress = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey.toString())
      // You could add a toast notification here
      alert("Wallet address copied to clipboard!")
    }
  }

  const openInExplorer = () => {
    if (publicKey) {
      window.open(`https://explorer.solana.com/address/${publicKey.toString()}`, "_blank")
    }
  }

  if (variant === "hero" && connected && publicKey) {
    return (
      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <div className="bg-green-100 border border-green-300 rounded-lg px-4 py-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-800 font-medium">{wallet?.adapter.name} Connected</span>
        </div>
        <div className="flex items-center gap-2 bg-white/90 rounded-lg px-3 py-2 border">
          <code className="text-xs font-mono text-gray-700">
            {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
          </code>
          <Button variant="ghost" size="sm" onClick={copyAddress} className="h-6 w-6 p-0">
            <Copy className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="sm" onClick={openInExplorer} className="h-6 w-6 p-0">
            <ExternalLink className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="sm" onClick={disconnect} className="h-6 w-6 p-0 text-red-600">
            <LogOut className="h-3 w-3" />
          </Button>
        </div>
      </div>
    )
  }

  if (variant === "compact" && connected && publicKey) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-sm text-green-800">
          {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
        </span>
        <Button variant="ghost" size="sm" onClick={disconnect} className="h-6 w-6 p-0">
          <LogOut className="h-3 w-3" />
        </Button>
      </div>
    )
  }

  // Use the default Solana wallet adapter button with custom styling
  return (
    <div className={`wallet-adapter-button-trigger ${className}`}>
      <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 !text-white !rounded-lg !px-4 !py-2 !font-medium !transition-colors" />
    </div>
  )
}
