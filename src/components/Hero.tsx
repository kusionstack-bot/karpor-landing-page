"use client";

import { useRef } from 'react';
import Typewriter from 'typewriter-effect';

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
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-blue-500/15 text-white/90 border border-blue-400/20 hover:border-blue-400/40 transition-colors">
            <span className="text-blue-300">🎉</span>
            <span className="font-semibold text-blue-200">v0.6.0</span>
            <span className="text-gray-300">Released with AI-Powered Experience</span>
            <span className="text-blue-300 animate-bounce-x">→</span>
          </span>
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
            <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl group-hover:blur-2xl"></div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/80 to-blue-700/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="group relative px-8 py-3 bg-white/5 backdrop-blur-sm text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20 shadow-lg overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors">Watch Demo</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -inset-[1px] -z-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </button>
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
