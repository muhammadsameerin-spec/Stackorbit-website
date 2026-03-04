/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, Globe, ArrowRight, MessageCircle, Shield, Zap, Cpu, BarChart3, Cloud, Layers, Users, CheckCircle2, Facebook, Twitter, Linkedin, Github, Building, Server, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
      <button className="px-6 py-2 text-sm font-semibold text-slate-600 border border-slate-200 rounded hover:bg-slate-50 transition-all">
        Login
      </button>
      <button className="px-6 py-2 text-sm font-semibold text-white bg-brand rounded hover:bg-brand/90 shadow-lg shadow-brand/20 transition-all">
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
        <button className="w-full sm:w-auto px-10 py-4 text-lg font-bold text-white bg-brand rounded hover:bg-brand/90 shadow-xl shadow-brand/20 transition-all transform hover:-translate-y-1">
          Get Started Free
        </button>
        <button className="w-full sm:w-auto px-10 py-4 text-lg font-bold text-slate-700 bg-brand-light border border-brand/10 rounded hover:bg-brand/10 transition-all transform hover:-translate-y-1">
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
        <div className="bg-white rounded py-3 px-6 shadow-2xl border border-slate-100 flex items-center justify-between group-hover:border-brand/30 transition-colors">
          <div className="flex items-center space-x-3">
            <div className="p-1.5 bg-brand/10 rounded text-brand">
              <Globe size={18} />
            </div>
            <span className="text-sm md:text-base font-semibold text-slate-700">
              Launch a full-stack cloud platform—on your infrastructure, on your terms.
            </span>
          </div>
          <div className="p-2 bg-slate-900 rounded text-white">
            <ArrowRight size={18} />
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900 rounded-xl p-4 md:p-8 shadow-2xl overflow-hidden border border-slate-800">
        <div className="bg-white/5 rounded-lg p-2 md:p-4 backdrop-blur-sm border border-white/10">
          <img 
            src="https://picsum.photos/seed/dashboard/1600/900" 
            alt="StackOrbit Dashboard" 
            className="rounded-md w-full shadow-inner opacity-90 group-hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-brand/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  </section>
);

const TrustedBy = () => {
  const logos = [
    { name: "kalaam", icon: <Globe size={20} /> },
    { name: "coloasia", icon: <Cloud size={24} /> },
    { name: "AFR@NET", icon: <Zap size={20} /> },
    { name: "Data Hub", icon: <Layers size={20} /> },
    { name: "Appranix", icon: <Shield size={20} /> },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded p-12 md:p-16 shadow-sm border border-slate-100 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          Trusted by Cloud Providers Worldwide
        </h2>
        <p className="text-slate-500 text-sm md:text-base mb-16 max-w-2xl mx-auto">
          Join the service providers who have transformed their cloud business.
        </p>
        
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div 
            className="flex items-center space-x-20 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Triple the logos for seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div 
                key={idx} 
                className="flex items-center space-x-4 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer group inline-flex"
              >
                <div className="text-slate-400 group-hover:text-brand transition-colors">
                  {logo.icon}
                </div>
                <span className="text-xl md:text-2xl font-bold text-slate-400 group-hover:text-slate-900 transition-colors tracking-tighter uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const EcosystemDiagram = () => {
  return (
    <section className="py-32 bg-[#060a1f] relative overflow-hidden font-sans">
      {/* Fine Dotted Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading and Subtext */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
          >
            One Platform.<br />
            <span className="text-brand">Complete Control.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Design, operate, and monetize sovereign cloud services — from infrastructure to revenue — using a single unified platform.
          </motion.p>
        </div>

        <div className="relative h-[700px]">
          {/* SVG Connectors Overlay - Orthogonal Dotted Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} preserveAspectRatio="none" viewBox="0 0 1000 1000">
          {/* Top Group to SDK/Event Layer */}
          <path d="M 500 40 L 500 150" stroke="#1e293b" strokeWidth="1" strokeDasharray="4,4" fill="none" />
          <path d="M 300 150 L 700 150" stroke="#1e293b" strokeWidth="1" strokeDasharray="4,4" fill="none" />
          <path d="M 300 150 L 300 200" stroke="#1e293b" strokeWidth="1" strokeDasharray="4,4" fill="none" />
          <path d="M 700 150 L 700 200" stroke="#1e293b" strokeWidth="1" strokeDasharray="4,4" fill="none" />
          
          {/* SDK to Center */}
          <path d="M 300 200 L 300 350 L 450 350" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="animate-dash-flow" />
          
          {/* Event Destinations to Center */}
          <path d="M 700 200 L 700 350 L 550 350" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="animate-dash-flow-reverse" />
          
          {/* Marketplace Grid to Label */}
          <path d="M 50 400 L 150 400 L 150 500 L 300 500" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="animate-dash-flow" />

          {/* Marketplace Label to Center */}
          <path d="M 300 500 L 450 500" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="animate-dash-flow" />
          
          {/* Data Pipeline to Center */}
          <path d="M 700 500 L 550 500" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="animate-dash-flow-reverse" />
          
          {/* External Destination */}
          <path d="M 700 500 L 900 500" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="animate-dash-flow" />

          {/* Center to Orchestration */}
          <path d="M 500 500 L 500 650" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" fill="none" className="animate-dash-flow" />
          
          {/* Orchestration to PSPs */}
          <path d="M 500 650 L 500 750" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
          <path d="M 500 750 L 400 750 L 400 850" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
          <path d="M 500 750 L 600 750 L 600 850" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
          <path d="M 500 750 L 500 850" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" fill="none" />
        </svg>

        {/* Top Integrations Group */}
        <div className="absolute top-[20px] left-1/2 -translate-x-1/2 flex items-center bg-[#111827]/50 border border-slate-800 p-2 rounded z-10">
          {['ERP', 'CRM', 'Subscriptions', 'Legacy billing', 'Booking system'].map((item, i) => (
            <div key={i} className="px-4 py-2 text-white text-[10px] font-bold bg-[#1e293b] rounded mx-1 shadow-sm">
              {item}
            </div>
          ))}
        </div>

        {/* Intermediate Layer: SDK & Event Destinations */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[30%] -translate-x-1/2 px-6 py-2 bg-[#4f46e5] text-white text-xs font-bold rounded shadow-lg z-10"
        >
          SDK
        </motion.div>

        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] left-[70%] -translate-x-1/2 px-6 py-2 bg-[#4f46e5] text-white text-xs font-bold rounded shadow-lg z-10"
        >
          Event Destinations
        </motion.div>

        {/* Left Side: App Marketplace Grid */}
        <div className="absolute left-[5%] top-[40%] bg-[#0f172a] border border-slate-800 p-3 rounded-lg grid grid-cols-3 gap-2 z-10">
          {[Zap, Globe, Cpu, Layers, Shield, BarChart3].map((Icon, i) => (
            <div key={i} className={`w-8 h-8 rounded flex items-center justify-center ${i === 3 ? 'border border-dashed border-slate-700' : 'bg-brand/20 text-brand'}`}>
              {i !== 3 && <Icon size={16} />}
            </div>
          ))}
        </div>

        {/* Marketplace Label */}
        <motion.div 
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[30%] top-[50%] -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-[#4f46e5] text-white text-xs font-bold rounded flex items-center space-x-2 shadow-lg z-10"
        >
          <span>App Marketplace</span>
          <ArrowRight size={14} />
        </motion.div>

        {/* Center Card: StackOrbit */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-[#1e1b4b] to-[#312e81] border border-white/10 rounded-xl flex items-center justify-center shadow-2xl z-20">
          <div className="text-white font-black text-sm text-center leading-tight">
            Stack<br/>Orbit
          </div>
        </div>

        {/* Right Side: Data Pipeline */}
        <motion.div 
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[70%] top-[50%] -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-[#4f46e5] text-white text-xs font-bold rounded shadow-lg z-10"
        >
          Data Pipeline
        </motion.div>

        {/* External Destination Icon */}
        <div className="absolute right-[10%] top-[50%] -translate-y-1/2 w-12 h-12 bg-white rounded flex items-center justify-center shadow-xl z-10">
          <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center text-white font-bold text-lg">A</div>
        </div>

        {/* Bottom: Orchestration */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[65%] left-[50%] -translate-x-1/2 px-8 py-2 bg-[#4f46e5] text-white text-xs font-bold rounded shadow-lg z-10"
        >
          Orchestration
        </motion.div>

        {/* Bottom Layer: PSPs */}
        <div className="absolute top-[85%] left-1/2 -translate-x-1/2 flex space-x-4 z-10">
          {['PSP', 'PSP', 'PSP'].map((item, i) => (
            <div key={i} className="px-6 py-2 bg-[#1e293b] text-white text-[10px] font-bold rounded border border-slate-700 shadow-sm">
              {item}
            </div>
          ))}
          <div className="w-16 px-6 py-2 border border-dashed border-slate-700 rounded" />
        </div>
      </div>
    </div>

    <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-dash-flow {
          animation: dash 1s linear infinite;
        }
        .animate-dash-flow-reverse {
          animation: dash 1s linear infinite reverse;
        }
      `}</style>
    </section>
  );
};

const ModularProducts = () => {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      id: "01",
      name: "StackBill",
      sub: "Cloud Management Platform",
      title: "Launch cloud services at enterprise speed",
      desc: "Empower your customers with self-service cloud provisioning, automated billing, and white-label portals — built for service providers who need to monetize infrastructure fast.",
      bg: "bg-slate-900",
      textColor: "text-white",
      descColor: "text-slate-400",
      btnClass: "bg-brand text-white hover:bg-brand/90",
      visual: (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {['DATA', 'AUTOMATIONS', 'INTERFACES', 'FORMS'].map((label) => (
            <div key={label} className="bg-white/5 rounded-lg border border-white/10 p-4 h-40 flex flex-col justify-between backdrop-blur-sm">
              <span className="text-[10px] font-bold tracking-widest opacity-60 text-white">{label}</span>
              <div className="space-y-2">
                <div className="h-1 w-full bg-white/10 rounded-full" />
                <div className="h-1 w-2/3 bg-white/10 rounded-full" />
                <div className="h-1 w-1/2 bg-white/10 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "02",
      name: "StackWatch",
      sub: "Observability Platform",
      title: "Monitor everything. Miss nothing.",
      desc: "Full-stack infrastructure monitoring built for service providers. Deploy agents in minutes, track server health in real time, and deliver SLA-grade visibility to your customers with white-label dashboards.",
      bg: "bg-slate-900",
      textColor: "text-white",
      descColor: "text-slate-400",
      btnClass: "bg-brand text-white hover:bg-brand/90",
      visual: (
        <div className="mt-8 border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#0f172a]">
          <div className="bg-[#1e293b] border-b border-white/5 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
              <div className="w-3 h-3 rounded-full bg-green-400/50" />
            </div>
            <div className="text-xs font-bold text-slate-500">StackWatch Dashboard</div>
          </div>
          <div className="p-6">
            <div className="flex gap-6">
              <div className="w-1/3 space-y-3">
                <div className="h-6 bg-brand/20 rounded-md" />
                <div className="h-6 bg-white/5 rounded-md" />
                <div className="h-6 bg-white/5 rounded-md" />
              </div>
              <div className="flex-1 bg-[#1e293b] rounded-lg border border-white/5 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-3 w-24 bg-white/5 rounded" />
                  <div className="h-6 w-16 bg-brand rounded" />
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/40">{i}</div>
                      <div className="h-1.5 flex-1 bg-white/5 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "03",
      name: "StackObject",
      sub: "Object Storage",
      title: "Don't just store data. Monetize it.",
      desc: "S3-compatible object storage built for service providers. Offer scalable, sovereign storage to your customers with built-in multi-tenancy, usage-based billing, and enterprise-grade durability.",
      bg: "bg-slate-900",
      textColor: "text-white",
      descColor: "text-slate-400",
      btnClass: "bg-brand text-white hover:bg-brand/90",
      visual: (
        <div className="mt-8 flex flex-col md:flex-row gap-6 items-center bg-[#0f172a] p-6 rounded-xl border border-white/10">
          <div className="w-full md:w-1/2">
            <div className="bg-[#1e293b] p-6 rounded-lg border border-white/5 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-brand/20 rounded-lg text-brand">
                  <Layers size={24} />
                </div>
                <div className="font-bold text-white">Object Storage</div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-white/5 rounded" />
                <div className="h-2 w-full bg-white/5 rounded" />
                <div className="h-2 w-2/3 bg-white/5 rounded" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="bg-[#1e293b] p-4 rounded-lg border border-white/5 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Users size={16} className="text-brand" />
                <span className="text-xs font-bold text-white/80">Data Sharing</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded" />
            </div>
            <div className="bg-[#1e293b] p-4 rounded-lg border border-white/5 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Globe size={16} className="text-brand" />
                <span className="text-xs font-bold text-white/80">Content Distribution</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "04",
      name: "StackVault",
      sub: "Backup & Disaster Recovery",
      title: "Enterprise-grade backup for the infrastructure your business depends on",
      desc: "Protect your critical workloads with automated, geo-replicated backup solutions designed for high-availability cloud environments.",
      bg: "bg-slate-900",
      textColor: "text-white",
      descColor: "text-slate-400",
      btnClass: "bg-brand text-white hover:bg-brand/90",
      visual: (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand/20 blur-2xl rounded-full" />
              <Shield size={100} className="text-brand relative z-10" />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-white mb-3">Resilient Protection</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-brand" />
                  <span>Automated backup policies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-brand" />
                  <span>Geo-replicated snapshots</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Flexible Administration</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-brand" />
                  <span>Role-based access controls</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-brand" />
                  <span>Self-service restore portal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "05",
      name: "TARS",
      sub: "AI Operations Assistant",
      title: "Say hello to TARS",
      desc: "Your AI-powered cloud operations assistant. Automate tasks, predict issues, and optimize costs with intelligent automation.",
      bg: "bg-slate-900",
      textColor: "text-white",
      descColor: "text-slate-400",
      btnClass: "bg-brand text-white hover:bg-brand/90",
      visual: (
        <div className="mt-8 flex flex-col items-center justify-center p-8 bg-[#0f172a] rounded-xl border border-white/10">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-brand/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-1.5">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    className="w-2 h-2 bg-brand rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="text-brand font-bold text-base mb-1">TARS AI Engine Active</div>
            <div className="text-slate-500 text-[10px] uppercase tracking-widest">Optimizing Infrastructure...</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
            Modular Products.<br />
            <span className="text-brand">Unified Platform.</span>
          </h2>
          <p className="mt-6 text-slate-500 text-lg">
            Choose the components you need. Scale as you grow.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 space-y-2">
            {products.map((product, idx) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-5 rounded-xl transition-all flex items-center space-x-4 group ${
                  activeTab === idx 
                    ? 'bg-brand text-white shadow-xl shadow-brand/20' 
                    : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                }`}
              >
                <span className={`text-xs font-bold ${activeTab === idx ? 'text-white/60' : 'text-slate-300'}`}>
                  {product.id}
                </span>
                <div>
                  <div className={`font-bold text-base ${activeTab === idx ? 'text-white' : 'text-slate-900'}`}>
                    {product.name}
                  </div>
                  <div className={`text-[10px] ${activeTab === idx ? 'text-white/70' : 'text-slate-400'}`}>
                    {product.sub}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`${products[activeTab].bg} rounded-[24px] p-8 md:p-12 shadow-2xl border border-slate-100 min-h-[500px] flex flex-col`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="max-w-xl">
                    <h3 className={`text-2xl md:text-3xl font-bold ${products[activeTab].textColor} mb-4 leading-tight`}>
                      {products[activeTab].title}
                    </h3>
                    <p className={`text-base ${products[activeTab].descColor} mb-6 leading-relaxed`}>
                      {products[activeTab].desc}
                    </p>
                  </div>
                  <button className={`px-6 py-2.5 text-sm font-bold rounded transition-all ${products[activeTab].btnClass}`}>
                    Learn more
                  </button>
                </div>
                
                <div className="mt-auto">
                  {products[activeTab].visual}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const ManagedServices = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Enterprise Grade.<br />
            Managed Services Covered.
          </h2>
          <p className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto">
            Comprehensive support and operations for your cloud infrastructure.
          </p>
        </div>

        <div className="space-y-6">
          {/* Main Hero Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded bg-gradient-to-br from-[#1a0b2e] via-[#0f071a] to-black p-8 md:p-12 text-white"
          >
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold tracking-widest uppercase mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand mr-2" />
                  StackOps
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Managed Cloud<br />
                  <span className="text-brand-light opacity-80">Operations</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  From architecture to ongoing operations, our certified<br className="hidden md:block" />
                  Apache CloudStack experts accelerate your cloud journey.
                </p>
              </div>
              <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded flex items-center space-x-2 hover:bg-slate-100 transition-all">
                <span>View All Services</span>
                <ArrowRight size={18} />
              </button>
            </div>
            {/* Abstract background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Tall Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:row-span-2 bg-[#f8f7ff] rounded p-8 flex flex-col border border-slate-100"
            >
              <div className="w-12 h-12 bg-brand rounded flex items-center justify-center text-white mb-8">
                <Cloud size={24} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">CloudStack Consulting</h4>
              <p className="text-slate-500 leading-relaxed mb-auto">
                Expert guidance on architecture design, deployment strategies, high availability, and performance optimization for production CloudStack environments.
              </p>
              <div className="mt-12 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {['CS', 'HA', 'BP'].map((tag) => (
                    <div key={tag} className="w-8 h-8 rounded-full bg-white border-2 border-[#f8f7ff] flex items-center justify-center text-[10px] font-bold text-brand">
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-400 flex items-center">
                  Apache Certified Experts
                  <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </motion.div>

            {/* Right Column Top - Two Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded p-8 border border-slate-100"
            >
              <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white mb-6">
                <Layers size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">IaaS Design & Build</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                End-to-end infrastructure deployment for public, private, and hybrid cloud, tailored to your revenue model.
              </p>
              <div className="flex gap-2">
                {['Public', 'Private', 'Hybrid'].map(t => (
                  <span key={t} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded p-8 border border-slate-100"
            >
              <div className="w-10 h-10 bg-rose-600 rounded flex items-center justify-center text-white mb-6">
                <Zap size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">VMware Migration</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Zero-downtime migration from VMware to CloudStack. Cut licensing costs while preserving workload continuity.
              </p>
              <div className="flex gap-2">
                {['Zero Downtime', 'Cost Savings'].map(t => (
                  <span key={t} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Right Column Bottom - Wide Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-brand rounded p-8 text-white flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center">
                    <Shield size={20} />
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
                    24/7 Available
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">Managed Support & Operations</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Round-the-clock expert monitoring, incident response, and proactive infrastructure management so you can focus on growing your cloud business.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
                {[
                  { label: 'Uptime SLA', val: '99.99%' },
                  { label: 'Response Time', val: '<15m' },
                  { label: 'Coverage', val: '24/7' }
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded p-4 text-center min-w-[100px]">
                    <div className="text-lg font-bold mb-1">{stat.val}</div>
                    <div className="text-[10px] font-medium text-white/50 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Rakuten Taps StackOrbit to Build Cloud-Native Euro Bank",
      desc: "Why StackOrbit? Cloud on-demand and compliant, and truly minimal management.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
      primaryBtn: "See How They Did It",
      secondaryBtn: "All Case Studies"
    },
    {
      title: "Global Telco Scales 5G Core with StackOrbit Automation",
      desc: "Reducing operational overhead by 60% while maintaining carrier-grade reliability.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
      primaryBtn: "Read Success Story",
      secondaryBtn: "All Case Studies"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Content Side */}
          <div className="flex-1 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-brand text-lg md:text-xl mb-12 leading-relaxed">
                  {slides[currentSlide].desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-brand text-white font-bold rounded hover:bg-brand/90 transition-all shadow-lg shadow-brand/20">
                    {slides[currentSlide].primaryBtn}
                  </button>
                  <button className="px-8 py-4 bg-slate-50 text-slate-900 font-bold rounded border border-slate-200 hover:bg-slate-100 transition-all">
                    {slides[currentSlide].secondaryBtn}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Side */}
          <div className="flex-1 order-1 lg:order-2 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <img 
                  src={slides[currentSlide].image} 
                  alt="Case Study" 
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Buttons - Positioned relative to image on mobile, absolute on desktop */}
            <div className="absolute top-1/2 -left-6 lg:-left-12 -translate-y-1/2 z-20">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand hover:scale-110 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 -right-6 lg:-right-12 -translate-y-1/2 z-20">
              <button 
                onClick={nextSlide}
                className="w-12 h-12 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand hover:scale-110 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-16 space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === idx ? 'bg-brand w-4' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Built for <span className="text-brand">Your Industry</span>
          </h2>
          <p className="mt-4 text-slate-500">
            StackOrbit adapts to your specific requirements, providing the tools you need to succeed in your sector.
          </p>
        </div>
        <button className="flex items-center space-x-2 text-brand font-bold hover:translate-x-2 transition-transform">
          <span>View all solutions</span>
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Service Providers",
            desc: "Launch and scale cloud services under your brand with complete control.",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
          },
          {
            title: "Data Centers",
            desc: "Transform infrastructure into a profitable cloud business.",
            img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
          },
          {
            title: "Enterprises",
            desc: "Build sovereign private clouds with full data control.",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
          },
          {
            title: "Government",
            desc: "Secure, compliant infrastructure for public sector.",
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded overflow-hidden shadow-sm border border-slate-100 group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
              <button className="text-sm font-bold text-slate-900 flex items-center space-x-2 group-hover:text-brand transition-colors">
                <span>Learn more</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto bg-brand rounded-xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand/30">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
          Ready to launch your <br /> own cloud?
        </h2>
        <p className="text-brand-light/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Join the hundreds of providers who have reclaimed their cloud sovereignty with StackOrbit. Start your 30-day free trial today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 text-lg font-bold text-brand bg-white rounded hover:bg-slate-50 transition-all transform hover:-translate-y-1">
            Get Started Free
          </button>
          <button className="w-full sm:w-auto px-10 py-4 text-lg font-bold text-white border border-white/30 rounded hover:bg-white/10 transition-all transform hover:-translate-y-1">
            Talk to an Expert
          </button>
        </div>
        <div className="mt-12 flex items-center justify-center space-x-8 text-white/60 text-sm font-medium">
          <div className="flex items-center space-x-2">
            <CheckCircle2 size={16} />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 size={16} />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex flex-col mb-8">
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Stack<span className="text-brand">orbit</span>
            </span>
            <span className="text-[8px] uppercase tracking-widest text-slate-400 font-bold -mt-1">
              Engineered Cloud. Delivered.
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs mb-8 leading-relaxed">
            The world's most advanced cloud orchestration platform for service providers and enterprises seeking digital sovereignty.
          </p>
          <div className="flex items-center space-x-4">
            {[Twitter, Linkedin, Github, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-brand transition-colors">Compute</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Storage</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Networking</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Kubernetes</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Marketplace</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Solutions</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-brand transition-colors">Telco Cloud</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">MSP Platform</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Government</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Private Cloud</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-brand transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Partners</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Newsroom</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-brand transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Support</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm">
          © 2024 StackOrbit. All rights reserved.
        </p>
        <div className="flex items-center space-x-8 text-sm text-slate-400">
          <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

const ChatWidget = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-4">
    <div className="bg-white py-2 px-4 rounded shadow-xl border border-slate-100 flex items-center space-x-2 animate-bounce">
      <div className="w-2 h-2 bg-emerald-500 rounded-sm animate-pulse" />
      <span className="text-xs font-bold text-slate-600">Ask TARS</span>
    </div>
    <button className="w-16 h-16 bg-white rounded shadow-2xl border border-slate-100 flex items-center justify-center text-brand hover:scale-110 transition-transform group relative">
      <MessageCircle size={32} />
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand text-white text-[10px] font-bold flex items-center justify-center rounded-sm border-2 border-white">
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
        <TrustedBy />
        <EcosystemDiagram />
        <ModularProducts />
        <ManagedServices />
        <Solutions />
        <CaseStudyCarousel />
        <CTA />
      </main>
      <ChatWidget />
      <Footer />
    </div>
  );
}
