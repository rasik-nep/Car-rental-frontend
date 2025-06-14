"use client"; // Error boundaries must be Client Components

import { DM_Sans } from "next/font/google";
import "./globals.css";
import { TEXT } from "@/constant/text";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function GlobalError() {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}`}>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold mb-4">
            {TEXT.common.somethingWentWrong}
          </h2>
          <button
            onClick={() => {
              // refresh the page
              window.location.reload();
            }}
            className="px-4 py-2 text-text-500 border-1 border-foreground rounded cursor-pointer hover:bg-primary hover:text-white"
          >
            {TEXT.common.refresh}
          </button>
        </div>
      </body>
    </html>
  );
}
