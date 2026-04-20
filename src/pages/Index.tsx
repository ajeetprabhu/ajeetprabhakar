import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import Work from "@/components/portfolio/Work";
import About from "@/components/portfolio/About";
import Process from "@/components/portfolio/Process";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Process />
      <Contact />
    </main>
  );
};

export default Index;
