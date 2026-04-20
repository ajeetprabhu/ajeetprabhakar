const items = [
  "Brand Identity",
  "Art Direction",
  "Web Design",
  "Editorial",
  "Product Design",
  "Motion",
  "Type Systems",
];

const Marquee = () => {
  return (
    <section className="border-y border-border/60 py-8 overflow-hidden bg-secondary/40">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="font-serif text-3xl md:text-5xl font-medium tracking-tight">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
