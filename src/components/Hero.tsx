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
      <div className="container relative mx-auto px-6 text-center py-28">
        {/* Version Update Banner */}
        <div className="mb-8 inline-flex items-center">
          <a
            href="https://github.com/KusionStack/karpor/releases/tag/v0.5.9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-blue-500/15 text-white/90 border border-blue-400/20 hover:border-blue-400/40 transition-colors"
          >
            <span className="text-blue-300">🎉</span>
            <span className="font-semibold text-blue-200">v0.6.0</span>
            <span className="text-gray-300">Released with AI-Powered Experience</span>
            <span className="text-blue-300 animate-bounce-x">→</span>
          </a>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="animate-gradient-text pb-1">
              Intelligence for Kubernetes
            </span>
          </h1>

          {/* Subtitle with Typewriter */}
          <div className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
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
          <div className="flex justify-center gap-6 mt-10">
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
          <div className="mt-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="relative">
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://kusionstack.io/karpor/assets/overview/demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
