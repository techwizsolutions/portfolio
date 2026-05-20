import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stephen Mutili | TechWiz Portfolio",
  description: "Personal portfolio of Stephen Mutili, a telecommunications and networking professional transitioning into frontend and web development.",
  openGraph: {
    title: "Stephen Mutili | TechWiz",
    description: "Telecommunications & IT Specialist, Network Engineer, and Frontend Developer.",
    url: "https://stephenmutili.com", // Placeholder
    siteName: "Stephen Mutili Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        <main className="flex-1 w-full relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
