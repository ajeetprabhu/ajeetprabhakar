import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-gradient-soft">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6"
        >
          Let's create something
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-8xl font-medium tracking-tight leading-[1] mb-12"
        >
          Have a project<br />
          in <em className="text-gradient not-italic">mind?</em>
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="mailto:hello@atelier.studio"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-foreground text-background font-medium shadow-elegant hover:bg-accent transition-colors duration-300"
        >
          hello@atelier.studio
          <span>→</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-border/60 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground"
        >
          <p>© 2025 Atelier Studio · Crafted with care</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">Dribbble</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
