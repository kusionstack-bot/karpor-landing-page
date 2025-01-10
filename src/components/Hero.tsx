"use client";

import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import HeroButton from './HeroButton';
import '@/styles/animations.css';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPauseRef = useRef<HTMLButtonElement>(null);
  const muteUnmuteRef = useRef<HTMLButtonElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
    } else {
      videoRef.current?.pause();
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <header className="relative min-h-screen flex items-center">
      <div className="container relative mx-auto px-4 sm:px-6 text-center">
        <div className="absolute inset-x-0 top-0 h-16 from-black/20" />
        <div className="pt-28 pb-16 sm:py-28 relative">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-8">
            {/* Version Update Banner */}
            <div className="mb-6 sm:mb-10">
              <a
                href="https://github.com/KusionStack/karpor/releases/tag/v0.5.9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-blue-500/15 text-white/90 border border-blue-400/20 hover:border-blue-400/40 transition-colors"
              >
                <span className="text-blue-300">🎉</span>
                <span className="font-semibold text-blue-200">v0.6.0</span>
                <span className="hidden sm:inline text-gray-300">Released with AI-Powered Experience</span>
                <span className="sm:hidden text-gray-300">New Release</span>
                <span className="text-blue-300 animate-bounce-x">→</span>
              </a>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="animate-gradient-text pb-1">
                Intelligence for Kubernetes
              </span>
            </h1>

            {/* Subtitle with Typewriter */}
            <div className="text-base sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
              <Typewriter
                options={{
                  strings: [
                    'Advanced Search and Insight capabilities for your\nKubernetes clusters across any clouds'
                  ],
                  autoStart: true,
                  loop: false,
                  delay: 20,
                  deleteSpeed: 9999999,
                  wrapperClassName: 'whitespace-pre-line'
                }}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-10">
              <HeroButton
                type="github"
                href="https://github.com/KusionStack/karpor"
              />
              <HeroButton
                type="demo"
                href="https://karpor-demo.kusionstack.io"
              />
            </div>

            {/* Video Container */}
            <div className="mt-4 sm:mt-8 rounded-lg sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl mx-auto max-w-[90vw] sm:max-w-5xl">
              <div className="relative rounded-lg sm:rounded-2xl overflow-hidden">
                <video
                  ref={videoRef}
                  className="max-w-full h-auto rounded-lg sm:rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/assets/hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
