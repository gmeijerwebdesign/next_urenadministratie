import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import SessionWrapper from "./lib/sessionprovider"; // importeer de client wrapper

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased layout`}
      >
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
