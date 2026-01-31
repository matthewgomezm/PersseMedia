import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { geistSans, geistMono, inter } from "@/components/fonts";
import Footer from "@/components/footer"; 
import "./globals.css";


export const metadata: Metadata = {
  title: "Persse Media",
  description: "Aiden Perrse's photography portfolio",
  icons: {
    icon: "/perssemedia_logo.png",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${inter.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}