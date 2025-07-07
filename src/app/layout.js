"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  });
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased layout`}
      >
        {children}
      </body>
    </html>
  );
}
