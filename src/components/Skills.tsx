import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code, Database, Globe, Smartphone, Server, Wrench } from 'lucide-react';
import styles from './Skills.module.css';

interface SkillWithIcon {
  name: string;
  icon: string;
  color: string;
  url: string;
  category: string;
  level: number;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const detectTheme = () => {
      const skillsElement = document.getElementById('skills');
      const theme = skillsElement?.getAttribute('data-theme') || 
                   document.documentElement.getAttribute('data-theme') ||
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setIsDarkTheme(theme === 'dark');
    };

    detectTheme();

    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      intersectionObserver.observe(skillsSection);
    }

    return () => {
      observer.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  const needsInversion = (iconName: string) => {
    const darkIcons = ['nextjs', 'express', 'github', 'vercel', 'markdown'];
    return darkIcons.includes(iconName);
  };

  const getIconFilter = (iconName: string) => {
    if (needsInversion(iconName)) {
      return isDarkTheme ? 'brightness(0) invert(1)' : 'none';
    }
    return 'none';
  };

  const getIconUrl = (iconName: string): string => {
    const iconMap: { [key: string]: string } = {
      'html5': 'html5/html5-original.svg',
      'css3': 'css3/css3-original.svg',
      'javascript': 'javascript/javascript-original.svg',
      'typescript': 'typescript/typescript-original.svg',
      'react': 'react/react-original.svg',
      'nextjs': 'nextjs/nextjs-original-wordmark.svg',
      'vuejs': 'vuejs/vuejs-original.svg',
      'tailwindcss': 'tailwindcss/tailwindcss-original.svg',
      'sass': 'sass/sass-original.svg',
      'bootstrap': 'bootstrap/bootstrap-original.svg',
      'materialui': 'materialui/materialui-original.svg',
      'nodejs': 'nodejs/nodejs-original.svg',
      'express': 'express/express-original.svg',
      'python': 'python/python-original.svg',
      'django': 'django/django-plain.svg',
      'fastapi': 'fastapi/fastapi-original.svg',
      'java': 'java/java-original.svg',
      'spring': 'spring/spring-original.svg',
      'php': 'php/php-original.svg',
      'laravel': 'laravel/laravel-original.svg',
      'graphql': 'graphql/graphql-plain.svg',
      'postgresql': 'postgresql/postgresql-original.svg',
      'mysql': 'mysql/mysql-original.svg',
      'mongodb': 'mongodb/mongodb-original.svg',
      'redis': 'redis/redis-original.svg',
      'firebase': 'firebase/firebase-plain.svg',
      'sqlite': 'sqlite/sqlite-original.svg',
      'supabase': 'supabase/supabase-original.svg',
      'prisma': 'prisma/prisma-original.svg',
      'docker': 'docker/docker-original.svg',
      'git': 'git/git-original.svg',
      'github': 'github/github-original.svg',
      'vscode': 'vscode/vscode-original.svg',
      'figma': 'figma/figma-original.svg',
      'postman': 'postman/postman-original.svg',
      'webpack': 'webpack/webpack-original.svg',
      'vite': 'vite/vite-original.svg',
      'eslint': 'eslint/eslint-original.svg',
      'jest': 'jest/jest-plain.svg',
      'vercel': 'vercel/vercel-original.svg',
      'netlify': 'netlify/netlify-original.svg',
      'amazonwebservices': 'amazonwebservices/amazonwebservices-original-wordmark.svg',
      'reactnative': 'react/react-original.svg',
      'flutter': 'flutter/flutter-original.svg',
      'expo': 'expo/expo-original.svg',
      'ionic': 'ionic/ionic-original.svg',
    };
    
    // Ícones especiais que usam URLs alternativas
    const specialIcons: { [key: string]: string } = {
      'prettier': 'https://prettier.io/icon.png',
      'cypress': 'https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg',
      'styledcomponents': 'https://styled-components.com/logo.png',
      'laravel': 'https://laravel.com/img/logomark.min.svg'
    };
    
    // Verificar se é um ícone especial primeiro
    if (specialIcons[iconName]) {
      return specialIcons[iconName];
    }
    
    const iconPath = iconMap[iconName];
    if (!iconPath) {
      return '';
    }
    
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}`;
  };

  const skillsWithIcons: SkillWithIcon[] = [
    // Frontend
    { name: 'HTML5', icon: 'html5', color: '#E34F26', url: 'https://developer.mozilla.org/docs/Web/HTML', category: 'frontend', level: 90 },
    { name: 'CSS3', icon: 'css3', color: '#1572B6', url: 'https://developer.mozilla.org/docs/Web/CSS', category: 'frontend', level: 85 },
    { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', url: 'https://developer.mozilla.org/docs/Web/JavaScript', category: 'frontend', level: 88 },
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6', url: 'https://www.typescriptlang.org', category: 'frontend', level: 82 },
    { name: 'React.js', icon: 'react', color: '#61DAFB', url: 'https://react.dev', category: 'frontend', level: 85 },
    { name: 'Next.js', icon: 'nextjs', color: '#000000', url: 'https://nextjs.org', category: 'frontend', level: 75 },
    { name: 'Vue.js', icon: 'vuejs', color: '#4FC08D', url: 'https://vuejs.org', category: 'frontend', level: 70 },
    { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#06B6D4', url: 'https://tailwindcss.com', category: 'frontend', level: 80 },
    { name: 'Sass/SCSS', icon: 'sass', color: '#CC6699', url: 'https://sass-lang.com', category: 'frontend', level: 75 },
    { name: 'Bootstrap', icon: 'bootstrap', color: '#7952B3', url: 'https://getbootstrap.com', category: 'frontend', level: 78 },
    { name: 'Material-UI', icon: 'materialui', color: '#0081CB', url: 'https://mui.com', category: 'frontend', level: 72 },
    { name: 'Styled Components', icon: 'styledcomponents', color: '#DB7093', url: 'https://styled-components.com', category: 'frontend', level: 70 },
    
    // Backend
    { name: 'Node.js', icon: 'nodejs', color: '#339933', url: 'https://nodejs.org', category: 'backend', level: 80 },
    { name: 'Express.js', icon: 'express', color: '#000000', url: 'https://expressjs.com', category: 'backend', level: 78 },
    { name: 'Python', icon: 'python', color: '#3776AB', url: 'https://www.python.org', category: 'backend', level: 85 },
    { name: 'Django', icon: 'django', color: '#092E20', url: 'https://www.djangoproject.com', category: 'backend', level: 70 },
    { name: 'FastAPI', icon: 'fastapi', color: '#009688', url: 'https://fastapi.tiangolo.com', category: 'backend', level: 75 },
    { name: 'Java', icon: 'java', color: '#007396', url: 'https://www.oracle.com/java', category: 'backend', level: 72 },
    { name: 'Spring Boot', icon: 'spring', color: '#6DB33F', url: 'https://spring.io/projects/spring-boot', category: 'backend', level: 68 },
    { name: 'PHP', icon: 'php', color: '#777BB4', url: 'https://www.php.net', category: 'backend', level: 65 },
    { name: 'Laravel', icon: 'laravel', color: '#FF2D20', url: 'https://laravel.com', category: 'backend', level: 62 },
    { name: 'GraphQL', icon: 'graphql', color: '#E10098', url: 'https://graphql.org', category: 'backend', level: 60 },
    
    // Database
    { name: 'PostgreSQL', icon: 'postgresql', color: '#336791', url: 'https://www.postgresql.org', category: 'database', level: 75 },
    { name: 'MySQL', icon: 'mysql', color: '#4479A1', url: 'https://www.mysql.com', category: 'database', level: 70 },
    { name: 'MongoDB', icon: 'mongodb', color: '#47A248', url: 'https://www.mongodb.com', category: 'database', level: 68 },
    { name: 'Redis', icon: 'redis', color: '#DC382D', url: 'https://redis.io', category: 'database', level: 65 },
    { name: 'Firebase', icon: 'firebase', color: '#FFCA28', url: 'https://firebase.google.com', category: 'database', level: 70 },
    { name: 'SQLite', icon: 'sqlite', color: '#003B57', url: 'https://www.sqlite.org', category: 'database', level: 75 },
    { name: 'Supabase', icon: 'supabase', color: '#3ECF8E', url: 'https://supabase.com', category: 'database', level: 68 },
    { name: 'Prisma', icon: 'prisma', color: '#2D3748', url: 'https://www.prisma.io', category: 'database', level: 65 },
    
    // Tools
    { name: 'Docker', icon: 'docker', color: '#2496ED', url: 'https://www.docker.com', category: 'tools', level: 70 },
    { name: 'Git', icon: 'git', color: '#F05032', url: 'https://git-scm.com', category: 'tools', level: 85 },
    { name: 'GitHub', icon: 'github', color: '#181717', url: 'https://github.com', category: 'tools', level: 80 },
    { name: 'VS Code', icon: 'vscode', color: '#007ACC', url: 'https://code.visualstudio.com', category: 'tools', level: 90 },
    { name: 'Figma', icon: 'figma', color: '#F24E1E', url: 'https://www.figma.com', category: 'tools', level: 75 },
    { name: 'Postman', icon: 'postman', color: '#FF6C37', url: 'https://www.postman.com', category: 'tools', level: 80 },
    { name: 'Webpack', icon: 'webpack', color: '#8DD6F9', url: 'https://webpack.js.org', category: 'tools', level: 65 },
    { name: 'Vite', icon: 'vite', color: '#646CFF', url: 'https://vitejs.dev', category: 'tools', level: 78 },
    { name: 'ESLint', icon: 'eslint', color: '#4B32C3', url: 'https://eslint.org', category: 'tools', level: 75 },
    { name: 'Prettier', icon: 'prettier', color: '#F7B93E', url: 'https://prettier.io', category: 'tools', level: 80 },
    { name: 'Jest', icon: 'jest', color: '#C21325', url: 'https://jestjs.io', category: 'tools', level: 70 },
    { name: 'Cypress', icon: 'cypress', color: '#17202C', url: 'https://www.cypress.io', category: 'tools', level: 65 },
    { name: 'Vercel', icon: 'vercel', color: '#000000', url: 'https://vercel.com', category: 'tools', level: 75 },
    { name: 'Netlify', icon: 'netlify', color: '#00C7B7', url: 'https://www.netlify.com', category: 'tools', level: 72 },
    { name: 'AWS', icon: 'amazonwebservices', color: '#FF9900', url: 'https://aws.amazon.com', category: 'tools', level: 60 },
    
    // Mobile
    { name: 'React Native', icon: 'reactnative', color: '#61DAFB', url: 'https://reactnative.dev', category: 'mobile', level: 65 },
    { name: 'Flutter', icon: 'flutter', color: '#02569B', url: 'https://flutter.dev', category: 'mobile', level: 60 },
    { name: 'Expo', icon: 'expo', color: '#000020', url: 'https://expo.dev', category: 'mobile', level: 62 },
    { name: 'Ionic', icon: 'ionic', color: '#3880FF', url: 'https://ionicframework.com', category: 'mobile', level: 58 },
  ];

  const categories = [
    { id: 'all', name: 'Todas', icon: <Globe size={18} /> },
    { id: 'frontend', name: 'Frontend', icon: <Code size={18} /> },
    { id: 'backend', name: 'Backend', icon: <Server size={18} /> },
    { id: 'database', name: 'Database', icon: <Database size={18} /> },
    { id: 'mobile', name: 'Mobile', icon: <Smartphone size={18} /> },
    { id: 'tools', name: 'Tools', icon: <Wrench size={18} /> },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsWithIcons 
    : skillsWithIcons.filter(skill => skill.category === activeCategory);

  const handleSkillClick = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="skills" className={styles.skills} data-theme={isDarkTheme ? 'dark' : 'light'}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>{t('skills.title')}</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <p className={styles.description}>
            {t('skills.description')}
          </p>
        </header>

        <nav className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryText}>{category.name}</span>
              <div className={styles.categoryGlow}></div>
            </button>
          ))}
        </nav>

        <div className={styles.skillsContainer}>
          <div className={styles.skillsGrid}>
            {filteredSkills.map((skill, index) => {
              const iconUrl = getIconUrl(skill.icon);
              return (
                <div
                  key={`${skill.name}-${skill.category}`}
                  className={`${styles.skillCard} ${isVisible ? styles.visible : ''}`}
                  style={{ '--index': index, '--skill-color': skill.color } as React.CSSProperties}
                  onClick={() => handleSkillClick(skill.url)}
                  title={`${skill.name} - ${skill.level}% proficiency`}
                >
                  <div className={styles.skillContent}>
                    <div className={styles.skillIcon}>
                      {iconUrl ? (
                        <img 
                          src={iconUrl} 
                          alt={skill.name}
                          style={{
                            filter: getIconFilter(skill.icon)
                          }}
                        />
                      ) : (
                        <div className={styles.fallbackIcon}>
                          {skill.name.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                    
                    <div className={styles.skillInfo}>
                      <h3 className={styles.skillName}>{skill.name}</h3>
                      <div className={styles.skillLevel}>
                        <div className={styles.levelBar}>
                          <div 
                            className={styles.levelFill}
                            style={{ '--level': `${skill.level}%` } as React.CSSProperties}
                          ></div>
                        </div>
                        <span className={styles.levelText}>{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.skillGlow}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;