import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/alphamilk-logo.png" alt="AlphaMilk Logo" className="h-12 w-12 rounded-lg" />
              <span className="text-2xl font-bold">AlphaMilk</span>
            </div>
            <p className="text-green-200 mb-4 max-w-md">
              The manliest meme token in the crypto space. Built by farmers, for farmers, and everyone who appreciates
              hard work and dedication.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="border-green-600 text-green-200 hover:bg-green-700 bg-transparent">
                Buy $MILK
              </Button>
              <Button variant="outline" className="border-green-600 text-green-200 hover:bg-green-700 bg-transparent">
                Chart
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-green-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-green-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Audit Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Brand Kit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-200 text-sm">
              © 2024 AlphaMilk. All rights reserved. Built with <Heart className="inline h-4 w-4 text-red-400" /> by the
              farming community.
            </p>
            <div className="flex gap-4 text-sm text-green-200">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
