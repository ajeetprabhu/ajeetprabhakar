import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import dashBrandingImage from '../assets/Projects/Dash Logo Design and branding.jpg';
import ddDashboardImage from '../assets/Projects/DD Dashboard.jpg';
import cuixBrandingImage from '../assets/Projects/Cuix Branding.jpg';
import superchargerImage from '../assets/Projects/3D Renders/DYNAMIC CHARGER.png';
import telemetryImage from '../assets/Projects/3D Renders/computer.png';
import wallUnitImage from '../assets/Projects/Wall Unit Design.jpg';
import cluixVideo from '../assets/Projects/3D animation/cluix_video.mp4';
import droneChargingVideo from '../assets/Projects/3D animation/Drone Charging at PGCIL.mp4';
import dashWirelessVideo from '../assets/Projects/3D animation/Dash Dynamic Wireless Charging system.mp4';
import twoWheelerVideo from '../assets/Projects/3D animation/2 wheeler Charging Setup.mp4';
import fourWheelerVideo from '../assets/Projects/3D animation/4 wheeler  wireless setup animation.mkv';

const CATEGORIES = [
  'All',
  'Branding',
  'UI&UX',
  '3D Animation',
  'Motion Graphics',
  'Product design and Industrial Design'
];

interface Project {
  id: number;
  title: string;
  category: string;
  colSpan: string;
  rowSpan: string;
  image?: string;
  video?: string;
  shortDescription: string;
  impact: string;
  duration: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const isVideo = !!project.video;
  const isImage = !!project.image;

  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play and pause video on hover with smooth trigger
  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5; // -0.5 to 0.5
    
    // Smooth 3D tilt angles
    setTilt({ x: x * 8, y: y * -8 });
    
    // Update cursor position inside card bounds
    setCursorPos({ x: e.clientX - left, y: e.clientY - top });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Link 
      to={`/case-study/${project.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden bg-[#0a0a0c] border border-white/5 rounded-sm p-6 sm:p-8 flex flex-col justify-end transition-all duration-500 hover:border-[#22D3EE]/30 ${project.colSpan} ${project.rowSpan}`}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1.015, 1.015, 1.015)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
      }}
    >
      {/* Floating Cursor Badge */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute pointer-events-none z-30 px-3.5 py-1.5 bg-[#22D3EE] text-[#030712] font-display text-[9px] font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)] flex items-center justify-center whitespace-nowrap"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              x: '-50%',
              y: '-50%',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 15 }}
          >
            Explore Project
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Media */}
      {isVideo ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-[#0d0d11] z-0" />
          <video 
            ref={videoRef}
            src={project.video} 
            muted 
            loop 
            playsInline
            className={`w-full h-full object-cover object-center scale-100 group-hover:scale-[1.03] filter brightness-[0.55] group-hover:brightness-[0.65] transition-all duration-700 ease-out z-10 ${
              isHovered ? 'opacity-100' : 'opacity-40'
            }`}
          />
        </div>
      ) : isImage ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-top scale-100 group-hover:scale-[1.03] filter brightness-[0.55] group-hover:brightness-[0.65] transition-all duration-700 ease-out"
          />
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-[#0d0d11]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/[0.03] group-hover:bg-accent/[0.08] rounded-full blur-2xl transition-colors duration-500" />
        </div>
      )}

      {/* Sleek Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Hover Cyan Wash Effect */}
      <div className="absolute inset-0 bg-cyan-950/0 group-hover:bg-cyan-950/[0.04] transition-colors duration-500 z-10" />

      {/* Card Content */}
      <div className="relative z-20 w-full text-left">
        <div className="flex items-center justify-between">
          <span className="inline-block text-accent font-display tracking-widest text-[9px] uppercase font-bold px-2.5 py-0.5 bg-accent/10 border border-accent/20 rounded-full backdrop-blur-sm shadow-[0_0_8px_rgba(6,182,212,0.1)] group-hover:border-accent/40 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all duration-300">
            {project.category}
          </span>
          
          <div className="bg-white/5 text-white p-2 rounded-full border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:text-background group-hover:shadow-[0_0_12px_rgba(6,182,212,0.4)] group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300 flex shrink-0">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300 line-clamp-1 mt-3">
          {project.title}
        </h3>

        {/* Collapsible details slide-up via CSS Grid */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 mt-0 group-hover:mt-3">
          <div className="overflow-hidden space-y-3">
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              {project.shortDescription}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] text-neutral-400 font-display uppercase tracking-widest border-t border-white/5 pt-3 w-full">
              <div className="flex items-center gap-1.5">
                <span className="text-[#22D3EE] font-black">IMPACT:</span>
                <span className="text-white font-medium">{project.impact}</span>
              </div>
              <span className="text-white/10 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#6366F1] font-black">DURATION:</span>
                <span className="text-white font-medium">{project.duration}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
};

export const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects: Project[] = [
    { 
      id: 1, 
      title: 'DD Dashboard', 
      category: 'UI&UX', 
      colSpan: 'lg:col-span-8', 
      rowSpan: 'lg:row-span-2',
      image: ddDashboardImage,
      shortDescription: 'Business Intelligence & Data Visualization dashboard for global operations tracking.',
      impact: '+45% Decision Speed',
      duration: '6 Weeks'
    },
    { 
      id: 2, 
      title: 'Supercharger Hub UX', 
      category: 'Product design and Industrial Design', 
      colSpan: 'lg:col-span-4', 
      rowSpan: 'lg:row-span-1',
      image: superchargerImage,
      shortDescription: 'Next-Gen EV tactile interface design, queue management, and digital user flow.',
      impact: '-30% Queue Times',
      duration: '8 Weeks'
    },
    { 
      id: 3, 
      title: 'Telemetry Dashboard', 
      category: 'Motion Graphics', 
      colSpan: 'lg:col-span-4', 
      rowSpan: 'lg:row-span-1',
      image: telemetryImage,
      shortDescription: 'Real-time vehicle diagnostics visual panel displaying telemetry charts and alerts.',
      impact: '99.8% Sync Accuracy',
      duration: '5 Weeks'
    },
    { 
      id: 4, 
      title: 'Dash Dynamic Branding', 
      category: 'Branding', 
      colSpan: 'lg:col-span-8', 
      rowSpan: 'lg:row-span-1',
      image: dashBrandingImage,
      shortDescription: 'Fluid visual identity system, style guides, and responsive logo framework.',
      impact: '10M+ Brand Impressions',
      duration: '4 Weeks'
    },
    { 
      id: 5, 
      title: 'Cluix Product Animation', 
      category: '3D Animation', 
      colSpan: 'lg:col-span-4', 
      rowSpan: 'lg:row-span-1',
      video: cluixVideo,
      shortDescription: 'Cinematic 3D animation showing internal sensor paths and water purification layers.',
      impact: '$1.2M Funding Raised',
      duration: '2 Weeks'
    },
    { 
      id: 6, 
      title: 'Drone Charging at PGCIL', 
      category: '3D Animation', 
      colSpan: 'lg:col-span-6', 
      rowSpan: 'lg:row-span-1',
      video: droneChargingVideo,
      shortDescription: 'Automatic drone docking station mechanisms and substation assembly simulation.',
      impact: '100% Autonomous Operation',
      duration: '3 Weeks'
    },
    { 
      id: 7, 
      title: 'Dash Dynamic Wireless Charging', 
      category: '3D Animation', 
      colSpan: 'lg:col-span-6', 
      rowSpan: 'lg:row-span-1',
      video: dashWirelessVideo,
      shortDescription: 'Industrial grid infrastructure showing dynamical power pads for on-road charging.',
      impact: 'Futuristic Grid Concept',
      duration: '3 Weeks'
    },
    { 
      id: 8, 
      title: '2-Wheeler Charging Setup', 
      category: '3D Animation', 
      colSpan: 'lg:col-span-4', 
      rowSpan: 'lg:row-span-1',
      video: twoWheelerVideo,
      shortDescription: '3D structural mechanical station installation and functional docking mechanics.',
      impact: 'Patent-Pending Design',
      duration: '2 Weeks'
    },
    { 
      id: 9, 
      title: '4-Wheeler Wireless Setup Animation', 
      category: '3D Animation', 
      colSpan: 'lg:col-span-8', 
      rowSpan: 'lg:row-span-1',
      video: fourWheelerVideo,
      shortDescription: 'High-fidelity technical visualization showing automotive undercarriage receiver alignment.',
      impact: 'Zero-Contact Power Transfer',
      duration: '4 Weeks'
    },
    { 
      id: 10, 
      title: 'Cluix Brand Identity & Design', 
      category: 'Branding', 
      colSpan: 'lg:col-span-12', 
      rowSpan: 'lg:row-span-2',
      image: cuixBrandingImage,
      shortDescription: 'Water intelligence hardware product visual graphics, typography guidelines, and packaging.',
      impact: 'Redefined Industrial Identity',
      duration: '4 Weeks'
    },
    { 
      id: 11, 
      title: 'Wireless EV Charger Wall Unit', 
      category: 'Product design and Industrial Design', 
      colSpan: 'lg:col-span-12', 
      rowSpan: 'lg:row-span-2',
      image: wallUnitImage,
      shortDescription: 'Premium wall-mounted wireless charging system for residential and commercial spaces.',
      impact: 'Winner, Design Concept',
      duration: '10 Weeks'
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#030712]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-4 shrink-0">
            <span className="w-12 h-[2px] bg-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            03 // CASE STUDIES
          </h2>
          
          <div className="flex flex-wrap gap-2 justify-start xl:justify-end">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-background shadow-[0_0_15px_rgba(34,211,238,0.3)] font-semibold border-transparent'
                    : 'bg-white/[0.02] hover:bg-white/[0.06] text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[240px]">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
