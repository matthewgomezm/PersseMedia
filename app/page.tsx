"use client"; 
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { photos } from "@/lib/utils";
import Image from "next/image";


export default function Home() {
  return (
    <main className="p-8 max-w-[1600px] mx-auto min-h-screen">
      
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 dark:text-white uppercase text-center">
        Persse Media
      </h1>

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