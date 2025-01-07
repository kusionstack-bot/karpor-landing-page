"use client";

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-gray-300">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image
              src="https://kusionstack.io/karpor/assets/logo/logo-full.svg"
              alt="Karpor Logo"
              width={120}
              height={40}
              className="mb-6 opacity-90 hover:opacity-100 transition-all"
            />
            <p className="text-sm text-blue-200/70">
              Advanced Search and Insight capabilities for your Kubernetes clusters
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white tracking-wide">Resources</h4>
            <div className="space-y-3">
              <a 
                href="https://kusionstack.io/karpor/" 
                className="block text-blue-200/70 hover:text-white transition-all hover:translate-x-1"
              >
                Documentation
              </a>
              <a 
                href="https://github.com/KusionStack/karpor" 
                className="block text-blue-200/70 hover:text-white transition-all hover:translate-x-1"
              >
                GitHub
              </a>
              <a 
                href="https://karpor-demo.kusionstack.io" 
                className="block text-blue-200/70 hover:text-white transition-all hover:translate-x-1"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white tracking-wide">Community</h4>
            <div className="space-y-3">
              <a 
                href="https://github.com/KusionStack/karpor/discussions" 
                className="block text-blue-200/70 hover:text-white transition-all hover:translate-x-1"
              >
                Discussions
              </a>
              <a 
                href="https://twitter.com/KusionStack" 
                className="block text-blue-200/70 hover:text-white transition-all hover:translate-x-1"
              >
                Twitter
              </a>
              <a 
                href="https://medium.com/@kusionstack" 
                className="block text-blue-200/70 hover:text-white transition-all hover:translate-x-1"
              >
                Medium
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-900 pt-8">
          <p className="text-center text-blue-200/50">
            &copy; {new Date().getFullYear()} Karpor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
