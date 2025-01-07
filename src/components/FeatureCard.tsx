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
  type?: 'image' | 'gif';
  placeholderSrc?: string;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  points: FeaturePoint[];
  image: FeatureImage;
  reverse?: boolean;
}

export default function FeatureCard({ icon, title, points, image, reverse = false }: FeatureCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerClasses = reverse
    ? "feature-card flex flex-col lg:flex-row-reverse items-center gap-12"
    : "feature-card flex flex-col lg:flex-row items-center gap-12";

  return (
    <div className={containerClasses}>
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-400/20 text-blue-200">
          <span className="text-2xl">{icon}</span>
        </div>
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
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 border border-white/10">
          <div className="relative">
            {image.type === 'gif' && image.placeholderSrc && !isLoaded && (
              <Image
                src={image.placeholderSrc}
                alt={`${image.alt} placeholder`}
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            )}
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={1080}
              className={`w-full h-auto transition-all duration-300 ${
                image.type === 'gif' && !isLoaded ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                position: image.type === 'gif' ? 'absolute' : 'relative',
                top: 0,
                left: 0
              }}
              onLoadingComplete={() => setIsLoaded(true)}
              priority={image.type === 'gif'}
              unoptimized={image.type === 'gif'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
