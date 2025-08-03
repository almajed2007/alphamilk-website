"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { analytics } from "@/lib/analytics"
import { BarChart3, MousePointer, TrendingUp, Users } from "lucide-react"

export function AnalyticsDashboard() {
  const [summary, setSummary] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Set client flag
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Only run on client side and when analytics is available
    if (!isClient || !analytics) return

    const updateSummary = () => {
      try {
        const summaryData = analytics.getAnalyticsSummary()
        setSummary(summaryData)
      } catch (error) {
        console.warn("Failed to get analytics summary:", error)
      }
    }

    updateSummary()
    const interval = setInterval(updateSummary, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [isClient])

  // Don't render on server side or if analytics not available
  if (!isClient || !analytics) return null

  const conversionRate =
    summary && summary.totalEvents > 0
      ? ((summary.conversionEvents.length / summary.totalEvents) * 100).toFixed(2)
      : "0.00"

  const engagementRate =
    summary && summary.totalEvents > 0
      ? ((summary.engagementEvents.length / summary.totalEvents) * 100).toFixed(2)
      : "0.00"

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-green-600 hover:bg-green-700 text-white shadow-lg"
        size="sm"
      >
        <BarChart3 className="h-4 w-4 mr-2" />
        Analytics
      </Button>

      {/* Dashboard Panel */}
      {isVisible && (
        <div className="fixed bottom-16 right-4 z-50 w-80 bg-white rounded-lg shadow-2xl border p-4 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Live Analytics</h3>
            <Button onClick={() => setIsVisible(false)} variant="ghost" size="sm" className="h-6 w-6 p-0">
              ×
            </Button>
          </div>

          {summary ? (
            <div className="space-y-3">
              {/* Session Info */}
              <Card className="bg-blue-50">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <div>
                      <div className="text-sm font-medium">Session ID</div>
                      <div className="text-xs text-gray-600 font-mono">{summary.sessionId.slice(-8)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-2">
                <Card className="bg-green-50">
                  <CardContent className="p-3 text-center">
                    <TrendingUp className="h-4 w-4 text-green-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-green-800">{conversionRate}%</div>
                    <div className="text-xs text-gray-600">Conversion</div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50">
                  <CardContent className="p-3 text-center">
                    <MousePointer className="h-4 w-4 text-purple-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-purple-800">{engagementRate}%</div>
                    <div className="text-xs text-gray-600">Engagement</div>
                  </CardContent>
                </Card>
              </div>

              {/* Event Breakdown */}
              <Card>
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Event Categories</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="space-y-2">
                    {Object.entries(summary.eventsByCategory).map(([category, count]) => (
                      <div key={category} className="flex justify-between text-sm">
                        <span className="capitalize">{category}</span>
                        <span className="font-medium">{count as number}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Conversions */}
              {summary.conversionEvents.length > 0 && (
                <Card className="bg-yellow-50">
                  <CardHeader className="p-3">
                    <CardTitle className="text-sm">Recent Conversions</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <div className="space-y-1">
                      {summary.conversionEvents.slice(-3).map((event: any, index: number) => (
                        <div key={index} className="text-xs text-gray-600">
                          {event.action} - {new Date(event.timestamp).toLocaleTimeString()}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Export Data */}
              <Button
                onClick={() => {
                  const data = JSON.stringify(summary, null, 2)
                  const blob = new Blob([data], { type: "application/json" })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement("a")
                  a.href = url
                  a.download = `alphamilk-analytics-${Date.now()}.json`
                  a.click()
                }}
                variant="outline"
                size="sm"
                className="w-full"
              >
                Export Data
              </Button>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-500">Loading analytics data...</div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
