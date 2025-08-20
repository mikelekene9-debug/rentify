import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/component/Navbar";
import { Footer } from "@component/material";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rentify",
  description: "an application that connects landlord and tenants",
};

export default function RootLayout({ children }) {
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
