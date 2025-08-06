import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-filipe-santiago.pdf';
    link.download = 'Filipe_Santiago_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')}>
            FS<span className={styles.dot}>.</span>
          </a>

          <div className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={styles.navLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <a href="https://github.com/SantiaGhou" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/filipe-santiago-0736932b2/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Linkedin size={20} />
              </a>
              <button 
                onClick={handleDownloadCV}
                className={styles.socialLink}
                aria-label="Download CV"
                title="Download CV"
              >
                <Download size={20} />
              </button>

              <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className={styles.mobileMenu}>
            <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className={styles.menuButton} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileSocial}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Linkedin size={20} />
            </a>
            <button 
              onClick={handleDownloadCV}
              className={styles.socialLink}
              aria-label="Download CV"
            >
              <Download size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;