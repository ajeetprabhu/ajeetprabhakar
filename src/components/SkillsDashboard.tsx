import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Network, Zap, Award, HelpCircle, ArrowUpRight } from "lucide-react";
import toolsImage from "../assets/Tools.png";

interface ProjectLink {
  id: number;
  title: string;
}

interface SkillNode {
  name: string;
  desc: string;
  projects: ProjectLink[];
}

export const SkillsDashboard = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes: SkillNode[] = [
    { 
      name: "Product Design", 
      desc: "Creating physical and digital products that solve complex user problems, focusing on form, function, and premium interactive aesthetics.",
      projects: [
        { id: 11, title: "Wireless EV Charger Wall Unit" },
        { id: 2, title: "Supercharger Hub UX" }
      ]
    },
    { 
      name: "UI/UX Design", 
      desc: "Designing high-fidelity user interfaces, user flows, responsive web layouts, and unified design systems with intuitive micro-interactions.",
      projects: [
        { id: 1, title: "DD Dashboard" },
        { id: 2, title: "Supercharger Hub UX" }
      ]
    },
    { 
      name: "Industrial Design", 
      desc: "Developing physical hardware products, custom EV grid concepts, charging docks, and manufacturing assembly enclosures.",
      projects: [
        { id: 11, title: "Wireless EV Charger Wall Unit" },
        { id: 8, title: "2-Wheeler Charging Setup" }
      ]
    },
    { 
      name: "3D Design", 
      desc: "Modeling, rendering, and texturing highly detailed 3D scenes, vehicles, mechanical parts, and environment concepts.",
      projects: [
        { id: 5, title: "Cluix Product Animation" },
        { id: 6, title: "Drone Charging at PGCIL" }
      ]
    },
    { 
      name: "Motion Graphics", 
      desc: "Crafting beautiful real-time dashboard animations, diagnostic visualizations, and glowing active state indicators.",
      projects: [
        { id: 3, title: "Telemetry Dashboard" }
      ]
    },
    { 
      name: "Animation", 
      desc: "Directing technical camera paths, assembly timelines, automatic vehicle-docking sequences, and operation visualizations.",
      projects: [
        { id: 7, title: "Dash Dynamic Wireless Charging" },
        { id: 8, title: "2-Wheeler Charging Setup" },
        { id: 9, title: "4-Wheeler Wireless Setup Animation" }
      ]
    },
    { 
      name: "Branding", 
      desc: "Building cohesive visual identities, responsive logo designs, corporate guidelines, station graphics, and packaging layouts.",
      projects: [
        { id: 4, title: "Dash Dynamic Branding" },
        { id: 10, title: "Cluix Brand Identity & Design" }
      ]
    },
    { 
      name: "Illustration", 
      desc: "Designing vector artwork, custom conceptual wireframes, product sketches, and hand-drawn visualization mockups.",
      projects: [
        { id: 4, title: "Dash Dynamic Branding" }
      ]
    },
    { 
      name: "Product Development", 
      desc: "Overseeing complete lifecycle development from initial sketch through mechanical design, 3D printing, testing, and final launch.",
      projects: [
        { id: 11, title: "Wireless EV Charger Wall Unit" },
        { id: 6, title: "Drone Charging at PGCIL" }
      ]
    }
  ];

  // Calculate coordinates on a circle of radius 37% (fits perfectly on both desktop and mobile)
  const getCoordinates = (index: number, total: number) => {
    const angle = (index * (360 / total) - 90) * (Math.PI / 180);
    const radius = 37;
    return {
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius
    };
  };

  const currentActiveNode = activeNode !== null ? nodes[activeNode] : null;

  return (
    <section id="skills" className="py-24 bg-[#030712] border-y border-white/10 relative overflow-hidden">
      {/* Inline styles for animated lines */}
      <style>{`
        @keyframes strokeFlow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-stroke-flow {
          animation: strokeFlow 0.8s linear infinite;
        }
      `}</style>

      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-500/[0.02] blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Tools Section Image */}
        <div className="flex justify-center items-center mb-24 relative z-10 w-full py-6">
          <img 
            src={toolsImage} 
            alt="Design Tools" 
            className="w-full max-w-4xl h-auto object-contain select-none"
          />
        </div>

        {/* Expertise Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-4 mb-16 select-none text-left">
            <span className="w-12 h-[2px] bg-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            02 // EXPERTISE UNIVERSE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Interactive Node Graph (lg:col-span-8) */}
            <div className="lg:col-span-8 w-full flex items-center justify-center relative select-none">
              {/* Aspect Ratio box for responsive sizing */}
              <div className="w-full aspect-square max-w-[520px] relative rounded-full border border-white/[0.03] bg-white/[0.005] shadow-[inset_0_0_40px_rgba(255,255,255,0.01)] p-4 flex items-center justify-center">
                
                {/* SVG Connecting Lines layer */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
                  {nodes.map((_, index) => {
                    const coords = getCoordinates(index, nodes.length);
                    const isActive = activeNode === index;
                    return (
                      <line
                        key={index}
                        x1="50"
                        y1="50"
                        x2={coords.x}
                        y2={coords.y}
                        stroke={isActive ? '#22D3EE' : 'rgba(255, 255, 255, 0.08)'}
                        strokeWidth={isActive ? 1.2 : 0.6}
                        strokeDasharray={isActive ? '4 4' : 'none'}
                        className={isActive ? 'animate-stroke-flow' : ''}
                        style={{
                          transition: 'stroke 0.3s ease, stroke-width 0.3s ease'
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Central Node (Ajeet Prabhakar) */}
                <div 
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#090b11] to-[#121622] border border-white/10 flex flex-col items-center justify-center text-center z-10 shadow-[0_0_30px_rgba(99,102,241,0.08)] relative"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 animate-pulse pointer-events-none" />
                  <span className="text-[10px] font-display font-black text-white tracking-[0.2em] uppercase">AJEET</span>
                  <span className="text-[8px] font-sans text-neutral-400 tracking-[0.25em] uppercase mt-0.5">PRABHAKAR</span>
                </div>

                {/* Orbiting Surrounding Nodes */}
                {nodes.map((node, index) => {
                  const coords = getCoordinates(index, nodes.length);
                  const isActive = activeNode === index;
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setActiveNode(index)}
                      onMouseLeave={() => setActiveNode(null)}
                      className={`absolute px-3.5 py-2 rounded-full border text-[9px] sm:text-[10px] font-display font-bold uppercase tracking-wider backdrop-blur-md cursor-pointer transition-all duration-300 select-none whitespace-nowrap z-20 ${
                        isActive 
                          ? 'border-[#22D3EE]/40 bg-[#22D3EE]/10 text-[#22D3EE] scale-105 shadow-[0_0_15px_rgba(34,211,238,0.15)]' 
                          : 'border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/15 hover:text-white'
                      }`}
                      style={{
                        left: `${coords.x}%`,
                        top: `${coords.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      {node.name}
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Right Column: Dynamic Recruiter Info Panel (lg:col-span-4) */}
            <div className="lg:col-span-4 w-full h-full text-left">
              <div className="bg-[#0a0a0c] border border-white/5 p-6 sm:p-8 rounded-sm h-full flex flex-col justify-between shadow-xl min-h-[380px] lg:min-h-[460px] relative overflow-hidden group hover:border-white/10 transition-all duration-300">
                {/* Tech corner accents */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-[#22D3EE]/30 transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-[#6366F1]/30 transition-colors" />

                {currentActiveNode ? (
                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-accent">
                        <Zap className="w-4 h-4" />
                        <span className="text-[10px] font-display font-bold tracking-[0.2em] uppercase">Core Capability</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-wide">
                        {currentActiveNode.name}
                      </h3>
                      <p className="text-sm text-neutral-400 font-sans leading-relaxed pt-1">
                        {currentActiveNode.desc}
                      </p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-white/5">
                      <span className="text-[9px] font-display font-bold tracking-[0.15em] text-neutral-500 uppercase flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#6366F1]" />
                        Featured Case Studies
                      </span>
                      
                      <div className="space-y-2">
                        {currentActiveNode.projects.map((project) => (
                          <Link
                            key={project.id}
                            to={`/case-study/${project.id}`}
                            className="group/link flex items-center justify-between p-2.5 rounded bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-[#22D3EE]/20 transition-all duration-300"
                          >
                            <span className="text-xs text-neutral-300 group-hover/link:text-white font-sans transition-colors line-clamp-1">
                              {project.title}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover/link:text-[#22D3EE] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 flex-grow flex flex-col justify-center items-center text-center py-10">
                    <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-neutral-500">
                      <Network className="w-5 h-5 animate-pulse text-accent" />
                    </div>
                    <div className="space-y-2 max-w-xs">
                      <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                        Explore the Universe
                      </h4>
                      <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                        Hover over any surrounding capability node to examine detailed competencies and access directly linked case studies.
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
