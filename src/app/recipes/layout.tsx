import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex items-center justify-center p-2">
        <Link href="/" className="bg-gray-500 px-4 py-2 rounded-2xl text-black">
          Back to Home page
        </Link>
      </header>
      {children}
    </>
  );
}
