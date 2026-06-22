import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Shohibun Najam Ilma — Mobile & FrontEnd Developer",
  description:
    "Personal portfolio of Shohibun Najam Ilma — Mobile Developer & FrontEnd Developer based in Jember, Indonesia. Building modern web and mobile applications with clean design and scalable architecture.",
  keywords: [
    "Shohibun Najam Ilma",
    "Frontend Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "Flutter",
    "Portfolio",
  ],
  authors: [{ name: "Shohibun Najam Ilma" }],
  openGraph: {
    title: "Shohibun Najam Ilma — Mobile & FrontEnd Developer",
    description:
      "Building modern web and mobile applications with clean design, excellent user experience, and scalable architecture.",
    type: "website",
    locale: "en_US",
    url: "https://portfolio-shohibun.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shohibun Najam Ilma — Mobile & FrontEnd Developer",
    description:
      "Building modern web and mobile applications with clean design, excellent user experience, and scalable architecture.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
