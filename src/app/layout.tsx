import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Background from "@/components/layout/Background";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liquid Glass Portfolio V2 - Zinc",
  description: "Portfolio created with Next.js and Tailwind v4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Load Material Symbols untuk Icon */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-white`}>
        <Background />
        <Navbar />
        <main className="relative z-10 flex flex-col items-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto w-full min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <div className="relative z-10 flex justify-center px-4 sm:px-6 pb-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}