import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brew Theory Cafe | Slow Mornings, Serious Coffee",
  description:
    "Specialty roastery and all-day kitchen in Pune & Bangalore. Single-origin estate beans, naturally leavened sourdough, and sunlit courtyard tables.",
  keywords: [
    "specialty coffee",
    "Brew Theory Cafe",
    "Pune cafe",
    "Bangalore cafe",
    "Koregaon Park",
    "Indiranagar",
    "pour-over bar",
    "sourdough bakery",
    "artisan coffee",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#1A110D] font-sans selection:bg-[#D95D39]/20 selection:text-[#1A110D]">
        {children}
      </body>
    </html>
  );
}
