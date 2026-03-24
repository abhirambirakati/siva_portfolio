import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrainingSection from "@/components/TrainingSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Achievements from "@/components/Achievements"; // 👈 ADD THIS

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />

      <Achievements /> {/* 👈 YOUR NEW SECTION */}

      <ProjectsSection />
      <TrainingSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Index;