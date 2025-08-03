"use client"
import { Copy } from "lucide-react"
import { WalletConnectionButton } from "@/components/wallet/wallet-connection-button"

export function Hero() {
  const contractAddress = "BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 retro-gradient-bg retro-bg-pattern">
      {/* Retro Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 retro-bounce"></div>
        <div
          className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-teal-400 to-green-500 rounded-full opacity-20"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 right-10 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 retro-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 relative">
          <div className="retro-bounce">
            <img
              src="/images/alphamilk-logo.png"
              alt="AlphaMilk Retro Mascot"
              className="w-40 h-40 mx-auto mb-6 rounded-full border-6 border-amber-800 shadow-2xl bg-gradient-to-br from-yellow-100 to-orange-100 p-2 retro-glow"
              style={{
                boxShadow:
                  "0 0 30px rgba(255, 107, 53, 0.6), 0 0 60px rgba(247, 147, 30, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.3)",
              }}
            />
          </div>
          {/* Retro Sparkle Effects */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="absolute -top-8 -left-8 text-yellow-400 text-2xl animate-pulse">✨</div>
            <div
              className="absolute -top-4 -right-12 text-orange-400 text-xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              ⭐
            </div>
            <div
              className="absolute -bottom-6 -left-10 text-pink-400 text-lg animate-pulse"
              style={{ animationDelay: "1s" }}
            >
              💫
            </div>
            <div
              className="absolute -bottom-8 -right-8 text-purple-400 text-xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            >
              ✨
            </div>
          </div>
        </div>

        <h1 className="retro-title text-6xl md:text-8xl font-bold mb-4 drop-shadow-2xl">
          ALPHA<span className="text-pink-500">MILK</span>
        </h1>

        <p className="retro-subtitle text-2xl md:text-3xl font-bold mb-2 retro-3d-text">$MILK</p>

        <p className="retro-text text-xl md:text-2xl mb-8 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-4 border-amber-800 shadow-lg">
          🤖 The <span className="retro-neon font-bold">FIRST AI-POWERED</span> token creation platform! 🚀<br />
          <span className="text-lg">
            Create professional tokens in just <span className="retro-3d-text font-bold">2 MINUTES</span> with the{" "}
            <span className="retro-neon font-bold">LOWEST FEES</span> on Solana!
          </span>
          <br />
          <span className="text-base mt-2 block">
            ✨ Leverage cutting-edge AI to build, deploy, and launch your token effortlessly!
          </span>
        </p>

        {/* Wallet Connection Section */}
        <div className="mb-8">
          <WalletConnectionButton variant="hero" className="mb-4" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="retro-button text-white px-8 py-4 text-lg font-bold shadow-2xl">🚀 BUY $MILK NOW</button>

          <div className="retro-card flex items-center gap-2 px-4 py-3 border-4 border-amber-800">
            <span className="retro-text text-sm font-bold">Contract:</span>
            <code className="text-sm font-mono bg-amber-100 px-2 py-1 rounded border-2 border-amber-600">
              {contractAddress.slice(0, 8)}...{contractAddress.slice(-8)}
            </code>
            <button
              onClick={copyToClipboard}
              className="retro-button p-2 text-xs"
              style={{
                background: "linear-gradient(45deg, #20b2aa, #ff69b4)",
                minHeight: "auto",
                boxShadow: "0 4px 0 #8b4513, 0 6px 10px rgba(0,0,0,0.3)",
              }}
            >
              <Copy className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Retro Stats Cards */}
        <div className="flex justify-center gap-6 text-center flex-wrap">
          {[
            { value: "$2.5M", label: "Market Cap", icon: "💰" },
            { value: "5,000+", label: "Holders", icon: "👥" },
            { value: "100%", label: "Community", icon: "🤝" },
          ].map((stat, index) => (
            <div
              key={index}
              className="retro-card p-4 min-w-[120px] transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="retro-3d-text text-2xl font-bold mb-1">{stat.value}</div>
              <div className="retro-text text-sm font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Retro Decorative Elements */}
        <div className="mt-12 flex justify-center gap-8 text-4xl opacity-60">
          <span className="animate-bounce" style={{ animationDelay: "0s" }}>
            🥛
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            🚜
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
            🌾
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>
            🐄
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.8s" }}>
            🚀
          </span>
        </div>
      </div>
    </section>
  )
}
