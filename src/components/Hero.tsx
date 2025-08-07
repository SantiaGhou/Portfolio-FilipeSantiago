import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

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
              {t('hero.badge')}
            </p>
            
            <h1 className={styles.title}>
              {t('hero.title')}{' '}
              <span className={styles.titleHighlight}>
                {t('hero.name')}
              </span>
            </h1>
            
            <p className={styles.description}>
              {t('hero.description')}
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
                {t('hero.getInTouch')}
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
                {t('hero.viewWork')}
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