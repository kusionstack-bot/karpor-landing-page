"use client";

import { useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';

// 为了避免 SSR 警告，创建一个安全的 useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

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
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50" ref={featuresRef}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20 feature-title">
          <h2 className="text-4xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-xl text-gray-600">Advanced Search and Insight capabilities for your Kubernetes clusters</p>
        </div>
        
        <div className="space-y-32">
          {/* Search Feature */}
          <div className="feature-card flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-semibold">Intelligent Search</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Automatic Syncing</p>
                  <p className="text-gray-600">Real-time synchronization of resources across all your clusters, ensuring you always have the latest data at your fingertips.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Smart Queries</p>
                  <p className="text-gray-600">Find resources quickly with powerful search capabilities and filters, making resource management effortless.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="https://kusionstack.io/karpor/assets/search/search-auto-complete-raw.jpg"
                  alt="Search Feature"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Insight Feature */}
          <div className="feature-card flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 text-purple-600">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-semibold">Deep Insights</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Compliance Monitoring</p>
                  <p className="text-gray-600">Track and ensure compliance across all your clusters with comprehensive monitoring and reporting tools.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Resource Visualization</p>
                  <p className="text-gray-600">Interactive topology views of your Kubernetes resources, providing clear visibility into your infrastructure.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="https://kusionstack.io/karpor/assets/insight/insight-home-raw.jpg"
                  alt="Insight Feature"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Analytics Feature */}
          <div className="feature-card flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-green-600">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-semibold">Cost Analytics</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Resource Optimization</p>
                  <p className="text-gray-600">Identify cost-saving opportunities across your clusters with detailed resource usage analysis and recommendations.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Usage Tracking</p>
                  <p className="text-gray-600">Monitor and analyze resource usage patterns over time, helping you make data-driven decisions.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="https://kusionstack.io/karpor/assets/insight/insight-cost-raw.jpg"
                  alt="Analytics Feature"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
