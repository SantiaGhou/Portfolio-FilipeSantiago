import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.downloadCV': 'Baixar CV',
    'nav.downloadCVPt': 'Baixar Currículo (PT)',
    'nav.downloadCVEn': 'Download CV (EN)',
    
    // Hero
    'hero.badge': 'Desenvolvedor Fullstack',
    'hero.title': 'Eai beleza 👋 me chamo',
    'hero.name': 'Filipe Santiago',
    'hero.description': 'Desenvolvedor em formação, com entusiasmo genuíno por tecnologia e direcionamento estratégico voltado à consolidação de uma trajetória de excelência e referência no setor.',
    'hero.getInTouch': 'Entre em contato',
    'hero.viewWork': 'Ver meu trabalho',
    
    // About
    'about.title': 'Sobre Mim',
    'about.description': 'Profissional em formação na área de Desenvolvimento de Software, com forte interesse em tecnologia e inovação. Atualmente cursando Bacharelado em Ciência da Computação, dedicando-me à construção de uma base técnica sólida em estruturas de dados, algoritmos e engenharia de software. Foco no aprimoramento contínuo de habilidades práticas e teóricas com o objetivo de atuar de forma estratégica no desenvolvimento de soluções eficientes e escaláveis, visando me tornar uma referência no setor.',
    'about.frontend.title': 'Desenvolvimento Frontend',
    'about.frontend.description': 'Criando interfaces de usuário responsivas e interativas com frameworks e bibliotecas modernas.',
    'about.backend.title': 'Desenvolvimento Backend',
    'about.backend.description': 'Construindo aplicações server-side robustas, APIs e integrações de banco de dados.',
    'about.webapps.title': 'Aplicações Web',
    'about.webapps.description': 'Desenvolvendo aplicações web full-stack com foco em performance e experiência do usuário.',
    'about.bestpractices.title': 'Melhores Práticas',
    'about.bestpractices.description': 'Seguindo padrões da indústria, princípios de código limpo e metodologias de teste rigorosas.',
    'about.database.title': 'Design de Banco de Dados',
    'about.database.description': 'Projetando schemas de banco de dados eficientes e otimizando queries para máxima performance.',
    'about.mobile.title': 'Mobile Responsivo',
    'about.mobile.description': 'Criando experiências perfeitas em todos os dispositivos com abordagem mobile-first.',
    'about.journey.title': 'Minha Jornada',
    'about.journey.text1': 'Comecei minha jornada na programação com paixão por resolver problemas e criar aplicações impactantes. Com uma base sólida em fundamentos de Ciência da Computação, consegui me adaptar rapidamente a novas tecnologias e frameworks.',
    'about.journey.text2': 'Minha abordagem combina expertise técnica com foco em design centrado no usuário, criando aplicações que são não apenas funcionais, mas também intuitivas e agradáveis de usar.',
    'about.stats.experience': 'Anos de Experiência',
    'about.stats.projects': 'Projetos Concluídos',
    'about.stats.technologies': 'Tecnologias',
    'about.stats.clients': 'Clientes Satisfeitos',
    
    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.description': 'Uma visão abrangente da minha expertise técnica em todo o espectro de desenvolvimento full stack, constantemente evoluindo com as últimas tendências e melhores práticas da indústria.',
    'skills.frontend': 'Desenvolvimento Frontend',
    'skills.backend': 'Desenvolvimento Backend',
    'skills.database': 'Banco de Dados & DevOps',
    
    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.description': 'Explore meus trabalhos mais recentes mostrando práticas modernas de desenvolvimento web, soluções inovadoras e atenção aos detalhes em cada projeto.',
    'projects.all': 'Todos os Projetos',
    'projects.frontend': 'Frontend',
    'projects.backend': 'Backend',
    'projects.fullstack': 'Fullstack',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.description': 'Tem um projeto em mente ou quer discutir uma possível colaboração? Adoraria ouvir de você!',
    'contact.info': 'Informações de Contato',
    'contact.location': 'Localização',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.connect': 'Conecte-se comigo',
    'contact.form.title': 'Envie uma Mensagem',
    'contact.form.name': 'Seu Nome',
    'contact.form.email': 'Seu Email',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Obrigado pela sua mensagem! Entrarei em contato em breve.',
    
    // Footer
    'footer.copyright': 'Todos os direitos reservados.',
    'footer.made': 'Feito com',
    'footer.tech': 'e tecnologias web modernas'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.downloadCV': 'Download CV',
    'nav.downloadCVPt': 'Download CV (PT)',
    'nav.downloadCVEn': 'Download CV (EN)',
    
    // Hero
    'hero.badge': 'Fullstack Developer',
    'hero.title': 'Hey there 👋 I\'m',
    'hero.name': 'Filipe Santiago',
    'hero.description': 'I\'m a developer in training, passionate about technology and focused on becoming a reference in the field.',
    'hero.getInTouch': 'Get in touch',
    'hero.viewWork': 'View my work',
    
    // About
    'about.title': 'About Me',
    'about.description': 'I\'m a developer in training, passionate about technology and focused on becoming a reference in the field. Currently, I\'m deepening my knowledge in Computer Science, where I\'ve been building a solid foundation in programming and problem-solving.',
    'about.frontend.title': 'Frontend Development',
    'about.frontend.description': 'Creating responsive and interactive user interfaces with modern frameworks and libraries.',
    'about.backend.title': 'Backend Development',
    'about.backend.description': 'Building robust server-side applications, APIs, and database integrations.',
    'about.webapps.title': 'Web Applications',
    'about.webapps.description': 'Developing full-stack web applications with focus on performance and user experience.',
    'about.bestpractices.title': 'Best Practices',
    'about.bestpractices.description': 'Following industry standards, clean code principles, and thorough testing methodologies.',
    'about.database.title': 'Database Design',
    'about.database.description': 'Designing efficient database schemas and optimizing queries for maximum performance.',
    'about.mobile.title': 'Mobile Responsive',
    'about.mobile.description': 'Creating seamless experiences across all devices with mobile-first design approach.',
    'about.journey.title': 'My Journey',
    'about.journey.text1': 'I started my programming journey with a passion for solving problems and creating impactful applications. With a strong foundation in Computer Science fundamentals, I\'ve been able to quickly adapt to new technologies and frameworks.',
    'about.journey.text2': 'My approach combines technical expertise with a focus on user-centered design, creating applications that are not only functional but also intuitive and enjoyable to use.',
    'about.stats.experience': 'Years Experience',
    'about.stats.projects': 'Projects Completed',
    'about.stats.technologies': 'Technologies',
    'about.stats.clients': 'Satisfied Clients',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.description': 'A comprehensive overview of my technical expertise across the full stack development spectrum, constantly evolving with the latest industry trends and best practices.',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database & DevOps',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.description': 'Explore my latest work showcasing modern web development practices, innovative solutions, and attention to detail in every project.',
    'projects.all': 'All Projects',
    'projects.frontend': 'Frontend',
    'projects.backend': 'Backend',
    'projects.fullstack': 'Fullstack',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'Have a project in mind or want to discuss a potential collaboration? I\'d love to hear from you!',
    'contact.info': 'Contact Information',
    'contact.location': 'Location',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.connect': 'Connect with me',
    'contact.form.title': 'Send Me a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Thanks for your message! I will get back to you soon.',
    
    // Footer
    'footer.copyright': 'All rights reserved.',
    'footer.made': 'Made with',
    'footer.tech': 'and modern web technologies'
  }
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    return savedLanguage || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'pt' ? 'en' : 'pt'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};