import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Maximize2, Compass, ChevronLeft, ChevronRight, Info } from 'lucide-react';

// Asset Imports
import carRenderOpt from '../assets/Projects/3D Renders/car_render_opt.jpg';
import qewOpt from '../assets/Projects/3D Renders/qew_opt.jpg';
import render8kOpt from '../assets/Projects/3D Renders/render_8k_opt.jpg';
import bus5Opt from '../assets/Projects/3D Renders/bus_5_opt.jpg';
import bus1Opt from '../assets/Projects/3D Renders/bus1.jpg';
import dynamicChargingVideo from '../assets/Projects/3D animation/Dash Dynamic Wireless Charging system.mp4';
import twoWheelerVideo from '../assets/Projects/3D animation/2 wheeler Charging Setup.mp4';
import droneChargingVideo from '../assets/Projects/3D animation/Drone Charging at PGCIL.mp4';
import cluixVideo from '../assets/Projects/3D animation/cluix_video.mp4';
import cuixBranding from '../assets/Projects/Cuix Branding.jpg';
import ddDashboard from '../assets/Projects/DD Dashboard.jpg';
import wallUnitDesign from '../assets/Projects/Wall Unit Design.jpg';

interface LabItem {
  id: number;
  title: string;
  category: string;
  filters: string[];
  image: string;
  video?: string;
  description: string;
  tools: string;
  learnings: string;
  aspectClass: string;
  featured?: boolean;
  has3D?: boolean;
}

// 3D Point Interface for Projections
interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Hotspot3D {
  name: string;
  desc: string;
  pos: Point3D;
}

export const DesignLab = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);
  
  // Custom cursor state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Custom 3D wireframe states
  const [yaw, setYaw] = useState(0.4);
  const [pitch, setPitch] = useState(-0.2);
  const [isDragging3D, setIsDragging3D] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragStartAngles = useRef({ yaw: 0, pitch: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [projectedHotspots, setProjectedHotspots] = useState<{ name: string; desc: string; x: number; y: number; visible: boolean }[]>([]);

  const filterChips = ['All', 'UI/UX', 'Industrial Design', '3D', 'Motion', 'Branding', 'Prototyping'];

  const labItems: LabItem[] = [
    {
      id: 1,
      title: "Wireless EV Charger Wall Unit",
      category: "EV Charging Concepts",
      filters: ["Industrial Design", "Prototyping", "3D"],
      image: wallUnitDesign,
      video: dynamicChargingVideo,
      description: "An ultra-premium wall-mounted inductive charging terminal for residential and commercial spaces. Featuring magnetic coupling guidance, vertical thermal cooling fins, and dynamic status lighting.",
      tools: "SolidWorks, KeyShot, Figma, React Canvas 3D",
      learnings: "High-frequency resonant coupling requires electromagnetic shielding combined with high-grade carbon-fiber backings to maintain efficiency while protecting building wiring.",
      aspectClass: "w-[580px] md:w-[720px] aspect-[16/11]",
      featured: true,
      has3D: true
    },
    {
      id: 2,
      title: "Holographic Telemetry HUD",
      category: "Automotive UX",
      filters: ["UI/UX", "Motion"],
      image: carRenderOpt,
      video: twoWheelerVideo,
      description: "A futuristic windshield head-up display outlining real-time collision vectors, speed telemetry, and navigation paths for high-performance electric vehicles.",
      tools: "Figma, After Effects, Framer Motion",
      learnings: "Reduced cognitive strain by clustering parameters by immediacy and using variable transparency based on ambient road illumination.",
      aspectClass: "w-[440px] aspect-[16/10]"
    },
    {
      id: 3,
      title: "DD Clinical Diagnostics System",
      category: "Product UI",
      filters: ["UI/UX", "Branding"],
      image: ddDashboard,
      description: "An intuitive clinical telemetry interface displaying live patient vitals, neural stress mapping, and real-time diagnostic indicators.",
      tools: "Figma, React, Tailwind CSS",
      learnings: "High-density charts benefit from subtle ambient container animations that lower user stress during critical observations.",
      aspectClass: "w-[360px] aspect-[4/3]"
    },
    {
      id: 4,
      title: "Chassis Strain Stress Simulation",
      category: "Prototype Testing",
      filters: ["Prototyping", "Industrial Design"],
      image: qewOpt,
      description: "Finite Element Method strain simulation detailing shear loads, deformation points, and stress grids on modular charger docking joint pivots.",
      tools: "SolidWorks Simulation, KeyShot",
      learnings: "Replacing standard standard bolts with high-shear titanium pins reduced joint deformation by 43% under maximum tension.",
      aspectClass: "w-[290px] aspect-[1/1]"
    },
    {
      id: 5,
      title: "Cluix Medical Brand System",
      category: "Brand Identity",
      filters: ["Branding"],
      image: cuixBranding,
      video: cluixVideo,
      description: "Generative brand identity, responsive logo design parameters, and digital UI style guidelines for a high-tech healthcare startup.",
      tools: "Illustrator, Figma, Premiere Pro",
      learnings: "A modular emblem consisting of intersecting ellipses remains legible down to 12px resolutions on smart medical devices.",
      aspectClass: "w-[440px] aspect-[16/10]"
    },
    {
      id: 6,
      title: "Aerodynamic EV Sedan Frame",
      category: "3D Exploration",
      filters: ["3D", "Industrial Design"],
      image: carRenderOpt,
      description: "Computational fluid dynamics chassis mock and range optimization study, refining panels to guide low-pressure airflow fields.",
      tools: "Blender, Cycles Engine, KeyShot",
      learnings: "Tapering the rear cabin by 4 degrees significantly reduces trailing turbulence, lowering drag coefficient from 0.23 to 0.19.",
      aspectClass: "w-[360px] aspect-[4/3]"
    },
    {
      id: 7,
      title: "Autonomous Rapid Transit Layout",
      category: "Industrial Design",
      filters: ["Industrial Design", "3D"],
      image: bus5Opt,
      description: "Conceptual internal floor planning, passenger boarding paths, and layout modularity for high-capacity driverless shuttles.",
      tools: "SolidWorks, KeyShot, Illustrator",
      learnings: "Suspended layout seats allow easy floor sweeping and sanitization, reducing operator maintenance overhead.",
      aspectClass: "w-[290px] aspect-[1/1]"
    },
    {
      id: 8,
      title: "Drone Resonant Charging Pad",
      category: "Animation Studies",
      filters: ["3D", "Motion", "Prototyping"],
      image: render8kOpt,
      video: droneChargingVideo,
      description: "Concentric coil layout induction dock and landing pad concept supporting automated inspection quadcopters.",
      tools: "SolidWorks, After Effects, KeyShot",
      learnings: "Using concentric copper ring coils on the landing pad eliminates the need for precise angular drone alignment.",
      aspectClass: "w-[440px] aspect-[16/10]"
    }
  ];

  // 3D Wireframe Setup
  const hotspots: Hotspot3D[] = [
    { name: "Inductive Core", desc: "22kW resonant induction copper coil.", pos: { x: 0, y: -0.3, z: 0.22 } },
    { name: "Glass Interface", desc: "Adaptive LED display ring showing charge rates.", pos: { x: 0, y: 0.4, z: 0.22 } },
    { name: "Thermal Venting", desc: "Vertical heat sink fins for passive convection.", pos: { x: 0, y: 0.8, z: -0.15 } },
    { name: "Magnetic Plug Lock", desc: "Active solenoid lock holding connector secure.", pos: { x: 0, y: -0.85, z: 0.22 } }
  ];

  // Project 3D coordinate to 2D screen coordinate
  const project = (point: Point3D, currentYaw: number, currentPitch: number, w: number, h: number) => {
    const distance = 3.5;
    
    // Rotate Y (yaw)
    let x1 = point.x * Math.cos(currentYaw) - point.z * Math.sin(currentYaw);
    let z1 = point.x * Math.sin(currentYaw) + point.z * Math.cos(currentYaw);
    
    // Rotate X (pitch)
    let y2 = point.y * Math.cos(currentPitch) - z1 * Math.sin(currentPitch);
    let z2 = point.y * Math.sin(currentPitch) + z1 * Math.cos(currentPitch);
    
    // Perspective Division
    const scale = 160;
    const perspective = distance / (distance - z2);
    const px = w / 2 + x1 * scale * perspective;
    const py = h / 2 - y2 * scale * perspective;
    
    return { x: px, y: py, visible: z2 > -distance };
  };

  // Render 3D Wireframe Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let localYaw = yaw;
    let localPitch = pitch;

    // Build charger geometry vertices
    const casing: Point3D[] = [
      { x: -0.5, y: 0.9, z: 0.2 },   // 0: top-left-front
      { x: 0.5, y: 0.9, z: 0.2 },    // 1: top-right-front
      { x: 0.45, y: -0.9, z: 0.2 },  // 2: bottom-right-front
      { x: -0.45, y: -0.9, z: 0.2 }, // 3: bottom-left-front
      { x: -0.55, y: 0.95, z: -0.15 }, // 4: top-left-back
      { x: 0.55, y: 0.95, z: -0.15 },  // 5: top-right-back
      { x: 0.5, y: -0.95, z: -0.15 },  // 6: bottom-right-back
      { x: -0.5, y: -0.95, z: -0.15 }  // 7: bottom-left-back
    ];

    const screen: Point3D[] = [
      { x: -0.35, y: 0.65, z: 0.21 }, // 8
      { x: 0.35, y: 0.65, z: 0.21 },  // 9
      { x: 0.35, y: 0.15, z: 0.21 },  // 10
      { x: -0.35, y: 0.15, z: 0.21 }  // 11
    ];

    // Inductive Coil loop
    const coil: Point3D[] = [];
    const steps = 32;
    const radius = 0.25;
    const centerY = -0.3;
    for (let i = 0; i < steps; i++) {
      const angle = (i / steps) * Math.PI * 2;
      coil.push({
        x: Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        z: 0.21
      });
    }

    const renderLoop = () => {
      // Slow auto-rotation when user is not dragging
      if (!isDragging3D) {
        localYaw += 0.003;
        setYaw(localYaw);
      } else {
        localYaw = yaw;
        localPitch = pitch;
      }

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Project vertices to 2D
      const projCasing = casing.map(pt => project(pt, localYaw, localPitch, w, h));
      const projScreen = screen.map(pt => project(pt, localYaw, localPitch, w, h));
      const projCoil = coil.map(pt => project(pt, localYaw, localPitch, w, h));

      // 1. Draw Casing (Indigo Theme)
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 10;
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
      ctx.shadowColor = 'rgba(99, 102, 241, 0.3)';

      // Casing faces
      const drawLine = (i1: number, i2: number, points: { x: number; y: number }[]) => {
        ctx.beginPath();
        ctx.moveTo(points[i1].x, points[i1].y);
        ctx.lineTo(points[i2].x, points[i2].y);
        ctx.stroke();
      };

      // Front Face
      drawLine(0, 1, projCasing); drawLine(1, 2, projCasing); drawLine(2, 3, projCasing); drawLine(3, 0, projCasing);
      // Back Face
      drawLine(4, 5, projCasing); drawLine(5, 6, projCasing); drawLine(6, 7, projCasing); drawLine(7, 4, projCasing);
      // Connectors
      drawLine(0, 4, projCasing); drawLine(1, 5, projCasing); drawLine(2, 6, projCasing); drawLine(3, 7, projCasing);

      // 2. Draw Back Fins (Passive Thermal Cooling)
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.25)';
      ctx.lineWidth = 1;
      const finSteps = 6;
      for (let i = 1; i < finSteps; i++) {
        const factor = i / finSteps;
        const topX = -0.55 + 1.1 * factor;
        const bottomX = -0.5 + 1.0 * factor;
        const finTop = project({ x: topX, y: 0.95, z: -0.15 }, localYaw, localPitch, w, h);
        const finBottom = project({ x: bottomX, y: -0.95, z: -0.15 }, localYaw, localPitch, w, h);
        ctx.beginPath();
        ctx.moveTo(finTop.x, finTop.y);
        ctx.lineTo(finBottom.x, finBottom.y);
        ctx.stroke();
      }

      // 3. Draw Screen Glass Area (Cyan Glow)
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.5)';
      ctx.shadowColor = 'rgba(34, 211, 238, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(projScreen[0].x, projScreen[0].y);
      for (let i = 1; i < 4; i++) ctx.lineTo(projScreen[i].x, projScreen[i].y);
      ctx.closePath();
      ctx.stroke();

      // 4. Draw Induction Coil Spiral
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.7)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(projCoil[0].x, projCoil[0].y);
      for (let i = 1; i < projCoil.length; i++) {
        ctx.lineTo(projCoil[i].x, projCoil[i].y);
      }
      ctx.closePath();
      ctx.stroke();

      // Project hotspots and update HTML positioning state
      const projHotspots = hotspots.map(hs => {
        const coords = project(hs.pos, localYaw, localPitch, w, h);
        return {
          name: hs.name,
          desc: hs.desc,
          x: coords.x,
          y: coords.y,
          visible: coords.visible
        };
      });
      setProjectedHotspots(projHotspots);

      animId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => cancelAnimationFrame(animId);
  }, [isDragging3D, yaw, pitch]);

  // Drag listeners to rotate 3D unit
  const handleMouseDown3D = (e: React.MouseEvent) => {
    setIsDragging3D(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    dragStartAngles.current = { yaw, pitch };
  };

  const handleMouseMove3D = (e: React.MouseEvent) => {
    if (!isDragging3D) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    
    // Scale movement to angles
    setYaw(dragStartAngles.current.yaw + dx * 0.007);
    setPitch(Math.max(-0.6, Math.min(0.6, dragStartAngles.current.pitch - dy * 0.007)));
  };

  const handleMouseUp3D = () => {
    setIsDragging3D(false);
  };

  // Custom cursor movement handler
  const handleMouseMoveCursor = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Filter items
  const filteredItems = useMemo(() => {
    if (selectedFilter === 'All') return labItems;
    return labItems.filter(item => item.filters.includes(selectedFilter));
  }, [selectedFilter]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 480;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Modal Slideshow Helpers
  const selectedItem = selectedItemIdx !== null ? filteredItems[selectedItemIdx] : null;

  const navigateModal = (direction: 'prev' | 'next') => {
    if (selectedItemIdx === null) return;
    if (direction === 'prev') {
      setSelectedItemIdx(selectedItemIdx > 0 ? selectedItemIdx - 1 : filteredItems.length - 1);
    } else {
      setSelectedItemIdx(selectedItemIdx < filteredItems.length - 1 ? selectedItemIdx + 1 : 0);
    }
  };

  // Pre-play / auto-play video controller refs
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const handleCardMouseEnter = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleCardMouseLeave = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
    }
  };

  return (
    <section 
      id="design-lab" 
      ref={containerRef}
      onMouseMove={handleMouseMoveCursor}
      onMouseEnter={() => setIsHoveringGallery(true)}
      onMouseLeave={() => {
        setIsHoveringGallery(false);
        setIsDragging3D(false);
      }}
      className="py-28 bg-[#030712] relative overflow-hidden border-t border-white/5"
    >
      {/* Background grids and vector lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#22D3EE]/[0.01] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#6366F1]/[0.01] rounded-full blur-[150px] pointer-events-none" />

      {/* Local hover cursor "Explore" badge */}
      <AnimatePresence>
        {isHoveringGallery && selectedItemIdx === null && !isDragging3D && (
          <motion.div
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
            }}
            className="hidden md:flex absolute pointer-events-none z-50 w-24 h-24 -ml-12 -mt-12 rounded-full bg-gradient-to-tr from-[#22D3EE] to-[#6366F1] text-white font-display font-extrabold text-[11px] tracking-widest uppercase items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.95 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            Explore
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-display font-bold tracking-[0.3em] text-[#22D3EE] uppercase bg-[#22D3EE]/5 border border-[#22D3EE]/15 px-3 py-1 rounded-full">
                04 // Creative Archive
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
              Design Lab
            </h2>
            <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
              A collection of experiments, explorations, prototypes, concepts, and creative investigations across digital and physical product design.
            </p>
          </div>

          {/* Navigation Controls & Arrow Buttons */}
          <div className="flex items-center gap-4 self-start md:self-end">
            <button
              id="lab-prev-btn"
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-xl border border-white/5 hover:border-[#22D3EE]/30 bg-white/[0.01] hover:bg-[#22D3EE]/5 text-neutral-400 hover:text-white transition-all duration-300 flex items-center justify-center active:scale-95"
              title="Scroll Left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              id="lab-next-btn"
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-xl border border-white/5 hover:border-[#22D3EE]/30 bg-white/[0.01] hover:bg-[#22D3EE]/5 text-neutral-400 hover:text-white transition-all duration-300 flex items-center justify-center active:scale-95"
              title="Scroll Right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Chips Container */}
        <div className="flex flex-wrap gap-2.5 mb-12 justify-start border-b border-white/5 pb-6">
          {filterChips.map(chip => (
            <button
              id={`filter-chip-${chip.toLowerCase().replace('/', '-')}`}
              key={chip}
              onClick={() => setSelectedFilter(chip)}
              className={`px-4 py-2 rounded-xl text-xs font-display font-semibold transition-all duration-300 ${
                selectedFilter === chip
                  ? 'bg-gradient-to-r from-[#22D3EE] to-[#6366F1] text-white shadow-[0_0_15px_rgba(34,211,238,0.25)] border-transparent'
                  : 'bg-white/[0.01] border border-white/5 text-neutral-400 hover:text-white hover:border-white/10 hover:bg-white/[0.03]'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Horizontal Staggered scroll container */}
        <motion.div
          id="lab-gallery-scroll"
          ref={scrollRef}
          layout
          className="flex gap-8 overflow-x-auto pb-10 scrollbar-none snap-x snap-mandatory scroll-smooth relative z-10 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const globalIndex = labItems.findIndex(orig => orig.id === item.id);
              
              if (item.featured) {
                // Signature Highlighted Experiment Card
                return (
                  <motion.div
                    key={item.id}
                    layoutId={`lab-card-${item.id}`}
                    className={`flex-shrink-0 ${item.aspectClass} rounded-2xl border border-white/5 bg-[#080c16]/70 relative overflow-hidden snap-start flex flex-col md:flex-row group hover:border-[#22D3EE]/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.03)]`}
                  >
                    {/* Left text Details column */}
                    <div className="w-full md:w-5/12 p-8 flex flex-col justify-between text-left relative z-10">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-display font-black tracking-widest text-[#22D3EE] uppercase bg-[#22D3EE]/10 border border-[#22D3EE]/20 px-2 py-0.5 rounded-md">
                            Featured Exploration
                          </span>
                          <span className="text-[9px] font-sans text-neutral-400 bg-white/5 px-2 py-0.5 rounded-md">
                            Interactive 3D
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-display font-extrabold text-white group-hover:text-[#22D3EE] transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="space-y-4 pt-6 md:pt-0">
                        <div className="flex flex-wrap gap-1.5">
                          {item.filters.map(f => (
                            <span key={f} className="text-[9px] text-neutral-500 font-display font-bold uppercase tracking-wider bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded-md">{f}</span>
                          ))}
                        </div>

                        <button
                          id={`open-lab-modal-featured`}
                          onClick={() => setSelectedItemIdx(globalIndex)}
                          className="w-full h-11 bg-white/5 border border-white/10 hover:bg-[#22D3EE]/10 hover:border-[#22D3EE]/30 text-white hover:text-[#22D3EE] font-display text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          <span>Explore Deep Dive</span>
                          <Maximize2 className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>

                    {/* Right column: 3D interactive Canvas viewer */}
                    <div 
                      className="w-full md:w-7/12 bg-[#04070e] relative min-h-[300px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing border-t md:border-t-0 md:border-l border-white/5"
                      onMouseDown={handleMouseDown3D}
                      onMouseMove={handleMouseMove3D}
                      onMouseUp={handleMouseUp3D}
                      onMouseLeave={handleMouseUp3D}
                    >
                      <canvas 
                        ref={canvasRef} 
                        width={400} 
                        height={360} 
                        className="w-full h-full block" 
                      />

                      {/* Hotspots Overlay */}
                      {projectedHotspots.map((hs, idx) => {
                        if (!hs.visible) return null;
                        return (
                          <div
                            key={idx}
                            style={{
                              left: `${(hs.x / 400) * 100}%`,
                              top: `${(hs.y / 360) * 100}%`
                            }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/hs"
                          >
                            <div className="relative">
                              <button className="w-6 h-6 rounded-full bg-[#22D3EE]/25 border border-[#22D3EE] flex items-center justify-center shadow-lg group-hover/hs:scale-125 transition-all duration-300">
                                <span className="w-3 h-3 rounded-full bg-[#22D3EE] animate-ping absolute" />
                                <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                              </button>
                              
                              {/* Glowing Tooltip */}
                              <div className="absolute left-7 top-1/2 -translate-y-1/2 w-44 p-3 bg-[#080d16]/95 border border-[#22D3EE]/30 rounded-xl opacity-0 group-hover/hs:opacity-100 transition-all duration-300 pointer-events-none text-left z-30 shadow-2xl backdrop-blur-md scale-95 group-hover/hs:scale-100">
                                <p className="text-[9px] font-display font-black text-[#22D3EE] uppercase tracking-wider flex items-center gap-1">
                                  <Info className="w-3 h-3 shrink-0" />
                                  {hs.name}
                                </p>
                                <p className="text-[10px] text-neutral-400 font-sans mt-1 leading-normal">{hs.desc}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* Drag overlay notice */}
                      <div className="absolute bottom-4 right-4 text-[9px] font-display font-semibold tracking-wider text-neutral-500 uppercase flex items-center gap-1.5 pointer-events-none select-none bg-white/[0.01] border border-white/5 px-2.5 py-1.5 rounded-lg">
                        <Compass className="w-3.5 h-3.5 text-[#22D3EE] animate-spin-slow" />
                        Drag to Orbit
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Standard visual rhythm cards (Large, Medium, Small aspect cards)
              return (
                <motion.div
                  key={item.id}
                  layoutId={`lab-card-${item.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  onMouseEnter={() => handleCardMouseEnter(item.id)}
                  onMouseLeave={() => handleCardMouseLeave(item.id)}
                  onClick={() => setSelectedItemIdx(globalIndex)}
                  className={`flex-shrink-0 ${item.aspectClass} rounded-2xl border border-white/5 bg-[#07090f]/60 overflow-hidden snap-start relative group cursor-pointer hover:border-[#6366F1]/30 transition-all duration-500 hover:shadow-[0_0_35px_rgba(99,102,241,0.03)]`}
                >
                  {/* Media background: Video preview (if exists) or Static compressed image */}
                  {item.video ? (
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <video
                        ref={el => { videoRefs.current[item.id] = el; }}
                        src={item.video}
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover filter brightness-[0.5] group-hover:brightness-[0.7] group-hover:scale-[1.02] transition-all duration-700 ease-out pointer-events-none"
                      />
                    </div>
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-[1.02] filter brightness-[0.5] group-hover:brightness-[0.65] transition-all duration-700 ease-out select-none"
                      draggable="false"
                    />
                  )}

                  {/* Gradient shadow backing for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0 pointer-events-none" />

                  {/* Glassmorphic title details panel */}
                  <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end text-left">
                    <span className="text-[8px] font-display font-black tracking-widest text-[#22D3EE] uppercase bg-[#22D3EE]/10 border border-[#22D3EE]/20 px-2 py-0.5 rounded-md w-fit mb-2 group-hover:border-[#22D3EE]/40 transition-colors">
                      {item.category}
                    </span>
                    
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-[#6366F1] transition-colors duration-300 line-clamp-1">
                        {item.title}
                      </h3>
                      
                      <div className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:border-[#6366F1] group-hover:text-[#6366F1] transition-all duration-300 shrink-0">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Premium Full-Screen Overlay Detail Modal */}
      <AnimatePresence>
        {selectedItemIdx !== null && selectedItem && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Box */}
            <motion.div 
              className="relative w-full max-w-5xl bg-[#06080e] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            >
              {/* Close Button */}
              <button 
                id="lab-modal-close"
                onClick={() => setSelectedItemIdx(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-xl bg-black/70 hover:bg-black border border-white/15 hover:border-white/40 text-white flex items-center justify-center transition-all duration-300 active:scale-95"
                title="Close Modal"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Left Side: Frame Image or Video view */}
              <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative aspect-video md:aspect-auto min-h-[300px] md:min-h-[520px] select-none border-b md:border-b-0 md:border-r border-white/5">
                {selectedItem.video ? (
                  <video
                    src={selectedItem.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Right Side: Description spec detail sheet */}
              <div className="w-full md:w-2/5 p-8 flex flex-col justify-between text-left relative overflow-hidden bg-gradient-to-br from-[#06080e] to-[#090b14]">
                {/* Tech glowing design trims */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#22D3EE]/30" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#6366F1]/30" />

                <div className="space-y-6">
                  <div className="space-y-2.5">
                    <span className="inline-block text-[8px] font-display font-black tracking-widest text-[#22D3EE] uppercase bg-[#22D3EE]/10 border border-[#22D3EE]/20 px-2 py-0.5 rounded-md">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-white tracking-wide uppercase leading-tight">
                      {selectedItem.title}
                    </h3>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-display font-bold tracking-[0.2em] text-neutral-500 uppercase">Overview</span>
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-display font-bold tracking-[0.2em] text-neutral-500 uppercase">Tools & Systems</span>
                    <p className="text-xs text-[#22D3EE] font-sans font-semibold">
                      {selectedItem.tools}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 mt-6 border-t border-white/5">
                  <div className="space-y-1 bg-white/[0.01] border border-white/5 rounded-xl p-4">
                    <span className="text-[9px] font-display font-bold tracking-[0.2em] text-neutral-500 uppercase flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#6366F1] animate-spin-slow" />
                      Key Learnings
                    </span>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed mt-1">
                      {selectedItem.learnings}
                    </p>
                  </div>

                  {/* Slide controls inside modal */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[9px] font-display font-bold tracking-widest text-neutral-600 uppercase select-none">
                      Archive index: {selectedItemIdx + 1} / {filteredItems.length}
                    </span>
                    
                    <div className="flex gap-2">
                      <button
                        id="modal-prev-btn"
                        onClick={() => navigateModal('prev')}
                        className="w-9 h-9 rounded-lg border border-white/5 hover:border-accent bg-white/5 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-300"
                        title="Previous Slide"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        id="modal-next-btn"
                        onClick={() => navigateModal('next')}
                        className="w-9 h-9 rounded-lg border border-white/5 hover:border-accent bg-white/5 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-300"
                        title="Next Slide"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
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
