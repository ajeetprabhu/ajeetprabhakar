import React, { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { 
  Mail, 
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
  Instagram, 
  Dribbble,
  Download,
  Copy,
  Check
} from 'lucide-react';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState('30');
  const [copied, setCopied] = useState(false);

  const bookingUrls: Record<string, string> = {
    '15': 'https://calendly.com/ajeetprabhakar88/15min',
    '30': 'https://calendly.com/ajeetprabhakar88/30min',
    '45': 'https://calendly.com/ajeetprabhakar88/45min',
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('ajeetprabhakar88@gmail.com');
      setCopied(true);
      toast.success("Email address copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy email. Please copy manually.");
    }
  };

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

  // Stagger variants for entry animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5 bg-[#030712] overflow-hidden">
      {/* Premium ambient glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#22D3EE]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#6366F1]/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Overlay dot grid for Stripe-like aesthetics */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/5 text-xs text-[#22D3EE] font-medium tracking-wide mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
            Open for Select Roles & Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            Let's build <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#6366F1]">
              something meaningful.
            </span>
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base pt-2 leading-relaxed max-w-xl">
            I’m always open to discussing new projects, design systems, physical products, or multidisciplinary innovation. Typical response time is within 24 hours.
          </p>
        </div>

        {/* 3-Column Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          
          {/* Card 1: Direct Connections & Actions */}
          <motion.div 
            variants={cardVariants}
            className="group relative bg-[#090D1A]/50 border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:border-[#22D3EE]/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.03)]"
          >
            {/* Top segment */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white tracking-wide">Direct Lines</h3>
                  <p className="text-xs text-neutral-500 font-sans mt-0.5">Quick connections & credentials</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neutral-500 font-display font-medium uppercase tracking-wider">Email Address</span>
                    <button 
                      id="copy-email-btn"
                      onClick={copyEmailToClipboard}
                      className="text-xs text-neutral-400 hover:text-[#22D3EE] flex items-center gap-1.5 transition-colors"
                      title="Copy Email"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-[#22D3EE]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <a 
                    id="email-link"
                    href="mailto:ajeetprabhakar88@gmail.com" 
                    className="block text-base text-neutral-200 hover:text-[#22D3EE] transition-colors break-all font-sans font-medium"
                  >
                    ajeetprabhakar88@gmail.com
                  </a>
                </div>

                {/* Location & Relocation */}
                <div className="space-y-1 bg-white/[0.02] border border-white/5 rounded-xl p-3.5">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
                    <span>Based in New Delhi, India</span>
                  </div>
                  <p className="text-xs text-neutral-500 pl-5">Open to remote contracts & worldwide relocation.</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions segment */}
            <div className="space-y-4 mt-8 pt-6 border-t border-white/5">
              {/* WhatsApp Button */}
              <a 
                id="whatsapp-action-link"
                href="https://wa.me/918417979964" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] hover:bg-emerald-500/[0.06] hover:border-emerald-500/30 transition-all group/wa"
              >
                <div className="flex items-center gap-3">
                  {/* WhatsApp SVG logo */}
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.062 5.248 5.835-.465 12.948-.465c3.447 0 6.69 1.34 9.129 3.785 2.44 2.446 3.78 5.698 3.778 9.156-.005 7.155-5.779 12.867-12.894 12.867-2.007 0-3.974-.469-5.748-1.367L0 24zm6.59-4.846c1.685.999 3.337 1.513 5.337 1.515 5.882 0 10.669-4.706 10.673-10.493.002-2.802-1.092-5.437-3.078-7.424-1.986-1.987-4.63-3.08-7.433-3.08-5.889 0-10.678 4.708-10.683 10.496-.002 1.954.512 3.86 1.487 5.568l-.979 3.578 3.676-.962zm10.744-7.505c-.29-.145-1.716-.848-1.983-.945-.266-.097-.461-.145-.656.145-.195.29-.757.945-.928 1.139-.17.194-.341.218-.632.073-.29-.145-1.224-.451-2.331-1.439-.861-.767-1.443-1.716-1.612-2.007-.17-.29-.018-.447.127-.591.13-.13.29-.34.436-.509.145-.17.195-.29.29-.485.097-.194.049-.364-.024-.509-.073-.145-.656-1.58-.898-2.162-.236-.569-.475-.492-.656-.501-.17-.008-.364-.01-.559-.01s-.512.073-.78.364c-.266.29-1.018.994-1.018 2.424 0 1.43 1.042 2.812 1.187 3.006.145.194 2.052 3.133 4.969 4.389.694.3 1.236.478 1.658.612.698.222 1.332.191 1.833.116.559-.083 1.716-.703 1.959-1.382.243-.679.243-1.262.17-1.382-.072-.12-.266-.194-.559-.34z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block group-hover/wa:text-emerald-400 transition-colors">Chat on WhatsApp</span>
                    <span className="text-[10px] text-neutral-500 font-sans">Direct link to instant chat</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-600 group-hover/wa:translate-x-1 group-hover/wa:text-emerald-400 transition-all" />
              </a>

              {/* Resume Download Button */}
              <a 
                id="resume-download-btn"
                href="/Ajeet prabhakar Resume.pdf" 
                download="Ajeet_Prabhakar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-[#6366F1]/10 bg-[#6366F1]/[0.02] hover:bg-[#6366F1]/[0.06] hover:border-[#6366F1]/30 transition-all group/resume"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1]">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block group-hover/resume:text-[#6366F1] transition-colors">Download Resume</span>
                    <span className="text-[10px] text-neutral-500 font-sans">Ajeet Prabhakar Resume.pdf</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-600 group-hover/resume:translate-x-1 group-hover/resume:text-[#6366F1] transition-all" />
              </a>

              {/* Socials group */}
              <div className="flex gap-2.5 pt-4">
                {[
                  { icon: <Linkedin className="w-4 h-4" />, url: "https://www.linkedin.com/in/ajeet-prabhakar-79a4841b1/", label: "LinkedIn" },
                  { icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/st.upid.design?igsh=MTA2d25mNDNwbGc3cA==", label: "Instagram" },
                  { icon: <Dribbble className="w-4 h-4" />, url: "https://dribbble.com/AjeetPrabhu", label: "Dribbble" },
                  { icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M8.22 5.062c.969 0 1.769.219 2.406.656.637.438.956 1.094.956 1.969 0 .61-.153 1.118-.459 1.525-.306.407-.743.722-1.31.944.756.216 1.325.603 1.706 1.162.381.56.572 1.253.572 2.081 0 1.053-.369 1.869-1.106 2.45-.738.581-1.722.872-2.95.872H2v-11.66h6.22zm-.713 4.294c.328 0 .584-.078.769-.234.184-.156.277-.4.277-.731 0-.306-.092-.538-.277-.694-.184-.156-.442-.234-.775-.234H4.5v1.893h3.007zm.256 5.15c.341 0 .61-.091.806-.272.197-.181.295-.456.295-.825 0-.344-.097-.603-.29-.775-.194-.172-.464-.258-.81-.258H4.5v2.13h3.263zm14.237-1.156h-5.263c.069.591.294 1.047.675 1.369.381.322.884.483 1.509.483.475 0 .869-.097 1.181-.291.312-.194.55-.478.712-.853h2.006c-.225.753-.666 1.366-1.322 1.838-.656.472-1.503.708-2.541.708-1.538 0-2.731-.472-3.581-1.416-.85-.944-1.275-2.234-1.275-3.869 0-1.603.419-2.881 1.256-3.834.838-.953 1.991-1.43 3.456-1.43 1.438 0 2.569.456 3.394 1.369.825.912 1.228 2.222 1.209 3.928h.007zm-1.956-1.609c-.044-.509-.231-.912-.562-1.209-.331-.297-.781-.446-1.35-.446-.538 0-.978.147-1.322.441-.344.294-.559.7-.644 1.214h3.878zm-4.52-6.5h4.634v1.072H16.03V5.241z"/>
                    </svg>
                  ), url: "https://www.behance.net/CreatorDesigno", label: "Behance" }
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#22D3EE]/30 hover:bg-[#22D3EE]/5 transition-all duration-300"
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Send Message Console Form */}
          <motion.div 
            variants={cardVariants}
            className="group relative bg-[#090D1A]/50 border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:border-[#6366F1]/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.03)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1]">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white tracking-wide">Inquire</h3>
                  <p className="text-xs text-neutral-500 font-sans mt-0.5">Send a message directly</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative w-full">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <input 
                    id="contact-name-input"
                    type="text" 
                    placeholder="Your Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#05070f] border border-white/10 focus:border-[#6366F1]/50 focus:ring-1 focus:ring-[#6366F1]/50 outline-none rounded-xl text-sm text-white transition-all placeholder-neutral-650" 
                    required
                  />
                </div>
                <div className="relative w-full">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <input 
                    id="contact-email-input"
                    type="email" 
                    placeholder="Your Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#05070f] border border-white/10 focus:border-[#6366F1]/50 focus:ring-1 focus:ring-[#6366F1]/50 outline-none rounded-xl text-sm text-white transition-all placeholder-neutral-650" 
                    required
                  />
                </div>
                
                <div className="relative w-full">
                  <Grid className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <select 
                    id="contact-project-select"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full pl-12 pr-10 py-3.5 bg-[#05070f] border border-white/10 focus:border-[#6366F1]/50 focus:ring-1 focus:ring-[#6366F1]/50 outline-none rounded-xl text-sm text-neutral-400 focus:text-white transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled className="text-neutral-600">Choose Project Scope</option>
                    <option value="Product Design">Product Design</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Industrial Design">Industrial Design</option>
                    <option value="Branding & Identity">Branding & Identity</option>
                    <option value="3D Modeling & Animation">3D Modeling & Animation</option>
                    <option value="Prototyping & Development">Prototyping & Development</option>
                    <option value="Full-Time Opportunity">Full-Time Opportunity</option>
                    <option value="Other Contract">Other Contract</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                </div>
                
                <div className="relative w-full">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <input 
                    id="contact-subject-input"
                    type="text" 
                    placeholder="Subject" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#05070f] border border-white/10 focus:border-[#6366F1]/50 focus:ring-1 focus:ring-[#6366F1]/50 outline-none rounded-xl text-sm text-white transition-all placeholder-neutral-650" 
                    required
                  />
                </div>
                
                <div className="relative w-full">
                  <Edit3 className="absolute left-4 top-4 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <textarea 
                    id="contact-message-textarea"
                    placeholder="Your Message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full pl-12 pr-4 py-3.5 bg-[#05070f] border border-white/10 focus:border-[#6366F1]/50 focus:ring-1 focus:ring-[#6366F1]/50 outline-none rounded-xl text-sm text-white transition-all placeholder-neutral-650 resize-none" 
                    required
                  />
                </div>

                <button 
                  id="contact-submit-btn"
                  type="submit" 
                  disabled={loading}
                  className="w-full h-12 bg-gradient-to-r from-[#22D3EE] to-[#6366F1] hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] transition-all duration-300 text-white font-display text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-xl disabled:opacity-50 disabled:shadow-none"
                >
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500 mt-6 select-none border-t border-white/5 pt-4">
              <Lock className="w-3.5 h-3.5 text-neutral-500" />
              <span>Encrypted server transition secure connection.</span>
            </div>
          </motion.div>

          {/* Card 3: Booking System Integration */}
          <motion.div 
            variants={cardVariants}
            className="group relative bg-[#090D1A]/50 border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:border-[#22D3EE]/30 hover:border-r-[#6366F1]/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.03)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white tracking-wide">Schedule Session</h3>
                  <p className="text-xs text-neutral-500 font-sans mt-0.5">Automated sync via Calendly</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { id: '15', label: '15 min Introduction', desc: 'Brief sync & initial alignment check.', time: '15m' },
                  { id: '30', label: '30 min Project Scope', desc: 'Detailed review of requirements & ideas.', time: '30m' },
                  { id: '45', label: '45 min Design Strategy', desc: 'In-depth UX/UI review & consulting.', time: '45m' }
                ].map((option) => (
                  <div 
                    id={`scheduler-option-${option.id}`}
                    key={option.id}
                    onClick={() => setSelectedMeeting(option.id)}
                    className={`group/opt flex items-start gap-4 p-4 rounded-xl border bg-white/[0.01] cursor-pointer transition-all duration-300 ${
                      selectedMeeting === option.id 
                        ? 'border-[#22D3EE]/40 bg-[#22D3EE]/[0.03] shadow-[0_0_20px_rgba(34,211,238,0.02)]' 
                        : 'border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="pt-0.5">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                        selectedMeeting === option.id 
                          ? 'border-[#22D3EE]' 
                          : 'border-neutral-700 group-hover/opt:border-neutral-500'
                      }`}>
                        {selectedMeeting === option.id && (
                          <div className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                        )}
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <p className={`text-sm font-semibold transition-colors ${
                          selectedMeeting === option.id ? 'text-[#22D3EE]' : 'text-white group-hover/opt:text-neutral-200'
                        }`}>
                          {option.label}
                        </p>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-neutral-400 font-sans">{option.time}</span>
                      </div>
                      <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                        {option.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <a 
                id="book-appointment-btn"
                href={bookingUrls[selectedMeeting]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 bg-gradient-to-r from-[#22D3EE] to-[#6366F1] hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 text-white font-display text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-xl"
              >
                <span>View Available Times</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* Section Footer */}
        <div className="container mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/40 font-display tracking-widest uppercase select-none">
          <p>© {new Date().getFullYear()} AJEET PRABHAKAR</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/ajeet-prabhakar-79a4841b1/" target="_blank" rel="noopener noreferrer" className="hover:text-[#22D3EE] transition-colors">LINKEDIN</a>
            <a href="https://www.instagram.com/st.upid.design?igsh=MTA2d25mNDNwbGc3cA==" target="_blank" rel="noopener noreferrer" className="hover:text-[#22D3EE] transition-colors">INSTAGRAM</a>
            <a href="https://www.behance.net/CreatorDesigno" target="_blank" rel="noopener noreferrer" className="hover:text-[#22D3EE] transition-colors">BEHANCE</a>
            <a href="https://dribbble.com/AjeetPrabhu" target="_blank" rel="noopener noreferrer" className="hover:text-[#22D3EE] transition-colors">DRIBBBLE</a>
          </div>
        </div>

      </div>
    </section>
  );
};
