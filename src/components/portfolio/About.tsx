import { motion } from "framer-motion";

const stats = [
  { value: "08+", label: "Years crafting" },
  { value: "60+", label: "Shipped projects" },
  { value: "24", label: "Happy clients" },
  { value: "12", label: "Awards earned" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-gradient-dark text-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-background/60 mb-4">About</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
              Quiet design. <em className="text-accent not-italic">Loud impact.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 lg:col-start-6 space-y-6 text-background/80 text-lg leading-relaxed"
          >
            <p>
              For nearly a decade I've helped founders and creative teams turn
              ambitious ideas into considered, lasting design. My work spans
              identity systems, digital products and editorial direction.
            </p>
            <p>
              I believe great design is patient. It listens, edits, and only then
              speaks — clearly and with conviction.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-background/10 pt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-serif text-5xl md:text-6xl font-medium tracking-tight text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-background/60 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
