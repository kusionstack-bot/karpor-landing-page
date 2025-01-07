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
          if (data && typeof data.stargazers_count === 'number') {
            setStars(data.stargazers_count);
          } else {
            console.error('Invalid GitHub API response:', data);
            setStars(null);
          }
        })
        .catch(err => {
          console.error('Error fetching GitHub stars:', err);
          setStars(null);
        });
    }
  }, [type]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 
        rounded-lg sm:rounded-xl text-sm sm:text-base font-medium 
        transition-all duration-200 
        ${type === 'github' 
          ? 'bg-[#1B1F23] hover:bg-[#2B3137] text-white' 
          : 'bg-blue-600 hover:bg-blue-700 text-white'
        }
      `}
    >
      {type === 'github' ? (
        <>
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          <div className="flex items-center gap-1.5">
            <span>GitHub</span>
            {typeof stars === 'number' && (
              <span className="text-xs sm:text-sm text-gray-400">{stars.toLocaleString()}</span>
            )}
          </div>
        </>
      ) : (
        <>
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          <span>Live Demo</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </>
      )}
    </a>
  );
}
