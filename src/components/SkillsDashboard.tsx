import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  PenTool, 
  Edit2, 
  Hexagon, 
  Globe, 
  Printer, 
  Play, 
  Image, 
  Sparkles, 
  Target, 
  Triangle, 
  ArrowUpRight 
} from "lucide-react";
import toolsImage from "../assets/Tools.png";

interface ProjectLink {
  id: number;
  title: string;
}

interface SkillNode {
  name: string;
  desc: string;
  icon: React.ComponentType<any>;
  color: 'cyan' | 'purple' | 'blue' | 'yellow';
  projects: ProjectLink[];
}

export const SkillsDashboard = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes: SkillNode[] = [
    { 
      name: "Product Design", 
      desc: "Designing meaningful products that solve real-world problems.",
      icon: Box,
      color: "cyan",
      projects: [
        { id: 11, title: "Wireless EV Charger Wall Unit" },
        { id: 2, title: "Supercharger Hub UX" }
      ]
    },
    { 
      name: "Industrial Design", 
      desc: "Shaping functional, manufacturable and beautiful products.",
      icon: Hexagon,
      color: "cyan",
      projects: [
        { id: 11, title: "Wireless EV Charger Wall Unit" },
        { id: 8, title: "2-Wheeler Charging Setup" }
      ]
    },
    { 
      name: "3D Design", 
      desc: "Modeling, rendering and visualizing ideas with precision and realism.",
      icon: Globe,
      color: "blue",
      projects: [
        { id: 5, title: "Cluix Product Animation" },
        { id: 6, title: "Drone Charging at PGCIL" }
      ]
    },
    { 
      name: "3D Printing & Testing", 
      desc: "From prototypes to real testing for validating design decisions.",
      icon: Printer,
      color: "purple",
      projects: [
        { id: 11, title: "Wireless EV Charger Wall Unit" },
        { id: 6, title: "Drone Charging at PGCIL" }
      ]
    },
    { 
      name: "Motion Graphics & Animation", 
      desc: "Bringing stories and ideas to life through motion.",
      icon: Play,
      color: "yellow",
      projects: [
        { id: 3, title: "Telemetry Dashboard" },
        { id: 7, title: "Dash Dynamic Wireless Charging" },
        { id: 8, title: "2-Wheeler Charging Setup" },
        { id: 9, title: "4-Wheeler Wireless Setup Animation" }
      ]
    },
    { 
      name: "Illustration", 
      desc: "Visual communication that simplifies ideas and inspires.",
      icon: Image,
      color: "blue",
      projects: [
        { id: 4, title: "Dash Dynamic Branding" }
      ]
    },
    { 
      name: "Branding", 
      desc: "Building strong identities that create impact and lasting impressions.",
      icon: PenTool,
      color: "yellow",
      projects: [
        { id: 4, title: "Dash Dynamic Branding" },
        { id: 10, title: "Cluix Brand Identity & Design" }
      ]
    },
    { 
      name: "UI/UX Design", 
      desc: "Creating intuitive, accessible and delightful digital experiences.",
      icon: Edit2,
      color: "purple",
      projects: [
        { id: 1, title: "DD Dashboard" },
        { id: 2, title: "Supercharger Hub UX" }
      ]
    }
  ];

  const colorMaps = {
    cyan: {
      text: 'text-cyan-400',
      border: 'border-cyan-500/20',
      hoverBorder: 'hover:border-cyan-400/50',
      glow: 'shadow-[0_0_30px_rgba(34,211,238,0.2)]',
      glowBg: 'bg-cyan-500/10',
      lineColor: '#22d3ee',
      hoverCaseStudyBorder: 'hover:border-cyan-500/30'
    },
    purple: {
      text: 'text-purple-400',
      border: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-400/50',
      glow: 'shadow-[0_0_30px_rgba(168,85,247,0.2)]',
      glowBg: 'bg-purple-500/10',
      lineColor: '#a855f7',
      hoverCaseStudyBorder: 'hover:border-purple-500/30'
    },
    blue: {
      text: 'text-blue-400',
      border: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-400/50',
      glow: 'shadow-[0_0_30px_rgba(59,130,246,0.2)]',
      glowBg: 'bg-blue-500/10',
      lineColor: '#3b82f6',
      hoverCaseStudyBorder: 'hover:border-blue-500/30'
    },
    yellow: {
      text: 'text-amber-400',
      border: 'border-amber-500/20',
      hoverBorder: 'hover:border-amber-400/50',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.2)]',
      glowBg: 'bg-amber-500/10',
      lineColor: '#f59e0b',
      hoverCaseStudyBorder: 'hover:border-amber-500/30'
    }
  };

  // Calculate coordinates on a circle of radius 38%
  const getCoordinates = (index: number, total: number) => {
    const angle = (index * (360 / total) - 90) * (Math.PI / 180);
    const radius = 38;
    return {
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius
    };
  };

  return (
    <section id="skills" className="py-24 bg-[#030712] border-y border-white/10 relative overflow-hidden">
      {styleBlock}

      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-500/[0.02] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Tools Section Image */}
        <div className="flex justify-center items-center mb-28 relative z-10 w-full py-6">
          <img 
            src={toolsImage} 
            alt="Design Tools" 
            className="w-full max-w-4xl h-auto object-contain select-none"
          />
        </div>

        {/* Expertise Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Title & legend */}
          <div className="lg:col-span-4 space-y-8 text-left">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-display font-black text-cyan-400 tracking-wider">02</span>
                <span className="text-neutral-600 text-sm">|</span>
                <span className="text-xs font-display font-bold text-neutral-400 tracking-widest uppercase">EXPERTISE UNIVERSE</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-display font-black text-white leading-tight mb-6 tracking-tight">
                A universe of<br />
                <span className="text-white">skills </span>
                <span className="text-cyan-400">&</span>
                <span className="text-white"> passion</span>
              </h2>
              
              <p className="text-neutral-400 text-sm font-sans leading-relaxed max-w-md">
                I blend creativity, technology, and design thinking to craft experiences that live at the intersection of digital and physical worlds.
              </p>
            </div>

            {/* Pillar Legend Card */}
            <div className="bg-[#07070a]/60 border border-white/[0.04] backdrop-blur-md rounded-2xl p-5 space-y-4 max-w-xs shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-display font-semibold text-neutral-300">Product Thinking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-xs font-display font-semibold text-neutral-300">Visual Craft</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                  <Triangle className="w-4 h-4" />
                </div>
                <span className="text-xs font-display font-semibold text-neutral-300">Building & Prototyping</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                  <Hexagon className="w-4 h-4" />
                </div>
                <span className="text-xs font-display font-semibold text-neutral-300">Motion & Storytelling</span>
              </div>
            </div>
          </div>

          {/* Right Column: Orbital graph for desktop OR card list for mobile */}
          <div className="lg:col-span-8 w-full flex items-center justify-center relative select-none">
            
            {/* Desktop Orbit Layout (hidden on mobile) */}
            <div className="hidden lg:block w-[780px] h-[780px] relative">
              
              {/* SVG Connecting Lines and Rings */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
                {/* Concentric Orbit Paths */}
                <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="27" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="1 3" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" strokeDasharray="2 4" />

                {/* Starburst connector lines to hovered node */}
                {nodes.map((node, index) => {
                  const coords = getCoordinates(index, nodes.length);
                  const isActive = activeNode === index;
                  const nodeColor = colorMaps[node.color];
                  return (
                    <line
                      key={index}
                      x1="50"
                      y1="50"
                      x2={coords.x}
                      y2={coords.y}
                      stroke={isActive ? nodeColor.lineColor : 'rgba(255, 255, 255, 0.03)'}
                      strokeWidth={isActive ? 1.5 : 0.5}
                      strokeDasharray={isActive ? '4 4' : 'none'}
                      className={isActive ? 'animate-stroke-flow' : ''}
                      style={{
                        transition: 'stroke 0.4s ease, stroke-width 0.4s ease'
                      }}
                    />
                  );
                })}
              </svg>

              {/* Orbiting particles */}
              <div 
                className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] -mt-1.25 -ml-1.25 animate-orbit-1 z-10"
                style={{ '--orbit-radius': '125px' } as React.CSSProperties}
              />
              <div 
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7] -mt-1 -ml-1 animate-orbit-2 z-10"
                style={{ '--orbit-radius': '210px' } as React.CSSProperties}
              />
              <div 
                className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b] -mt-1.25 -ml-1.25 animate-orbit-3 z-10"
                style={{ '--orbit-radius': '296px' } as React.CSSProperties}
              />

              {/* Central brand monogram */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-slate-950/90 border border-white/[0.08] flex flex-col items-center justify-center text-center z-15 shadow-[0_0_50px_rgba(99,102,241,0.06)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/[0.03] to-purple-500/[0.03] pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/10 animate-[spin_60s_linear_infinite] pointer-events-none" />
                <div className="absolute inset-2 rounded-full border border-indigo-500/5 animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
                
                <span className="text-[11px] font-display font-black text-white tracking-[0.18em] uppercase">Ajeet Prabhakar</span>
                <span className="text-[7.5px] font-sans text-neutral-400 tracking-[0.25em] uppercase mt-1">PRODUCT DESIGNER</span>
              </div>

              {/* 8 surrounding skill cards */}
              {nodes.map((node, index) => {
                const coords = getCoordinates(index, nodes.length);
                const isActive = activeNode === index;
                const nodeColor = colorMaps[node.color];
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveNode(index)}
                    onMouseLeave={() => setActiveNode(null)}
                    className={`absolute w-[200px] bg-[#060608]/90 border rounded-xl p-4.5 text-center transition-all duration-300 z-20 cursor-pointer ${
                      isActive 
                        ? `border-white/20 scale-[1.04] z-30 ${nodeColor.glow}` 
                        : 'border-white/[0.04] hover:border-white/10 shadow-md'
                    }`}
                    style={{
                      left: `${coords.x}%`,
                      top: `${coords.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Top center icon badge */}
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center border absolute -top-5 left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ${
                        isActive 
                          ? `${nodeColor.glowBg} ${nodeColor.border} scale-110` 
                          : 'bg-[#030712] border-white/10'
                      }`}
                    >
                      <node.icon className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? nodeColor.text : 'text-neutral-400'
                      }`} />
                    </div>

                    <div className="mt-3.5 space-y-1">
                      <h4 className="text-xs font-display font-bold uppercase tracking-wider text-white">
                        {node.name}
                      </h4>
                      <p className="text-[10px] text-neutral-400 font-sans leading-relaxed line-clamp-3 px-1">
                        {node.desc}
                      </p>
                    </div>

                    {/* Case study links sliding up on hover */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      isActive ? 'max-h-[100px] opacity-100 mt-3.5 pt-3 border-t border-white/5 space-y-1.5' : 'max-h-0 opacity-0'
                    }`}>
                      {node.projects.map((project) => (
                        <Link
                          key={project.id}
                          to={`/case-study/${project.id}`}
                          className={`flex items-center justify-between px-2.5 py-1.5 rounded text-[9px] font-sans bg-white/[0.02] border border-white/5 transition-all duration-200 hover:bg-white/[0.05] ${nodeColor.hoverCaseStudyBorder} hover:text-white`}
                        >
                          <span className="text-neutral-300 transition-colors line-clamp-1">{project.title}</span>
                          <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Mobile/Tablet Fallback Layout (visible on small screens) */}
            <div className="block lg:hidden w-full space-y-10">
              
              {/* Central logo card for mobile */}
              <div className="w-full flex justify-center py-4">
                <div className="w-[160px] h-[160px] rounded-full bg-slate-950 border border-white/10 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(34,211,238,0.08)] relative">
                  <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/10 animate-[spin_50s_linear_infinite]" />
                  <span className="text-[10px] font-display font-bold text-white tracking-[0.15em] uppercase">Ajeet Prabhakar</span>
                  <span className="text-[7.5px] font-sans text-neutral-400 tracking-[0.25em] uppercase mt-1">PRODUCT DESIGNER</span>
                </div>
              </div>

              {/* Grid of cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {nodes.map((node, index) => {
                  const nodeColor = colorMaps[node.color];
                  return (
                    <div 
                      key={index} 
                      className="bg-[#07070a]/90 border border-white/[0.04] rounded-xl p-5 relative pt-8 flex flex-col justify-between shadow-lg text-left hover:border-white/10 transition-all duration-300"
                    >
                      {/* Floating Icon Badge */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border absolute -top-5 left-5 z-10 bg-[#030712] ${nodeColor.border} ${nodeColor.glowBg}`}>
                        <node.icon className={`w-5 h-5 ${nodeColor.text}`} />
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white">
                          {node.name}
                        </h4>
                        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                          {node.desc}
                        </p>
                      </div>

                      {/* Direct case studies list at bottom for mobile */}
                      <div className="mt-5 pt-4 border-t border-white/5 space-y-2.5">
                        <span className="text-[9px] font-display font-bold tracking-[0.15em] text-neutral-500 uppercase">
                          Featured Case Studies
                        </span>
                        <div className="space-y-1.5">
                          {node.projects.map((project) => (
                            <Link
                              key={project.id}
                              to={`/case-study/${project.id}`}
                              className="flex items-center justify-between p-2 rounded bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-200"
                            >
                              <span className="text-xs text-neutral-300 font-sans line-clamp-1">
                                {project.title}
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

        {/* Bottom connections text bar */}
        <div className="flex justify-center items-center mt-20 select-none w-full">
          <div className="inline-flex flex-wrap justify-center items-center gap-y-2 gap-x-3 px-5 py-2.5 rounded-full border border-white/[0.04] bg-[#07070a]/50 backdrop-blur-md shadow-md text-xs text-neutral-300 font-sans tracking-wide">
            <span className="text-cyan-400">✨</span>
            <span>Every skill <strong className="text-cyan-400 font-bold">connects.</strong></span>
            <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-neutral-800" />
            <span>Every detail <strong className="text-blue-400 font-bold">matters.</strong></span>
            <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-neutral-800" />
            <span>Every experience <strong className="text-cyan-400 font-bold">counts.</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};

// Inline CSS for custom animations
const styleBlock = (
  <style>{`
    @keyframes orbit-clockwise {
      0% { transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); }
    }
    @keyframes orbit-counter {
      0% { transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); }
      100% { transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg); }
    }
    @keyframes strokeFlow {
      to {
        stroke-dashoffset: -20;
      }
    }
    .animate-stroke-flow {
      animation: strokeFlow 0.8s linear infinite;
    }
    .animate-orbit-1 {
      animation: orbit-clockwise 30s linear infinite;
    }
    .animate-orbit-2 {
      animation: orbit-counter 45s linear infinite;
    }
    .animate-orbit-3 {
      animation: orbit-clockwise 60s linear infinite;
    }
  `}</style>
);
