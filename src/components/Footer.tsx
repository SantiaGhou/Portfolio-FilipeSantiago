import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Filipe Santiago. All rights reserved.
            </p>
            <p className={styles.love}>
              Made with <Heart className={styles.heart} size={14} /> and modern web technologies
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className={styles.scrollTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;