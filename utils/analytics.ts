// Simple analytics utility without external dependencies
export function trackNavConversion(platform: string) {
  console.log(`Navigation conversion tracked: ${platform}`)

  // Track with Google Analytics if available
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "navigation_click", {
      event_category: "navigation",
      event_label: platform,
      value: 1,
    })
  }
}

export function trackButtonClick(buttonName: string, location: string) {
  console.log(`Button click tracked: ${buttonName} at ${location}`)

  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "button_click", {
      event_category: "engagement",
      event_label: `${buttonName}_${location}`,
      value: 1,
    })
  }
}
