import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Send, Twitter, Users } from "lucide-react"

export function Community() {
  const socialLinks = [
    {
      name: "Telegram",
      icon: <Send className="h-8 w-8" />,
      members: "12,500+",
      description: "Join our main community chat",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-8 w-8" />,
      members: "8,200+",
      description: "Follow for latest updates",
      color: "bg-sky-500 hover:bg-sky-600",
    },
    {
      name: "Discord",
      icon: <MessageCircle className="h-8 w-8" />,
      members: "5,800+",
      description: "Chat with fellow farmers",
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      name: "Reddit",
      icon: <Users className="h-8 w-8" />,
      members: "3,400+",
      description: "Share memes and discussions",
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
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div
                  className={`${social.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                >
                  {social.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{social.name}</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">{social.members}</p>
                <p className="text-gray-600 mb-4">{social.description}</p>
                <Button className={`w-full ${social.color} text-white border-0`}>Join Now</Button>
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
