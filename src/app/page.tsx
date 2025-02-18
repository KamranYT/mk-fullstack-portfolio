import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResumeSection from "@/components/ResumeSection";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <TestimonialsSection />
    </main>
  );
}
