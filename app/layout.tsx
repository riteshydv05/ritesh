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
  metadataBase: new URL("https://ritesh-yadav.vercel.app"),
  title: {
    default: `${personalInfo.name} — ${personalInfo.roleTitle}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.headline} ${personalInfo.description}`,
  keywords: [
    "Ritesh Yadav",
    "Full Stack Developer",
    "Computer Science Undergraduate",
    "MMMUT Gorakhpur",
    "MERN Stack",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "JavaScript",
    "Python",
    "Java",
    "Tailwind CSS",
    "IIT Bombay Techfest Winner",
    "Cognito Learning Hub",
    "Haazir",
    "The Editorial Board",
    "Machine Guru",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ritesh-yadav.vercel.app",
    title: `${personalInfo.name} — ${personalInfo.roleTitle}`,
    description: personalInfo.headline,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "https://res.cloudinary.com/s2tcil9t/image/upload/v1794239964/Monochrome_Halftone_Portrait_with_Geometric_Accents.png",
        width: 1086,
        height: 1448,
        alt: `${personalInfo.name} — Full Stack Developer & CS Undergraduate`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.roleTitle}`,
    description: personalInfo.headline,
    images: ["https://res.cloudinary.com/s2tcil9t/image/upload/v1794239964/Monochrome_Halftone_Portrait_with_Geometric_Accents.png"],
    creator: "@riteshydv05",
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
