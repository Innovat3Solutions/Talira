import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://talira.com"),
  title: "Talira | AI Voice Agents for Customer Support & Sales",
  description: "Transform your customer support and sales operations with scalable Talira AI voice agents. Never miss a call again, generate leads, and automate 24/7.",
  keywords: ["AI voice agents", "customer support AI", "AI sales assistant", "automated inbound calls", "outbound AI calling", "Talira"],
  openGraph: {
    title: "Talira | AI Voice Agents",
    description: "Deploy scalable AI voice agents to resolve over 50% of inbound volume and reach entirely custom outbound campaigns.",
    url: "https://talira.com",
    siteName: "Talira AI",
    images: [
      {
        url: "/talira_logo.png",
        width: 1200,
        height: 630,
        alt: "Talira Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talira AI Voice Agents",
    description: "Transform your operations with scalable AI voice agents. 24/7 availability.",
    images: ["/talira_logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/talira-icon.png", type: "image/png" },
    ],
    apple: "/talira-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
