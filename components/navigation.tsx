"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="modern-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/alphamilk-logo.png" alt="AlphaMilk" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-semibold text-white">AlphaMilk</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#tokenomics" className="text-gray-300 hover:text-white transition-colors">
              Tokenomics
            </Link>
            <Link href="#roadmap" className="text-gray-300 hover:text-white transition-colors">
              Roadmap
            </Link>
            <Link href="#community" className="text-gray-300 hover:text-white transition-colors">
              Community
            </Link>
            <Link href="/copy-tokens" className="text-gray-300 hover:text-white transition-colors">
              Copy Tokens
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              className="modern-btn-jupiter text-sm px-4 py-2 flex items-center gap-2"
              onClick={() =>
                window.open(
                  "https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD",
                  "_blank",
                )
              }
            >
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">O</span>
              </div>
              Buy on Orca
            </Button>
            <Button
              className="modern-btn text-sm px-4 py-2 flex items-center gap-2"
              onClick={() =>
                window.open("https://jup.ag/tokens/BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD", "_blank")
              }
            >
              <img src="/images/jupiter-logo.jpeg" alt="Jupiter" className="w-4 h-4 rounded-full" />
              Buy on Jupiter
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-white hover:text-gray-300">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-xl rounded-lg mt-2">
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#tokenomics"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tokenomics
              </Link>
              <Link
                href="#roadmap"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Link
                href="#community"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/copy-tokens"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Copy Tokens
              </Link>
              <div className="pt-2 space-y-2">
                <Button
                  className="w-full modern-btn-jupiter text-sm px-4 py-2 flex items-center justify-center gap-2"
                  onClick={() => {
                    window.open(
                      "https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD",
                      "_blank",
                    )
                    setIsMenuOpen(false)
                  }}
                >
                  <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">O</span>
                  </div>
                  Buy on Orca
                </Button>
                <Button
                  className="w-full modern-btn text-sm px-4 py-2 flex items-center justify-center gap-2"
                  onClick={() => {
                    window.open("https://jup.ag/tokens/BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD", "_blank")
                    setIsMenuOpen(false)
                  }}
                >
                  <img src="/images/jupiter-logo.jpeg" alt="Jupiter" className="w-4 h-4 rounded-full" />
                  Buy on Jupiter
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
