"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhitepaperModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WhitepaperModal({ isOpen, onClose }: WhitepaperModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">🥛 AlphaMilk Whitepaper</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] text-gray-300 space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">🥛 AlphaMilk Whitepaper</h1>
            <p className="text-lg text-gray-400">Version 1.0 — August 2025</p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">📌 Executive Summary</h2>
            <p className="leading-relaxed">
              AlphaMilk ($MILK) is a Solana-based meme token with a powerful utility: a one-click platform that lets
              users copy and instantly re-launch trending tokens — name, logo, supply, and code — all in under 2
              minutes.
            </p>
            <p className="leading-relaxed mt-3">
              Forget long development cycles, coding knowledge, or branding delays. AlphaMilk is building the first
              Token Cloning-as-a-Service protocol — empowering memecoin creators with tools to launch faster, ride the
              hype wave, and decentralize meme innovation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">🎯 Vision</h2>
            <p className="leading-relaxed">
              To become the #1 meme infrastructure protocol on Solana by providing utility to memecoin enthusiasts,
              builders, and community members — while driving real token demand through $MILK usage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">🚀 Use Case</h2>
            <h3 className="text-lg font-semibold text-white mb-2">🛠️ The AlphaMilk Launcher</h3>
            <p className="leading-relaxed mb-3">A simple UI where users:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Paste a trending token address (e.g., from DexScreener or Twitter).</li>
              <li>The system auto-fills: Name, Logo, Tokenomics, Supply</li>
              <li>Users customize as needed and launch.</li>
              <li>Pay in $MILK tokens to activate.</li>
            </ol>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2 text-green-400">
                <span>✅</span> No coding
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span>✅</span> No branding delay
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span>✅</span> Instant Liquidity Pool setup
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span>✅</span> Launch in {"<"} 2 minutes
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">💡 Why It Matters</h2>
            <p className="leading-relaxed">
              Meme tokens often go viral fast, but new creators miss the window. AlphaMilk fixes this.
            </p>
            <p className="leading-relaxed mt-2">
              We give creators the tools to copy and launch instantly — helping small players go big.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">🔗 Key Links</h2>
            <div className="space-y-2">
              <p>
                🌐 Website:{" "}
                <a href="https://www.alphamilk.net/" className="text-blue-400 hover:text-blue-300">
                  https://www.alphamilk.net/
                </a>
              </p>
              <p>
                🐦 Twitter:{" "}
                <a href="https://x.com/AlphaM38043" className="text-blue-400 hover:text-blue-300">
                  https://x.com/AlphaM38043
                </a>
              </p>
              <p>
                📈 Dexscreener:{" "}
                <a
                  href="https://dexscreener.com/solana/8blrdqtb4n2j4bygeaskdrng84nxbskwclhfbpsv89ie"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Link
                </a>
              </p>
              <p>
                🪙 Contract:{" "}
                <span className="text-yellow-400 font-mono text-sm">BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">📊 Tokenomics</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-600">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="border border-gray-600 p-3 text-left">Allocation</th>
                    <th className="border border-gray-600 p-3 text-left">Percentage</th>
                    <th className="border border-gray-600 p-3 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-600 p-3">Fair Launch (DEX)</td>
                    <td className="border border-gray-600 p-3">50%</td>
                    <td className="border border-gray-600 p-3">No presale — pure market-driven</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 p-3">Ecosystem & Utility</td>
                    <td className="border border-gray-600 p-3">20%</td>
                    <td className="border border-gray-600 p-3">For app usage, dev tools</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 p-3">CEX Listing & LP</td>
                    <td className="border border-gray-600 p-3">10%</td>
                    <td className="border border-gray-600 p-3">Future exchange growth</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 p-3">Marketing & Airdrops</td>
                    <td className="border border-gray-600 p-3">10%</td>
                    <td className="border border-gray-600 p-3">Viral campaigns, influencers, airdrops</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-600 p-3">Team & Dev Reserve</td>
                    <td className="border border-gray-600 p-3">10%</td>
                    <td className="border border-gray-600 p-3">Locked, small % to ensure sustainability</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-1">
              <p>
                <strong>Total Supply:</strong> 1,000,000,000 $MILK
              </p>
              <p>
                <strong>Decimals:</strong> 9
              </p>
              <p>
                <strong>Launch Type:</strong> Fair Launch (no presale)
              </p>
              <p>
                <strong>Initial Liquidity:</strong> Community-funded (1 SOL max start)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">📈 Roadmap</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Phase 1 – July–August 2025 ✅</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Fair launch on Solana</li>
                  <li>Website & branding</li>
                  <li>Token live on Birdeye & Dexscreener</li>
                  <li>Initial meme hype campaign</li>
                  <li>Socials launched (Twitter, Telegram)</li>
                  <li>Marketing with 13 influencers</li>
                  <li>1% airdrop allocation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Phase 2 – September 2025 🔜</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>AlphaMilk Launchpad MVP</li>
                  <li>Integrate real-time trending token scanner</li>
                  <li>Add custom liquidity options</li>
                  <li>Community feedback loop</li>
                  <li>Partnerships with meme creators</li>
                  <li>CoinGecko & CoinMarketCap listing</li>
                  <li>Mini game: "Milk the Memes"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Phase 3 – Q4 2025</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Launchpad full version</li>
                  <li>DAO voting for trending token picks</li>
                  <li>Mobile-friendly launch tool</li>
                  <li>Staking with $MILK rewards</li>
                  <li>Massive airdrop campaign</li>
                  <li>Tiered fee discounts for $MILK holders</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">📢 Marketing Strategy</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>🎯 500K+ traffic campaign via paid ads</li>
              <li>🤝 13 influencers on YouTube, Twitter, TikTok</li>
              <li>🎁 Airdrop to early holders and viral creators</li>
              <li>📱 Short-form video content (Viral meme edits)</li>
              <li>🧃 Community challenges & meme bounties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">🛡️ Security & Transparency</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Codebase verified</li>
              <li>Fair launch — no presale, no VC</li>
              <li>All significant wallets disclosed</li>
              <li>Airdrop tracked transparently</li>
              <li>Token locker links to be provided</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">💬 Community</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Telegram Group</li>
              <li>Twitter Spaces</li>
              <li>Meme Competitions</li>
              <li>DAO Polls Coming Soon</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">📍 Conclusion</h2>
            <p className="leading-relaxed">AlphaMilk is not just a meme token — it's the toolset for meme builders.</p>
            <p className="leading-relaxed mt-2">
              It brings utility, hype, and speed together in one explosive Solana-native platform.
            </p>
            <p className="leading-relaxed mt-2 font-semibold text-white">
              If you're building or just love memecoins — you'll need $MILK.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700 flex justify-end">
          <Button onClick={onClose} className="bg-green-600 hover:bg-green-700">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
