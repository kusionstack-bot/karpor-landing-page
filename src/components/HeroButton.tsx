"use client";

import { useState, useEffect } from 'react';
import * as gtag from '@/lib/gtag';

interface HeroButtonProps {
  type: 'github' | 'demo' | 'producthunt';
  href: string;
  size?: 'normal' | 'small';
}

export default function HeroButton({ type, href, size = 'normal' }: HeroButtonProps) {
  const [stars, setStars] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isStarAnimating, setIsStarAnimating] = useState(false);

  useEffect(() => {
    if (type === 'github') {
      setIsLoading(true);
      fetch('https://api.github.com/repos/KusionStack/karpor')
        .then(res => res.json())
        .then(data => {
          if (data && typeof data.stargazers_count === 'number') {
            setStars(data.stargazers_count);
          }
        })
        .catch(err => {
          console.error('Error fetching GitHub stars:', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [type]);

  // 当鼠标悬浮时触发星星动画
  useEffect(() => {
    if (isHovered) {
      setIsStarAnimating(true);
      const timer = setTimeout(() => {
        setIsStarAnimating(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  const buttonClasses = `
    group relative inline-flex items-center gap-2 
    ${size === 'small' 
      ? 'px-3 py-2 text-sm rounded-lg' 
      : type === 'producthunt'
        ? 'p-0 rounded-xl'
        : 'px-6 sm:px-6 py-3 sm:py-3 rounded-xl text-base w-[200px] sm:w-[200px] justify-center'
    }
    font-medium 
    transition-all duration-300 ease-out
    ${type === 'github' 
      ? 'bg-[#1B1F23] hover:bg-[#2B3137] text-white overflow-hidden shadow-md hover:shadow-lg' 
      : type === 'demo'
      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
      : 'overflow-hidden'
    }
    ${type !== 'producthunt' && isHovered ? 'scale-[1.02]' : ''}
  `;

  const githubIconClasses = `
    ${size === 'small' ? 'w-4 h-4' : 'w-6 h-6'}
    transition-transform duration-300
    ${isHovered ? 'rotate-12 scale-110' : ''}
  `;

  const starsWrapperClasses = `
    flex items-center gap-1.5
    transition-all duration-300
    ${isHovered ? 'translate-x-1' : ''}
  `;

  const starCountClasses = `
    text-xs sm:text-sm text-gray-400
    transition-all duration-300
    ${isHovered ? 'text-gray-300' : ''}
  `;

  const starIconClasses = `
    inline-block ml-1 transition-all duration-300
    ${isStarAnimating ? 'animate-star-pulse text-yellow-200' : 'text-yellow-300/90'}
  `;

  const demoIconClasses = `
    ${size === 'small' ? 'w-4 h-4' : 'w-6 h-6'}
    transition-all duration-300
    ${isHovered ? 'translate-x-1 scale-110' : ''}
  `;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        gtag.event({
          action: 'click',
          category: 'Hero',
          label: `${type === 'github' ? 'GitHub' : type === 'demo' ? 'Live Demo' : 'Product Hunt'} Button`,
          value: 1
        });
      }}
    >
      {type === 'github' ? (
        <>
          <svg className={githubIconClasses} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          <div className={starsWrapperClasses}>
            <span>GitHub</span>
            {isLoading ? (
              <div className="w-4 h-4 rounded-full border-2 border-gray-400 border-t-transparent animate-spin" />
            ) : (
              typeof stars === 'number' && (
                <span className={starCountClasses}>
                  {stars.toLocaleString()}
                  <span className={starIconClasses}>★</span>
                </span>
              )
            )}
          </div>
          {/* Shine effect */}
          <div 
            className={`
              absolute inset-0 pointer-events-none
              bg-gradient-to-r from-transparent via-white/5 to-transparent
              transition-transform duration-1000 ease-in-out
              ${isHovered ? 'translate-x-full' : '-translate-x-full'}
            `}
          />
        </>
      ) : type === 'demo' ? (
        <>
          <svg className={demoIconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
            Live Demo
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </>
      ) : (
        <div 
          className={`
            relative transition-transform duration-300 h-[44px] sm:h-[48px]
            ${isHovered ? 'scale-[1.02]' : ''}
          `}
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=770525&theme=light&t=1736447376990"
            alt="Karpor - Effortlessly manage Kubernetes with AI-powered insights | Product Hunt"
            width={size === 'small' ? 160 : 200}
            height={48}
            className="transition-all duration-300 h-full w-auto"
          />
          {/* Shine effect */}
          <div 
            className={`
              absolute inset-0 pointer-events-none
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              transition-transform duration-1000 ease-in-out
              ${isHovered ? 'translate-x-full' : '-translate-x-full'}
            `}
          />
        </div>
      )}
    </a>
  );
}
