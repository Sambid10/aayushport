import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Ubuntu } from "next/font/google";
import ReactLenis from "lenis/react";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto=Ubuntu({
  weight:["400"],
  variable:"--font-roboto",
  subsets:["latin"]
})
import Navbar from "./_components/Navbar";
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My_Portfolio",
  description: "Portfolio website @(Aayush_Shakya)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/log.jpg" type="image/jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} bg-black w-full antialiased`}
      >
        <div className=" font-roboto ">
        
        <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.06,
          syncTouch:true
            
        }}
      >
       
       {children}
      </ReactLenis>
          
        </div>
      </body>
    </html>
  );
}
