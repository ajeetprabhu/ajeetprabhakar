import figmaIcon from "../assets/Design tools/Figma-logo.svg.png";
import aiIcon from "../assets/Design tools/Adobe_Illustrator_CC_icon.svg.png";
import psIcon from "../assets/Design tools/Adobe_Photoshop_CC_icon.svg.png";
import idIcon from "../assets/Design tools/Adobe_InDesign_CC_icon.svg.png";
import xdIcon from "../assets/Design tools/Adobe_XD_CC_icon.svg.png";
import prIcon from "../assets/Design tools/Adobe_Premiere_Pro_CC_icon.svg.png";
import aeIcon from "../assets/Design tools/Adobe_After_Effects_CC_icon.svg.png";
import wixIcon from "../assets/Design tools/unnamed.png";
import sbIcon from "../assets/Design tools/sb_icon.webp";
import procreateIcon from "../assets/Design tools/Procreate_icon.png";
import canvaIcon from "../assets/Design tools/Canva_logo.svg.png";
import blenderIcon from "../assets/Design tools/Blender_logo_no_text.svg.png";
import keyshotIcon from "../assets/Design tools/images.png";
import solidworksIcon from "../assets/Design tools/SolidWorks_Logo.svg.png";
import googleAntigravityIcon from "../assets/Design tools/Google_Antigravity_Logo.svg.png";
import claudeIcon from "../assets/Design tools/Claude_AI_symbol.svg.png";
import lovableIcon from "../assets/Design tools/Lovable_Logo_+_Wordmark_Black.png";

export const SkillsDashboard = () => {
  const column1 = [
    { name: "UI&UX", level: 10, lvlString: "10" },
    { name: "Graphic Design", level: 10, lvlString: "10" },
    { name: "3D Modeling", level: 9, lvlString: "09" },
    { name: "Animation", level: 9, lvlString: "09" },
    { name: "Video Making / Editing", level: 9, lvlString: "09" },
  ];

  const column2 = [
    { name: "Illustration", level: 10, lvlString: "10" },
    { name: "Product Sketching/ Visualization", level: 10, lvlString: "10" },
    { name: "Product Development", level: 9, lvlString: "09" },
    { name: "3D Printing & Testing", level: 9, lvlString: "09" },
    { name: "Motion Graphic", level: 8, lvlString: "08" },
  ];

  return (
    <section id="skills" className="py-24 bg-background border-y border-white/10 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Tools Section Row */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-24 bg-white/[0.01] border border-white/[0.04] p-8 rounded-sm relative overflow-hidden backdrop-blur-[2px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="flex items-center shrink-0 w-full lg:w-fit justify-between lg:justify-start">
            <h3 className="text-4xl md:text-5xl font-sans tracking-[0.05em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] font-black uppercase select-none">
              Tools
            </h3>
            <div className="h-16 w-[1px] bg-white/10 ml-8 hidden lg:block"></div>
          </div>
          
          {/* Tool Icons Grid (Two Clean Rows) */}
          <div className="flex flex-col gap-5 w-full items-center lg:items-start overflow-hidden py-1">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={figmaIcon} alt="Figma" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Figma</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={aiIcon} alt="Adobe Illustrator" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Illustrator</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={psIcon} alt="Adobe Photoshop" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Photoshop</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={idIcon} alt="Adobe InDesign" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">InDesign</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={xdIcon} alt="Adobe XD" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Adobe XD</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={prIcon} alt="Adobe Premiere Pro" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Premiere</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={aeIcon} alt="Adobe After Effects" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">After Effects</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={wixIcon} alt="Wix Studio" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Wix Studio</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={sbIcon} alt="Sketchbook" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Sketchbook</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={procreateIcon} alt="Procreate" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Procreate</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 px-3 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-105 hover:bg-white/[0.06]">
                <img src={canvaIcon} alt="Canva" className="h-6 w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Canva</span>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={blenderIcon} alt="Blender" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Blender</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={keyshotIcon} alt="Keyshot" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Keyshot</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 px-3 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-105 hover:bg-white/[0.06]">
                <img src={solidworksIcon} alt="SolidWorks" className="h-5 w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">SolidWorks</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 px-4 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-105 hover:bg-white/[0.06]">
                <img src={googleAntigravityIcon} alt="Google Antigravity" className="h-6 w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Google Antigravity</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 w-12 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-110 hover:bg-white/[0.06]">
                <img src={claudeIcon} alt="Claude AI" className="h-full w-auto object-contain" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Claude AI</span>
              </div>
              <div className="group relative flex items-center justify-center h-12 px-4 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 rounded-md p-2 transition-all duration-300 hover:scale-105 hover:bg-white/[0.06]">
                {/* Lovable logo wordmark is black in asset, invert it so it shows white on pure black theme */}
                <img src={lovableIcon} alt="Lovable" className="h-4 w-auto object-contain brightness-0 invert" />
                <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-white/5 z-20">Lovable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Section */}
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground tracking-wider mb-12 uppercase select-none text-left">
            Capabilities
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
            {/* Column 1 */}
            <div className="space-y-8">
              {column1.map((skill, index) => (
                <div key={index} className="group cursor-default">
                  <div className="flex justify-between items-end mb-2 font-display tracking-widest uppercase text-xs">
                    <span className="text-foreground font-semibold group-hover:text-cyan-400 transition-colors duration-300">{skill.name}</span>
                    <span className="text-gray-400">Level - {skill.lvlString}</span>
                  </div>
                  {/* Slider Progress Bar */}
                  <div className="h-3 w-full bg-white/10 rounded-full relative overflow-visible">
                    {/* Fill track */}
                    <div 
                      className="h-full bg-green-500 rounded-full relative overflow-visible transition-all duration-1000"
                      style={{ width: `${skill.level * 10}%` }}
                    >
                      {/* Round White Slider Handle */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border border-neutral-300 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-10 hover:scale-110 transition-transform duration-300 cursor-grab" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Column 2 */}
            <div className="space-y-8">
              {column2.map((skill, index) => (
                <div key={index} className="group cursor-default">
                  <div className="flex justify-between items-end mb-2 font-display tracking-widest uppercase text-xs">
                    <span className="text-foreground font-semibold group-hover:text-cyan-400 transition-colors duration-300">{skill.name}</span>
                    <span className="text-gray-400">Level - {skill.lvlString}</span>
                  </div>
                  {/* Slider Progress Bar */}
                  <div className="h-3 w-full bg-white/10 rounded-full relative overflow-visible">
                    {/* Fill track */}
                    <div 
                      className="h-full bg-green-500 rounded-full relative overflow-visible transition-all duration-1000"
                      style={{ width: `${skill.level * 10}%` }}
                    >
                      {/* Round White Slider Handle */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border border-neutral-300 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] z-10 hover:scale-110 transition-transform duration-300 cursor-grab" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
