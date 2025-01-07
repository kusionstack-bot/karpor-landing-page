"use client";

import { useEffect, useState } from 'react';

interface HeroButtonProps {
  type: 'github' | 'demo';
  href: string;
}

export default function HeroButton({ type, href }: HeroButtonProps) {
  const [stars, setStars] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (type === 'github') {
      fetch('https://api.github.com/repos/KusionStack/karpor')
        .then(res => res.json())
        .then(data => {
          setStars(data.stargazers_count);
        })
        .catch(err => {
          console.error('Error fetching GitHub stars:', err);
        });
    }
  }, [type]);

  const githubClasses = `
    relative group flex items-center gap-2 px-6 py-3 bg-[#24292F] hover:bg-[#24292F]/90
    text-white rounded-lg font-medium transition-all duration-300
    hover:scale-[1.02] shadow-lg hover:shadow-[#24292F]/25
    overflow-hidden
  `;

  const demoClasses = `
    relative group flex items-center gap-2 px-6 py-3
    bg-gradient-to-r from-blue-600 to-blue-700
    hover:from-blue-500 hover:to-blue-600
    text-white rounded-lg font-medium transition-all duration-300
    hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25
    overflow-hidden
  `;

  if (type === 'github') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={githubClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2EA043]/10 to-[#2EA043]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* GitHub Icon */}
        <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>

        <span className="font-semibold">GitHub</span>

        {/* Star Count */}
        {stars !== null && (
          <div className="flex items-center gap-1 px-2 py-0.5 bg-white/10 rounded-full text-sm transition-transform group-hover:scale-105">
            <svg
              className={`w-4 h-4 ${isHovered ? 'animate-[star_0.5s_ease-in-out]' : ''}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.85 1.416 8.265L12 18.9l-7.415 3.896 1.416-8.265-6.001-5.85 8.332-1.21L12 .587z" />
            </svg>
            <span>{stars.toLocaleString()}</span>
          </div>
        )}

        <div className="absolute -inset-[1px] bg-gradient-to-r from-[#2EA043]/20 via-[#2EA043]/10 to-[#2EA043]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={demoClasses}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-300/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Demo Icon */}
      <svg
        className="w-5 h-5 transition-transform group-hover:rotate-[360deg] duration-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>

      <span className="font-semibold relative">
        Live Demo
        <span className="absolute -right-2 -top-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
      </span>

      <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-400/20 via-blue-300/10 to-blue-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
    </a>
  );
}
