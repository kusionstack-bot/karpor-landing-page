"use client";

import { useState } from 'react';

export default function CTA() {
  const [isCopied, setIsCopied] = useState(false);

  const installCommand = `helm repo add kusionstack https://kusionstack.github.io/charts && \\
  helm repo update && \\
  helm install karpor-release kusionstack/karpor`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Deploy Karpor in Seconds
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            One command to unlock powerful Kubernetes search and insights capabilities.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          {/* Install Command */}
          <div className="bg-[#1a1b26]/80 backdrop-blur-sm rounded-lg border border-blue-500/20 shadow-lg shadow-blue-500/5">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-blue-500/20">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                <span className="text-base lg:text-lg text-gray-400 ml-3">Install with Helm</span>
              </div>
              <button
                onClick={handleCopy}
                className="text-blue-400 hover:text-blue-300 text-base lg:text-lg flex items-center gap-2 transition-colors group"
              >
                {isCopied ? (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="group-hover:text-blue-300 transition-colors">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    <span className="group-hover:text-blue-300 transition-colors">Copy</span>
                  </>
                )}
              </button>
            </div>
            {/* Terminal Content */}
            <div className="relative font-mono text-base lg:text-lg text-gray-300/90 text-left bg-[#1a1b26] rounded-b-lg">
              <pre className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent p-4 lg:p-6">
                <code className="whitespace-pre-wrap break-all sm:break-normal">
                  <span className="text-blue-400/80">$</span> {installCommand}
                </code>
              </pre>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <a
              href="https://www.kusionstack.io/karpor/next/getting-started/installation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-base lg:text-lg inline-flex items-center gap-2 transition-colors group font-medium"
            >
              Explore Advanced Installation Options
              <svg 
                className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
