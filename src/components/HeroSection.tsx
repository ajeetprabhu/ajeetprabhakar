import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ajeetPhoto from "../assets/Ajeet Prabhakar_.png";

export const HeroSection = () => {
  // Capture normalized mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Buttery-smooth spring motion values for parallax and spotlights
  const springX = useSpring(mouseX, { stiffness: 60, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    // Map coordinate to normalized scale of -0.5 to 0.5
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Smoothly return to center coordinates
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax transform mappings for layered background depths
  const layer1X = useTransform(springX, [-0.5, 0.5], [-35, 35]);
  const layer1Y = useTransform(springY, [-0.5, 0.5], [-35, 35]);

  const layer2X = useTransform(springX, [-0.5, 0.5], [25, -25]);
  const layer2Y = useTransform(springY, [-0.5, 0.5], [25, -25]);

  const layer3X = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const layer3Y = useTransform(springY, [-0.5, 0.5], [20, -20]);

  const photoX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const photoY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const photoBgX = useTransform(springX, [-0.5, 0.5], [-24, 24]);
  const photoBgY = useTransform(springY, [-0.5, 0.5], [-24, 24]);

  const spotlightX = useTransform(springX, [-0.5, 0.5], [-180, 180]);
  const spotlightY = useTransform(springY, [-0.5, 0.5], [-180, 180]);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stagger animation presets for text reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: custom * 0.18,
        ease: [0.16, 1, 0.3, 1] // Apple-like custom easeOutExpo
      }
    })
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="pt-28 pb-16 min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#030712] transition-colors duration-500"
    >
      {/* Background Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:32px_32px] opacity-80 z-0 pointer-events-none" />

      {/* Dynamic Cursor-Following Spotlight Glow */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-cyan-500/8 via-indigo-500/8 to-transparent blur-[140px] pointer-events-none z-0"
        style={{
          x: spotlightX,
          y: spotlightY,
          left: 'calc(50% - 400px)',
          top: 'calc(50% - 400px)',
        }}
      />

      {/* Fixed Background Ambient Glows */}
      <div className="absolute top-1/4 left-[8%] w-[450px] h-[450px] bg-cyan-500/[0.03] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[8%] w-[450px] h-[450px] bg-indigo-500/[0.03] rounded-full blur-[130px] pointer-events-none" />

      {/* 3D Parallax Floating Glassmorphic Shapes */}
      {/* Floater 1: Top-Left pill shape */}
      <motion.div 
        className="absolute top-20 left-12 hidden xl:flex flex-col gap-2 p-3 rounded-lg border border-white/5 bg-white/[0.01] backdrop-blur-md z-10 pointer-events-none select-none"
        style={{ x: layer1X, y: layer1Y }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
          <span className="text-[9px] font-display font-bold text-neutral-400 tracking-[0.2em] uppercase">SYSTEM.ACTIVE</span>
        </div>
        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full bg-[#22D3EE]" initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.8, delay: 0.6 }} />
        </div>
      </motion.div>

      {/* Floater 2: Middle-Right badge */}
      <motion.div 
        className="absolute top-1/3 right-16 hidden xl:flex items-center gap-3.5 px-4.5 py-2.5 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-md z-10 pointer-events-none select-none text-[9px] font-display font-bold tracking-[0.25em] text-neutral-400"
        style={{ x: layer2X, y: layer2Y }}
      >
        <span className="text-[#6366F1]">AJEET.DESIGN</span>
        <span className="text-white/10">|</span>
        <span>VER.2026</span>
      </motion.div>

      {/* Floater 3: Bottom-Left technical coordinates */}
      <motion.div 
        className="absolute bottom-28 left-20 hidden xl:block z-10 pointer-events-none select-none"
        style={{ x: layer3X, y: layer3Y }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-15 stroke-white">
          <circle cx="32" cy="32" r="30" strokeWidth="0.5" strokeDasharray="3 3" />
          <path d="M32 2v60M2 32h60" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          
          {/* Left Column: Headline and Actions */}
          <div className="w-full lg:w-7/12 flex flex-col items-start text-left space-y-8 order-2 lg:order-1">
            
            {/* Pulsing Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-300 font-display font-medium">
                🟢 Available for Product Design Opportunities
              </span>
            </motion.div>

            {/* Typography with Reveal Animation */}
            <div className="space-y-5">
              <motion.h1 
                variants={fadeInUp}
                custom={1}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-[52px] font-display font-black text-white tracking-tight leading-[1.15] uppercase"
              >
                Designing products <br />
                that bridge <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#6366F1] drop-shadow-[0_0_20px_rgba(34,211,238,0.2)] font-black">digital experiences</span> <br />
                and <span className="underline decoration-[#6366F1]/30 decoration-wavy underline-offset-8">physical innovation</span>.
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                custom={2}
                initial="hidden"
                animate="visible"
                className="text-base sm:text-lg text-neutral-400 font-sans max-w-xl font-light leading-relaxed pt-2"
              >
                Product Designer specializing in Product Design, UX, Industrial Design, 3D Experiences, and Emerging Technology.
              </motion.p>
            </div>

            {/* Staggered Action buttons */}
            <motion.div 
              variants={fadeInUp}
              custom={3}
              initial="hidden"
              animate="visible"
              className="pt-4 flex flex-wrap gap-4 items-center w-full"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center justify-center px-7 h-12 bg-white text-black font-display text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-transparent hover:text-white border border-white transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
              >
                <span>Explore My Work</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative inline-flex items-center justify-center px-7 h-12 bg-gradient-to-r from-[#22D3EE] to-[#6366F1] text-white font-display text-[11px] font-bold tracking-[0.15em] uppercase border border-transparent transition-all duration-300 rounded-sm shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
              >
                <span>Schedule a Call</span>
              </button>
            </motion.div>
            
          </div>

          {/* Right Column: Profile Image & Parallax Container */}
          <div className="w-full lg:w-5/12 shrink-0 flex flex-col items-center lg:items-end order-1 lg:order-2">
            <motion.div 
              className="relative w-full max-w-[360px] flex flex-col items-center justify-end"
              style={{ x: photoX, y: photoY }}
            >
              {/* Photo Backdrop Glow */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-full blur-[80px] opacity-75 pointer-events-none"
                style={{ x: photoBgX, y: photoBgY }}
              />
              
              {/* Interactive Profile Photo */}
              <div className="relative w-full overflow-hidden flex justify-center">
                <img 
                  src={ajeetPhoto} 
                  alt="Ajeet Prabhakar" 
                  className="w-full h-auto object-contain relative z-10 drop-shadow-[0_0_35px_rgba(34,211,238,0.06)] select-none"
                  draggable="false"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#030712] to-transparent z-20 pointer-events-none" />
              </div>
            </motion.div>

            {/* Premium Description Block */}
            <motion.div 
              variants={fadeInUp}
              custom={4}
              initial="hidden"
              animate="visible"
              className="max-w-[360px] mt-8 text-xs text-neutral-400 leading-relaxed text-left border-t border-white/5 pt-6 font-sans"
            >
              You know, this guy is a <strong className="text-white font-semibold">Product Designer</strong> focused on <strong className="text-white font-semibold">UI/UX, branding, and futuristic digital experiences</strong> — but beyond that, he’s passionate about <strong className="text-gray-300">web design with Gen AI, product sketching & visualization, user experience, 3D modeling & animation, graphic design, video editing, and illustration</strong>, always exploring new ways to create impactful and innovative experiences.
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
