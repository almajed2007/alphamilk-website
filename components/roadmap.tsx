import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Circle, Clock, Rocket, Key, ChevronsUpIcon as Cheese, Smile, Users, Calendar } from "lucide-react"

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1: Fair Launch",
      status: "completed",
      icon: <Rocket className="h-6 w-6" />,
      items: [
        "Token Launch & Initial Liquidity",
        "Community Building",
        "Website & Social Media Launch",
        "Fair Distribution Model",
      ],
    },
    {
      phase: "Phase 2: Liquidity Migration & Fee-Key NFT Distribution",
      status: "completed",
      icon: <Key className="h-6 w-6" />,
      items: [
        "Liquidity Pool Migration",
        "Fee-Key NFT Collection Launch",
        "NFT Distribution to Early Holders",
        "Enhanced Tokenomics Implementation",
      ],
    },
    {
      phase: "Phase 3: DEX Listing & Aggregator Integration",
      status: "current",
      icon: <Cheese className="h-6 w-6" />,
      items: [
        "Major DEX Listings",
        "Price Aggregator Integration",
        "CoinGecko & CoinMarketCap Listings",
        "Trading Volume Growth",
      ],
    },
    {
      phase: "Phase 5: AlphaMilker NFT Drop",
      status: "upcoming",
      icon: <Smile className="h-6 w-6" />,
      items: [
        "AlphaMilker NFT Collection",
        "Exclusive Holder Benefits",
        "NFT Staking Rewards",
        "Community Governance Rights",
      ],
    },
    {
      phase: "Phase 6: CEX Listings & Partnerships",
      status: "upcoming",
      icon: <Users className="h-6 w-6" />,
      items: ["Major Exchange Listings", "Strategic Partnerships", "Institutional Adoption", "Global Market Expansion"],
    },
    {
      phase: "Phase 7: Governance Launch & Community Treasury",
      status: "future",
      icon: <Calendar className="h-6 w-6" />,
      items: [
        "DAO Governance System",
        "Community Treasury Launch",
        "Decentralized Decision Making",
        "Long-term Sustainability",
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-600" />
      case "current":
        return <Clock className="h-6 w-6 text-yellow-600" />
      default:
        return <Circle className="h-6 w-6 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-600 bg-green-50"
      case "current":
        return "border-yellow-600 bg-yellow-50"
      default:
        return "border-gray-300 bg-gray-50"
    }
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Roadmap</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From fair launch to moon mission, here's our journey to becoming the top agricultural meme token in the
            crypto space.
          </p>
        </div>

        {/* Official AlphaMilk Roadmap Image */}
        <div className="flex justify-center mb-12">
          <img
            src="/images/alphamilk-roadmap-official.png"
            alt="Official AlphaMilk Roadmap"
            className="rounded-lg shadow-lg max-w-full w-full h-auto"
          />
        </div>

        {/* Detailed Phase Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <Card key={index} className={`border-2 ${getStatusColor(phase.status)} hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {getStatusIcon(phase.status)}
                  <div className="text-green-600">{phase.icon}</div>
                  <h3 className="text-lg font-bold text-green-800 flex-1">{phase.phase}</h3>
                </div>

                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-green-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">🚀 From Farm to Moon</h3>
            <p className="text-xl text-green-100 mb-6">
              Every phase brings us closer to our ultimate goal: establishing AlphaMilk as the premier agricultural meme
              token in the DeFi ecosystem.
            </p>
            <p className="text-green-200">
              "The journey of a thousand miles begins with a single step." - Alpha Farmer Wisdom
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
