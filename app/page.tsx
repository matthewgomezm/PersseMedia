"use client"; 
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { photos } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link"; 

export default function Home() {
  return (
    <main className="p-8 max-w-[1600px] mx-auto min-h-screen">
      <header className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/perssemedia_logo.png"
            alt="Persse Media Logo"
            width={200} 
            height={60} 
            className="w-48 md:w-64 h-auto" 
            priority 
          />
        </Link>

        <nav className="flex items-center gap-8 text-lg font-medium">
          <Link href="/about" className="hover:underline underline-offset-4 decoration-2">
            About
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4 decoration-2">
            Contact
          </Link>
        </nav>

      </header>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="24px">
          
          {photos.map((photo, i) => (
            <div key={i} className="mb-6"> 
              <Image
                src={photo.src}
                alt={photo.alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-auto shadow-sm hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          ))}

        </Masonry>
      </ResponsiveMasonry>
    </main>
  );
}