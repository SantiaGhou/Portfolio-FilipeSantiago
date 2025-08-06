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
      { name: 'TypeScript', level: 88 },
      { name: 'React.js', level: 90 },
      { name: 'Next.js (App Router)', level: 87 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'ShadCN/UI', level: 80 },
      { name: 'Responsive & Accessible Design', level: 90 },
      { name: 'Framer Motion', level: 75 }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'NestJS', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'Python', level: 80 },
      { name: 'FastAPI', level: 78 },
      { name: 'Java (Spring Boot)', level: 75 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
      { name: 'JWT/Auth/Security', level: 82 },
      { name: 'WebSockets & Realtime', level: 78 }
    ]
  },
  {
    title: 'Database & DevOps & Currently Exploring',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'Redis', level: 75 },
      { name: 'Prisma ORM', level: 78 },
      { name: 'PlanetScale / Vercel Postgres', level: 70 },
      { name: 'Docker', level: 80 },
      { name: 'AWS (EC2, S3, RDS)', level: 75 },
      { name: 'Git & GitHub', level: 92 },
      { name: 'CI/CD (GitHub Actions)', level: 70 },
      { name: 'LangChain / LLMs', level: 55 },
    ]
  },
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