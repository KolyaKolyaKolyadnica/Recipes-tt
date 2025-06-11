export default function RecipeSkeleton() {
  return (
    <div className="flex flex-col gap-8 items-center max-w-5xl mx-auto animate-pulse">
      <div className="flex flex-col items-center w-full space-y-2 ">
        <div className="h-8 bg-gray-300 rounded w-1/2" />
        <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-400">
          <div className="h-4 bg-gray-300 rounded w-32" />
          <div className="h-4 bg-gray-300 rounded w-32" />
          <div className="h-4 bg-gray-300 rounded w-32" />
        </div>
      </div>

      <div className="relative w-full h-72 sm:h-96 rounded-md bg-gray-300" />

      <div className="w-2/3 space-y-2">
        <div className="h-6 bg-gray-300 rounded w-2/3" />
        <ul className="pl-8 space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="h-4 bg-gray-300 rounded w-full list-disc" />
          ))}
        </ul>
      </div>

      <div className="w-full space-y-2">
        <div className="h-6 bg-gray-300 rounded w-1/4 mx-auto" />
        <div className="w-full border" />
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-300 rounded w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
