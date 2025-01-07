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
    ? "feature-card flex flex-col lg:flex-row-reverse items-center gap-12"
    : "feature-card flex flex-col lg:flex-row items-center gap-12";

  const imageContent = () => {
    const isGif = image.type.includes('gif');
    return (
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
        {isGif && image.placeholderSrc && !isLoaded && (
          <Image
            src={image.placeholderSrc}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
    );
  };

  return (
    <div className={containerClasses}>
      <div className="w-full lg:w-1/2 space-y-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <div className="space-y-4">
          {points.map((point, index) => (
            <div key={index}>
              <p className="font-medium text-gray-200">{point.title}</p>
              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        {imageContent()}
      </div>
    </div>
  );
}
