import { Zap, Shield, Cpu, Rocket } from "lucide-react"

export function About() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-[#00d4aa]" />,
      title: "Lightning Fast",
      description: "Deploy tokens in under 60 seconds with our advanced AI automation system.",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#00d4aa]" />,
      title: "Secure by Design",
      description: "Military-grade security with automated auditing and vulnerability detection.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-[#00d4aa]" />,
      title: "AI-Powered",
      description: "Advanced machine learning algorithms optimize every aspect of token creation.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-[#00d4aa]" />,
      title: "Scale Infinitely",
      description: "Built on Solana's high-performance blockchain for unlimited scalability.",
    },
  ]

  return (
    <section className="section-darker py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empower Your Workflow
            <br />
            <span className="gradient-text">with AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI agents handle the complexity of blockchain development, allowing you to focus on what matters most -
            building the future of decentralized finance.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="modern-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 modern-card-dark">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">DEXScreener Evaluation</h3>
              <p className="text-lg text-gray-300 mb-6">
                "AlphaMilk ($MILK) has been thoroughly evaluated and verified on DEXScreener, showing strong
                fundamentals and transparent tokenomics with locked liquidity ensuring investor protection."
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full"></div>
                  <span className="text-gray-300">Verified contract on Solana</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full"></div>
                  <span className="text-gray-300">Liquidity LOCKED for security</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full"></div>
                  <span className="text-gray-300">Real-time price tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00d4aa] rounded-full"></div>
                  <span className="text-gray-300">Transparent trading metrics</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="code-block w-full max-w-md">
                <div className="text-green-400 mb-2">{"// DEXScreener Verification"}</div>
                <div className="text-blue-400">{"const tokenInfo = {"}</div>
                <div className="text-white ml-4">{"address: 'BhFiisTfSAwMa...',"}</div>
                <div className="text-white ml-4">{"status: {"}</div>
                <div className="text-yellow-400 ml-8">{"verified: true,"}</div>
                <div className="text-yellow-400 ml-8">{"liquidityLocked: true,"}</div>
                <div className="text-yellow-400 ml-8">{"safetyScore: 'HIGH'"}</div>
                <div className="text-white ml-4">{"}"}</div>
                <div className="text-blue-400">{"});"}</div>
                <div className="text-gray-500 mt-2">{"// Secure & Verified"}</div>
                <div className="text-purple-400">{"console.log('LIQUIDITY LOCKED');"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Add default export
export default About
