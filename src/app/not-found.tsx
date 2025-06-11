import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 h-screen">
      <h1 className="text-3xl">Oops, this page doesnt exist</h1>
      <Link href="/" className="bg-gray-500 px-4 py-2 rounded-2xl text-black ">
        Back to Home page
      </Link>
    </main>
  );
}
