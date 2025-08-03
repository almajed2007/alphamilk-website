// Analytics utility functions for tracking user interactions
export interface AnalyticsEvent {
  event: string
  category: string
  action: string
  label?: string
  value?: number
  userId?: string
  timestamp: number
  sessionId: string
  userAgent: string
  referrer: string
  page: string
}

declare var gtag: any // Declare gtag variable

class Analytics {
  private sessionId: string
  private events: AnalyticsEvent[] = []
  private isClient: boolean

  constructor() {
    this.isClient = typeof window !== "undefined"
    this.sessionId = this.generateSessionId()

    // Only setup tracking on client side
    if (this.isClient) {
      this.setupPageTracking()
    }
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private setupPageTracking() {
    // Ensure we're on the client side
    if (!this.isClient || typeof document === "undefined") return

    // Track page visibility changes
    document.addEventListener("visibilitychange", () => {
      this.track("page_visibility", "engagement", document.hidden ? "hidden" : "visible")
    })

    // Track scroll depth
    let maxScroll = 0
    window.addEventListener("scroll", () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent
        this.track("scroll_depth", "engagement", `${scrollPercent}%`, scrollPercent)
      }
    })
  }

  track(event: string, category: string, action: string, label?: string, value?: number) {
    // Only track on client side
    if (!this.isClient) return

    const analyticsEvent: AnalyticsEvent = {
      event,
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
      page: typeof window !== "undefined" ? window.location.pathname : "",
    }

    this.events.push(analyticsEvent)

    // Send to analytics service (Google Analytics, Mixpanel, etc.)
    this.sendToAnalytics(analyticsEvent)

    // Store locally for backup
    this.storeLocally(analyticsEvent)

    console.log("📊 Analytics Event:", analyticsEvent)
  }

  private sendToAnalytics(event: AnalyticsEvent) {
    // Google Analytics 4 (gtag)
    if (typeof gtag !== "undefined") {
      gtag("event", event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameter_session_id: event.sessionId,
      })
    }

    // Custom analytics endpoint
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    }).catch((err) => console.warn("Analytics send failed:", err))
  }

  private storeLocally(event: AnalyticsEvent) {
    // Only store on client side
    if (!this.isClient || typeof localStorage === "undefined") return

    try {
      const stored = localStorage.getItem("alphamilk_analytics") || "[]"
      const events = JSON.parse(stored)
      events.push(event)

      // Keep only last 100 events
      if (events.length > 100) {
        events.splice(0, events.length - 100)
      }

      localStorage.setItem("alphamilk_analytics", JSON.stringify(events))
    } catch (err) {
      console.warn("Local analytics storage failed:", err)
    }
  }

  // Banner-specific tracking methods
  trackBannerView(bannerType: string, position: string) {
    this.track("banner_view", "marketing", "view", `${bannerType}_${position}`)
  }

  trackBannerClick(bannerType: string, buttonType: string, destination: string) {
    this.track("banner_click", "conversion", "click", `${bannerType}_${buttonType}_${destination}`)
  }

  trackBannerHover(bannerType: string, duration: number) {
    this.track("banner_hover", "engagement", "hover", bannerType, duration)
  }

  trackConversion(type: string, value?: number) {
    this.track("conversion", "goal", type, undefined, value)
  }

  // Get analytics summary
  getAnalyticsSummary() {
    return {
      sessionId: this.sessionId,
      totalEvents: this.events.length,
      eventsByCategory: this.events.reduce(
        (acc, event) => {
          acc[event.category] = (acc[event.category] || 0) + 1
          return acc
        },
        {} as Record<string, number>,
      ),
      conversionEvents: this.events.filter((e) => e.category === "conversion"),
      engagementEvents: this.events.filter((e) => e.category === "engagement"),
    }
  }
}

// Create a safe analytics instance
let analyticsInstance: Analytics | null = null

// Initialize analytics only on client side
if (typeof window !== "undefined") {
  analyticsInstance = new Analytics()
}

export const analytics = analyticsInstance
