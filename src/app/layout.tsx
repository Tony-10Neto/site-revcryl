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
  title: "RevCryl Tintas & Texturas - Os melhores produtos do mercado",
  description: "RevCryl Tintas & Texturas - Há mais de 15 anos no mercado oferecendo as melhores soluções em tintas, texturas e revestimentos. Localizada em São Paulo - SP.",
  keywords: "tintas, texturas, revestimentos, pintura, São Paulo, RevCryl",
  authors: [{ name: "RevCryl" }],
  openGraph: {
    title: "RevCryl Tintas & Texturas",
    description: "Os melhores produtos do mercado estão aqui",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
