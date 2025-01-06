"use client";

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image
              src="https://kusionstack.io/karpor/assets/logo/logo-full.svg"
              alt="Karpor Logo"
              width={120}
              height={40}
              className="mb-6"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="https://kusionstack.io/karpor/" className="block text-gray-300 hover:text-white">
                Documentation
              </a>
              <a href="https://github.com/KusionStack/karpor" className="block text-gray-300 hover:text-white">
                GitHub
              </a>
              <a href="https://karpor-demo.kusionstack.io" className="block text-gray-300 hover:text-white">
                Live Demo
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <div className="space-y-2">
              <a href="https://github.com/KusionStack/karpor/discussions" className="block text-gray-300 hover:text-white">
                Discussions
              </a>
              <a href="https://twitter.com/KusionStack" className="block text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="https://medium.com/@kusionstack" className="block text-gray-300 hover:text-white">
                Medium
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Karpor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
