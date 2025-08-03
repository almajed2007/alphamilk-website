"use client"

import { useEffect, useRef, useState } from "react"
import { analytics } from "@/lib/analytics"

interface BannerTrackingOptions {
  bannerType: string
  position: string
  trackHover?: boolean
  trackVisibility?: boolean
}

export function useBannerTracking(options: BannerTrackingOptions) {
  const bannerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenViewed, setHasBeenViewed] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const hoverStartTime = useRef<number>(0)
  const visibilityObserver = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Only run on client side
    if (!isClient) return

    const banner = bannerRef.current
    if (!banner) return

    // Track banner visibility
    if (options.trackVisibility && typeof IntersectionObserver !== "undefined") {
      visibilityObserver.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const isCurrentlyVisible = entry.isIntersecting
            setIsVisible(isCurrentlyVisible)

            if (isCurrentlyVisible && !hasBeenViewed && analytics) {
              analytics.trackBannerView(options.bannerType, options.position)
              setHasBeenViewed(true)
            }
          })
        },
        {
          threshold: 0.5, // Track when 50% of banner is visible
          rootMargin: "0px",
        },
      )

      visibilityObserver.current.observe(banner)
    }

    // Track hover events
    if (options.trackHover) {
      const handleMouseEnter = () => {
        hoverStartTime.current = Date.now()
      }

      const handleMouseLeave = () => {
        if (hoverStartTime.current > 0 && analytics) {
          const hoverDuration = Date.now() - hoverStartTime.current
          analytics.trackBannerHover(options.bannerType, hoverDuration)
          hoverStartTime.current = 0
        }
      }

      banner.addEventListener("mouseenter", handleMouseEnter)
      banner.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        banner.removeEventListener("mouseenter", handleMouseEnter)
        banner.removeEventListener("mouseleave", handleMouseLeave)
        if (visibilityObserver.current) {
          visibilityObserver.current.disconnect()
        }
      }
    }
  }, [options, hasBeenViewed, isClient])

  const trackClick = (buttonType: string, destination: string) => {
    if (!analytics) return

    analytics.trackBannerClick(options.bannerType, buttonType, destination)

    // Track as conversion if it's a buy button
    if (buttonType.toLowerCase().includes("buy")) {
      analytics.trackConversion("buy_click")
    } else if (buttonType.toLowerCase().includes("community")) {
      analytics.trackConversion("community_join")
    }
  }

  return {
    bannerRef,
    isVisible,
    hasBeenViewed,
    trackClick,
  }
}
