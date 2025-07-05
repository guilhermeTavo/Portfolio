import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent-glow/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center text-white animate-fade-in">
          <p className="text-xl md:text-2xl mb-4 text-white/80">
            {t('hero.greeting')}
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">Guilherme</span>
            <span className="block accent-neon drop-shadow-lg">Tavares</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-white/90 font-light">
            {t('hero.role')}
          </h2>
          
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/80 leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-neon text-primary-foreground px-8 py-4 text-lg hover-lift neon-glow"
            >
              {t('hero.cta')}
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="hero"
              size="lg"
              className="px-8 py-4 text-lg hover-lift"
            >
              {t('hero.contact')}
            </Button>
          </div>
          
          <div className="animate-bounce-subtle">
            <ArrowDown className="w-6 h-6 mx-auto text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;