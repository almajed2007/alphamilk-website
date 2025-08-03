"use client"
import { OrcaTradingWidget } from "./orca-trading-widget"

export function TradingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trade <span className="gradient-text">$MILK</span> Now
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get the best rates and instant swaps on Solana's leading DEX platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Price Chart - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <div
              className="bg-gray-900/30 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm cursor-pointer hover:bg-gray-900/40 transition-all duration-200"
              onClick={() =>
                window.open("https://dexscreener.com/solana/8blrdqtb4n2j4bygeaskdrng84nxbskwclhfbpsv89ie", "_blank")
              }
            >
              <style jsx>{`
                #dexscreener-embed {
                  position: relative;
                  width: 100%;
                  padding-bottom: 60%;
                  border-radius: 12px;
                  overflow: hidden;
                }
                @media(max-width: 1024px) {
                  #dexscreener-embed {
                    padding-bottom: 80%;
                  }
                }
                #dexscreener-embed iframe {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  border: 0;
                  border-radius: 12px;
                }
              `}</style>
              <div id="dexscreener-embed">
                <iframe
                  src="https://dexscreener.com/solana/8bLRDqTb4N2j4BygeAsKDRNg84NxBskwCLHFbpsv89iE?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                  title="MILK Token Price Chart"
                />
              </div>
            </div>
          </div>

          {/* Trading Widget - Takes up 1 column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <OrcaTradingWidget />

              {/* Additional Trading Options */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={() =>
                    window.open("https://jup.ag/tokens/BhFiisTfSAwMaFLjBem26Y82rrxmnqd78HtQDFQnVNxD", "_blank")
                  }
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <img src="/images/jupiter-logo.jpeg" alt="Jupiter" className="w-5 h-5 rounded-full" />
                  Trade on Jupiter
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-gray-800/50 hover:bg-gray-700/50 text-white font-medium py-2 px-3 rounded-lg transition-all duration-200 text-sm">
                    Buy MILK
                  </button>
                  <button className="bg-gray-800/50 hover:bg-gray-700/50 text-white font-medium py-2 px-3 rounded-lg transition-all duration-200 text-sm">
                    Sell MILK
                  </button>
                </div>
              </div>

              {/* Token Info */}
              <div className="mt-6 bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
                <h4 className="text-white font-semibold mb-3">Token Info</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Symbol:</span>
                    <span className="text-white">MILK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network:</span>
                    <span className="text-white">Solana</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Decimals:</span>
                    <span className="text-white">9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
