import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full mx-auto antialiased`}
      >
        <div className="max-w-[100rem] w-full mx-auto relative">
           <div className="sticky top-0 z-[90]">
           <div className="absolute top-2 left-2 z-[90] ">
                  <div>
                    <h1 className="text-3xl">LOGO</h1>
                  </div>
          </div>
          <div className="absolute top-2 right-2 z-[90]">
          <Nav />
          </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
