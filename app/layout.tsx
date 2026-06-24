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
  title: "Expo VPN — Fast, Free & Secure Mobile VPN",
  description: "Expo VPN gives you uninterrupted, secure, and private browsing with one tap. Enjoy high-speed global servers, advanced encryption, and a strict no-logs policy. Completely free with zero configuration.",
  keywords: [
    "VPN",
    "free VPN",
    "fast VPN",
    "secure VPN",
    "Expo VPN",
    "privacy vpn",
    "no-logs policy",
    "iOS VPN",
    "Android VPN",
    "private browsing"
  ],
  authors: [{ name: "Expo VPN Team" }],
  openGraph: {
    title: "Expo VPN — Fast, Free & Secure Mobile VPN",
    description: "Expo VPN gives you uninterrupted, secure, and private browsing with one tap. Enjoy high-speed global servers, advanced encryption, and a strict no-logs policy.",
    type: "website",
    url: "https://expovpn.com", // placeholder, correct SEO practice
    siteName: "Expo VPN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expo VPN — Fast, Free & Secure Mobile VPN",
    description: "Expo VPN gives you uninterrupted, secure, and private browsing with one tap. Enjoy high-speed global servers, advanced encryption, and a strict no-logs policy.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-deep-black text-gray-100 flex flex-col font-sans selection:bg-brand-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
