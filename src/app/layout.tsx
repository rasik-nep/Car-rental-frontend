import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Shan Vehicle Rental - Find Your Perfect Ride",
  description:
    "Rent premium cars for your journey in Nepal. Wide selection of vehicles, competitive prices, and excellent customer service.",
  keywords:
    "car rental, vehicle rental, car hire, premium cars, affordable car rental, nepal car rental, nepal vehicle rental, nepal car hire, nepal premium cars, nepal affordable car rental",
  authors: [{ name: "Car Rental Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
