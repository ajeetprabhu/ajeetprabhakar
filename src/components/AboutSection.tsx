export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <h2 className="text-3xl font-display font-bold text-foreground flex items-center gap-4">
              <span className="w-12 h-[2px] bg-accent" />
              01 // IDENTIFIER
            </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p className="text-2xl text-foreground font-display tracking-wide mb-12">
              "I am a 360° Designer with over 5 years of experience crafting end-to-end design solutions across product design, UI/UX, 3D visualization, and visual storytelling."
            </p>
            
            <p>
              With a strong foundation from the UP Institute of Design, I specialize in creating intuitive, future-ready experiences—particularly within the electric mobility ecosystem. My work integrates systems thinking, aesthetics, and human-centered design to deliver solutions that are both functional and impactful.
            </p>
            
            <div className="pl-6 border-l-2 border-accent/30 py-2 my-8">
              <p>
                I bring a multidisciplinary approach that spans digital and physical design, enabling me to seamlessly translate ideas from concept to execution. Whether designing interfaces, products, or immersive visual experiences, I focus on clarity, innovation, and scalability.
              </p>
            </div>
            
            <p>
              My goal is to design meaningful solutions that solve real-world problems while shaping the future of user experience through emerging technologies, intelligent systems, and design-driven thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
