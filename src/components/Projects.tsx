import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects, Project } from '../data/projects';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.description}>
            Explore my latest work showcasing modern web development practices, 
            innovative solutions, and attention to detail in every project.
          </p>
          
          <div className={styles.filters}>
            {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
              <button 
                key={category}
                className={`${styles.filterButton} ${filter === category ? styles.filterButtonActive : ''}`}
                onClick={() => setFilter(category as typeof filter)}
              >
                {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <span className={styles.category}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;