import React, { createContext, useContext, useState, useEffect } from 'react';

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
    'about.description': 'Com sólida base em desenvolvimento Full Stack, domino tecnologias essenciais como HTML5, CSS3, JavaScript (ES6+), TypeScript, jQuery e PHP, complementadas por expertise em bancos de dados MySQL. Sou movido por desafios e estou em constante aprendizado e evolução. Além da programação, utilizo minhas habilidades em edição profissional de vídeos para redes sociais.',

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
  
  //Projetos  
  'projects.1.title': 'Floreslândia E-commerce',
'projects.1.description': 'E-commerce completo de floricultura desenvolvido do zero, desde o design até o backend. Site com milhares de acessos mensais e alta conversão em vendas. Implementação de SEO técnico, integração com WhatsApp e sistema de pedidos otimizado.',

'projects.2.title': 'Gerador de Currículos',
'projects.2.description': 'Gerador de Currículos Online desenvolvido 100% em frontend, com foco em performance e usabilidade. Permite criar currículos personalizados em PDF de forma rápida e intuitiva. Construído com TypeScript, PHP e tecnologias modernas da web.',

'projects.3.title': 'Landing Pages Responsivas',
'projects.3.description': 'Desenvolvimento de landing pages otimizadas para conversão, com design moderno e carregamento rápido. Integração com ferramentas de analytics e formulários.',

'projects.4.title': 'Edição de Vídeos Profissional',
'projects.4.description': 'Produção de conteúdo audiovisual para redes sociais, incluindo Reels e Shorts. Edição profissional com foco em engajamento e qualidade visual.',

    //Experiencias
    'experience.1.title': 'Desenvolvedor Web',
'experience.1.company': 'Agência Class',
'experience.1.period': 'Nov/2022 - Atualmente',
'experience.1.description': 'Desenvolvimento e manutenção de sistemas web escaláveis utilizando PHP, JavaScript, HTML5, CSS3 e MySQL. Implementação de interfaces responsivas e otimizadas, aprimorando a experiência do usuário. Integração com diversas APIs REST e otimização de queries SQL para melhoria da performance do sistema.',

'experience.2.title': 'Editor de Vídeo',
'experience.2.company': 'Freelancer',
'experience.2.period': 'Jun/2020 - Ago/2022',
'experience.2.description': 'Edição de vídeos dinâmicos para plataformas de redes sociais, incluindo Reels e Shorts. Gerenciamento da comunicação remota com clientes e produção de conteúdo audiovisual de alta qualidade.',
    
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
    'about.description': 'With a solid foundation in Full Stack development, I master essential technologies like HTML5, CSS3, JavaScript (ES6+), TypeScript, jQuery and PHP, complemented by expertise in MySQL databases. I am driven by challenges and constantly learning and evolving. In addition to programming, I use my professional video editing skills for social media.',

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

    //Projetos
    'projects.1.title': 'Floreslândia E-commerce',
'projects.1.description': 'Complete flower shop e-commerce developed from scratch, including design and backend. Thousands of monthly visits and high sales conversion. Includes technical SEO, WhatsApp integration, and optimized order system.',

'projects.2.title': 'Resume Generator',
'projects.2.description': 'Online Resume Generator fully built on the frontend, focused on performance and usability. Easily create customized PDF resumes quickly and intuitively. Built with TypeScript, PHP, and modern web technologies.',

'projects.3.title': 'Responsive Landing Pages',
'projects.3.description': 'Development of conversion-optimized landing pages with modern design and fast load speed. Integrated with analytics tools and contact forms.',

'projects.4.title': 'Professional Video Editing',
'projects.4.description': 'Audiovisual content production for social media, including Reels and Shorts. Professional editing focused on engagement and visual quality.',

      //XP
      'experience.1.title': 'Web Developer',
'experience.1.company': 'Agência Class',
'experience.1.period': 'Nov/2022 - Present',
'experience.1.description': 'Development and maintenance of scalable web systems using PHP, JavaScript, HTML5, CSS3, and MySQL. Implementation of responsive and optimized interfaces to enhance user experience. Integration with various REST APIs and optimization of SQL queries to improve system performance.',

'experience.2.title': 'Video Editor',
'experience.2.company': 'Freelancer',
'experience.2.period': 'Jun/2020 - Aug/2022',
'experience.2.description': 'Editing dynamic videos for social media platforms, including Reels and Shorts. Managed remote communication with clients and delivered high-quality audiovisual content.',


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
    'about.description': 'Con una sólida base en desarrollo Full Stack, domino tecnologías esenciales como HTML5, CSS3, JavaScript (ES6+), TypeScript, jQuery y PHP, complementadas por experiencia en bases de datos MySQL. Me impulsan los desafíos y estoy en constante aprendizaje y evolución. Además de la programación, utilizo mis habilidades en edición profesional de videos para redes sociales.',

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

    //Projetos

    'projects.1.title': 'Floreslândia E-commerce',
'projects.1.description': 'E-commerce completo para floristería desarrollado desde cero, incluyendo diseño y backend. Miles de visitas mensuales y alta conversión en ventas. Incluye SEO técnico, integración con WhatsApp y sistema de pedidos optimizado.',

'projects.2.title': 'Generador de Currículums',
'projects.2.description': 'Generador de currículums en línea desarrollado completamente en frontend, enfocado en rendimiento y usabilidad. Permite crear currículums PDF personalizados de forma rápida e intuitiva. Construido con TypeScript, PHP y tecnologías web modernas.',

'projects.3.title': 'Landing Pages Responsivas',
'projects.3.description': 'Desarrollo de landing pages optimizadas para la conversión, con diseño moderno y carga rápida. Integración con herramientas de análisis y formularios.',

'projects.4.title': 'Edición de Videos Profesional',
'projects.4.description': 'Producción de contenido audiovisual para redes sociales, incluidos Reels y Shorts. Edición profesional enfocada en el compromiso y la calidad visual.',

      //Xp
      'experience.1.title': 'Desarrollador Web',
'experience.1.company': 'Agência Class',
'experience.1.period': 'Nov/2022 - Actualidad',
'experience.1.description': 'Desarrollo y mantenimiento de sistemas web escalables utilizando PHP, JavaScript, HTML5, CSS3 y MySQL. Implementación de interfaces responsivas y optimizadas para mejorar la experiencia del usuario. Integración con varias APIs REST y optimización de consultas SQL para mejorar el rendimiento del sistema.',

'experience.2.title': 'Editor de Video',
'experience.2.company': 'Freelancer',
'experience.2.period': 'Jun/2020 - Ago/2022',
'experience.2.description': 'Edición de videos dinámicos para plataformas de redes sociales, incluyendo Reels y Shorts. Gestión de la comunicación remota con clientes y producción de contenido audiovisual de alta calidad.',


    
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'pt';
    const saved = localStorage.getItem('portfolio-language');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-language', language);
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
