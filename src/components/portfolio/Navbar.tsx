import { motion } from "framer-motion";

const links = ["Work", "About", "Process", "Contact"];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 backdrop-blur-md bg-background/70 border-b border-border/40"
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className="font-serif text-xl font-semibold tracking-tight">
          Atelier<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-foreground after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm font-medium px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-accent transition-colors duration-300"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
