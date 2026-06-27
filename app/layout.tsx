import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://navalaggarwal.com"),
  title: "Naval Aggarwal — AI & Data Engineer, Melbourne",
  description:
    "Data drives decisions… Decisions drive results. AI automation, data pipelines, BI dashboards, and LLM integrations for teams that want outcomes, not just outputs.",
  openGraph: {
    title: "Naval Aggarwal — AI & Data Engineer, Melbourne",
    description: "Data drives decisions… Decisions drive results.",
    url: "https://navalaggarwal.com",
    siteName: "Naval Aggarwal",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-bg text-text">{children}</body>
    </html>
  );
}
