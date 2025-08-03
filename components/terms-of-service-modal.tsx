"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsOfServiceModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="space-y-6 text-gray-300">
            <div>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Effective Date:</strong> August 2025
                <br />
                <strong>Website:</strong>{" "}
                <a href="https://www.alphamilk.net" className="text-green-400 hover:text-green-300">
                  https://www.alphamilk.net
                </a>
              </p>
              <p className="mb-4">
                Please read these Terms of Service ("Terms", "Agreement") carefully before using the AlphaMilk website
                or interacting with any associated content, tokens, or services. By accessing or using any part of the
                site, you agree to be bound by these Terms. If you disagree with any part, do not use our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h3>
              <p>
                By accessing or using AlphaMilk, you acknowledge that you are at least 18 years old and legally able to
                agree to these terms. These Terms govern your use of the website and all associated services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Project Disclaimer</h3>
              <p className="mb-3">
                AlphaMilk is a community-driven meme token built for entertainment and experimental utility purposes.
                Nothing on the site or project constitutes financial, legal, or investment advice.
              </p>
              <p>
                The token is not registered as a security and holds no guarantee of value, returns, or utility beyond
                what is voluntarily developed by the community.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Use of the Website</h3>
              <p className="mb-2">You agree to use the AlphaMilk site and services lawfully. You must not:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>Engage in illegal activities</li>
                <li>Attempt to hack or exploit the site</li>
                <li>Impersonate AlphaMilk or others</li>
                <li>Post spam or harmful content</li>
              </ul>
              <p>We reserve the right to restrict or terminate access if you violate these terms.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">4. Token Usage and Risk</h3>
              <p className="mb-2">By acquiring or interacting with the $MILK token, you agree that:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You are solely responsible for your actions and assets</li>
                <li>Cryptocurrency and token markets are highly volatile</li>
                <li>
                  AlphaMilk team is not liable for losses or damages resulting from token purchases, sales, or liquidity
                  risks
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">5. Third-Party Links</h3>
              <p>
                Our website may contain links to third-party sites (e.g., DEXscreener, Jupiter, Twitter). These sites
                are not controlled by AlphaMilk, and we are not responsible for their content, policies, or services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h3>
              <p>
                All branding, logos, and content (excluding community-submitted content) are the intellectual property
                of AlphaMilk. You may not use these assets for commercial purposes without written permission.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">7. Airdrops and Promotions</h3>
              <p>
                Participation in airdrops or marketing campaigns does not guarantee entitlement to rewards. AlphaMilk
                reserves the right to modify or cancel promotions at any time without notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">8. Changes to Terms</h3>
              <p>
                We may update these Terms from time to time. Updates will be posted on this page with the new effective
                date. Continued use of the website means you accept the updated Terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h3>
              <p className="mb-2">
                To the fullest extent permitted by law, AlphaMilk shall not be liable for any direct or indirect damages
                arising from:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>Use of or inability to use the website or token</li>
                <li>Errors, delays, or performance issues</li>
                <li>Loss of data, profits, or digital assets</li>
              </ul>
              <p>All services are provided "as is" with no warranties expressed or implied.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">10. Governing Law</h3>
              <p>
                These Terms are governed by the laws of an applicable neutral jurisdiction. You agree to submit to the
                jurisdiction of such courts in the event of any dispute.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">11. Contact</h3>
              <p className="mb-2">For any questions about these Terms:</p>
              <div className="space-y-1">
                <p>
                  📧 Email:{" "}
                  <a href="mailto:support@alphamilk.net" className="text-green-400 hover:text-green-300">
                    support@alphamilk.net
                  </a>
                </p>
                <p>
                  🌐 Website:{" "}
                  <a href="https://www.alphamilk.net" className="text-green-400 hover:text-green-300">
                    https://www.alphamilk.net
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700">
          <Button onClick={onClose} className="w-full bg-green-600 hover:bg-green-700">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
