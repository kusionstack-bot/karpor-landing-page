import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      {/* Dark Background Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-blue-700 overflow-hidden">
        {/* Dynamic Grid */}
        <div className="fixed inset-0 z-0">
          <div className="grid-overlay">
            <div className="dynamic-grid h-full w-full" />
          </div>
        </div>
        
        {/* Glow Orbs */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-blue-400/25 filter blur-[120px] mix-blend-screen animate-float-1" />
          <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full bg-violet-400/20 filter blur-[120px] mix-blend-screen animate-float-2" />
          <div className="absolute bottom-[15%] left-[25%] w-[550px] h-[550px] rounded-full bg-green-400/15 filter blur-[120px] mix-blend-screen animate-float-3" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Features />
          <CTA />
        </div>
      </div>

      {/* Footer with dark blue background */}
      <footer className="relative bg-blue-950">
        <Footer />
      </footer>
    </main>
  );
}
