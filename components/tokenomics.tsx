"use client"
import { ExternalLink } from "lucide-react"
import { useBannerTracking } from "@/hooks/use-banner-tracking"

export function Tokenomics() {
  const contractAddress = "BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD"
  const solanaExplorerUrl = `https://explorer.solana.com/address/${contractAddress}`

  // Banner tracking setup
  const { bannerRef, isVisible, hasBeenViewed, trackClick } = useBannerTracking({
    bannerType: "going_viral",
    position: "tokenomics_section",
    trackHover: true,
    trackVisibility: true,
  })

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
  }

  const tokenInfo = [
    { label: "Total Supply", value: "1,000,000,000 MILK", icon: "🥛" },
    { label: "Network", value: "Solana (SPL Token)", icon: "⚡" },
    { label: "Fair Launch", value: "60% (600M MILK)", icon: "🎯" },
    { label: "Liquidity Reserve", value: "20% (200M MILK)", icon: "💧" },
    { label: "Team & Advisors", value: "10% (100M MILK)", icon: "👨‍🌾" },
    { label: "Marketing & Community", value: "10% (100M MILK)", icon: "📢" },
    { label: "Tax", value: "2% Buy / 2% Sell", icon: "💰" },
  ]

  const exchanges = [
    {
      name: "CoinMarketCap",
      logo: "/images/coinmarketcap-logo.jpg",
      url: "https://coinmarketcap.com",
      status: "Coming Soon",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "CoinGecko",
      logo: "/images/coingecko-logo.png",
      url: "https://coingecko.com",
      status: "Coming Soon",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Binance",
      logo: "/images/binance-logo.png",
      url: "https://binance.com",
      status: "Planned",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "MEXC",
      logo: "/images/mexc-logo.jpg",
      url: "https://mexc.com",
      status: "Planned",
      color: "from-purple-400 to-pink-500",
    },
  ]

  return (
    <section className="py-20 px-4 retro-gradient-bg retro-bg-pattern">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="retro-title text-4xl md:text-5xl font-bold mb-6">Tokenomics</h2>
          <div className="retro-card max-w-4xl mx-auto p-6">
            <p className="retro-text text-xl">
              <span className="retro-neon font-bold">GROOVY</span> distribution designed by farmers, for farmers! 60%
              fair launch ensures maximum <span className="retro-3d-text font-bold">COMMUNITY POWER</span>! 🌈
            </p>
          </div>
        </div>

        {/* Official AlphaMilk Tokenomics Image */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <img
              src="/images/alphamilk-tokenomics-official.png"
              alt="Official AlphaMilk Tokenomics Chart"
              className="rounded-2xl shadow-2xl max-w-2xl w-full h-auto border-6 border-amber-800 retro-glow"
            />
            {/* Retro Frame */}
            <div className="absolute -inset-4 border-4 border-orange-400 rounded-3xl opacity-50"></div>
            <div className="absolute -inset-8 border-2 border-yellow-400 rounded-3xl opacity-30"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Exchanges & Listings */}
          <div className="retro-card mb-8 p-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 text-8xl">🚀</div>
              <div className="absolute bottom-4 right-4 text-8xl">💎</div>
            </div>

            <div className="relative z-10">
              <h3 className="retro-title text-2xl font-bold text-center mb-4">
                Listings & Tracking <span className="retro-neon">EXTRAVAGANZA</span>! 🎪
              </h3>
              <p className="retro-text text-center mb-6">
                AlphaMilk will be available on major exchanges and tracking platforms
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {exchanges.map((exchange, index) => (
                  <div key={index} className="text-center transform hover:scale-105 transition-all duration-300">
                    <div
                      className={`retro-card p-4 mb-3 bg-gradient-to-br ${exchange.color} border-4 border-amber-800`}
                    >
                      <img
                        src={exchange.logo || "/placeholder.svg"}
                        alt={`${exchange.name} logo`}
                        className="h-8 w-auto mx-auto mb-2 object-contain filter drop-shadow-lg"
                      />
                      <h4 className="font-bold text-amber-800 text-sm drop-shadow-lg">{exchange.name}</h4>
                    </div>
                    <span className="retro-button text-xs px-3 py-1 text-white font-bold">{exchange.status}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <p className="retro-text text-sm">
                  🚀 Major exchange listings coming as we progress through our{" "}
                  <span className="retro-neon font-bold">GROOVY</span> roadmap phases! ✨
                </p>
              </div>
            </div>
          </div>

          {/* Token Information */}
          <div className="space-y-6">
            <div className="retro-card p-6">
              <h3 className="retro-title text-2xl font-bold text-center mb-6">
                Token Information <span className="text-3xl">📊</span>
              </h3>
              <div className="space-y-4">
                {tokenInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 px-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-3 border-amber-600 hover:from-orange-100 hover:to-pink-100 transition-all duration-300"
                  >
                    <span className="retro-text font-bold flex items-center gap-2">
                      <span className="text-xl">{info.icon}</span>
                      {info.label}:
                    </span>
                    <span className="retro-3d-text font-bold text-right">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fair Launch Promise */}
            <div className="retro-card p-6 bg-gradient-to-br from-green-400 to-teal-500 text-amber-800 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-2 left-2 text-6xl">🐄</div>
                <div className="absolute bottom-2 right-2 text-6xl">🌾</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl">🚜</div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-center drop-shadow-lg">
                  🐄 <span className="retro-neon">FAIR LAUNCH</span> Promise! 🌈
                </h3>
                <p className="text-lg mb-4 text-center drop-shadow-lg">
                  60% fair launch allocation ensures maximum community ownership from day one. No private sales, no VC
                  dumps - just <span className="font-bold text-yellow-300">HONEST FARMING</span>! 🌱
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-300">🎯</span>
                      Marketing funds used for community growth
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-300">🔒</span>
                      No hidden allocations or backdoors
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-300">💰</span>
                      2% tax supports ecosystem development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-300">⚡</span>
                      Built on Solana for fast, low-cost transactions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="retro-card p-6 text-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                <div className="text-4xl font-bold drop-shadow-lg">60%</div>
                <div className="text-lg font-bold drop-shadow-lg">Fair Launch 🎯</div>
              </div>
              <div className="retro-card p-6 text-center bg-gradient-to-br from-blue-400 to-teal-500 text-white">
                <div className="text-4xl font-bold drop-shadow-lg">20%</div>
                <div className="text-lg font-bold drop-shadow-lg">Liquidity Reserve 💧</div>
              </div>
            </div>

            {/* Additional Solana Links */}
            <div className="retro-card p-6">
              <h3 className="retro-subtitle text-lg font-bold text-center mb-4">
                Explore on <span className="retro-neon">SOLANA</span> 🌐
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "Solscan", url: "https://solscan.io", icon: "🔍" },
                  { name: "Solana Beach", url: "https://solanabeach.io", icon: "🏖️" },
                  { name: "Step Finance", url: "https://step.finance", icon: "👣" },
                ].map((link, index) => (
                  <button
                    key={index}
                    className="retro-button text-white px-4 py-2 text-sm flex items-center gap-2"
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    <span>{link.icon}</span>
                    {link.name}
                    <ExternalLink className="h-3 w-3" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Going Viral Banner with Tracking */}
        <div className="mt-16 mb-16" ref={bannerRef}>
          <div className="retro-card relative overflow-hidden p-4">
            <img
              src="/images/going-viral-banner.png"
              alt="AlphaMilk Going Viral - Don't Miss Out on Major Exchange Listings"
              className="w-full h-auto object-cover rounded-xl border-4 border-amber-800"
            />

            {/* Retro Overlay */}
            <div className="absolute inset-4 bg-gradient-to-r from-black/20 via-transparent to-pink-500/20 pointer-events-none rounded-xl"></div>

            {/* Call-to-action overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="retro-button text-white px-8 py-4 text-lg font-bold shadow-2xl bg-gradient-to-r from-red-500 to-pink-500"
                  onClick={() => trackClick("buy_milk", "dex_platform")}
                >
                  🚀 BUY $MILK NOW
                </button>
                <button
                  className="retro-button text-white px-8 py-4 text-lg font-bold shadow-2xl bg-gradient-to-r from-purple-500 to-blue-500"
                  onClick={() => trackClick("join_community", "telegram")}
                >
                  📈 JOIN COMMUNITY
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="retro-card p-8 md:p-12 bg-gradient-to-br from-yellow-400 to-orange-500 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 text-6xl">🚜</div>
              <div className="absolute top-4 right-4 text-6xl">🌾</div>
              <div className="absolute bottom-4 left-4 text-6xl">🐄</div>
              <div className="absolute bottom-4 right-4 text-6xl">🥛</div>
            </div>

            <div className="relative z-10 text-amber-800">
              <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">
                🚜 Built <span className="retro-neon">DIFFERENT</span>! ✨
              </h3>
              <p className="text-xl mb-6 drop-shadow-lg">
                While other projects allocate huge percentages to teams and VCs, AlphaMilk puts the community first with
                a massive <span className="font-bold text-yellow-200">60% FAIR LAUNCH</span> allocation! 🎯
              </p>
              <p className="text-lg font-bold drop-shadow-lg">
                "A <span className="retro-neon">GROOVY</span> harvest requires{" "}
                <span className="retro-neon">GROOVY</span> seeds." 🌱
                <br />
                <span className="text-base">- Alpha Farmer Philosophy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
