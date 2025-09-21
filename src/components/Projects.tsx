import React, { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, Eye, Calendar, Code, Layers, BringToFront,Server } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <BringToFront  size={16} />;
      case 'backend':
        return <Server size={16} />;
      case 'fullstack':
        return <Layers  size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return '#3b82f6';
      case 'backend':
        return '#10b981';
      case 'fullstack':
        return '#8b5cf6';
      default:
        return '#6b7280';
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`${styles.projects} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.backgroundElements}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
          <div className={styles.gridPattern}></div>
        </div>

        <header className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>
              <span className={styles.titleGradient}>{t('projects.title')}</span>
            </h2>
            <div className={styles.titleUnderline}></div>
          </div>
          
          <p className={styles.description}>
            {t('projects.description')}
          </p>
          
          <div className={styles.filters}>
            {(['all', 'frontend', 'backend', 'fullstack'] as const).map((category) => (
              <button 
                key={category}
                className={`${styles.filterButton} ${filter === category ? styles.filterButtonActive : ''}`}
                onClick={() => setFilter(category)}
              >
                <span className={styles.filterIcon}>
                  {getCategoryIcon(category)}
                </span>
                <span className={styles.filterText}>
                  {category === 'all' ? t('projects.all') : t(`projects.${category}`)}
                </span>
                <div className={styles.filterGlow}></div>
              </button>
            ))}
          </div>
        </header>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <article 
              key={project.id} 
              className={`${styles.projectCard} ${selectedProject?.id === project.id ? styles.selected : ''}`}
              style={{ 
                '--delay': `${index * 0.1}s`,
                '--category-color': getCategoryColor(project.category)
              } as React.CSSProperties}
              onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
            >
              <div className={styles.cardHeader}>
                <div className={styles.imageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={styles.projectImage}
                    loading="lazy"
                  />
                  
                  <div className={styles.imageOverlay}>
                    <div className={styles.quickActions}>
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.actionButton} ${styles.githubButton}`}
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View source code"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.actionButton} ${styles.liveButton}`}
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View live demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className={styles.categoryBadge}>
                  <span className={styles.categoryIcon}>
                    {getCategoryIcon(project.category)}
                  </span>
                  <span className={styles.categoryText}>{project.category}</span>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectMeta}>
                    <Calendar size={14} />
                    <span>2024</span>
                  </div>
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={styles.techTag}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className={styles.moreTag}>+{project.tags.length - 4}</span>
                  )}
                </div>

                {selectedProject?.id === project.id && (
                  <div className={styles.expandedContent}>
                    <div className={styles.allTags}>
                      <h4 className={styles.tagsTitle}>Tecnologias utilizadas:</h4>
                      <div className={styles.allTagsList}>
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className={styles.expandedTag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.projectLinks}>
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.projectLink} ${styles.githubLink}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                          <span>Ver Código</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.projectLink} ${styles.liveLink}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Eye size={16} />
                          <span>Ver Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.cardGlow}></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;