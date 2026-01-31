import Link from "next/link";
import Image from "next/image"; 
import { currentYear } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        
        <span className="text-sm text-body text-center flex items-center gap-2">
          <span>© {currentYear} </span>
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/perssemedia_logo.png" 
              alt = "Persse Media Logo"
              width={100} 
              height={30} 
              className="h-6 w-auto" 
            />
          </Link>
          <span> All Rights Reserved.</span>
        </span>
      </div>
    </footer>
  );
}