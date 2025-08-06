import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${isVisible ? 'fade-in' : ''}`}>
            <p className={styles.badge}>
              Fullstack Developer
            </p>
            
            <h1 className={styles.title}>
              Hey, what’s up 👋 my name is{' '}
              <span className={styles.titleHighlight}>
                Filipe Santiago
              </span>
            </h1>
            
            <p className={styles.description}>
              Developer in training, focused on technology and continuous improvement. Actively working to become a reference in the field through hands-on experience, project development, and mastery of modern tools.
            </p>
            
            <div className={styles.buttons}>
              <a 
                href="#contact" 
                className={`${styles.button} ${styles.buttonPrimary}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
              >
                Get in touch
                <ArrowRight size={18} className={styles.iconArrow} />
              </a>
              <a 
                href="#projects" 
                className={`${styles.button} ${styles.buttonSecondary}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#projects');
                }}
              >
                View my work
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <a 
          href="#about" 
          aria-label="Scroll down"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#about');
          }}
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;