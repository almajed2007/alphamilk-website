export function PriceChartSkeleton() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-700 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-700 rounded-lg w-96 mx-auto animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Price Chart Skeleton */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/30 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
              <div className="w-full h-96 bg-gray-700 rounded-xl animate-pulse"></div>
            </div>
          </div>

          {/* Trading Widget Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 rounded-2xl p-6 animate-pulse">
              <div className="h-8 bg-gray-700 rounded-lg mb-4"></div>
              <div className="h-20 bg-gray-700 rounded-xl mb-4"></div>
              <div className="h-8 bg-gray-700 rounded-full w-8 mx-auto mb-4"></div>
              <div className="h-20 bg-gray-700 rounded-xl mb-6"></div>
              <div className="h-12 bg-gray-700 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
