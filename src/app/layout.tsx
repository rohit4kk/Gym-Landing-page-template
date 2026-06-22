import type { Metadata } from "next";
import { Outfit, Permanent_Marker } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import DoodlePlayground from "@/components/DoodlePlayground";
import AmbientGlow from "@/components/AmbientGlow";
import "./globals.css";
import "lenis/dist/lenis.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Athletic Lab™ — Premium Playful Fitness",
  description: "Train hard. Have fun. Move differently. Athletic Lab is a premium, playful fitness landing page for the next generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${permanentMarker.variable} antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-near-black text-white font-sans selection:bg-brand-red selection:text-white">
        <div className="animated-grain" />
        <DoodlePlayground />
        <AmbientGlow />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
