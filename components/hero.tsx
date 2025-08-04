"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Copy, Rocket } from "lucide-react"
import Script from "next/script"

const validateSolanaAddress = (address: string): boolean => {
  // Solana addresses are base58 encoded and typically 32-44 characters long
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/
  return base58Regex.test(address)
}

const CONTRACT_ADDRESS = "FtcFnPQtjmCQATjByrp7GXBuDTy1ALQQDUCkUYDmMiLK"

export function Hero() {
  const trackTwitterConversion = () => {
    if (typeof window !== "undefined" && (window as any).twq) {
      ;(window as any).twq("event", "tw-q9fit-q9fiu", {
        contents: [
          {
            content_type: "token_interaction",
            content_id: "milk_token",
            content_name: "AlphaMilk Token",
            content_price: null,
            num_items: 1,
            content_group_id: "crypto_tokens",
          },
        ],
      })
    }
  }

  const handleCopyTokens = () => {
    trackTwitterConversion()
    window.open("/copy-tokens", "_self")
  }

  const handleBuyJupiter = () => {
    if (!validateSolanaAddress(CONTRACT_ADDRESS)) {
      console.error("Invalid contract address format")
      alert("Invalid token address. Please contact support.")
      return
    }
    trackTwitterConversion()
    window.open(`https://jup.ag/tokens/${CONTRACT_ADDRESS}`, "_blank")
  }

  const handleCopyAddress = () => {
    if (!validateSolanaAddress(CONTRACT_ADDRESS)) {
      console.error("Invalid contract address format")
      alert("Invalid token address. Please contact support.")
      return
    }
    trackTwitterConversion()
    navigator.clipboard.writeText(CONTRACT_ADDRESS)
    // Optional: Show success message
    alert("Token address copied to clipboard!")
  }

  return (
    <>
      <Script id="twitter-conversion-hero" strategy="afterInteractive">
        {`
          // Twitter conversion tracking event code
          function trackTwitterEvent() {
            if (typeof twq !== 'undefined') {
              twq('event', 'tw-q9fit-q9fiu', {
                contents: [
                  {
                    content_type: 'hero_interaction',
                    content_id: 'hero_cta',
                    content_name: 'Hero CTA Buttons',
                    content_price: null,
                    num_items: 1,
                    content_group_id: 'main_actions'
                  }
                ]
              });
            }
          }
        `}
      </Script>

      <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/10 to-[#00b894]/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d4aa]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b894]/20 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Launch the Next Viral Token in 2 Minutes
              <span className="block text-2xl md:text-3xl text-gray-300 font-normal mt-4">
                Powered by AlphaMilk Copy Engine
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              A revolutionary $MILK-powered platform that lets you replicate trending tokens — name, code, logo, and
              supply — instantly. No coding. No delay. Just paste the address and launch.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button className="modern-btn text-lg px-8 py-4 flex items-center gap-3" onClick={handleCopyTokens}>
                <Copy className="h-5 w-5" />
                Start Copying Tokens
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                className="modern-btn-jupiter text-lg px-8 py-4 flex items-center gap-3"
                onClick={handleBuyJupiter}
              >
                <img src="/images/jupiter-logo.jpeg" alt="Jupiter" className="w-6 h-6 rounded-full" />
                Buy $MILK on Jupiter
                <Rocket className="h-5 w-5" />
              </Button>

              <Button
                className="modern-btn-outline text-lg px-8 py-4 flex items-center gap-3"
                onClick={handleCopyAddress}
              >
                <Copy className="h-5 w-5" />
                Copy Token Address
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">13+</div>
                <div className="text-gray-400 text-lg">Influencers Onboard</div>
                <div className="text-gray-500 text-sm mt-1 font-bold">
                  TikTok, YouTube & Twitter campaigns in motion
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">1%</div>
                <div className="text-gray-400 text-lg">Airdrop Supply</div>
                <div className="text-gray-500 text-sm mt-1 font-bold">
                  Massive community airdrop to spark viral growth
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">100x</div>
                <div className="text-gray-400 text-lg">Growth Potential</div>
                <div className="text-gray-500 text-sm mt-1 font-bold">Early backers gain first-mover advantage</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Zap className="h-8 w-8 text-[#00d4aa] opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <Copy className="h-6 w-6 text-[#00b894] opacity-60" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: "4s" }}>
          <Rocket className="h-7 w-7 text-[#00d4aa] opacity-60" />
        </div>
      </section>
    </>
  )
}
