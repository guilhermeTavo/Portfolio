import { useState, useEffect } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface Translations {
  pt: Record<string, string>;
  en: Record<string, string>;
  es: Record<string, string>;
}

export const translations: Translations = {
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.certifications': 'Formação',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // Hero Section
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Desenvolvedor Front-End | Full Stack',
    'hero.description': 'Desenvolvedor Web altamente motivado e focado em resultados, especializado na criação de interfaces modernas, responsivas e altamente funcionais.',
    'hero.cta': 'Ver Projetos',
    'hero.contact': 'Fale Comigo',

    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor apaixonado por tecnologia',
    'about.description': 'Com sólida base em desenvolvimento Full Stack, domino tecnologias essenciais como HTML5, CSS3, JavaScript (ES6+), jQuery e PHP, complementadas por expertise em bancos de dados MySQL. Sou movido por desafios e estou em constante aprendizado e evolução. Além da programação, utilizo minhas habilidades em edição profissional de vídeos para redes sociais.',

    // Certifications
    'certifications.title': 'Formação',
    'certifications.subtitle': 'Educação e desenvolvimento',

    // Experience
    'experience.title': 'Experiência',
    'experience.subtitle': 'Minha jornada profissional',

    // Projects
    'projects.title': 'Projetos',
    'projects.subtitle': 'Trabalhos e cases de sucesso',
    'projects.viewDemo': 'Ver Site',
    'projects.viewCode': 'Contato',

    // Contact
    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Entre em contato',
    'contact.description': 'Estou sempre aberto a discutir novos projetos, oportunidades ou apenas bater um papo sobre tecnologia. Vamos trabalhar juntos!',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.certifications': 'Education',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Front-End | Full Stack Developer',
    'hero.description': 'Highly motivated and results-focused web developer, specialized in creating modern, responsive and highly functional interfaces.',
    'hero.cta': 'View Projects',
    'hero.contact': 'Get In Touch',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Developer passionate about technology',
    'about.description': 'With a solid foundation in Full Stack development, I master essential technologies like HTML5, CSS3, JavaScript (ES6+), jQuery and PHP, complemented by expertise in MySQL databases. I am driven by challenges and constantly learning and evolving. In addition to programming, I use my professional video editing skills for social media.',

    // Certifications
    'certifications.title': 'Education',
    'certifications.subtitle': 'Learning and development',

    // Experience
    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey',

    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Work and success cases',
    'projects.viewDemo': 'View Site',
    'projects.viewCode': 'Contact',

    // Contact
    'contact.title': 'Let\'s Talk',
    'contact.subtitle': 'Get in touch',
    'contact.description': 'I\'m always open to discussing new projects, opportunities or just chatting about technology. Let\'s work together!',
  },
  es: {
    // Navigation
    'nav.about': 'Acerca',
    'nav.certifications': 'Formación',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrollador Front-End | Full Stack',
    'hero.description': 'Desarrollador Web altamente motivado y enfocado en resultados, especializado en crear interfaces modernas, responsivas y altamente funcionales.',
    'hero.cta': 'Ver Proyectos',
    'hero.contact': 'Contáctame',

    // About
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Desarrollador apasionado por la tecnología',
    'about.description': 'Con una sólida base en desarrollo Full Stack, domino tecnologías esenciales como HTML5, CSS3, JavaScript (ES6+), jQuery y PHP, complementadas por experiencia en bases de datos MySQL. Me impulsan los desafíos y estoy en constante aprendizaje y evolución. Además de la programación, utilizo mis habilidades en edición profesional de videos para redes sociales.',

    // Certifications
    'certifications.title': 'Formación',
    'certifications.subtitle': 'Aprendizaje y desarrollo',

    // Experience
    'experience.title': 'Experiencia',
    'experience.subtitle': 'Mi trayectoria profesional',

    // Projects
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Trabajos y casos de éxito',
    'projects.viewDemo': 'Ver Sitio',
    'projects.viewCode': 'Contacto',

    // Contact
    'contact.title': 'Hablemos',
    'contact.subtitle': 'Ponte en contacto',
    'contact.description': '¡Siempre estoy abierto a discutir nuevos proyectos, oportunidades o simplemente charlar sobre tecnología. Trabajemos juntos!',
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'pt';
    const saved = localStorage.getItem('portfolio-language');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-language', language);
      // Force re-render of components by triggering a page refresh
      window.dispatchEvent(new Event('languageChanged'));
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return { language, setLanguage, t };
};