"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { trackNavConversion } from "@/utils/analytics"

const validateSolanaAddress = (address: string): boolean => {
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/
  return base58Regex.test(address)
}

const CONTRACT_ADDRESS = "FtcFnPQtjmCQATjByrp7GXBuDTy1ALQQDUCkUYDmMiLK"

// Validate contract address
if (!validateSolanaAddress(CONTRACT_ADDRESS)) {
  console.error("Invalid contract address in navigation:", CONTRACT_ADDRESS)
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOrcaClick = () => {
    if (!validateSolanaAddress(CONTRACT_ADDRESS)) {
      alert("Invalid token address. Please contact support.")
      return
    }
    trackNavConversion("orca")
    window.open(
      `https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=${CONTRACT_ADDRESS}`,
      "_blank",
    )
  }

  const handleJupiterClick = () => {
    if (!validateSolanaAddress(CONTRACT_ADDRESS)) {
      alert("Invalid token address. Please contact support.")
      return
    }
    trackNavConversion("jupiter")
    window.open(`https://jup.ag/tokens/${CONTRACT_ADDRESS}`, "_blank")
  }

  const handleCopyAddress = () => {
    if (!validateSolanaAddress(CONTRACT_ADDRESS)) {
      alert("Invalid token address format.")
      return
    }
    navigator.clipboard.writeText(CONTRACT_ADDRESS)
    alert("Token address copied!")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/images/alphamilk-logo.png" alt="AlphaMilk Logo" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold text-white">AlphaMilk</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Community
            </button>
            <Button onClick={handleJupiterClick} className="bg-green-600 hover:bg-green-700">
              Buy $MILK
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("tokenomics")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Tokenomics
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Community
              </button>
              <Button onClick={handleJupiterClick} className="w-full bg-green-600 hover:bg-green-700">
                Buy $MILK
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
