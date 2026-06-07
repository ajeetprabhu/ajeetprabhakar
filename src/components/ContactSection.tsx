import React, { useState } from 'react';
import { toast } from 'sonner';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  User, 
  Tag, 
  Grid, 
  ChevronDown, 
  Edit3, 
  Lock, 
  Calendar, 
  ArrowRight, 
  Send, 
  Linkedin, 
  Github, 
  Dribbble 
} from 'lucide-react';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate message submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Connection established! Your message has been sent successfully.");
      setName('');
      setEmail('');
      setSubject('');
      setProjectType('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5 bg-[#030303]">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Details & Socials */}
          <div className="lg:col-span-5 flex flex-col space-y-8 text-left">
            <div className="space-y-4">
              <p className="text-xs font-display tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold uppercase select-none">
                Let's Connect
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-[1.1] uppercase">
                Let's create <br className="hidden sm:block" /> something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
                  amazing together.
                </span>
              </h2>
              <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-md pt-2 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <div className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 mt-6" />
            </div>

            {/* Contact Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Email Card */}
              <div className="bg-[#0a0a0c] border border-white/5 p-5 flex items-start gap-4 rounded-sm hover:border-purple-500/20 hover:shadow-[0_0_15px_rgba(124,58,237,0.05)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-white font-display text-xs font-bold uppercase tracking-wider">Email</h4>
                  <a href="mailto:ajeetprabhakar88@gmail.com" className="text-neutral-400 text-xs hover:text-white transition-colors break-all">
                    ajeetprabhakar88@gmail.com
                  </a>
                  <p className="text-[10px] text-neutral-500 font-sans">I usually reply within 24 hours</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-[#0a0a0c] border border-white/5 p-5 flex items-start gap-4 rounded-sm hover:border-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-white font-display text-xs font-bold uppercase tracking-wider">Phone</h4>
                  <a href="tel:+918417979964" className="text-neutral-400 text-xs hover:text-white transition-colors">
                    +91 84179 79964
                  </a>
                  <p className="text-[10px] text-neutral-500 font-sans">Mon – Sat, 10AM – 7PM</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-[#0a0a0c] border border-white/5 p-5 flex items-start gap-4 rounded-sm hover:border-purple-500/20 hover:shadow-[0_0_15px_rgba(124,58,237,0.05)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-white font-display text-xs font-bold uppercase tracking-wider">Location</h4>
                  <p className="text-neutral-400 text-xs">New Delhi, India</p>
                  <p className="text-[10px] text-neutral-500 font-sans">Open to remote work</p>
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-[#0a0a0c] border border-white/5 p-5 flex items-start gap-4 rounded-sm hover:border-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-white font-display text-xs font-bold uppercase tracking-wider">Availability</h4>
                  <p className="text-green-400 text-xs flex items-center gap-1.5 font-sans font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Open for new projects
                  </p>
                  <p className="text-[10px] text-neutral-500 font-sans">Full-time / Freelance</p>
                </div>
              </div>
            </div>

            {/* Other Platforms */}
            <div className="pt-6">
              <h4 className="text-sm font-display text-neutral-400 tracking-wider mb-4 uppercase">Let's connect on other platforms</h4>
              <div className="flex flex-wrap gap-3">
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/ajeetprabhakar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-white/[0.02] border border-white/5 hover:border-accent hover:bg-accent/5 text-neutral-400 hover:text-white hover:shadow-glow transition-all duration-300 flex items-center justify-center"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
                {/* Dribbble */}
                <a 
                  href="https://dribbble.com/ajeetprabhakar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-white/[0.02] border border-white/5 hover:border-accent hover:bg-accent/5 text-neutral-400 hover:text-white hover:shadow-glow transition-all duration-300 flex items-center justify-center"
                >
                  <Dribbble className="w-4.5 h-4.5" />
                </a>
                {/* Behance */}
                <a 
                  href="https://behance.net/ajeetprabhakar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-white/[0.02] border border-white/5 hover:border-accent hover:bg-accent/5 text-neutral-400 hover:text-white hover:shadow-glow transition-all duration-300 flex items-center justify-center"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8.22 5.062c.969 0 1.769.219 2.406.656.637.438.956 1.094.956 1.969 0 .61-.153 1.118-.459 1.525-.306.407-.743.722-1.31.944.756.216 1.325.603 1.706 1.162.381.56.572 1.253.572 2.081 0 1.053-.369 1.869-1.106 2.45-.738.581-1.722.872-2.95.872H2v-11.66h6.22zm-.713 4.294c.328 0 .584-.078.769-.234.184-.156.277-.4.277-.731 0-.306-.092-.538-.277-.694-.184-.156-.442-.234-.775-.234H4.5v1.893h3.007zm.256 5.15c.341 0 .61-.091.806-.272.197-.181.295-.456.295-.825 0-.344-.097-.603-.29-.775-.194-.172-.464-.258-.81-.258H4.5v2.13h3.263zm14.237-1.156h-5.263c.069.591.294 1.047.675 1.369.381.322.884.483 1.509.483.475 0 .869-.097 1.181-.291.312-.194.55-.478.712-.853h2.006c-.225.753-.666 1.366-1.322 1.838-.656.472-1.503.708-2.541.708-1.538 0-2.731-.472-3.581-1.416-.85-.944-1.275-2.234-1.275-3.869 0-1.603.419-2.881 1.256-3.834.838-.953 1.991-1.43 3.456-1.43 1.438 0 2.569.456 3.394 1.369.825.912 1.228 2.222 1.209 3.928h.007zm-1.956-1.609c-.044-.509-.231-.912-.562-1.209-.331-.297-.781-.446-1.35-.446-.538 0-.978.147-1.322.441-.344.294-.559.7-.644 1.214h3.878zm-4.52-6.5h4.634v1.072H16.03V5.241z"/>
                  </svg>
                </a>
                {/* Medium */}
                <a 
                  href="https://medium.com/@ajeetprabhakar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-white/[0.02] border border-white/5 hover:border-accent hover:bg-accent/5 text-neutral-400 hover:text-white hover:shadow-glow transition-all duration-300 flex items-center justify-center"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </a>
                {/* GitHub */}
                <a 
                  href="https://github.com/ajeetprabhu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-white/[0.02] border border-white/5 hover:border-accent hover:bg-accent/5 text-neutral-400 hover:text-white hover:shadow-glow transition-all duration-300 flex items-center justify-center"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Message Form & Call CTA */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Form Card */}
            <div className="bg-[#0a0a0c] border border-white/5 p-6 sm:p-8 rounded-sm text-left">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-wider select-none">Send me a message</h3>
                <Send className="w-5 h-5 text-accent" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative w-full">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-[#070709] border border-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none rounded-md text-sm text-white transition-all placeholder-neutral-500" 
                      required
                    />
                  </div>
                  <div className="relative w-full">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-[#070709] border border-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none rounded-md text-sm text-white transition-all placeholder-neutral-500" 
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative w-full">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-[#070709] border border-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none rounded-md text-sm text-white transition-all placeholder-neutral-500" 
                    required
                  />
                </div>

                {/* Project Type Select */}
                <div className="relative w-full">
                  <Grid className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <select 
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full pl-12 pr-10 py-3 bg-[#070709] border border-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none rounded-md text-sm text-neutral-400 focus:text-white transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled className="text-neutral-500">Project Type</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Branding & Identity">Branding & Identity</option>
                    <option value="3D Modeling & Animation">3D Modeling & Animation</option>
                    <option value="Motion Graphics">Motion Graphics</option>
                    <option value="Product Visualization">Product Visualization</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                </div>

                {/* Message */}
                <div className="relative w-full">
                  <Edit3 className="absolute left-4 top-4 w-4 h-4 text-neutral-500" />
                  <textarea 
                    placeholder="Your Message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#070709] border border-white/10 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none rounded-md text-sm text-white transition-all placeholder-neutral-500 resize-none" 
                    required
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full h-12 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 text-white font-display text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm shadow-md disabled:opacity-50 disabled:scale-100 disabled:shadow-none"
                >
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Secure Footer */}
              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500 mt-4 select-none">
                <Lock className="w-3.5 h-3.5" />
                <span>Your information is 100% secure and will never be shared.</span>
              </div>
            </div>

            {/* Quick Chat Call CTA */}
            <div className="bg-[#0a0a0c] border border-white/5 p-6 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-accent/20 transition-all duration-300 text-left">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center bg-accent/5 shadow-[0_0_15px_rgba(6,182,212,0.1)] shrink-0 animate-pulse">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold text-base uppercase tracking-wider">Prefer a quick chat?</h4>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-1">Schedule a call with me and let's discuss your ideas in detail.</p>
                </div>
              </div>
              <a 
                href="https://calendly.com/ajeetprabhakar" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 hover:border-accent hover:bg-accent/5 text-white font-display text-xs tracking-widest uppercase py-3.5 px-6 transition-all duration-300 flex items-center gap-3 backdrop-blur-md rounded-sm shrink-0 w-full sm:w-auto justify-center"
              >
                <Calendar className="w-4 h-4 text-accent" />
                <span>Schedule a Call</span>
              </a>
            </div>

          </div>

        </div>

        {/* Section Footer */}
        <div className="container mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/40 font-display tracking-widest uppercase select-none">
          <p>© {new Date().getFullYear()} AJEET PRABHAKAR</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://linkedin.com/in/ajeetprabhakar" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LINKEDIN</a>
            <a href="https://behance.net/ajeetprabhakar" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">BEHANCE</a>
            <a href="https://github.com/ajeetprabhu" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GITHUB</a>
          </div>
        </div>

      </div>
    </section>
  );
};
