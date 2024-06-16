
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Math helper",
  description: "I'm learning math, still at a lot of basics, and also helping a friend of mine do math, I made some basic tools to help me, as well as storing some useful notes here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
      
    <html lang="en" className="text-white h-screen w-screen bg-gray-800 flex items-center justify-center">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
