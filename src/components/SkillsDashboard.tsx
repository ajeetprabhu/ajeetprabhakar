import toolsImage from "../assets/Tools.png";

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
    <section id="skills" className="py-24 bg-[#030712] border-y border-white/10 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Tools Section Image */}
        <div className="flex justify-center items-center mb-24 relative z-10 w-full py-6">
          <img 
            src={toolsImage} 
            alt="Design Tools" 
            className="w-full max-w-4xl h-auto object-contain select-none"
          />
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
                      className="h-full bg-gradient-to-r from-[#22D3EE] to-[#6366F1] rounded-full relative overflow-visible transition-all duration-1000"
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
                      className="h-full bg-gradient-to-r from-[#22D3EE] to-[#6366F1] rounded-full relative overflow-visible transition-all duration-1000"
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
