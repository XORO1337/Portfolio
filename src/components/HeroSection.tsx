import { Download, Mail } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Create a dummy CV download - in real implementation, link to actual CV
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=';
    link.download = 'Hardik_Madaan_CV.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Professional Headshot Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center glass border-2 border-primary/30">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">
              HM
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Hardik Madaan
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer & Bug Bounty Hunter 
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Creating and securing intelligent web experiences
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleDownloadCV}
              className="btn-hero-primary flex items-center gap-3 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </button>
            
            <button
              onClick={scrollToContact}
              className="btn-hero-secondary flex items-center gap-3 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[var(--hero-gradient)] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;