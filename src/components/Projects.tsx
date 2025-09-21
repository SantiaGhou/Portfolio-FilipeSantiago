import React, { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, Eye, Star, Calendar, ArrowUpRight } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, projectId: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`${styles.projects} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
          <div className={styles.gridPattern}></div>
        </div>

        <div className={styles.header}>
          
          <h2 className={styles.title}>
            <span className={styles.titleGradient}>{t('projects.title')}</span>
          </h2>
          
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
                <span className={styles.filterText}>
                  {category === 'all' ? t('projects.all') : t(`projects.${category}`)}
                </span>
                <span className={styles.filterGlow}></span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`${styles.card} ${hoveredCard === project.id ? styles.cardHovered : ''}`}
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.image}
                  loading="lazy"
                />
                
                <div className={styles.imageOverlay}>
                </div>

                <div className={styles.projectActions}>
                  <div className={styles.actionButtons}>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionButton} ${styles.githubButton}`}
                        aria-label="View source code"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionButton} ${styles.liveButton}`}
                        aria-label="View live demo"
                      >
                        <Eye size={16} />
                      </a>
                    )}
                  </div>
                  
                  <div className={styles.categoryBadge}>
                    <span className={styles.categoryText}>{project.category}</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.content}>
                <div className={styles.contentHeader}>
                  <h3 className={styles.projectTitle}>
                    {project.title}
                    <ArrowUpRight size={16} className={styles.titleIcon} />
                  </h3>
                  
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={styles.tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.floatingAction}
                  aria-label="Quick view"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;