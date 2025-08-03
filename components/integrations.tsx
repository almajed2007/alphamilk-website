import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code, Zap, BarChart3 } from "lucide-react"

export function Integrations() {
  const solanaIntegrations = [
    {
      name: "Solana Web3.js",
      description: "For connecting to Solana blockchain and reading token data",
      icon: <Code className="h-8 w-8 text-purple-600" />,
      features: ["Blockchain connectivity", "Token data reading", "Transaction monitoring"],
    },
    {
      name: "Solana Wallet Adapters",
      description: "Integration with Phantom, Solflare, and other Solana wallets",
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      features: ["Multi-wallet support", "Secure connections", "Transaction signing"],
    },
    {
      name: "Solana Token Program",
      description: "For reading token supply, holder count, and transaction data",
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      features: ["Supply tracking", "Holder analytics", "Transaction history"],
    },
  ]

  const tradingAPIs = [
    {
      name: "Birdeye API",
      description: "For fetching real-time price data, trading volume, and market analytics",
      icon: "🦅",
      url: "https://birdeye.so",
      features: ["Real-time pricing", "Volume analytics", "Market insights"],
    },
    {
      name: "Jupiter API",
      description: "For price aggregation data and optimal trading route information",
      icon: "🪐",
      url: "https://jup.ag",
      features: ["Price aggregation", "Route optimization", "Best execution"],
    },
    {
      name: "DexScreener API",
      description: "For chart data, trading pairs, and market statistics",
      icon: "📊",
      url: "https://dexscreener.com",
      features: ["Chart data", "Trading pairs", "Market statistics"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Technical Integrations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AlphaMilk leverages cutting-edge blockchain technology and trading APIs to provide the best user experience
            and real-time data.
          </p>
        </div>

        {/* Solana Blockchain Integration */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">Solana Blockchain Integration</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {solanaIntegrations.map((integration, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-purple-100">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{integration.icon}</div>
                  <CardTitle className="text-xl text-green-800">{integration.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center">{integration.description}</p>
                  <ul className="space-y-2">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trading Platform APIs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">Trading Platform APIs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {tradingAPIs.map((api, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-blue-100">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{api.icon}</div>
                  <CardTitle className="text-xl text-green-800">{api.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center">{api.description}</p>
                  <ul className="space-y-2 mb-4">
                    {api.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href={api.url} target="_blank" rel="noopener noreferrer">
                      Visit Platform
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Benefits */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">⚡ Powered by Advanced Technology</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-bold">Fast Transactions</div>
                <div className="text-sm opacity-90">Sub-second finality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="font-bold">Low Fees</div>
                <div className="text-sm opacity-90">Fraction of a penny</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-bold">Real-time Data</div>
                <div className="text-sm opacity-90">Live market updates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔒</div>
                <div className="font-bold">Secure</div>
                <div className="text-sm opacity-90">Blockchain verified</div>
              </div>
            </div>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Our technical infrastructure ensures that AlphaMilk holders get the best trading experience with real-time
              data, optimal pricing, and seamless wallet integration across the Solana ecosystem.
            </p>
          </div>
        </div>

        {/* Developer Resources */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-green-800 mb-4">🛠️ Developer Resources</h3>
            <p className="text-gray-600 mb-6">
              Interested in building with AlphaMilk? Access our technical documentation and integration guides.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                API Documentation
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                SDK Downloads
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent">
                Code Examples
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
