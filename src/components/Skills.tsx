import React, { useEffect, useState } from 'react';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React.js', level: 88 },
        { name: 'Next.js', level: 82 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Responsive Design', level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'Python', level: 78 },
        { name: 'Django/FastAPI', level: 75 },
        { name: 'RESTful APIs', level: 88 },
        { name: 'GraphQL', level: 72 },
        { name: 'Microservices', level: 70 },
      ]
    },
    {
      title: 'Database & DevOps',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'Redis', level: 70 },
        { name: 'Docker', level: 75 },
        { name: 'AWS/Cloud', level: 68 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'CI/CD Pipelines', level: 65 },
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technical Skills</h2>
          <p className={styles.description}>
            A comprehensive overview of my technical expertise across the full stack development spectrum, 
            constantly evolving with the latest industry trends and best practices.
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