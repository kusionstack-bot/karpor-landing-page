"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

interface FeaturePoint {
  title: string;
  description: string;
}

interface FeatureMedia {
  src: string;
  alt: string;
  type: 'image/gif' | 'image/png' | 'image/jpeg' | 'video/mp4';
  placeholderSrc?: string;
}

interface FeatureCardProps {
  title: string;
  points: FeaturePoint[];
  image: FeatureMedia;
  reverse?: boolean;
}

export default function FeatureCard({ title, points, image, reverse = false }: FeatureCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const containerClasses = reverse
    ? "lg:flex-row-reverse"
    : "";

  const mediaContent = () => {
    const isVideo = image.type === 'video/mp4';
    const isGif = image.type === 'image/gif';

    return (
      <div className="relative w-full rounded-xl overflow-hidden">
        {/* Placeholder image for GIFs and videos */}
        {(isGif || isVideo) && image.placeholderSrc && !isLoaded && (
          <Image
            src={image.placeholderSrc}
            alt={image.alt}
            width={1920}
            height={1280}
            className="w-full h-auto rounded-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 55vw"
            quality={90}
          />
        )}

        {isVideo ? (
          <div className="rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              className={`w-full h-auto transition-all duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsLoaded(true)}
            >
              <source src={image.src} type="video/mp4" />
            </video>
          </div>
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            width={1920}
            height={1280}
            className={`w-full h-auto rounded-xl transition-all duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 55vw"
            quality={90}
            onLoad={() => setIsLoaded(true)}
            priority={true}
          />
        )}
      </div>
    );
  };

  return (
    <div className={`feature-card p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 ${containerClasses}`}>
      <div className="w-full lg:w-2/5 space-y-8">
        <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-white relative">
          <span className="relative z-10 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
        <div className="space-y-6">
          {points.map((point, index) => (
            <div key={index} className="group space-y-2">
              <h4 className="text-lg lg:text-xl font-semibold text-blue-200/90 group-hover:text-blue-200 transition-colors">
                {point.title}
              </h4>
              <p className="text-base lg:text-lg text-gray-400/90 group-hover:text-gray-400 transition-colors leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-3/5 flex items-center">
        {mediaContent()}
      </div>
    </div>
  );
}
