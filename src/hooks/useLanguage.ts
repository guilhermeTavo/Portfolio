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
    'nav.certifications': 'Certificações',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // Hero Section
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Desenvolvedor Full Stack & Designer',
    'hero.description': 'Apaixonado por criar experiências digitais incríveis com código limpo e design elegante.',
    'hero.cta': 'Ver Projetos',
    'hero.contact': 'Fale Comigo',

    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor apaixonado por tecnologia',
    'about.description': 'Sou um desenvolvedor full stack com experiência em React, Node.js e design de interfaces. Gosto de transformar ideias em produtos digitais funcionais e belos.',

    // Certifications
    'certifications.title': 'Certificações',
    'certifications.subtitle': 'Conhecimento validado',

    // Experience
    'experience.title': 'Experiência',
    'experience.subtitle': 'Minha jornada profissional',

    // Projects
    'projects.title': 'Projetos',
    'projects.subtitle': 'Trabalhos recentes',
    'projects.viewDemo': 'Ver Demo',
    'projects.viewCode': 'Ver Código',

    // Contact
    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Entre em contato',
    'contact.description': 'Estou sempre aberto a discutir novos projetos, oportunidades ou apenas bater um papo sobre tecnologia.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.certifications': 'Certifications',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Full Stack Developer & Designer',
    'hero.description': 'Passionate about creating amazing digital experiences with clean code and elegant design.',
    'hero.cta': 'View Projects',
    'hero.contact': 'Get In Touch',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Developer passionate about technology',
    'about.description': 'I\'m a full stack developer with experience in React, Node.js and interface design. I enjoy transforming ideas into functional and beautiful digital products.',

    // Certifications
    'certifications.title': 'Certifications',
    'certifications.subtitle': 'Validated knowledge',

    // Experience
    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey',

    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Recent work',
    'projects.viewDemo': 'View Demo',
    'projects.viewCode': 'View Code',

    // Contact
    'contact.title': 'Let\'s Talk',
    'contact.subtitle': 'Get in touch',
    'contact.description': 'I\'m always open to discussing new projects, opportunities or just chatting about technology.',
  },
  es: {
    // Navigation
    'nav.about': 'Acerca',
    'nav.certifications': 'Certificaciones',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrollador Full Stack & Diseñador',
    'hero.description': 'Apasionado por crear experiencias digitales increíbles con código limpio y diseño elegante.',
    'hero.cta': 'Ver Proyectos',
    'hero.contact': 'Contáctame',

    // About
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Desarrollador apasionado por la tecnología',
    'about.description': 'Soy un desarrollador full stack con experiencia en React, Node.js y diseño de interfaces. Me gusta transformar ideas en productos digitales funcionales y hermosos.',

    // Certifications
    'certifications.title': 'Certificaciones',
    'certifications.subtitle': 'Conocimiento validado',

    // Experience
    'experience.title': 'Experiencia',
    'experience.subtitle': 'Mi trayectoria profesional',

    // Projects
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Trabajos recientes',
    'projects.viewDemo': 'Ver Demo',
    'projects.viewCode': 'Ver Código',

    // Contact
    'contact.title': 'Hablemos',
    'contact.subtitle': 'Ponte en contacto',
    'contact.description': 'Siempre estoy abierto a discutir nuevos proyectos, oportunidades o simplemente charlar sobre tecnología.',
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return { language, setLanguage, t };
};