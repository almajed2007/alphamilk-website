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

        {/* Twitter Pixel */}
        <Script id="twitter-pixel" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','q9fit');
          `}
        </Script>

        {/* Twitter conversion tracking event code */}
        <Script id="twitter-conversion-tracking" strategy="afterInteractive">
          {`
            // Insert Twitter Event ID
            twq('event', 'tw-q9fit-q9t9x', {});
          `}
        </Script>
      </head>
      <body>
        <WalletContextProvider>{children}</WalletContextProvider>
      </body>
    </html>
  )
}
