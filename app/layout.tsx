import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F7F7F3",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  verification: {
    google: "FFDU7NLmOIGX8TVIH-aS_1rdDVw8qddQYm9YcdhS2eQ",
  },
  title: {
    default: "Bonam Gokul Venkat | Backend Software Engineer",
    template: "%s | Bonam Gokul Venkat",
  },
  description:
    "2026 AI & Data Science graduate and Software Engineering Intern contributing to production Java/Spring Boot backend systems. Explore backend work, team projects and AI research.",
  keywords: [
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "REST APIs",
    "TypeScript",
    "Next.js",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Bonam Gokul Venkat" }],
  creator: "Bonam Gokul Venkat",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Bonam Gokul Venkat | Backend Software Engineer",
    description:
      "2026 AI & Data Science graduate and Software Engineering Intern contributing to production Java/Spring Boot backend systems. Explore backend work, team projects and AI research.",
    siteName: "Bonam Gokul Venkat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonam Gokul Venkat | Backend Software Engineer",
    description:
      "2026 AI & Data Science graduate and Software Engineering Intern contributing to production Java/Spring Boot backend systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F7F3] text-[#16181B] selection:bg-[#3157D5]/15 selection:text-[#16181B]">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
