export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header Skeleton */}
          <div className="h-8 w-64 animate-pulse rounded bg-gray-200" />
          <div className="mt-2 h-4 w-96 animate-pulse rounded bg-gray-200" />

          {/* Budget Summary Skeleton */}
          <div className="mt-8 rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
              <div className="mt-5">
                <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
                    >
                      <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                      <div className="mt-1 h-8 w-32 animate-pulse rounded bg-gray-200" />
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Daily Itinerary Skeleton */}
          <div className="mt-8">
            <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
            <div className="mt-4 space-y-8">
              {[1, 2].map((day) => (
                <div key={day} className="rounded-lg bg-white shadow">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="h-6 w-48 animate-pulse rounded bg-gray-200" />
                      <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
                    </div>

                    {/* Activities Skeleton */}
                    <div className="mt-4">
                      <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                      <div className="mt-2 space-y-3">
                        {[1, 2].map((activity) => (
                          <div
                            key={activity}
                            className="flex items-center justify-between py-3"
                          >
                            <div className="space-y-2">
                              <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                            </div>
                            <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meals Skeleton */}
                    <div className="mt-4">
                      <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                      <div className="mt-2 space-y-3">
                        {[1, 2, 3].map((meal) => (
                          <div
                            key={meal}
                            className="flex items-center justify-between py-3"
                          >
                            <div className="space-y-2">
                              <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                            </div>
                            <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Accommodation Skeleton */}
                    <div className="mt-4">
                      <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                      <div className="mt-2">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                          </div>
                          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Button Skeleton */}
          <div className="mt-8 flex justify-center">
            <div className="h-10 w-40 animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  )
} 