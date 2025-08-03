"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Integrations } from "@/components/integrations"
import { WalletDashboard } from "@/components/wallet-dashboard"
import { Tokenomics } from "@/components/tokenomics"
import { Roadmap } from "@/components/roadmap"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"

// Loading skeletons
import { HeroSkeleton } from "@/components/loading/hero-skeleton"
import { AboutSkeleton } from "@/components/loading/about-skeleton"
import { TokenomicsSkeleton } from "@/components/loading/tokenomics-skeleton"
import { RoadmapSkeleton } from "@/components/loading/roadmap-skeleton"
import { CommunitySkeleton } from "@/components/loading/community-skeleton"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [sectionsLoaded, setSectionsLoaded] = useState({
    hero: false,
    about: false,
    integrations: false,
    wallet: false,
    tokenomics: false,
    roadmap: false,
    community: false,
  })

  useEffect(() => {
    // Simulate progressive loading
    const loadSections = async () => {
      // Hero loads first (fastest)
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, hero: true }))
      }, 800)

      // About section
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, about: true }))
      }, 1200)

      // Integrations section
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, integrations: true }))
      }, 1400)

      // Wallet section
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, wallet: true }))
      }, 1600)

      // Tokenomics (has chart, takes longer)
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, tokenomics: true }))
      }, 2000)

      // Roadmap
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, roadmap: true }))
      }, 2400)

      // Community (last)
      setTimeout(() => {
        setSectionsLoaded((prev) => ({ ...prev, community: true }))
        setLoading(false)
      }, 2800)
    }

    loadSections()
  }, [])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20">
        {/* Hero Section */}
        <div className={`transition-opacity duration-500 ${sectionsLoaded.hero ? "opacity-100" : "opacity-0"}`}>
          {sectionsLoaded.hero ? <Hero /> : <HeroSkeleton />}
        </div>

        {/* About Section */}
        <div
          id="about"
          className={`transition-opacity duration-500 ${sectionsLoaded.about ? "opacity-100" : "opacity-0"}`}
        >
          {sectionsLoaded.about ? <About /> : <AboutSkeleton />}
        </div>

        {/* Integrations Section */}
        <div className={`transition-opacity duration-500 ${sectionsLoaded.integrations ? "opacity-100" : "opacity-0"}`}>
          {sectionsLoaded.integrations && <Integrations />}
        </div>

        {/* Wallet Dashboard Section */}
        <div className={`transition-opacity duration-500 ${sectionsLoaded.wallet ? "opacity-100" : "opacity-0"}`}>
          {sectionsLoaded.wallet && <WalletDashboard />}
        </div>

        {/* Tokenomics Section */}
        <div
          id="tokenomics"
          className={`transition-opacity duration-500 ${sectionsLoaded.tokenomics ? "opacity-100" : "opacity-0"}`}
        >
          {sectionsLoaded.tokenomics ? <Tokenomics /> : <TokenomicsSkeleton />}
        </div>

        {/* Roadmap Section */}
        <div
          id="roadmap"
          className={`transition-opacity duration-500 ${sectionsLoaded.roadmap ? "opacity-100" : "opacity-0"}`}
        >
          {sectionsLoaded.roadmap ? <Roadmap /> : <RoadmapSkeleton />}
        </div>

        {/* Community Section */}
        <div
          id="community"
          className={`transition-opacity duration-500 ${sectionsLoaded.community ? "opacity-100" : "opacity-0"}`}
        >
          {sectionsLoaded.community ? <Community /> : <CommunitySkeleton />}
        </div>

        {/* Footer loads with community */}
        <div className={`transition-opacity duration-500 ${sectionsLoaded.community ? "opacity-100" : "opacity-0"}`}>
          {sectionsLoaded.community && <Footer />}
        </div>

        {/* Analytics Dashboard */}
        <AnalyticsDashboard />
      </main>
    </>
  )
}
