/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronDown, Globe, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const TopNav = () => (
  <div className="w-full border-b border-slate-100 py-2 px-4 md:px-12 flex justify-end items-center space-x-6 text-xs text-slate-500 font-medium">
    <a href="#" className="hover:text-brand transition-colors">Support</a>
    <a href="#" className="hover:text-brand transition-colors">Partner with Us</a>
    <a href="#" className="hover:text-brand transition-colors">ContactUs</a>
    <div className="flex items-center space-x-1 cursor-pointer hover:text-brand transition-colors">
      <Globe size={14} />
      <span>English</span>
      <ChevronDown size={12} />
    </div>
  </div>
);

const Navbar = () => (
  <nav className="w-full py-4 px-4 md:px-12 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
    <div className="flex items-center space-x-8">
      <div className="flex items-center space-x-2">
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Stack<span className="text-brand">orbit</span>
          </span>
          <span className="text-[8px] uppercase tracking-widest text-slate-400 font-bold -mt-1">
            Engineered Cloud. Delivered.
          </span>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-600">
        {['Platform', 'Services', 'Solutions', 'Resources', 'Company'].map((item) => (
          <div key={item} className="flex items-center space-x-1 cursor-pointer hover:text-brand transition-colors">
            <span>{item}</span>
            <ChevronDown size={14} />
          </div>
        ))}
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <button className="px-6 py-2 text-sm font-semibold text-slate-600 border border-slate-200 rounded-full hover:bg-slate-50 transition-all">
        Login
      </button>
      <button className="px-6 py-2 text-sm font-semibold text-white bg-brand rounded-full hover:bg-brand/90 shadow-lg shadow-brand/20 transition-all">
        Get Started Free
      </button>
    </div>
  </nav>
);

const TarsBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="relative h-full w-full">
      {/* Left Circle: Large & Slow */}
      <div 
        className="absolute top-1/4 left-[5%] h-[800px] w-[800px] animate-orbit-slow"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, rgba(124, 58, 237, 0.15) 40%, transparent 70%)',
          filter: 'blur(45px)',
        }}
      />

      {/* Right Circle: Smaller & Faster */}
      <div 
        className="absolute top-1/2 right-[-15%] h-[600px] w-[600px] animate-orbit-fast"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.45) 0%, rgba(192, 132, 252, 0.15) 40%, transparent 70%)',
          filter: 'blur(35px)',
        }}
      />
    </div>
  </div>
);

const Hero = () => (
  <section className="relative pt-20 pb-32 px-4 text-center overflow-hidden bg-slate-50/50">
    <TarsBackground />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto relative z-10"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
        A Unified Platform for <br />
        <span className="text-brand">Public Cloud</span>
      </h1>
      
      <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
        The complete sovereign cloud platform that enables service providers to launch, operate, and monetize cloud services—without hyperscaler dependency.
      </p>
      
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-10 py-4 text-lg font-bold text-white bg-brand rounded-full hover:bg-brand/90 shadow-xl shadow-brand/20 transition-all transform hover:-translate-y-1">
          Get Started Free
        </button>
        <button className="w-full sm:w-auto px-10 py-4 text-lg font-bold text-slate-700 bg-brand-light border border-brand/10 rounded-full hover:bg-brand/10 transition-all transform hover:-translate-y-1">
          Book a Demo
        </button>
      </div>
    </motion.div>
  </section>
);

const DashboardPreview = () => (
  <section className="max-w-6xl mx-auto px-4 pb-40">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative group"
    >
      {/* Banner Overlay */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl">
        <div className="bg-white rounded-full py-3 px-6 shadow-2xl border border-slate-100 flex items-center justify-between group-hover:border-brand/30 transition-colors">
          <div className="flex items-center space-x-3">
            <div className="p-1.5 bg-brand/10 rounded-full text-brand">
              <Globe size={18} />
            </div>
            <span className="text-sm md:text-base font-semibold text-slate-700">
              Launch a full-stack cloud platform—on your infrastructure, on your terms.
            </span>
          </div>
          <div className="p-2 bg-slate-900 rounded-full text-white">
            <ArrowRight size={18} />
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900 rounded-[40px] p-4 md:p-8 shadow-2xl overflow-hidden border border-slate-800">
        <div className="bg-white/5 rounded-[32px] p-2 md:p-4 backdrop-blur-sm border border-white/10">
          <img 
            src="https://picsum.photos/seed/dashboard/1600/900" 
            alt="StackOrbit Dashboard" 
            className="rounded-[24px] w-full shadow-inner opacity-90 group-hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-brand/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  </section>
);

const ChatWidget = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-4">
    <div className="bg-white py-2 px-4 rounded-full shadow-xl border border-slate-100 flex items-center space-x-2 animate-bounce">
      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
      <span className="text-xs font-bold text-slate-600">Ask TARS</span>
    </div>
    <button className="w-16 h-16 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center text-brand hover:scale-110 transition-transform group relative">
      <MessageCircle size={32} />
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
        1
      </div>
    </button>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand/20 selection:text-brand">
      <TopNav />
      <Navbar />
      <main>
        <Hero />
        <DashboardPreview />
      </main>
      <ChatWidget />
      
      {/* Footer Placeholder */}
      <footer className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 StackOrbit. All rights reserved. Engineered Cloud. Delivered.
          </p>
        </div>
      </footer>
    </div>
  );
}
