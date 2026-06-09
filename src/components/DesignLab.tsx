import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Maximize2, Compass } from 'lucide-react';

import carRenderOpt from '../assets/Projects/3D Renders/car_render_opt.jpg';
import qewOpt from '../assets/Projects/3D Renders/qew_opt.jpg';
import render8kOpt from '../assets/Projects/3D Renders/render_8k_opt.jpg';
import bus5Opt from '../assets/Projects/3D Renders/bus_5_opt.jpg';
import bus1Opt from '../assets/Projects/3D Renders/bus1.jpg';

interface LabItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  techSpecs: string;
}

export const DesignLab = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<LabItem | null>(null);

  const labItems: LabItem[] = [
    {
      id: 1,
      title: "Aerodynamic EV Concept",
      category: "3D Render / Concept",
      image: carRenderOpt,
      description: "A 3D automotive aerodynamic concept study, simulating airflow vectors over a low-drag electric sedan chassis. Focus on drag coefficient reduction and visual balance.",
      techSpecs: "Blender, Cycle Render, 1200 samples"
    },
    {
      id: 2,
      title: "Mechanical Joint Stress Test",
      category: "Manufacturing Exploration",
      image: qewOpt,
      description: "Structural stress simulation on pivot points for a modular EV charger dock arm. Evaluated structural integrity under dynamic load conditions.",
      techSpecs: "SolidWorks Simulation, KeyShot"
    },
    {
      id: 3,
      title: "8K Photorealistic Lighting Study",
      category: "Photorealistic Render",
      image: render8kOpt,
      description: "Outdoor illumination study mapping early dawn scatter and high-contrast shadow grids onto photorealistic physical charger enclosures.",
      techSpecs: "Cycles Engine, 8K Resolution, Custom HDRI Mapping"
    },
    {
      id: 4,
      title: "Autonomous Transit Layout",
      category: "Product Concept",
      image: bus5Opt,
      description: "Conceptual frame for a driverless public electric shuttle. Explores modular visual integration, high-capacity glazing panels, and glassmorphic graphics.",
      techSpecs: "SolidWorks, KeyShot, Illustrator"
    },
    {
      id: 5,
      title: "Modular Urban Transit",
      category: "Sketch / Concept",
      image: bus1Opt,
      description: "Visual thumbnail exploration for modular, rapid-charging urban shuttles. Explores functional door paths and passenger boarding ergonomics.",
      techSpecs: "Procreate Sketch, Photoshop Paintover"
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="design-lab" className="py-24 bg-[#030712] relative overflow-hidden border-t border-white/5">
      {/* Background decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.01] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header with Scroll Nav buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-4 select-none">
              <span className="w-12 h-[2px] bg-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              04 // DESIGN LAB
            </h2>
            <p className="text-sm text-neutral-400 font-sans max-w-xl leading-relaxed">
              A gallery of sketches, product concepts, 3D renders, prototype explorations, and experiments from physical design labs.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 justify-start sm:justify-end">
            <button
              onClick={() => handleScroll('left')}
              className="w-11 h-11 rounded-full border border-white/5 hover:border-accent/30 bg-white/[0.01] hover:bg-accent/5 text-neutral-400 hover:text-accent transition-all duration-300 flex items-center justify-center shadow-md active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-11 h-11 rounded-full border border-white/5 hover:border-accent/30 bg-white/[0.01] hover:bg-accent/5 text-neutral-400 hover:text-accent transition-all duration-300 flex items-center justify-center shadow-md active:scale-95"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Gallery Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory scroll-smooth relative z-10 w-full"
        >
          {labItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="flex-shrink-0 w-[290px] sm:w-[380px] md:w-[420px] aspect-[4/3] rounded-sm border border-white/5 bg-[#0a0a0c] overflow-hidden snap-start relative group cursor-pointer hover:border-accent/30 transition-all duration-500 shadow-lg"
              whileHover={{ y: -6 }}
            >
              {/* Media image background */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-[1.03] filter brightness-[0.6] group-hover:brightness-[0.75] transition-all duration-700 ease-out z-0 select-none"
                draggable="false"
              />

              {/* Glassmorphic Card Title overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/60 to-transparent z-10 flex flex-col justify-end text-left">
                <span className="text-[8px] font-display font-black tracking-widest text-[#22D3EE] uppercase bg-[#22D3EE]/10 border border-[#22D3EE]/20 px-2 py-0.5 rounded-full w-fit mb-2">
                  {item.category}
                </span>
                
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-accent transition-colors duration-300 line-clamp-1">
                    {item.title}
                  </h3>
                  
                  <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:border-accent group-hover:text-accent transition-all duration-300 shrink-0">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Zoom spec Modal overlay */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Box */}
            <motion.div 
              className="relative w-full max-w-4xl bg-[#07090f] border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 w-9 h-9 rounded-full bg-black/60 hover:bg-black border border-white/10 hover:border-white/30 text-white flex items-center justify-center transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Side: Frame Image view */}
              <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative aspect-video md:aspect-auto min-h-[250px] md:min-h-[460px]">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Description details panel */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden bg-gradient-to-br from-[#07090f] to-[#0a0a0f]">
                {/* Tech aesthetics */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#22D3EE]/20" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#6366F1]/20" />

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="inline-block text-[8px] font-display font-black tracking-widest text-[#22D3EE] uppercase bg-[#22D3EE]/10 border border-[#22D3EE]/20 px-2 py-0.5 rounded-full">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-wide">
                      {selectedItem.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                  <span className="text-[9px] font-display font-bold tracking-[0.2em] text-neutral-500 uppercase flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#6366F1]" />
                    Technical Specifications
                  </span>
                  <div className="p-3 bg-white/[0.01] border border-white/5 rounded-sm">
                    <p className="text-xs text-neutral-300 font-sans font-medium">
                      {selectedItem.techSpecs}
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
