import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const projects = [
  { title: "Mind Basics", category: "Brand Identity", year: "2025", image: work1 },
  { title: "Loom Commerce", category: "Product Design", year: "2025", image: work2 },
  { title: "Flares Quarterly", category: "Editorial", year: "2024", image: work3 },
  { title: "Porters Studio", category: "Web Design", year: "2024", image: work4 },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16 flex-wrap gap-6"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight max-w-2xl">
              A collection of work I'm proud of.
            </h2>
          </div>
          <a href="#" className="text-sm font-medium underline underline-offset-4 hover:text-accent transition-colors">
            View archive →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group block ${i % 2 === 1 ? "md:mt-20" : ""}`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-secondary aspect-[4/5]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-foreground">↗</span>
                </div>
              </div>
              <div className="flex items-end justify-between mt-6">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{project.category}</p>
                </div>
                <span className="text-muted-foreground text-sm tabular-nums">{project.year}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
