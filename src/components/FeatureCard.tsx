"use client";

import { useState } from 'react';
import Image from 'next/image';

interface FeaturePoint {
  title: string;
  description: string;
}

interface FeatureImage {
  src: string;
  alt: string;
  type: string;
  placeholderSrc?: string;
}

interface FeatureCardProps {
  title: string;
  points: FeaturePoint[];
  image: FeatureImage;
  reverse?: boolean;
}

export default function FeatureCard({ title, points, image, reverse = false }: FeatureCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerClasses = reverse
    ? "lg:flex-row-reverse"
    : "";

  const imageContent = () => {
    const isGif = image.type.includes('gif');
    return (
      <div className="relative w-full">
        {isGif && image.placeholderSrc && !isLoaded && (
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
          onLoadingComplete={() => setIsLoaded(true)}
        />
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
        {imageContent()}
      </div>
    </div>
  );
}
