"use client";

import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-full">
      <p className="text-gray-500 text-3xl font-semibold">
        Oops, something went wrong :(
      </p>

      <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-gray-400 text-black rounded-md hover:bg-gray-700 transition"
      >
        Go back
      </button>
    </div>
  );
}
