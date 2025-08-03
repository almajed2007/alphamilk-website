export function About() {
  const features = [
    {
      icon: "🚜",
      title: "Farm-to-Moon",
      description: "Built by real farmers who know the value of hard work and dedication.",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: "🥛",
      title: "Pure Quality",
      description: "No artificial additives, just pure meme energy straight from the source.",
      color: "from-blue-400 to-teal-500",
    },
    {
      icon: "📈",
      title: "Growth Focused",
      description: "Like our prize-winning bulls, we're focused on sustainable growth.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: "👥",
      title: "Strong Community",
      description: "A brotherhood of farmers, traders, and meme enthusiasts.",
      color: "from-purple-400 to-pink-500",
    },
  ]

  return (
    <section className="py-20 px-4 retro-gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="retro-title text-4xl md:text-5xl font-bold mb-6">About AlphaMilk</h2>
          <div className="retro-card max-w-4xl mx-auto p-8">
            <p className="retro-text text-xl leading-relaxed">
              AlphaMilk isn't just another meme token. We're a <span className="retro-neon font-bold">GROOVY</span>{" "}
              community of hardworking individuals who believe in the power of dedication, just like the farmers who
              wake up at dawn to tend their cattle. Our token represents the{" "}
              <span className="retro-3d-text font-bold">ALPHA MENTALITY</span> of those who work the land! 🌾
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="retro-card text-center p-6 transform hover:scale-105 transition-all duration-300 hover:rotate-1"
            >
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl border-4 border-amber-800 shadow-lg`}
              >
                {feature.icon}
              </div>
              <h3 className="retro-subtitle text-xl font-bold mb-3">{feature.title}</h3>
              <p className="retro-text">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="retro-card p-8 md:p-12 relative overflow-hidden">
          {/* Retro Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-6xl text-orange-500">🌻</div>
            <div className="absolute top-8 right-8 text-4xl text-yellow-500">⭐</div>
            <div className="absolute bottom-4 left-8 text-5xl text-green-500">🌾</div>
            <div className="absolute bottom-8 right-4 text-4xl text-pink-500">✨</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="retro-title text-3xl font-bold mb-4">The Alpha Farmer's Creed</h3>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-amber-800 rounded-2xl p-6 mb-4">
                <p className="retro-text text-lg font-bold italic leading-relaxed">
                  "We rise before the sun, work with our hands, and never back down from a challenge. In the fields and
                  in the markets, we are the <span className="retro-neon">ALPHA</span>." 🌅
                </p>
              </div>
              <p className="retro-text text-lg">
                Join thousands of <span className="retro-3d-text font-bold">ALPHA FARMERS</span> who are building the
                future of decentralized agriculture-themed finance! 🚀
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/images/alphamilk-retro.png"
                  alt="AlphaMilk Retro Illustration"
                  className="rounded-2xl shadow-2xl max-w-full h-auto border-6 border-amber-800 retro-glow"
                />
                {/* Retro Frame Effect */}
                <div className="absolute -inset-4 border-4 border-orange-400 rounded-3xl opacity-50"></div>
                <div className="absolute -inset-8 border-2 border-yellow-400 rounded-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Retro Decorative Bottom */}
        <div className="mt-12 text-center">
          <div className="flex justify-center gap-4 text-3xl mb-4">
            <span className="animate-pulse">🎯</span>
            <span className="animate-pulse" style={{ animationDelay: "0.5s" }}>
              🔥
            </span>
            <span className="animate-pulse" style={{ animationDelay: "1s" }}>
              💎
            </span>
            <span className="animate-pulse" style={{ animationDelay: "1.5s" }}>
              🚀
            </span>
          </div>
          <p className="retro-subtitle text-lg font-bold">
            WELCOME TO THE <span className="retro-neon">RETRO REVOLUTION</span>! 🌈
          </p>
        </div>
      </div>
    </section>
  )
}
