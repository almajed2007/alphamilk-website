import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { WalletContextProvider } from "@/components/wallet/wallet-context-provider"
import Script from "next/script"

export const metadata: Metadata = {
  title: "AlphaMilk - The Grooviest Meme Token",
  description:
    "AlphaMilk ($MILK) - The grooviest retro meme token on Solana. From farm to moon, join the alpha farmers community!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZFGHTCDZQ3" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZFGHTCDZQ3');
          `}
        </Script>
      </head>
      <body>
        <WalletContextProvider>{children}</WalletContextProvider>
      </body>
    </html>
  )
}
