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
  title: {
    default: "Alitas Express",
    template: "%s | Alitas Express",
  },

  description:
    "Alitas Express is your destination for fresh, flavorful wings delivered fast. Browse our menu, create an account, and place your order online.",

  keywords: [
    "wings delivery",
    "chicken wings",
    "Alitas Express",
    "BBQ wings",
    "Buffalo wings",
    "Lemon Pepper wings",
    "Mango Habanero",
    "Teriyaki wings",
    "food delivery",
    "restaurant ordering",
  ],

  authors: [
    {
      name: "Alitas Express",
    },
  ],

  creator: "Alitas Express",

  openGraph: {
    title: "Alitas Express",
    description:
      "Fresh, flavorful wings delivered straight to your door.",
    type: "website",
    locale: "en_US",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[#0B0B0B] text-white antialiased">
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}