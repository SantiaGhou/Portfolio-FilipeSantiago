import React from 'react';
import { Code, Server, Globe, Award, Database, Smartphone } from 'lucide-react';
import styles from './About.module.css';

const About: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with modern frameworks and libraries.',
    },
    {
      icon: <Server className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: 'Backend Development',
      description: 'Building robust server-side applications, APIs, and database integrations.',
    },
    {
      icon: <Globe className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: 'Web Applications',
      description: 'Developing full-stack web applications with focus on performance and user experience.',
    },
    {
      icon: <Award className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: 'Best Practices',
      description: 'Following industry standards, clean code principles, and thorough testing methodologies.',
    },
    {
      icon: <Database className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing queries for maximum performance.',
    },
    {
      icon: <Smartphone className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: 'Mobile Responsive',
      description: 'Creating seamless experiences across all devices with mobile-first design approach.',
    }
  ];

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Completed' },
    { value: '10+', label: 'Technologies' },
    { value: '7+', label: 'Satisfied Clients' }
  ];

  const tags = ['Problem Solving', 'Clean Code', 'User Experience', 'Continuous Learning'];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.separator}></div>
          <p className={styles.description}>
          Developer in training with a focus on technology and technical excellence. 
          Currently studying Computer Science, building a solid foundation in data structures, a
          lgorithms, programming logic, and problem solving.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.journeySection}>
          <div className={styles.journeyContent}>
            <h3 className={styles.journeyTitle}>My Journey</h3>
            <p className={styles.journeyText}>
              I started my programming journey with a passion for solving problems and creating impactful applications. 
              With a strong foundation in Computer Science fundamentals, I've been able to quickly adapt to new 
              technologies and frameworks.
            </p>
            <p className={styles.journeyText}>
              My approach combines technical expertise with a focus on user-centered design, creating applications 
              that are not only functional but also intuitive and enjoyable to use.
            </p>
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;