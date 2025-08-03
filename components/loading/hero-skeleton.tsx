import { Skeleton } from "@/components/ui/skeleton"

export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background skeleton */}
      <div className="absolute inset-0 z-0">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300/30 to-gray-200/20"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo skeleton */}
        <div className="mb-8">
          <Skeleton className="w-40 h-40 mx-auto mb-6 rounded-full" />
        </div>

        {/* Title skeleton */}
        <div className="mb-4">
          <Skeleton className="h-16 md:h-24 w-80 md:w-96 mx-auto mb-2" />
        </div>

        {/* Ticker skeleton */}
        <Skeleton className="h-8 w-24 mx-auto mb-2" />

        {/* Description skeleton */}
        <div className="mb-8 space-y-2">
          <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          <Skeleton className="h-6 w-3/4 max-w-xl mx-auto" />
        </div>

        {/* Buttons skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-10 w-64" />
        </div>

        {/* Stats skeleton */}
        <div className="flex justify-center gap-8 text-center">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/90 rounded-lg p-4 min-w-[120px]">
              <Skeleton className="h-8 w-16 mx-auto mb-2" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
