"use client";

import { useEffect, useLayoutEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';

// 为了避免 SSR 警告，创建一个安全的 useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const featuresData = [
  {
    icon: "🔍",
    title: "Intelligent Search",
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
      src: "https://kusionstack.io/karpor/assets/search/search-auto-complete-raw.jpg",
      alt: "Search Feature",
      type: "image"
    }
  },
  {
    icon: "💡",
    title: "Deep Insights",
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
      src: "https://kusionstack.io/karpor/assets/insight/insight-home.gif",
      alt: "Insight Feature",
      type: "gif",
      placeholderSrc: "https://kusionstack.io/karpor/assets/insight/insight-home-raw.jpg"
    }
  },
  {
    icon: "📊",
    title: "Cost Analytics",
    points: [
      {
        title: "Resource Optimization",
        description: "Identify cost-saving opportunities across your clusters with detailed resource usage analysis and recommendations."
      },
      {
        title: "Usage Tracking",
        description: "Monitor and analyze resource usage patterns over time, helping you make data-driven decisions."
      }
    ],
    image: {
      src: "https://kusionstack.io/karpor/assets/insight/insight-cost-raw.jpg",
      alt: "Analytics Feature",
      type: "image"
    }
  }
];

export default function Features() {
  const hasAnimated = useRef(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    // 设置初始状态
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

        // 标题动画
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

        // 特性卡片动画
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
