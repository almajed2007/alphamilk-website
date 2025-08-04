"use client"
import { useBannerTracking } from "@/hooks/use-banner-tracking"

const validateSolanaAddress = (address: string): boolean => {
  const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/
  return base58Regex.test(address)
}

export function Tokenomics() {
  const contractAddress = "FtcFnPQtjmCQATjByrp7GXBuDTy1ALQQDUCkUYDmMiLK" // Updated contract address

  // Validate contract address on component load
  if (!validateSolanaAddress(contractAddress)) {
    console.error("Invalid contract address format:", contractAddress)
  }

  const solanaExplorerUrl = `https://explorer.solana.com/address/${contractAddress}`

  // Banner tracking setup
  const { bannerRef, isVisible, hasBeenViewed, trackClick } = useBannerTracking({
    bannerType: "going_viral",
    position: "tokenomics_section",
    trackHover: true,
    trackVisibility: true,
  })

  const copyToClipboard = () => {
    if (!validateSolanaAddress(contractAddress)) {
      alert("Invalid contract address format. Please contact support.")
      return
    }
    navigator.clipboard.writeText(contractAddress)
    // Optional: Show success feedback
    alert("Contract address copied to clipboard!")
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
                    <div className="bg-gray-900 border border-teal-500/30 rounded-xl p-6 hover:border-teal-500/60 transition-all duration-300">
                      <div className="flex justify-center mb-4">
                        <img
                          src={exchange.logo || "/placeholder.svg"}
                          alt={`${exchange.name} logo`}
                          className="h-12 w-12 object-contain filter brightness-110"
                        />
                      </div>
                      <h4 className="font-bold text-white text-lg mb-2">{exchange.name}</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        {exchange.name === "CoinMarketCap" && "Track MILK price and market data"}
                        {exchange.name === "CoinGecko" && "Comprehensive token analytics"}
                        {exchange.name === "Binance" && "World's largest crypto exchange"}
                        {exchange.name === "MEXC" && "Global digital asset trading"}
                      </p>
                      <span className="inline-block bg-teal-500/20 text-teal-400 text-xs px-3 py-1 rounded-full font-medium">
                        {exchange.status}
                      </span>
                    </div>
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
      </div>
    </section>
  )
}
