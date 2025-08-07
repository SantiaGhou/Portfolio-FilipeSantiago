import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

const skillCategories = [
  {
    title: t('skills.frontend'),
    skills: [
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React.js', level: 88 },
      { name: 'Next.js', level: 82 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Vue.js', level: 75 },
      { name: 'Angular', level: 70 }
    ]
  },
  {
    title: t('skills.backend'),
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'Python', level: 78 },
      { name: 'Django/FastAPI', level: 75 },
      { name: 'Java', level: 88 },
      { name: 'Spring Boot', level: 82 },
      { name: 'RESTful APIs', level: 88 },
      { name: 'GraphQL', level: 72 },
      { name: 'Microservices', level: 70 }
    ]
  },
  {
    title: t('skills.database'),
    skills: [
      { name: 'PostgreSQL', level: 78 },
      { name: 'MySQL', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'Kubernetes', level: 70 },
      { name: 'AWS', level: 68 },
      { name: 'Microsoft Azure', level: 65 },
      { name: 'Google Cloud Platform', level: 60 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'CI/CD Pipelines', level: 65 }
    ]
  }
];


  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('skills.title')}</h2>
          <p className={styles.description}>
            {t('skills.description')}
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className={styles.card}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, index) => (
                  <div key={index} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;