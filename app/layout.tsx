import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CalInit from "@/components/CalInit";

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
  title: "Naval Aggarwal · AI & Data Build Partner · Melbourne",
  description:
    "AI & Data Build Partner in Melbourne. I ship systems that solve real business problems and stay accountable to your KPIs. Book a free 30-minute Discovery Call.",
  openGraph: {
    title: "Naval Aggarwal · AI & Data Build Partner",
    description: "Data drives decisions… Decisions drive results. Book a free Discovery Call.",
    url: "https://navalaggarwal.com",
    siteName: "Naval Aggarwal",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Naval Aggarwal",
  jobTitle: "AI & Data Build Partner",
  url: "https://navalaggarwal.com",
  sameAs: [
    "https://www.linkedin.com/in/naval-aggarwal/",
    "https://github.com/Naval13/",
    "https://medium.com/@naval.aggarwal2020/",
  ],
  knowsAbout: [
    "AI Automation", "Agentic AI", "CrewAI", "Data Engineering",
    "Power BI", "LangChain", "ETL Pipelines", "LLM Integration",
    "Machine Learning",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "Victoria",
    addressCountry: "Australia",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-bg text-text">
        <CalInit />
        {children}
      </body>
    </html>
  );
}
