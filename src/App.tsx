import React, { ReactNode } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Globe, Layers, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00ff00] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <div className="text-xl font-display font-bold tracking-tighter uppercase">Nexus</div>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest">
          <a href="#features" className="hover:text-[#00ff00] transition-colors">Features</a>
          <a href="#about" className="hover:text-[#00ff00] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#00ff00] transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Full Width Animation Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <div className="w-full h-full scale-110 lg:scale-125 lg:translate-x-[15%]">
            <Spline scene="https://prod.spline.design/ssVsA7C2lPf-bRBr/scene.splinecode" />
          </div>
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent w-full lg:w-2/3 pointer-events-none" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#00ff00] text-xs uppercase tracking-[0.5em] mb-6 block font-bold">
                Nexus v1.0
              </span>
              <h1 className="text-[10vw] lg:text-[7vw] font-display font-bold leading-[0.85] uppercase tracking-tighter">
                Digital<br />Evolution
              </h1>
              <p className="mt-8 text-sm md:text-base max-w-md font-light tracking-wide uppercase opacity-70">
                Pushing the boundaries of interactive 3D experiences on the web. Experience the next generation of spatial computing.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#00ff00] transition-all duration-300 flex items-center gap-2 group">
                  Explore Nexus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/20 rounded-full font-bold uppercase text-xs tracking-widest hover:border-[#00ff00] transition-all duration-300">
                  Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-6 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] vertical-text">Scroll</span>
          <div className="w-[1px] h-12 bg-white" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          <FeatureCard 
            icon={<Cpu className="w-6 h-6" />}
            title="Neural Core"
            description="Powered by advanced AI to deliver seamless interactions."
          />
          <FeatureCard 
            icon={<Globe className="w-6 h-6" />}
            title="Global Mesh"
            description="Decentralized infrastructure for ultra-low latency."
          />
          <FeatureCard 
            icon={<Layers className="w-6 h-6" />}
            title="Multi-Layer"
            description="Complex 3D scenes rendered with precision and speed."
          />
          <FeatureCard 
            icon={<Zap className="w-6 h-6" />}
            title="Instant Sync"
            description="Real-time data synchronization across all devices."
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            className="text-xs uppercase tracking-[0.5em] mb-8 block"
          >
            Our Vision
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-medium leading-tight"
          >
            We believe the future of the web is <span className="text-[#00ff00] italic">spatial</span>. A world where information isn't just read, but experienced in three dimensions.
          </motion.h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-white/60 leading-relaxed">
              Nexus is at the forefront of this transition, building tools and experiences that bridge the gap between static content and immersive reality. Our platform leverages the latest in WebGL and AI to create worlds that respond to you.
            </p>
            <p className="text-white/60 leading-relaxed">
              From interactive product showcases to complex data visualizations, we provide the infrastructure needed to bring your most ambitious 3D visions to life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-48 px-6 bg-[#00ff00] text-black text-center overflow-hidden relative">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center pointer-events-none"
        >
          <span className="text-[30vh] font-display font-bold whitespace-nowrap uppercase tracking-tighter">
            JOIN THE FUTURE JOIN THE FUTURE JOIN THE FUTURE
          </span>
        </motion.div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-12">
            Ready to build?
          </h2>
          <button className="px-12 py-6 bg-black text-white rounded-full font-bold uppercase text-sm tracking-widest hover:scale-105 transition-transform duration-300">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-[10px] uppercase tracking-widest">
        <div>© 2026 Nexus Experience. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <div>Designed for the future.</div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      className="p-12 border border-white/10 flex flex-col gap-6 transition-colors"
    >
      <div className="text-[#00ff00]">{icon}</div>
      <h3 className="text-xl font-display font-bold uppercase tracking-tight">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{description}</p>
    </motion.div>
  );
}
