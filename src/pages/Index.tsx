import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationSection from '@/components/CertificationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <CertificationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
