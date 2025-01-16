"use client";

import { useEffect, useLayoutEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';

// Create a safe useLayoutEffect to avoid SSR warnings
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const featuresData = [
  {
    title: "Flexible Search",
    points: [
      {
        title: "Automatic Syncing",
        description: "Real-time synchronization of resources across all your clusters, ensuring you always have the latest data at your fingertips."
      },
      {
        title: "Smart Queries",
        description: "Find resources quickly with powerful search capabilities and filters, making resource management effortless."
      }
    ],
    image: {
      src: "/assets/search.mp4",
      alt: "Search Feature",
      type: "video/mp4" as const,
      placeholderSrc: "https://kusionstack.io/karpor/assets/search/search-auto-complete-raw.jpg"
    }
  },
  {
    title: "Resource Insights",
    points: [
      {
        title: "Compliance Monitoring",
        description: "Track and ensure compliance across all your clusters with comprehensive monitoring and reporting tools."
      },
      {
        title: "Resource Visualization",
        description: "Interactive topology views of your Kubernetes resources, providing clear visibility into your infrastructure."
      }
    ],
    image: {
      src: "/assets/insight.mp4",
      alt: "Insight Feature",
      type: "video/mp4" as const,
      placeholderSrc: "https://kusionstack.io/karpor/assets/insight/insight-home-raw.jpg"
    }
  },
  {
    title: "AI Assistant",
    points: [
      {
        title: "Intelligent Operations",
        description: "Powered by LLM, our AI assistant automatically analyzes system events and logs, providing real-time insights and recommendations."
      },
      {
        title: "One-Click Solutions",
        description: "Get expert-level diagnostics and solutions with just one click, as if you're consulting a Kubernetes expert right at your fingertips."
      }
    ],
    image: {
      src: "/assets/ai.mp4",
      alt: "AI Assistant Feature",
      type: "video/mp4" as const,
      placeholderSrc: "https://kusionstack.io/karpor/assets/ai/event-ai-diagnosis.png"
    }
  }
];

export default function Features() {
  const hasAnimated = useRef(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    // Set initial state
    if (featuresRef.current) {
      const title = featuresRef.current.querySelector('.feature-title');
      const features = featuresRef.current.querySelectorAll('.feature-card');
      
      if (title) {
        (title as HTMLElement).style.opacity = '0';
        (title as HTMLElement).style.transform = 'translateY(20px)';
      }
      
      features.forEach((feature) => {
        (feature as HTMLElement).style.opacity = '0';
        (feature as HTMLElement).style.transform = 'translateY(30px)';
      });
    }

    const initGSAP = async () => {
      if (typeof window === 'undefined' || hasAnimated.current) return;

      try {
        const { gsap } = await import('gsap');
        const ScrollTriggerModule = await import('gsap/dist/ScrollTrigger');
        const ScrollTrigger = ScrollTriggerModule.default;
        
        gsap.registerPlugin(ScrollTrigger);

        // Title animation
        const title = document.querySelector('.feature-title');
        if (title) {
          gsap.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: title,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse',
            },
          });
        }

        // Feature card animation
        const features = document.querySelectorAll('.feature-card');
        features.forEach((feature, index) => {
          gsap.to(feature, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: feature,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.2,
          });
        });

        hasAnimated.current = true;
      } catch (error) {
        console.error('Error initializing GSAP:', error);
      }
    };

    initGSAP();

    return () => {
      if (typeof window !== 'undefined') {
        import('gsap/dist/ScrollTrigger').then((ScrollTriggerModule) => {
          const ScrollTrigger = ScrollTriggerModule.default;
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        });
      }
    };
  }, []);

  return (
    <section id="features" className="relative py-24" ref={featuresRef}>
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20 feature-title">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Key Features</h2>
          <p className="text-xl text-gray-300">Advanced Search and Insight capabilities for your Kubernetes clusters</p>
        </div>
        
        <div className="space-y-32">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
