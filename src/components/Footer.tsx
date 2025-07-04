import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground section-padding py-12">
      <div className="container-custom">
        <div className="text-center">
          <Button
            onClick={scrollToTop}
            variant="ghost"
            className="text-2xl font-bold mb-6 text-primary-foreground hover:text-accent hover:bg-transparent"
          >
            Portfolio
          </Button>
          
          <p className="text-primary-foreground/80 mb-6">
            Desenvolvedor Full Stack & Designer
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:joao.silva@email.com"
              className="text-primary-foreground/80 hover:text-accent-glow transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/joao-silva-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent-glow transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/joao-silva-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent-glow transition-colors"
            >
              GitHub
            </a>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm text-primary-foreground/60">
              © 2024 João Silva. Desenvolvido com ❤️ usando React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;