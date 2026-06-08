import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
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
  subtitle?: string;
  category: string;
  colSpan: string;
  rowSpan: string;
  image?: string;
  video?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const isVideo = !!project.video;
  const isImage = !!project.image;

  return (
    <Link 
      to={`/case-study/${project.id}`}
      className={`group relative overflow-hidden bg-[#0a0a0c] border border-white/5 rounded-sm p-6 sm:p-8 flex flex-col justify-end transition-all duration-500 hover:border-accent/50 hover:shadow-glow ${project.colSpan} ${project.rowSpan}`}
    >
      {/* Background Media */}
      {isVideo ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            src={project.video} 
            muted 
            loop 
            autoPlay
            playsInline
            className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.03] filter brightness-[0.55] group-hover:brightness-[0.75] transition-all duration-700 ease-out"
          />
        </div>
      ) : isImage ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-top scale-100 group-hover:scale-[1.03] filter brightness-[0.55] group-hover:brightness-[0.75] transition-all duration-700 ease-out"
          />
        </div>
      ) : (
        /* Fallback graphic/gradient layout */
        <div className="absolute inset-0 w-full h-full bg-[#0d0d11]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/[0.03] group-hover:bg-accent/[0.08] rounded-full blur-2xl transition-colors duration-500" />
        </div>
      )}

      {/* Sleek Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Hover Cyan Wash Effect */}
      <div className="absolute inset-0 bg-cyan-950/0 group-hover:bg-cyan-950/[0.08] transition-colors duration-500 z-10" />

      {/* Card Content */}
      <div className="relative z-20 w-full flex justify-between items-end">
        <div className="space-y-1.5 max-w-[85%]">
          <span className="inline-block text-accent font-display tracking-widest text-[9px] uppercase font-bold px-2.5 py-0.5 bg-accent/10 border border-accent/20 rounded-full backdrop-blur-sm shadow-[0_0_8px_rgba(6,182,212,0.1)] group-hover:border-accent/40 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all duration-300">
            {project.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 line-clamp-1 font-sans">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Dynamic Action Button */}
        <div className="bg-white/5 text-white p-3 rounded-full border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:text-background group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex shrink-0 ml-4">
          <ArrowUpRight className="w-5 h-5" />
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
      subtitle: 'Business Intelligence & Data Visualization',
      category: 'UI&UX', 
      colSpan: 'lg:col-span-8', 
      rowSpan: 'lg:row-span-2',
      image: ddDashboardImage
    },
    { 
      id: 2, 
      title: 'Supercharger Hub UX', 
      subtitle: 'Next-Gen EV Charging Experience',
      category: 'Product design and Industrial Design', 
      colSpan: 'lg:col-span-4', 
      rowSpan: 'lg:row-span-1',
      image: superchargerImage
    },
    { 
      id: 3, 
      title: 'Telemetry Dashboard', 
      subtitle: 'Real-time Vehicle Diagnostics & Stats',
      category: 'Motion Graphics', 
      colSpan: 'lg:col-span-4', 
      rowSpan: 'lg:row-span-1',
      image: telemetryImage
    },
    { 
      id: 4, 
      title: 'Dash Dynamic Branding', 
      subtitle: 'Responsive Brand Identity System',
      category: 'Branding', 
      colSpan: 'lg:col-span-8', 
      rowSpan: 'lg:row-span-1',
      image: dashBrandingImage
    },
    { 
      id: 5, 
      title: 'Cluix Product Animation', 
      subtitle: 'High-fidelity 3D Product Showcase',
      category: '3D Animation', 
      colSpan: 'lg:col-span-4', 
      rowSpan: 'lg:row-span-1',
      video: cluixVideo 
    },
    { 
      id: 6, 
      title: 'Drone Charging at PGCIL', 
      subtitle: 'Automatic Substation Charging Dock',
      category: '3D Animation', 
      colSpan: 'lg:col-span-6', 
      rowSpan: 'lg:row-span-1',
      video: droneChargingVideo 
    },
    { 
      id: 7, 
      title: 'Dash Dynamic Wireless Charging', 
      subtitle: 'Conceptual EV Grid Infrastructure',
      category: '3D Animation', 
      colSpan: 'lg:col-span-6', 
      rowSpan: 'lg:row-span-1',
      video: dashWirelessVideo 
    },
    { 
      id: 8, 
      title: '2-Wheeler Charging Setup', 
      subtitle: 'Mechanical Station Assembly',
      category: '3D Animation', 
      colSpan: 'lg:col-span-4', 
      rowSpan: 'lg:row-span-1',
      video: twoWheelerVideo 
    },
    { 
      id: 9, 
      title: '4-Wheeler Wireless Setup Animation', 
      subtitle: 'Technical Operational Flow',
      category: '3D Animation', 
      colSpan: 'lg:col-span-8', 
      rowSpan: 'lg:row-span-1',
      video: fourWheelerVideo 
    },
    { 
      id: 10, 
      title: 'Cluix Brand Identity & Design', 
      subtitle: 'Water Intelligence & Branding System',
      category: 'Branding', 
      colSpan: 'lg:col-span-12', 
      rowSpan: 'lg:row-span-2',
      image: cuixBrandingImage
    },
    { 
      id: 11, 
      title: 'Wireless EV Charger Wall Unit', 
      subtitle: 'A premium wall-mounted wireless charging system for electric vehicles',
      category: 'Product design and Industrial Design', 
      colSpan: 'lg:col-span-12', 
      rowSpan: 'lg:row-span-2',
      image: wallUnitImage
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center gap-4 shrink-0">
            <span className="w-12 h-[2px] bg-accent shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
            03 // CASE STUDIES
          </h2>
          
          <div className="flex flex-wrap gap-2 justify-start xl:justify-end">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-background shadow-[0_0_15px_rgba(6,182,212,0.3)] font-semibold border-transparent'
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
