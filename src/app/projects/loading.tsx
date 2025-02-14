export default function Loading() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-8"></div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="border rounded-lg p-4">
              <div className="h-48 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 