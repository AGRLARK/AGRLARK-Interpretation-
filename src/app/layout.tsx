import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto text-slate-800">
          <header className="p-6 border-b flex justify-between bg-blue-300 rounded-b-2xl">
            <Link
              className="text-2xl items-center text-gray-800 font-black"
              href={"/"}
            >
              AGRLARK Interpretation
            </Link>
            <Link
              className="bg-gray-800 text-white grid place-items-center py-2 px-4 rounded-full font-bold shadow-md"
              href={"/create"}
            >
              CREATE
            </Link>
          </header>
          <main className="p-4 text-lg">{children}</main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
