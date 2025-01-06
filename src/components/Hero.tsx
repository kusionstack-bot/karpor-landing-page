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
    <header className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-blue-700 overflow-hidden">
      {/* Dynamic Grid */}
      <div className="grid-overlay">
        <div className="dynamic-grid h-full w-full" />
      </div>
      
      {/* Glow Orbs with reduced opacity */}
      <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-blue-400/20 filter blur-[120px] mix-blend-screen animate-float-1" />
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full bg-violet-400/20 filter blur-[120px] mix-blend-screen animate-float-2" />
      <div className="absolute bottom-[15%] left-[25%] w-[550px] h-[550px] rounded-full bg-green-400/15 filter blur-[120px] mix-blend-screen animate-float-3" />

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
