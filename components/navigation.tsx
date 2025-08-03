"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WalletConnectionButton } from "@/components/wallet/wallet-connection-button"
import { Menu, X, Copy, Home, Info, BarChart3, Users, Zap } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
    { href: "/#about", label: "About", icon: <Info className="h-4 w-4" /> },
    { href: "/#tokenomics", label: "Tokenomics", icon: <BarChart3 className="h-4 w-4" /> },
    { href: "/#community", label: "Community", icon: <Users className="h-4 w-4" /> },
    { href: "/copy-tokens", label: "Copy Tokens", icon: <Copy className="h-4 w-4" /> },
  ]

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-yellow-100 to-orange-100 backdrop-blur-sm z-50 border-b-4 border-amber-800">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/alphamilk-logo.png"
              alt="AlphaMilk Logo"
              className="h-12 w-12 rounded-full border-2 border-amber-800"
            />
            <span className="retro-title text-2xl font-bold">AlphaMilk</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="retro-text font-bold hover:text-orange-600 transition-colors flex items-center gap-2"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Wallet + Buy Button */}
          <div className="hidden md:flex items-center gap-4">
            <WalletConnectionButton variant="compact" />
            <Button className="retro-button text-white px-6 py-2 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Buy $MILK
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button onClick={() => setIsOpen(!isOpen)} className="md:hidden retro-button text-white p-2">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-2 border-amber-600 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="retro-text font-bold hover:text-orange-600 transition-colors flex items-center gap-2 p-2"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}

              <div className="flex flex-col gap-3 pt-4 border-t-2 border-amber-600">
                <WalletConnectionButton />
                <Button className="retro-button text-white flex items-center justify-center gap-2">
                  <Zap className="h-4 w-4" />
                  Buy $MILK
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
