import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-md py-4' : 'py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-primary">HARDIK MADAAN</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Experience
          </button>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg glass hover:bg-primary/10 transition-colors duration-200"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;