"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as gtag from '@/lib/gtag';
import HeroButton from './HeroButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Documentation', href: 'https://www.kusionstack.io/karpor' },
    { name: 'Get Started', href: 'https://www.kusionstack.io/karpor/getting-started/quick-start' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[0.5px] ${
      isScrolled 
        ? 'bg-blue-950/75 backdrop-blur-lg shadow-lg border-blue-400/50' 
        : 'bg-transparent border-blue-300/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <a href="/" className="flex items-center gap-2.5" onClick={() => {
              gtag.event({
                name: 'nav_logo_click',
                params: {
                  section: 'navbar',
                  value: 1
                }
              });
            }}>
              <div className="relative w-9 h-9 group flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
                <Image
                  src="https://kusionstack.io/karpor/assets/logo/logo.svg"
                  alt="Karpor Logo"
                  width={36}
                  height={36}
                  className="relative z-10 drop-shadow-lg brightness-105"
                  priority
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-white via-blue-50 to-blue-100 text-transparent bg-clip-text drop-shadow-md">
                  Karpor
                </span>
                <span className="text-[10px] tracking-widest text-blue-200/90 uppercase font-medium pl-[1px]">
                  K8s AI Visualizer
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium hover:bg-white/5 rounded-lg"
                onClick={() => {
                  gtag.event({
                    name: `nav_${item.name.toLowerCase()}_click`,
                    params: {
                      section: 'navbar',
                      device_type: 'desktop',
                      value: 1
                    }
                  });
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end space-x-4">
              <HeroButton type="demo" href="https://karpor-demo.kusionstack.io" size="small" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/80 backdrop-blur-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={() => {
                gtag.event({
                  name: `nav_${item.name.toLowerCase()}_click`,
                  params: {
                    section: 'navbar',
                    device_type: 'mobile',
                    value: 1
                  }
                });
              }}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="mt-2">
              <HeroButton type="demo" href="https://karpor-demo.kusionstack.io" size="small" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
