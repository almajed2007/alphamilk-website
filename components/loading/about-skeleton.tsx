import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSkeleton() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title and description skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto mb-6" />
          <div className="space-y-2 max-w-3xl mx-auto">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6 mx-auto" />
            <Skeleton className="h-6 w-4/5 mx-auto" />
          </div>
        </div>

        {/* Features grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="text-center">
              <CardContent className="p-6">
                <Skeleton className="w-12 h-12 mx-auto mb-4 rounded-full" />
                <Skeleton className="h-6 w-24 mx-auto mb-3" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mx-auto" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom section skeleton */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Skeleton className="h-8 w-48 mb-4" />
              <div className="space-y-3 mb-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-5/6" />
                <Skeleton className="h-5 w-4/5" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
            <div className="flex justify-center">
              <Skeleton className="w-80 h-60 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
