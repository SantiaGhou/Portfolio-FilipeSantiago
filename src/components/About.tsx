import React from 'react';
import { Code, Server, Globe, Award, Database, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCountUp } from '../hooks/useCountUp'; 
import styles from './About.module.css';

// Componente para estatísticas animadas
const AnimatedStat: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  // Extrair o número do valor (remove + e outros caracteres)
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const { count, elementRef } = useCountUp(numericValue, { duration: 2000 });
  
  // Formatação do valor com o sufixo original
  const formatValue = (num: number) => {
    if (value.includes('+')) {
      return `${num}+`;
    }
    return num.toString();
  };

  return (
    <div className={styles.statCard} ref={elementRef}>
      <span className={styles.statValue}>{formatValue(count)}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

const About: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: t('about.frontend.title'),
      description: t('about.frontend.description'),
    },
    {
      icon: <Server className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: t('about.backend.title'),
      description: t('about.backend.description'),
    },
    {
      icon: <Globe className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: t('about.webapps.title'),
      description: t('about.webapps.description'),
    },
    {
      icon: <Award className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: t('about.bestpractices.title'),
      description: t('about.bestpractices.description'),
    },
    {
      icon: <Database className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: t('about.database.title'),
      description: t('about.database.description'),
    },
    {
      icon: <Smartphone className="w-6 h-6" style={{ color: 'var(--content-brand)' }} />,
      title: t('about.mobile.title'),
      description: t('about.mobile.description'),
    }
  ];

  const stats = [
    { value: '5+', label: t('about.stats.experience') },
    { value: '15+', label: t('about.stats.projects') },
    { value: '10+', label: t('about.stats.technologies') },
    { value: '24+', label: t('about.stats.clients') }
  ];

  const tags = ['Problem Solving', 'Clean Code', 'User Experience', 'Continuous Learning'];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('about.title')}</h2>
          <div className={styles.separator}></div>
          <p className={styles.description}>
            {t('about.description')}
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
            <h3 className={styles.journeyTitle}>{t('about.journey.title')}</h3>
            <p className={styles.journeyText}>
              {t('about.journey.text1')}
            </p>
            <p className={styles.journeyText}>
              {t('about.journey.text2')}
            </p>
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;