"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Send, Users } from "lucide-react"

export function Community() {
  const socialLinks = [
    {
      name: "Telegram",
      icon: <Send className="h-8 w-8" />,
      members: "",
      description: "Join our main community chat",
      color: "bg-blue-500 hover:bg-blue-600",
      url: "https://t.me/alphamilkcoin",
    },
    {
      name: "X",
      icon: <img src="/images/x-logo-circle.png" alt="X Logo" className="h-8 w-8 rounded-full" />,
      members: "",
      description: "Follow for latest updates",
      color: "bg-gray-800 hover:bg-gray-700",
      url: "https://x.com/AlphaM38043",
    },
    {
      name: "Discord",
      icon: <MessageCircle className="h-8 w-8" />,
      members: "",
      description: "Coming Soon",
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      name: "Reddit",
      icon: <Users className="h-8 w-8" />,
      members: "",
      description: "Coming Soon",
      color: "bg-orange-500 hover:bg-orange-600",
    },
  ]

  return (
    <section className="py-20 px-4 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Join the Herd</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with thousands of alpha farmers from around the world. Share strategies, memes, and build the future
            together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-shadow cursor-pointer ${social.url ? "clickable" : ""}`}
              onClick={() => social.url && window.open(social.url, "_blank")}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`${social.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                >
                  {social.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{social.name}</h3>
                {social.members && <p className="text-2xl font-bold text-green-600 mb-2">{social.members}</p>}
                <p className="text-gray-600 mb-4">{social.description}</p>
                <Button
                  className={`w-full ${social.color} text-white border-0`}
                  onClick={(e) => {
                    e.stopPropagation()
                    social.url && window.open(social.url, "_blank")
                  }}
                >
                  {social.name === "Discord" || social.name === "Reddit" ? "Coming Soon" : "Join Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Community Driven</h3>
              <p className="text-lg text-gray-700 mb-6">
                AlphaMilk is more than just a token - it's a movement. Our community makes all the important decisions
                together, just like a real farming cooperative.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Weekly community calls</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Democratic voting on proposals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Exclusive holder benefits</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Meme contests and rewards</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/alphamilk-retro.png"
                alt="AlphaMilk Community Illustration"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
