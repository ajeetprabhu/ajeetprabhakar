import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We start with conversation. Understanding your goals, audience, and what makes the work matter.",
  },
  {
    number: "02",
    title: "Define",
    text: "Strategy and direction. Translating insight into a clear creative brief that guides every decision.",
  },
  {
    number: "03",
    title: "Design",
    text: "Iterative craft. From rough sketches to refined systems, designed to scale beyond launch.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "A thoughtful handoff. Documentation, guidelines, and ongoing support so the work keeps growing.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">Process</p>
          <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight max-w-3xl">
            How we'll work together.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-card border border-border/60 shadow-soft hover:shadow-elegant transition-shadow duration-500 group"
            >
              <div className="font-serif text-5xl text-accent/80 mb-8 group-hover:text-accent transition-colors">
                {step.number}
              </div>
              <h3 className="font-serif text-2xl font-medium mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
