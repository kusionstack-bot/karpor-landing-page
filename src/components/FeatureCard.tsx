"use client";

import Image from 'next/image';

interface FeaturePoint {
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  points: FeaturePoint[];
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean;
}

export default function FeatureCard({ icon, title, points, image, reverse = false }: FeatureCardProps) {
  return (
    <div className={`feature-card flex flex-col lg:flex-row${reverse ? '-reverse' : ''} items-center gap-12`}>
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
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 border border-white/10">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
