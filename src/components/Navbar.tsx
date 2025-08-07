import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Download, Languages, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

const handleDownloadCV = (lang: 'pt' | 'en') => {
  const fileName = lang === 'pt'
    ? 'Curriculo_Filipe_Santiago_PtBr.pdf'
    : 'CV_Filipe_Santiago_En.pdf'
  const downloadName = lang === 'pt'
    ? 'Curriculo_Filipe_Santiago_PtBr.pdf'
    : 'CV_Filipe_Santiago_En.pdf'

  const link = document.createElement('a')
  link.href = `/${fileName}`
  link.download = downloadName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  setShowCVDropdown(false)
}


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
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
              
              <div className={styles.cvDropdown}>
                <button 
                  onClick={() => setShowCVDropdown(!showCVDropdown)}
                  className={styles.socialLink}
                  aria-label={t('nav.downloadCV')}
                  title={t('nav.downloadCV')}
                >
                  <Download size={20} />
                  <ChevronDown size={14} className={styles.chevron} />
                </button>
                {showCVDropdown && (
                  <div className={styles.cvDropdownMenu}>
                    <button 
                      onClick={() => handleDownloadCV('pt')}
                      className={styles.cvDropdownItem}
                    >
                      {t('nav.downloadCVPt')}
                    </button>
                    <button 
                      onClick={() => handleDownloadCV('en')}
                      className={styles.cvDropdownItem}
                    >
                      {t('nav.downloadCVEn')}
                    </button>
                  </div>
                )}
              </div>

              <button onClick={toggleLanguage} className={styles.languageToggle} aria-label="Toggle language">
                <Languages size={20} />
                <span className={styles.languageText}>{language.toUpperCase()}</span>
              </button>

              <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className={styles.mobileMenu}>
            <button onClick={toggleLanguage} className={styles.languageToggle} aria-label="Toggle language">
              <Languages size={20} />
              <span className={styles.languageText}>{language.toUpperCase()}</span>
            </button>
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
            <a href="https://github.com/SantiaGhou" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/filipe-santiago-0736932b2/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Linkedin size={20} />
            </a>
            <div className={styles.cvDropdown}>
              <button 
                onClick={() => setShowCVDropdown(!showCVDropdown)}
                className={styles.socialLink}
                aria-label={t('nav.downloadCV')}
              >
                <Download size={20} />
                <ChevronDown size={14} className={styles.chevron} />
              </button>
              {showCVDropdown && (
                <div className={styles.cvDropdownMenu}>
                  <button 
                    onClick={() => handleDownloadCV('pt')}
                    className={styles.cvDropdownItem}
                  >
                    {t('nav.downloadCVPt')}
                  </button>
                  <button 
                    onClick={() => handleDownloadCV('en')}
                    className={styles.cvDropdownItem}
                  >
                    {t('nav.downloadCVEn')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;