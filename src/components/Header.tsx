import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'certifications', label: t('nav.certifications') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom section-padding py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Button
              variant="ghost"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold text-gradient hover:bg-transparent"
            >
              Portfolio
            </Button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map(({ id, label }) => (
                <Button
                  key={id}
                  variant="ghost"
                  onClick={() => scrollToSection(id)}
                  className="hover:text-accent transition-colors"
                >
                  {label}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;