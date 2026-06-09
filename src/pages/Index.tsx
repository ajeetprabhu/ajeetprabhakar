import { HeroSection } from "@/components/HeroSection";
import { SkillsDashboard } from "@/components/SkillsDashboard";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { DesignLab } from "@/components/DesignLab";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SkillsDashboard />
      <ProjectsGrid />
      <DesignLab />
      <ContactSection />
    </div>
  );
};

export default Index;
