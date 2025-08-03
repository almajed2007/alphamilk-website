"use client"
import { X, FileText, Mail } from "lucide-react"

interface DisclaimerModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DisclaimerModal({ isOpen, onClose }: DisclaimerModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white">Disclaimer</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="space-y-6 text-gray-300">
            <div className="text-sm text-gray-400 mb-6">
              <strong>Effective Date:</strong> August 2025
            </div>

            <p className="text-gray-300 leading-relaxed">
              The information provided on the AlphaMilk website (
              <a
                href="https://www.alphamilk.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline"
              >
                https://www.alphamilk.net
              </a>
              ), related platforms (including X.com, Telegram, and DEX listings), and all associated materials is for
              informational and entertainment purposes only.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">1. No Financial Advice</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Nothing contained on this website or in any AlphaMilk communication constitutes financial, investment,
                legal, or tax advice. You should not construe any such information as a recommendation to buy, sell, or
                hold any token, including $MILK.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Always consult with a qualified financial advisor before making any investment decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">2. No Guarantees or Promises</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                AlphaMilk is a community-driven meme token created for fun, creativity, and experimentation. The
                project:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Does not guarantee price appreciation</li>
                <li>Is not backed by any assets, government, or institution</li>
                <li>Offers no financial return, staking reward, or dividend</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                All participation is voluntary and at the user's own risk.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">3. High-Risk Asset</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Cryptocurrencies and meme tokens are highly volatile and speculative. Buying or trading $MILK may result
                in loss of funds, including total loss.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Users must conduct their own research (DYOR) and make informed decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">4. No Ownership or Rights</h3>
              <p className="text-gray-300 leading-relaxed">
                Holding $MILK does not confer ownership of any company, protocol, voting rights, or intellectual
                property. The token is purely symbolic and experimental.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">5. No Affiliation or Endorsement</h3>
              <p className="text-gray-300 leading-relaxed">
                AlphaMilk is not affiliated with any centralized exchange, government body, or investment platform. Any
                external mentions, integrations, or listings are community-driven or third-party controlled.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">6. Project Evolution</h3>
              <p className="text-gray-300 leading-relaxed">
                AlphaMilk is a dynamic and community-led initiative. The roadmap, utilities, and features described are
                aspirational and subject to change or cancellation without notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">7. Acknowledgment of Risk</h3>
              <p className="text-gray-300 leading-relaxed mb-3">By interacting with $MILK or any AlphaMilk platform:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>You acknowledge full understanding of the risks involved.</li>
                <li>
                  You agree that the AlphaMilk team and contributors are not liable for any direct or indirect loss
                  arising from your actions.
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-400" />
                Contact
              </h3>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this disclaimer, reach out to:
              </p>
              <div className="mt-2 space-y-1">
                <p className="text-gray-300">
                  📧{" "}
                  <a href="mailto:support@alphamilk.net" className="text-green-400 hover:text-green-300 underline">
                    support@alphamilk.net
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-700">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
