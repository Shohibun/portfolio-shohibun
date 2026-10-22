import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shohibun Najam Ilma — Software Developer | Web • Mobile • Desktop",
  description:
    "Software Developer experienced in building web platforms, cross-platform mobile applications, and desktop solutions. Based in Jember, Indonesia.",
  keywords: [
    "Shohibun Najam Ilma",
    "Software Developer",
    "Web Developer",
    "Mobile Developer",
    "Desktop Developer",
    "React",
    "Next.js",
    "Flutter",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Shohibun Najam Ilma" }],
  openGraph: {
    title: "Shohibun Najam Ilma — Software Developer | Web • Mobile • Desktop",
    description:
      "Software Developer experienced in building web platforms, cross-platform mobile applications, and desktop solutions. Based in Jember, Indonesia.",
    type: "website",
    locale: "en_US",
    url: "https://portfolio-shohibun.vercel.app",
    siteName: "Shohibun Najam Ilma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shohibun Najam Ilma — Software Developer | Web • Mobile • Desktop",
    description:
      "Software Developer experienced in building web platforms, cross-platform mobile applications, and desktop solutions.",
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
      className={`${inter.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-text-primary font-sans antialiased selection:bg-accent selection:text-accent-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
