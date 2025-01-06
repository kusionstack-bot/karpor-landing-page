"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="logo">
          <Image
            src="https://kusionstack.io/karpor/assets/logo/logo-full.svg"
            alt="Karpor Logo"
            width={120}
            height={40}
          />
        </div>
        <div className="flex gap-8 items-center">
          <Link href="#features" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#docs" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            Documentation
          </Link>
          <Link href="https://github.com/KusionStack/karpor" target="_blank" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
            GitHub
          </Link>
          <Link href="https://karpor-demo.kusionstack.io" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Live Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
