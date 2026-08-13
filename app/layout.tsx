import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — AI Engineering Lead`,
  description:
    "AI Engineering Lead specializing in model optimization, on-device AI enablement, and team leadership. 5+ years shipping production ML — quantization tooling, PyTorch-side model reengineering, and LLM post-training.",
  keywords: [
    "AI Engineering Lead",
    "Model Optimization",
    "On-device AI",
    "Quantization",
    "Triton",
    "CUDA",
    "LLM Post-training",
    "GRPO",
    "Souham Ghosh",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    title: `${profile.name} — AI Engineering Lead`,
    description:
      "Model optimization, on-device AI enablement, and team leadership. 5+ years shipping production ML at enterprise scale.",
    type: "website",
    url: "https://sgsouham.github.io",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-ink text-ivory antialiased">
        <ScrollProgress />
        <CustomCursor />
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-gold/50 focus:bg-ink-2 focus:px-4 focus:py-2 focus:text-sm focus:text-gold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
