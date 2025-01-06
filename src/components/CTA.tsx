"use client";

export default function CTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-12">
          Join our community and start exploring Kubernetes in a smarter way
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="https://kusionstack.io/karpor/getting-started/quick-start"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Quick Start Guide
          </a>
          <a
            href="https://github.com/KusionStack/karpor/discussions"
            className="px-8 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-transform hover:scale-105"
          >
            Join Discussion
          </a>
        </div>
      </div>
    </section>
  );
}
