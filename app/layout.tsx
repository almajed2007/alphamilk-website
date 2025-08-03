import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { WalletContextProvider } from "@/components/wallet/wallet-context-provider"

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
      <body>
        <WalletContextProvider>{children}</WalletContextProvider>
      </body>
    </html>
  )
}
