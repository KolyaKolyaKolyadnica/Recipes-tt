"use client";

export default function RecipesSkeleton() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
      {Array.from({ length: 3 }).map((_, i) => (
        <li key={i} className="border rounded-2xl p-4 space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4" />
          <div className="h-60 bg-gray-300 rounded" />
        </li>
      ))}
    </ul>
  );
}
