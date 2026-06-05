import ajeetPhoto from "../assets/Ajeet Prabhakar_.png";
import { FileText } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-background min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Decorative High-Tech Background Gradients */}
      <div className="absolute top-1/4 left-[5%] w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          
          {/* Left Column: Text Content (Left Aligned) */}
          <div className="w-full lg:w-7/12 flex flex-col items-start text-left space-y-8 order-2 lg:order-1">
            
            {/* Availability Badge inside Left Column */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-display">
                Available for projects
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-display tracking-[0.3em] text-cyan-400 uppercase font-semibold">
                HEY, YOU FOUND ME <span className="text-orange-500 font-bold">!</span>
              </h2>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-wide leading-[1.1] uppercase">
                I AM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500">AJEET PRABHAKAR</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl font-sans">
              A Product Designer turning bold ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300 font-medium">
                futuristic digital and physical experiences
              </span>.
            </p>

            {/* Resume Button & Philosophy Quote Side-by-Side (Left Aligned) */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
              <a 
                href="/Ajeet prabhakar Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 h-12 bg-white text-black font-display text-xs tracking-widest uppercase hover:bg-transparent hover:text-white border border-white transition-all duration-300 rounded-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] w-fit z-10"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
              
              <div className="border-t sm:border-t-0 sm:border-l border-white/20 pt-4 sm:pt-0 sm:pl-6 py-1 text-left flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-display">Philosophy</p>
                <p className="text-xs text-gray-400 font-medium italic mt-0.5 max-w-xs">
                  "My Career is a product and I'm the business."
                </p>
              </div>
            </div>
            
          </div>

          {/* Right Column: Profile Image & Bio */}
          <div className="w-full lg:w-5/12 shrink-0 flex flex-col items-center lg:items-end order-1 lg:order-2">
            <div className="relative w-full max-w-[360px] flex flex-col items-center justify-end">
              {/* Radial Backdrop Glow to illuminate Ajeet's photo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-full blur-[80px] opacity-75 pointer-events-none"></div>
              
              <div className="relative w-full overflow-hidden flex justify-center">
                <img 
                  src={ajeetPhoto} 
                  alt="Ajeet Prabhakar" 
                  className="w-full h-auto object-contain relative z-10 drop-shadow-[0_0_35px_rgba(255,255,255,0.03)]"
                />
                {/* Smooth bottom vignette to blend the photo cutout perfectly into the black background */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none"></div>
              </div>
            </div>

            <div className="max-w-[360px] mt-8 text-xs text-gray-400 leading-relaxed text-left border-t border-white/10 pt-6 font-sans">
              You know, this guy is a <strong className="text-white font-semibold">Product Designer</strong> focused on <strong className="text-white font-semibold">UI/UX, branding, and futuristic digital experiences</strong> — but beyond that, he’s passionate about <strong className="text-gray-300">web design with Gen AI, product sketching & visualization, user experience, 3D modeling & animation, graphic design, video editing, and illustration</strong>, always exploring new ways to create impactful and innovative experiences.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
