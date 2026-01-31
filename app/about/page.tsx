import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 dark:text-white uppercase">
        About
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/perssemedia_logo.png" 
            alt="Aiden Persse"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-300">
          <p>
            Welcome to Persse Media. I&apos;m Aiden Persse, a photographer dedicated to 
            capturing the world through a unique lens.
          </p>
          <p>
            My work focuses on finding the extraordinary in the ordinary, 
            specializing in high-quality visual storytelling that resonates 
            with emotion and clarity.
          </p>
          <p>
            Whether it&apos;s commercial projects, events, or personal portraits, 
            I strive to deliver professional results that exceed expectations. 
            Based on a passion for the craft, Persse Media is committed to 
            excellence in every frame.
          </p>
        </div>
      </div>
    </main>
  );
}
