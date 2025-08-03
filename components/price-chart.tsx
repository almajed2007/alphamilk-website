"use client"

export function PriceChart() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Live <span className="gradient-text">$MILK</span> Price
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Track real-time price movements and trading activity on Solana
          </p>
        </div>

        <div className="bg-gray-900/30 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
          <style jsx>{`
            #dexscreener-embed {
              position: relative;
              width: 100%;
              padding-bottom: 125%;
              border-radius: 12px;
              overflow: hidden;
            }
            @media(min-width: 1400px) {
              #dexscreener-embed {
                padding-bottom: 65%;
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
    </section>
  )
}
