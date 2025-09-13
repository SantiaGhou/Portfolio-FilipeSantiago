import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Skills.module.css';

interface SkillWithIcon {
  name: string;
  icon: string;
  color: string;
  url: string;
  category: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Detectar tema automaticamente
    const detectTheme = () => {
      const skillsElement = document.getElementById('skills');
      const theme = skillsElement?.getAttribute('data-theme') || 
                   document.documentElement.getAttribute('data-theme') ||
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setIsDarkTheme(theme === 'dark');
    };

    // Detectar tema inicial
    detectTheme();

    // Observer para mudanças de tema
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

  // Função para determinar se um ícone precisa de inversão no tema escuro
  const needsInversion = (iconName: string) => {
    const darkIcons = ['nextjs', 'express', 'github', 'vercel', 'markdown'];
    return darkIcons.includes(iconName);
  };

  // Função para obter o filtro correto do ícone baseado no tema
  const getIconFilter = (iconName: string) => {
    if (needsInversion(iconName)) {
      return isDarkTheme ? 'brightness(0) invert(1)' : 'none';
    }
    return 'none';
  };

  // URLs corretos do Devicon (verificados)
  const getIconUrl = (iconName: string): string => {
    const iconMap: { [key: string]: string } = {
      // Frontend Core
      'html5': 'html5/html5-original.svg',
      'css3': 'css3/css3-original.svg',
      'javascript': 'javascript/javascript-original.svg',
      'typescript': 'typescript/typescript-original.svg',
      
      // Frontend Frameworks & Libraries
      'react': 'react/react-original.svg',
      'nextjs': 'nextjs/nextjs-original-wordmark.svg',
      'vuejs': 'vuejs/vuejs-original.svg',
      'angular': 'angularjs/angularjs-original.svg',
      'svelte': 'svelte/svelte-original.svg',
      
      // CSS Frameworks & Preprocessors
    'tailwindcss': 'tailwindcss/tailwindcss-original.svg',
      'sass': 'sass/sass-original.svg',
      'bootstrap': 'bootstrap/bootstrap-original.svg',
      'materialui': 'materialui/materialui-original.svg',
      
      // Build Tools & Package Managers
      'webpack': 'webpack/webpack-original.svg',
      'vite': 'vite/vite-original.svg',
      'npm': 'npm/npm-original-wordmark.svg',
      'yarn': 'yarn/yarn-original.svg',
      'gulp': 'gulp/gulp-plain.svg',
      
      // Backend Runtime & Frameworks
      'nodejs': 'nodejs/nodejs-original.svg',
      'express': 'express/express-original.svg',
      'python': 'python/python-original.svg',
      'django': 'django/django-plain.svg',
      'fastapi': 'fastapi/fastapi-original.svg',
      'java': 'java/java-original.svg',
      'spring': 'spring/spring-original.svg',
      'php': 'php/php-original.svg',
      'laravel': 'laravel/laravel-plain.svg',
      'csharp': 'csharp/csharp-original.svg',
      'dotnetcore': 'dotnet/dotnet-original.svg',
      'go': 'go/go-original.svg',
      'rust': 'rust/rust-plain.svg',
      
      // API & Query Languages
      'graphql': 'graphql/graphql-plain.svg',
      
      // Databases
      'postgresql': 'postgresql/postgresql-original.svg',
      'mysql': 'mysql/mysql-original.svg',
      'mongodb': 'mongodb/mongodb-original.svg',
      'redis': 'redis/redis-original.svg',
      'sqlite': 'sqlite/sqlite-original.svg',
      'firebase': 'firebase/firebase-plain.svg',
      'supabase': 'supabase/supabase-original.svg',
      'prisma': 'prisma/prisma-original.svg',
      
      // Cloud & DevOps
      'docker': 'docker/docker-original.svg',
      'kubernetes': 'kubernetes/kubernetes-plain.svg',
      'azure': 'azure/azure-original.svg',
      'googlecloud': 'googlecloud/googlecloud-original.svg',
      'digitalocean': 'digitalocean/digitalocean-original.svg',
      'heroku': 'heroku/heroku-original.svg',
      'vercel': 'vercel/vercel-original.svg',
      'netlify': 'netlify/netlify-original.svg',
      'nginx': 'nginx/nginx-original.svg',
      
      // Version Control & CI/CD
      'git': 'git/git-original.svg',
      'github': 'github/github-original.svg',
      'gitlab': 'gitlab/gitlab-original.svg',
      'jenkins': 'jenkins/jenkins-original.svg',
      
      // Testing
      'jest': 'jest/jest-plain.svg',
      'selenium': 'selenium/selenium-original.svg',
      
      // Mobile Development
      'reactnative': 'react/react-original.svg',
      'flutter': 'flutter/flutter-original.svg',
      'kotlin': 'kotlin/kotlin-original.svg',
      'swift': 'swift/swift-original.svg',
      
      // Operating Systems & Tools
      'windows': 'windows8/windows8-original.svg',
      'linux': 'linux/linux-original.svg',
      'ubuntu': 'ubuntu/ubuntu-plain.svg',
      'vscode': 'vscode/vscode-original.svg',
      'intellij': 'intellij/intellij-original.svg',
      'figma': 'figma/figma-original.svg',
      'photoshop': 'photoshop/photoshop-plain.svg',
      'markdown': 'markdown/markdown-original.svg',
    };
    
    const iconPath = iconMap[iconName];
    if (!iconPath) {
      console.warn(`Icon not found for: ${iconName}`);
      return '';
    }
    
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}`;
  };

  // Organização das skills por categoria sem emojis
  const skillsWithIcons: SkillWithIcon[] = [
    // Frontend Core
    { name: 'HTML5', icon: 'html5', color: '#E34F26', url: 'https://developer.mozilla.org/docs/Web/HTML', category: 'frontend' },
    { name: 'CSS3', icon: 'css3', color: '#1572B6', url: 'https://developer.mozilla.org/docs/Web/CSS', category: 'frontend' },
    { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E', url: 'https://developer.mozilla.org/docs/Web/JavaScript', category: 'frontend' },
    { name: 'TypeScript', icon: 'typescript', color: '#3178C6', url: 'https://www.typescriptlang.org', category: 'frontend' },
    
    // Frontend Frameworks
    { name: 'React.js', icon: 'react', color: '#61DAFB', url: 'https://react.dev', category: 'frontend' },
    { name: 'Next.js', icon: 'nextjs', color: '#000000', url: 'https://nextjs.org', category: 'frontend' },
    { name: 'Vue.js', icon: 'vuejs', color: '#4FC08D', url: 'https://vuejs.org', category: 'frontend' },
    { name: 'Angular', icon: 'angular', color: '#DD0031', url: 'https://angular.io', category: 'frontend' },
    { name: 'Svelte', icon: 'svelte', color: '#FF3E00', url: 'https://svelte.dev', category: 'frontend' },
    
    // CSS Frameworks & UI
    { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#06B6D4', url: 'https://tailwindcss.com', category: 'styling' },
    { name: 'Sass/SCSS', icon: 'sass', color: '#CC6699', url: 'https://sass-lang.com', category: 'styling' },
    { name: 'Bootstrap', icon: 'bootstrap', color: '#7952B3', url: 'https://getbootstrap.com', category: 'styling' },
    { name: 'Material-UI', icon: 'materialui', color: '#007FFF', url: 'https://mui.com', category: 'styling' },
    
    // Build Tools & Package Managers
    { name: 'Webpack', icon: 'webpack', color: '#8DD6F9', url: 'https://webpack.js.org', category: 'tools' },
    { name: 'Vite', icon: 'vite', color: '#646CFF', url: 'https://vitejs.dev', category: 'tools' },
    { name: 'npm', icon: 'npm', color: '#CB3837', url: 'https://www.npmjs.com', category: 'tools' },
    { name: 'Yarn', icon: 'yarn', color: '#2C8EBB', url: 'https://yarnpkg.com', category: 'tools' },
    
    // Backend & Runtime
    { name: 'Node.js', icon: 'nodejs', color: '#339933', url: 'https://nodejs.org', category: 'backend' },
    { name: 'Express.js', icon: 'express', color: '#000000', url: 'https://expressjs.com', category: 'backend' },
    { name: 'Python', icon: 'python', color: '#3776AB', url: 'https://www.python.org', category: 'backend' },
    { name: 'Django', icon: 'django', color: '#092E20', url: 'https://www.djangoproject.com', category: 'backend' },
    { name: 'FastAPI', icon: 'fastapi', color: '#009688', url: 'https://fastapi.tiangolo.com', category: 'backend' },
    { name: 'Java', icon: 'java', color: '#007396', url: 'https://www.oracle.com/java', category: 'backend' },
    { name: 'Spring Boot', icon: 'spring', color: '#6DB33F', url: 'https://spring.io/projects/spring-boot', category: 'backend' },
    { name: 'C#', icon: 'csharp', color: '#239120', url: 'https://docs.microsoft.com/en-us/dotnet/csharp', category: 'backend' },
    { name: 'Go', icon: 'go', color: '#00ADD8', url: 'https://golang.org', category: 'backend' },
    
    // Databases
    { name: 'PostgreSQL', icon: 'postgresql', color: '#336791', url: 'https://www.postgresql.org', category: 'database' },
    { name: 'MySQL', icon: 'mysql', color: '#4479A1', url: 'https://www.mysql.com', category: 'database' },
    { name: 'MongoDB', icon: 'mongodb', color: '#47A248', url: 'https://www.mongodb.com', category: 'database' },
    { name: 'Redis', icon: 'redis', color: '#DC382D', url: 'https://redis.io', category: 'database' },
    { name: 'Firebase', icon: 'firebase', color: '#FFCA28', url: 'https://firebase.google.com', category: 'database' },
    { name: 'Supabase', icon: 'supabase', color: '#3ECF8E', url: 'https://supabase.com', category: 'database' },
    { name: 'Prisma', icon: 'prisma', color: '#2D3748', url: 'https://www.prisma.io', category: 'database' },
    
    // Cloud & DevOps
    { name: 'Docker', icon: 'docker', color: '#2496ED', url: 'https://www.docker.com', category: 'devops' },
    { name: 'Kubernetes', icon: 'kubernetes', color: '#326CE5', url: 'https://kubernetes.io', category: 'devops' },
    { name: 'Azure', icon: 'azure', color: '#0078D4', url: 'https://azure.microsoft.com', category: 'devops' },
    { name: 'Google Cloud', icon: 'googlecloud', color: '#4285F4', url: 'https://cloud.google.com', category: 'devops' },
    { name: 'Vercel', icon: 'vercel', color: '#000000', url: 'https://vercel.com', category: 'devops' },
    { name: 'Netlify', icon: 'netlify', color: '#00C7B7', url: 'https://www.netlify.com', category: 'devops' },
    
    // Version Control & Tools
    { name: 'Git', icon: 'git', color: '#F05032', url: 'https://git-scm.com', category: 'tools' },
    { name: 'GitHub', icon: 'github', color: '#181717', url: 'https://github.com', category: 'tools' },
    { name: 'VS Code', icon: 'vscode', color: '#007ACC', url: 'https://code.visualstudio.com', category: 'tools' },
    { name: 'Figma', icon: 'figma', color: '#F24E1E', url: 'https://www.figma.com', category: 'tools' },
    
    // Testing
    { name: 'Jest', icon: 'jest', color: '#C21325', url: 'https://jestjs.io', category: 'testing' },
    
    // Mobile
    { name: 'React Native', icon: 'reactnative', color: '#61DAFB', url: 'https://reactnative.dev', category: 'mobile' },
    { name: 'Flutter', icon: 'flutter', color: '#02569B', url: 'https://flutter.dev', category: 'mobile' },
    
    // System & OS
    { name: 'Windows', icon: 'windows', color: '#0078D6', url: 'https://www.microsoft.com/windows', category: 'system' },
    { name: 'Linux', icon: 'linux', color: '#FCC624', url: 'https://www.linux.org', category: 'system' },
    { name: 'Ubuntu', icon: 'ubuntu', color: '#E95420', url: 'https://ubuntu.com', category: 'system' },
  ];

  const categories = [
    { id: 'all', name: 'Todas', color: '#6366f1' },
    { id: 'frontend', name: 'Frontend', color: '#ef4444' },
    { id: 'backend', name: 'Backend', color: '#22c55e' },
    { id: 'database', name: 'Database', color: '#f59e0b' },
    { id: 'devops', name: 'DevOps', color: '#06b6d4' },
    { id: 'mobile', name: 'Mobile', color: '#a855f7' },
    { id: 'tools', name: 'Tools', color: '#64748b' },
    { id: 'styling', name: 'Styling', color: '#ec4899' },
    { id: 'testing', name: 'Testing', color: '#10b981' },
    { id: 'system', name: 'System', color: '#f97316' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsWithIcons 
    : skillsWithIcons.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('skills.title')}</h2>
          <p className={styles.description}>
            {t('skills.description')}
          </p>
        </div>

        {/* Filtro de categorias */}
        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${styles.categoryButton} ${
                activeCategory === category.id ? styles.active : ''
              }`}
              style={{ '--category-color': category.color } as React.CSSProperties}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de ícones das tecnologias */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, index) => {
            const iconUrl = getIconUrl(skill.icon);
            return (
              <a
                key={`${skill.name}-${skill.category}`}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.skillCard} ${isVisible ? styles.visible : ''}`}
                style={{ 
                  transitionDelay: `${index * 0.05}s`,
                  '--skill-color': skill.color,
                  animationDelay: `${index * 0.1}s`
                } as React.CSSProperties}
                title={`${skill.name} - Clique para saber mais`}
              >
                <div className={styles.skillIcon}>
                  {iconUrl ? (
                    <img 
                      src={iconUrl} 
                      alt={skill.name}
                      style={{
                        width: '40px',
                        height: '40px',
                        filter: getIconFilter(skill.icon)
                      }}
                      onError={(e) => {
                        // Fallback em caso de erro
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.textContent = skill.name.substring(0, 2).toUpperCase();
                        fallback.style.cssText = `
                          width: 40px; 
                          height: 40px; 
                          background: ${skill.color}; 
                          color: white; 
                          border-radius: 8px; 
                          display: flex; 
                          align-items: center; 
                          justify-content: center; 
                          font-weight: bold; 
                          font-size: 14px;
                          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                        `;
                        target.parentNode?.appendChild(fallback);
                      }}
                    />
                  ) : (
                    <div 
                      style={{
                        width: '40px', 
                        height: '40px', 
                        background: skill.color, 
                        color: 'white', 
                        borderRadius: '8px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontWeight: 'bold', 
                        fontSize: '14px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {skill.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <div className={styles.skillGlow}></div>
              </a>
            );
          })}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            "A tecnologia é melhor quando une as pessoas"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;