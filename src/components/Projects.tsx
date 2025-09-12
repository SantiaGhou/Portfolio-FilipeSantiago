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
              onMouseMove={(e) => handleMouseMove(e, project.id)}
            >
              {/* Glow Effect */}
              <div className={styles.cardGlow}></div>
              
              {/* Border Gradient */}
              <div className={styles.cardBorder}></div>
              
              <div className={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.image}
                  loading="lazy"
                />
                
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayPattern}></div>
                </div>

                <div className={styles.projectActions}>
                  <div className={styles.actionButtons}>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.githubButton}`}
                      aria-label="View source code"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.liveButton}`}
                      aria-label="View live demo"
                    >
                      <Eye size={18} />
                    </a>
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
                    <ArrowUpRight size={20} className={styles.titleIcon} />
                  </h3>
                  
                  {project.year && (
                    <div className={styles.projectMeta}>
                      <Calendar size={14} />
                      <span>{project.year}</span>
                    </div>
                  )}
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={styles.tag}
                      style={{ '--tag-index': tagIndex } as React.CSSProperties}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Progress Bar for Completion Status */}
                {project.status && (
                  <div className={styles.statusBar}>
                    <div className={styles.statusLabel}>Status</div>
                    <div className={styles.statusProgress}>
                      <div 
                        className={`${styles.statusFill} ${styles[`status${project.status}`]}`}
                        style={{ '--progress': project.progress || 100 } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Action Button */}
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.floatingAction}
                aria-label="Quick view"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{projects.length}</span>
            <span className={styles.statLabel}>Total Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>
              {projects.filter(p => p.category === 'fullstack').length}
            </span>
            <span className={styles.statLabel}>Full Stack</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>
              {new Set(projects.flatMap(p => p.tags)).size}
            </span>
            <span className={styles.statLabel}>Technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;