import { Geist, Geist_Mono, Neuton, Inter } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  const neuton = Neuton({
    weight: ["400", "700", "800"],
    variable: "--font-neuton",
    subsets: ["latin"],
  });

  const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["900"],
  });

  export {
    geistSans,
    geistMono,
    neuton,
    inter,
  };