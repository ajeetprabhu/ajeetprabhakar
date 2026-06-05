export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative border-t border-border bg-card/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="relative border border-border bg-card p-1 lg:p-12 hidden md:block">
           {/* Top left framing */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent" />
           {/* Bottom right framing */}
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent" />

          <div className="relative border border-border p-8 lg:p-16 flex flex-col items-center text-center flex-1 bg-white">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 uppercase tracking-wider">
              Initialize Sequence
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl">
              Ready to collaborate on the future of mobility? Open a direct communication channel to discuss your next breakthrough project.
            </p>
            
            <a 
              href="mailto:design@example.com"
              className="inline-flex items-center gap-4 px-8 py-4 bg-foreground text-background font-display font-bold tracking-widest uppercase hover:bg-accent transition-colors duration-300 shadow-lg"
            >
              <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              ESTABLISH CONNECTION
            </a>
          </div>
        </div>

        {/* Mobile simplified view */}
        <div className="md:hidden text-center py-12 border border-border bg-card relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />
          <h2 className="text-3xl font-display font-bold text-foreground mb-4 uppercase">Let's Talk</h2>
          <a href="mailto:contact@design.com" className="text-accent font-bold hover:text-foreground transition-colors font-display tracking-widest block">CONNECT NOW</a>
        </div>
      </div>
      
      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60 font-display tracking-widest uppercase">
        <p>© {new Date().getFullYear()} AJEET PRABHAKAR</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-accent transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-accent transition-colors">BEHANCE</a>
          <a href="#" className="hover:text-accent transition-colors">X</a>
        </div>
      </div>
    </section>
  );
};
