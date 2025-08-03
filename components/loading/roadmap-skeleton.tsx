import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function RoadmapSkeleton() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-48 mx-auto mb-6" />
          <div className="space-y-2 max-w-3xl mx-auto">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-4/5 mx-auto" />
          </div>
        </div>

        {/* Roadmap phases skeleton */}
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="border-2 bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <Skeleton className="h-6 w-40" />
                </div>

                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Skeleton className="w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA skeleton */}
        <div className="mt-16 text-center">
          <div className="bg-gray-200 rounded-2xl p-8 md:p-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <div className="space-y-2 mb-6">
              <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
              <Skeleton className="h-6 w-3/4 max-w-xl mx-auto" />
            </div>
            <Skeleton className="h-5 w-80 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
