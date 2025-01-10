"use client";

import { useState } from 'react';
import * as gtag from '@/lib/gtag';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const HandDrawnArrow = ({ className = "", direction = "left" }: { className?: string; direction?: "left" | "right" }) => (
  <svg
    width="160"
    height="80"
    viewBox="0 0 160 80"
    className={`${className} ${direction === "right" ? "scale-x-[-1]" : ""}`}
  >
    <defs>
      <filter id="squiggle">
        <feTurbulence baseFrequency="0.02" numOctaves="3" seed="1" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
      </filter>
    </defs>
    <g className="animate-draw">
      {/* Main wavy line */}
      <path
        d="M10,40 Q30,35 50,40 T90,40 T130,40"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-dash"
        filter="url(#squiggle)"
      />
      {/* Arrow head with slight variation */}
      <path
        d="M130,40 Q125,30 120,30 M130,40 Q125,50 120,50"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#squiggle)"
      />
      {/* Additional decorative squiggles */}
      <path
        d="M40,35 Q45,33 50,35"
        fill="none"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
        className="animate-float"
        filter="url(#squiggle)"
      />
      <path
        d="M90,45 Q95,43 100,45"
        fill="none"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
        className="animate-float-delay"
        filter="url(#squiggle)"
      />
    </g>
  </svg>
);

export default function ProductHuntPromo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12">
          {/* Vote text */}
          <div className="text-center mb-4">
            <RoughNotationGroup show>
              <div className="mb-4 relative inline-block">
                <RoughNotation
                  type="circle"
                  color="white"
                  strokeWidth={2}
                  iterations={2}
                  padding={[12, 24]}
                  animationDuration={1500}
                >
                  <h2 className="text-4xl font-bold text-white">Vote for us!</h2>
                </RoughNotation>
              </div>
              <div className="mt-2">
                <p className="text-xl text-gray-300">Join us on Product Hunt and show your support</p>
              </div>
            </RoughNotationGroup>
          </div>

          {/* Product Hunt Button with Arrows */}
          <div className="relative">
            {/* Left Arrow */}
            <div className="absolute -left-44 top-1/2 -translate-y-1/2">
              <HandDrawnArrow direction="left" />
            </div>

            {/* Button */}
            <div 
              className={`
                relative transition-transform duration-300 ease-out
                ${isHovered ? 'scale-[1.02]' : ''}
              `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a
                href="https://www.producthunt.com/posts/karpor"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  gtag.event({
                    action: 'click',
                    category: 'ProductHunt',
                    label: 'Vote Button',
                    value: 1
                  });
                }}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=770525&theme=light&t=1736447376990"
                  alt="Karpor - Effortlessly manage Kubernetes with AI-powered insights | Product Hunt"
                  width="250"
                  height="54"
                  className="transition-all duration-300"
                />
              </a>
            </div>

            {/* Right Arrow */}
            <div className="absolute -right-44 top-1/2 -translate-y-1/2">
              <HandDrawnArrow direction="right" />
            </div>
          </div>

          {/* Product Hunt text */}
          <div className="text-center mt-4">
            <RoughNotation
              type="underline"
              color="white"
              strokeWidth={2}
              iterations={1}
              padding={[0, 0]}
              animationDuration={1500}
            >
              <span className="text-blue-100 font-handwriting text-3xl tracking-wide">
                On Product Hunt!
              </span>
            </RoughNotation>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 200;
          }
        }
        .animate-dash {
          stroke-dasharray: 8;
          animation: dash 20s linear infinite;
        }
        @keyframes draw {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s ease-out forwards;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
}
