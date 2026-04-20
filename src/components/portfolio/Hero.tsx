import { motion } from "framer-motion";
import heroImage from "@/assets/hero-portrait.jpg";

const title = "Designing with intention.";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const word = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-8 flex items-center gap-3"
          >
            <span className="w-10 h-px bg-foreground/40" />
            Portfolio · 2025
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight"
          >
            {title.split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3 align-bottom">
                <motion.span variants={word} className="inline-block">
                  {i === 1 ? <em className="text-gradient not-italic font-serif">{w}</em> : w}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            I'm Mira — an independent designer crafting brands, digital products,
            and editorial systems for ambitious teams who care about the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors duration-300"
            >
              View selected work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-foreground/20 text-sm font-medium hover:border-foreground transition-colors"
            >
              Book a call
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant">
            <motion.img
              src={heroImage}
              alt="Portrait of designer"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-card shadow-soft rounded-2xl px-5 py-4 flex items-center gap-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium">Available for Q3 projects</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
