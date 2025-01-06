"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPauseRef = useRef<HTMLButtonElement>(null);
  const muteUnmuteRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations here if needed
  }, []);

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
    <header className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-blue-700">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 transform perspective-500 rotate-x-60" />
      
      {/* Glow Orbs */}
      <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-blue-400/50 filter blur-[100px] mix-blend-screen animate-float-1" />
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full bg-violet-400/50 filter blur-[100px] mix-blend-screen animate-float-2" />
      <div className="absolute bottom-[15%] left-[25%] w-[550px] h-[550px] rounded-full bg-green-400/40 filter blur-[100px] mix-blend-screen animate-float-3" />

      <div className="container relative z-10 mx-auto px-6 text-center py-12">
        <div className="space-y-12">
          <h1 className="text-5xl md:text-6xl font-bold relative leading-relaxed md:leading-relaxed">
            <span className="animate-gradient-text">
              Intelligence for Kubernetes
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-300/10 via-blue-400/10 to-violet-400/10 blur-2xl -z-10" aria-hidden="true"></span>
          </h1>
          
          <div className="flex justify-center w-full px-2">
            <div className="typewriter-container">
              <p className="typewriter text-xl md:text-2xl text-blue-100 opacity-90">
                Advanced Search, Insight and AI capabilities for your Kubernetes clusters across any clouds
              </p>
            </div>
          </div>

          {/* Video Container */}
          <div className="flex justify-center items-center">
            <div className="video-container relative rounded-lg overflow-hidden bg-gray-900 w-full max-w-4xl mx-auto">
              {/* Browser-like header */}
              <div className="browser-header bg-gray-800/90 backdrop-blur-sm px-4 py-2 flex items-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <div className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              
              <div className="relative">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  className="w-full"
                >
                  <source src="https://www.kusionstack.io/karpor/assets/overview/demo.mp4" type="video/mp4" />
                </video>
                
                {/* Video Controls */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button
                    ref={playPauseRef}
                    onClick={handlePlayPause}
                    className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6"/>
                    </svg>
                  </button>
                  <button
                    ref={muteUnmuteRef}
                    onClick={handleMuteUnmute}
                    className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 8v8m3.536-11.536a8 8 0 010 14.142M9.364 5.364L12 8m-7.072 1.536a3 3 0 000 4.928l2.536-2.536m4.95-4.95l2.536-2.536"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="https://kusionstack.io/karpor/getting-started/quick-start"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Quick Start
            </a>
            <a
              href="https://github.com/KusionStack/karpor"
              className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
