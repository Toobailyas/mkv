
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer1 from "./components/Footer1";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MKVolunteers",
  description: "We are the agents og Positive change",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=
      {`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Header />
      <div className="pt-[90px]">
        {children}
        </div>
        <Footer1 />
      </body>
    </html>
  );
}