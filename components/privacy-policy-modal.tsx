"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
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
                At AlphaMilk, your privacy is very important to us. This Privacy Policy explains how we collect, use,
                disclose, and protect your information when you visit our website or interact with our services,
                including any related social media platforms, tokens, and applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h3>
              <p className="mb-3">We may collect the following types of information:</p>

              <div className="ml-4 mb-4">
                <h4 className="text-lg font-medium text-green-400 mb-2">a. Automatically Collected Information</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP address</li>
                  <li>Browser type and settings</li>
                  <li>Device information</li>
                  <li>Date/time stamps of visits</li>
                  <li>Pages visited and interaction data</li>
                </ul>
                <p className="mt-2 text-sm">
                  This data is collected anonymously and used for analytics and security purposes.
                </p>
              </div>

              <div className="ml-4">
                <h4 className="text-lg font-medium text-green-400 mb-2">b. Voluntarily Provided Information</h4>
                <p className="mb-2">
                  If you contact us, subscribe to a newsletter, or fill out any form, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Email address</li>
                  <li>Telegram/X (Twitter) handles</li>
                  <li>Any other information you provide</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Use of Your Information</h3>
              <p className="mb-2">We use the collected data to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Improve our website and services</li>
                <li>Respond to inquiries or support requests</li>
                <li>Monitor website traffic and engagement</li>
                <li>Announce token updates, airdrops, or marketing campaigns</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Cookies & Tracking Technologies</h3>
              <p>
                We may use cookies and similar technologies to enhance your user experience. You can disable cookies
                through your browser settings, though some features may not work properly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h3>
              <p className="mb-2">We may use third-party tools such as:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>Google Analytics</li>
                <li>DEX aggregators (e.g., Jupiter)</li>
                <li>Advertising networks (e.g., A-ADS)</li>
              </ul>
              <p>
                These platforms may collect their own data and have separate privacy policies. AlphaMilk is not
                responsible for the privacy practices of these third parties.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">5. Data Sharing & Disclosure</h3>
              <p className="mb-2">We do not sell, rent, or share your personal data with third parties, except:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>When required by law or government authorities</li>
                <li>To protect our rights or prevent fraud</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">6. Data Security</h3>
              <p>
                We implement standard security measures to protect your information. However, no system is 100% secure.
                Use the site and associated services at your own risk.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">7. Children's Privacy</h3>
              <p>
                AlphaMilk is not intended for users under the age of 18. We do not knowingly collect personal data from
                minors. If we learn that we have, we will delete it immediately.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">8. Your Rights</h3>
              <p className="mb-2">Depending on your jurisdiction, you may have rights to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>Access or correct your data</li>
                <li>Request deletion</li>
                <li>Object to or restrict processing</li>
              </ul>
              <p>
                To exercise these rights, contact us at:{" "}
                <a href="mailto:admin@alphamilk.net" className="text-green-400 hover:text-green-300">
                  admin@alphamilk.net
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">9. Updates to This Policy</h3>
              <p>
                We may update this Privacy Policy at any time. Changes will be posted on this page with the updated
                effective date. Continued use of the website constitutes your acceptance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">10. Contact Us</h3>
              <p className="mb-2">For questions about this policy or your data:</p>
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
