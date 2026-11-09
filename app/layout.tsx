import type { Metadata, Viewport } from "next";
import "./globals.css";
import { personalInfo } from "@/data/portfolio-data";

export const viewport: Viewport = {
  themeColor: "#131615",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aditya-sharma-portfolio.example.com"),
  title: {
    default: `${personalInfo.name} — ${personalInfo.roleTitle}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.headline} ${personalInfo.description}`,
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "Next.js 15",
    "React",
    "TypeScript",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "PostGIS",
    "PaddleOCR",
    "TrOCR",
    "Computer Vision",
    "RetinaFace",
    "ArcFace",
    "XGBoost",
    "PyTorch",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aditya-sharma-portfolio.example.com",
    title: `${personalInfo.name} — ${personalInfo.roleTitle}`,
    description: personalInfo.headline,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — Software Engineer & AI Systems Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.roleTitle}`,
    description: personalInfo.headline,
    images: ["/og-image.png"],
    creator: "@aditya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#131615] text-[#ebe4d4] font-sans antialiased selection:bg-editorial-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
