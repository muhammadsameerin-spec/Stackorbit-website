/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronDown, Globe, ArrowRight, MessageCircle, Shield, Zap, Cpu, BarChart3, Cloud, Layers, Users, CheckCircle2, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
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

const Features = () => {
  const features = [
    {
      icon: <Shield className="text-brand" />,
      title: "Sovereign by Design",
      description: "Complete control over your data, infrastructure, and compliance. No vendor lock-in, no hidden backdoors."
    },
    {
      icon: <Zap className="text-brand" />,
      title: "Hyperscale Performance",
      description: "Optimized for high-throughput workloads with sub-millisecond latency across your entire cloud fabric."
    },
    {
      icon: <Cpu className="text-brand" />,
      title: "Automated Operations",
      description: "AI-driven orchestration that handles provisioning, scaling, and self-healing without manual intervention."
    },
    {
      icon: <Layers className="text-brand" />,
      title: "Multi-Tenant Fabric",
      description: "Secure, isolated environments for thousands of customers on a single, unified infrastructure layer."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Built for the <span className="text-brand">Next Era</span> of Cloud
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            StackOrbit provides the foundational technology to build a modern, profitable, and secure public cloud service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand via-transparent to-transparent" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Powering the world's <br />
            <span className="text-brand">most ambitious</span> clouds.
          </h2>
          <p className="mt-6 text-slate-400 text-lg">
            From regional service providers to national digital sovereignty initiatives, StackOrbit is the engine behind modern cloud infrastructure.
          </p>
          <div className="mt-10 flex items-center space-x-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="User" 
                  className="w-12 h-12 rounded-full border-4 border-slate-900"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Trusted by <span className="text-white font-bold">500+</span> infrastructure partners worldwide.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Uptime SLA", value: "99.999%", sub: "Enterprise Grade" },
            { label: "Deployments", value: "12k+", sub: "Global Nodes" },
            { label: "Data Managed", value: "450PB+", sub: "Secure Storage" },
            { label: "Cost Savings", value: "60%", sub: "Avg. vs Hyperscalers" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-brand mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Solutions = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Tailored for your <span className="text-brand">Business Model</span>
          </h2>
          <p className="mt-4 text-slate-500">
            Whether you're a Telco, MSP, or Enterprise, StackOrbit provides the specific tools you need to succeed.
          </p>
        </div>
        <button className="flex items-center space-x-2 text-brand font-bold hover:translate-x-2 transition-transform">
          <span>View all solutions</span>
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Telecommunications",
            desc: "Monetize your edge infrastructure with high-performance cloud services integrated into your core network.",
            img: "https://picsum.photos/seed/telco/800/600"
          },
          {
            title: "Managed Service Providers",
            desc: "Move up the value chain by offering your own branded cloud services instead of reselling hyperscalers.",
            img: "https://picsum.photos/seed/msp/800/600"
          },
          {
            title: "Digital Sovereignty",
            desc: "Build national cloud infrastructure that keeps data within borders and ensures technological independence.",
            img: "https://picsum.photos/seed/gov/800/600"
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 group"
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
    <div className="max-w-5xl mx-auto bg-brand rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand/30">
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
          <button className="w-full sm:w-auto px-10 py-4 text-lg font-bold text-brand bg-white rounded-full hover:bg-slate-50 transition-all transform hover:-translate-y-1">
            Get Started Free
          </button>
          <button className="w-full sm:w-auto px-10 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1">
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
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 transition-all">
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
        <Features />
        <Stats />
        <Solutions />
        <CTA />
      </main>
      <ChatWidget />
      <Footer />
    </div>
  );
}
