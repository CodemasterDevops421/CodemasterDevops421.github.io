import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <EducationSection />
      <PublicationsSection />
      <ContactSection />
    </>
  );
}
