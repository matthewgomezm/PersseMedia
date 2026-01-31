import Link from "next/link";
import Image from "next/image"; 
import { currentYear } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        
        <span className="text-sm text-body sm:text-center flex items-center gap-2">
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
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}