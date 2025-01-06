"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

export default function Features() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 标题动画
    gsap.from('.feature-title', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.feature-title',
        start: 'top bottom-=300',
        toggleActions: 'play none none reverse',
      },
    });

    // 特性卡片动画
    const features = document.querySelectorAll('.feature-card');
    features.forEach((feature, index) => {
      gsap.from(feature, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: feature,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
        delay: index * 0.15,
      });
    });
  }, []);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20 feature-title">
          <h2 className="text-4xl font-bold text-center mb-4">Key Features</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Search Feature */}
          <div className="feature-card rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-video relative overflow-hidden rounded-t-xl">
              <Image
                src="https://kusionstack.io/karpor/assets/search/search-auto-complete-raw.jpg"
                alt="Search Feature"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-8">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-4">Search</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Automatic Syncing</p>
                  <p className="text-gray-600">Automatically synchronize your resources across any clusters managed by the multi-cloud platform.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Powerful, flexible queries</p>
                  <p className="text-gray-600">Effectively retrieve and locate resources across multi clusters that you are looking for in a quick and easy way.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Insight Feature */}
          <div className="feature-card rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-video relative overflow-hidden rounded-t-xl">
              <Image
                src="https://kusionstack.io/karpor/assets/insight/insight-home-raw.jpg"
                alt="Insight Feature"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-8">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-4">Insight</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Compliance Governance</p>
                  <p className="text-gray-600">Understand your compliance status across multiple clusters and compliance standards.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Resource Topology</p>
                  <p className="text-gray-600">Logical and topological views of relevant resources within their operational context.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Cost Optimization</p>
                  <p className="text-gray-600">Coming soon.</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Feature */}
          <div className="feature-card rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-8">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-4">AI</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Natural Language Operations</p>
                  <p className="text-gray-600">Interact with Kubernetes using plain language for more intuitive operations.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Contextual AI Responses</p>
                  <p className="text-gray-600">Get smart, contextual assistance that understands your Kubernetes environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
