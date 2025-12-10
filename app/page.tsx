'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import TextParticles from './TextParticles'; // Importing the Exploding N

// --- 3D TILT CARD COMPONENT ---
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-200 font-sans selection:bg-red-500 selection:text-white relative overflow-hidden perspective-1000">
      
      {/* --- THE EXPLODING "N" ANIMATION --- */}
      <TextParticles />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10">
        
        {/* Navigation */}
        <header className="fixed top-0 w-full bg-neutral-950/70 backdrop-blur-md border-b border-red-900/20 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-red-600 tracking-tighter">
              NITHIN <span className="text-white">NS</span>
            </h1>
            <nav className="space-x-8 text-sm font-medium hidden md:block">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition-colors duration-300">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Hero Section - Added extra padding to let the "N" breathe */}
        <section id="about" className="min-h-screen flex items-center justify-center pt-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            
            {/* The content fades in ON TOP of the exploding N */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="bg-neutral-950/40 backdrop-blur-sm p-10 rounded-3xl border border-red-900/30 shadow-2xl"
            >
                <div className="mb-8 relative inline-block">
                    <div className="w-32 h-32 rounded-full border-4 border-red-600 shadow-2xl overflow-hidden mx-auto bg-neutral-900">
                    <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>

                <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Nithin NS</span>
                </h2>

                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Electronics & Communication Engineer <span className="text-red-500 font-semibold">at BMS Institute of Technology and Management</span>.
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
                <a href="#contact" className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 hover:scale-105 transition duration-300">
                    Contact Me
                </a>
                <a href="/resume.pdf" download className="px-8 py-3 border border-red-600/50 text-red-400 rounded-full font-bold hover:bg-red-600 hover:text-white transition duration-300 flex items-center gap-2">
                    <span>Download Resume</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </a>
                </div>
            </motion.div>

          </div>
        </section>

        {/* Other sections behave normally as you scroll past the explosion */}
        <section id="skills" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-16 text-center text-white">Technical <span className="text-red-600">Arsenal</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Programming", skills: "Python, SQL, C++, MATLAB" },
                { title: "Data Visualization", skills: "Power BI, Tableau, Excel, DAX" },
                { title: "Soft Skills", skills: "Analytical Mindset, Problem Solving" }
              ].map((skill, index) => (
                <TiltCard key={index} className="bg-neutral-900/60 p-8 rounded-2xl border border-neutral-800 hover:border-red-600/50 backdrop-blur-md">
                  <h4 className="text-xl font-bold text-red-500 mb-4">{skill.title}</h4>
                  <p className="text-gray-400">{skill.skills}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-16 text-center text-white">Featured <span className="text-red-600">Projects</span></h3>
            <div className="grid gap-12">
              {[
                { title: "D-Mart Sales Insights", tools: "SQL, Power BI, Excel", desc: ["End-to-end retail analytics.", "Interactive KPI dashboards."], year: "2025" },
                { title: "HR Analytics Dashboard", tools: "Tableau", desc: ["Workforce demographics.", "Attrition analysis."], year: "2025" },
                { title: "Cyber Sentinel", tools: "Flutter, ML", desc: ["Threat detection app.", "RSA encryption."], year: "Ongoing" }
              ].map((project, index) => (
                <TiltCard key={index} className="group bg-neutral-900/60 rounded-2xl p-8 border border-neutral-800 hover:border-red-900/50 backdrop-blur-md">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-white group-hover:text-red-500 transition">{project.title}</h4>
                    <span className="text-xs font-bold border border-red-900 text-red-500 bg-red-900/10 px-2 py-1 rounded">{project.year}</span>
                  </div>
                  <p className="text-red-400 font-mono text-sm mb-4">{project.tools}</p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {project.desc.map((d, i) => <li key={i}>• {d}</li>)}
                  </ul>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-neutral-950 text-neutral-600 py-8 text-center text-sm border-t border-neutral-900">
          <p>&copy; {new Date().getFullYear()} Nithin NS.</p>
        </footer>
      </div>
    </div>
  );
}