import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Code, 
  Server, 
  Users, 
  ChevronRight, 
  X, 
  ArrowRight,
  Layers,
  Crown,
  MessageCircle,
  Handshake,
  Puzzle,
  Brain,
  RotateCcw,
  Clock,
  Palette,
  GraduationCap,
  Mic,
  Target,
  Lightbulb,
  Heart,
  UserCheck,
  Zap
} from 'lucide-react';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  icon?: React.ReactNode;
  color?: string;
  logo: string;
}

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  mainSkills: Skill[];
  allSkills: Skill[];
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showAllSkills, setShowAllSkills] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      intersectionObserver.observe(skillsSection);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: t('skills.frontend.title'),
      description: t('skills.frontend.description'),
      icon: <Code size={24} />,
      color: '#0452cfff',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      mainSkills: [
        { name: 'React.js', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Next.js', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Vue.js', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' }
      ],
      allSkills: [
        { name: 'HTML5', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React.js', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Vue.js', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Tailwind CSS', level: 'Avançado', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042' },
        { name: 'Sass/SCSS', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'Bootstrap', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Material-UI', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
        { name: 'Styled Components', level: 'Intermediário', logo: 'https://styled-components.com/logo.png' }
      ]
    },
    {
      id: 'backend',
      title: t('skills.backend.title'),
      description: t('skills.backend.description'),
      icon: <Server size={24} />,
      color: '#10b964ff',
      gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
      mainSkills: [
        { name: 'Python', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Node.js', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'FastAPI', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'PostgreSQL', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
      ],
      allSkills: [
        { name: 'Node.js', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Python', level: 'Avançado', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Django', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'FastAPI', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Java', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring Boot', level: 'Iniciante', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'PHP', level: 'Iniciante', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Laravel', level: 'Iniciante', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/50px-Laravel.svg.png?20190820171151' },
        { name: 'GraphQL', level: 'Iniciante', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'PostgreSQL', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Redis', level: 'Iniciante', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        { name: 'C#', level: 'Iniciante', logo: 'https://cdn.worldvectorlogo.com/logos/c--4.svg' },
        { name: 'C++', level: 'Iniciante', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png?20170928190710' },
        { name: 'Docker', level: 'Intermediário', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ]
    },
    {
      id: 'softskills',
      title: t('skills.softskills.title'),
      description: t('skills.softskills.description'),
      icon: <Users size={24} />,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      mainSkills: [
        { name: t('skills.softskill.lideranca'), level: t('skills.level.avancado'), logo: 'Crown' },
        { name: t('skills.softskill.comunicacao'), level: t('skills.level.avancado'), logo: 'MessageCircle' },
        { name: t('skills.softskill.trabalhoEquipe'), level: t('skills.level.avancado'), logo: 'Handshake' },
        { name: t('skills.softskill.resolucaoProblemas'), level: t('skills.level.avancado'), logo: 'Puzzle' }
      ],
      allSkills: [
        { name: t('skills.softskill.lideranca'), level: t('skills.level.avancado'), logo: 'Crown' },
        { name: t('skills.softskill.comunicacao'), level: t('skills.level.avancado'), logo: 'MessageCircle' },
        { name: t('skills.softskill.trabalhoEquipe'), level: t('skills.level.avancado'), logo: 'Handshake' },
        { name: t('skills.softskill.resolucaoProblemas'), level: t('skills.level.avancado'), logo: 'Puzzle' },
        { name: t('skills.softskill.pensamentoCritico'), level: t('skills.level.avancado'), logo: 'Brain' },
        { name: t('skills.softskill.adaptabilidade'), level: t('skills.level.avancado'), logo: 'RotateCcw' },
        { name: t('skills.softskill.gestaoTempo'), level: t('skills.level.intermediario'), logo: 'Clock' },
        { name: t('skills.softskill.criatividade'), level: t('skills.level.avancado'), logo: 'Palette' },
        { name: t('skills.softskill.empatia'), level: t('skills.level.avancado'), logo: 'Heart' },
        { name: t('skills.softskill.negociacao'), level: t('skills.level.intermediario'), logo: 'UserCheck' },
        { name: t('skills.softskill.mentoria'), level: t('skills.level.intermediario'), logo: 'GraduationCap' },
        { name: t('skills.softskill.apresentacao'), level: t('skills.level.avancado'), logo: 'Mic' }
      ]
    }
  ];

  const renderIcon = (iconName: string) => {
    const iconProps = { size: 20, className: styles.skillIcon };
    
    switch (iconName) {
      case 'Crown': return <Crown {...iconProps} />;
      case 'MessageCircle': return <MessageCircle {...iconProps} />;
      case 'Handshake': return <Handshake {...iconProps} />;
      case 'Puzzle': return <Puzzle {...iconProps} />;
      case 'Brain': return <Brain {...iconProps} />;
      case 'RotateCcw': return <RotateCcw {...iconProps} />;
      case 'Clock': return <Clock {...iconProps} />;
      case 'Palette': return <Palette {...iconProps} />;
      case 'Heart': return <Heart {...iconProps} />;
      case 'UserCheck': return <UserCheck {...iconProps} />;
      case 'GraduationCap': return <GraduationCap {...iconProps} />;
      case 'Mic': return <Mic {...iconProps} />;
      case 'Target': return <Target {...iconProps} />;
      case 'Lightbulb': return <Lightbulb {...iconProps} />;
      case 'Zap': return <Zap {...iconProps} />;
      default: return <Code {...iconProps} />;
    }
  };

  const handleCardClick = (categoryId: string) => {
    if (expandedCard === categoryId) {
      setExpandedCard(null);
      setShowAllSkills(null);
    } else {
      setExpandedCard(categoryId);
      setShowAllSkills(null);
    }
  };

  const handleShowAllSkills = (categoryId: string) => {
    setShowAllSkills(categoryId);
  };

  const handleCloseModal = () => {
    setShowAllSkills(null);
  };

  const getBadgeClass = (level: string) => {
    switch (level) {
      case t('skills.level.iniciante'):
        return styles.badgeIniciante;
      case t('skills.level.intermediario'):
        return styles.badgeIntermediario;
      case t('skills.level.avancado'):
        return styles.badgeAvancado;
      default:
        return styles.badgeIniciante;
    }
  };

  return (
    <section id="skills" className={`${styles.skills} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>
              {t('skills.title')}
            </h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <p className={styles.subtitle}>
            {t('skills.description')}
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {skillCategories.map((category, index) => (
            <div key={category.id} className={styles.categoryWrapper}>
              <div
                className={`${styles.categoryCard} ${expandedCard === category.id ? styles.expanded : ''}`}
                onClick={() => handleCardClick(category.id)}
                style={{ '--category-color': category.color, '--delay': `${index * 0.2}s` } as React.CSSProperties}
              >
                <div className={styles.cardHeader}>
                  <div 
                    className={styles.iconWrapper}
                    style={{ background: category.gradient }}
                  >
                    {category.icon}
                  </div>
                  <div className={styles.headerContent}>
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                    <p className={styles.categoryDescription}>{category.description}</p>
                  </div>
                  <ChevronRight 
                    className={`${styles.expandIcon} ${expandedCard === category.id ? styles.rotated : ''}`}
                    size={20}
                  />
                </div>

                {expandedCard === category.id && (
                  <div className={styles.expandedContent}>
                    <div className={styles.mainSkills}>
                      <h4 className={styles.sectionTitle}>
                        <Layers size={16} />
                        {t('skills.mainSkills')}
                      </h4>
                      <div className={styles.skillsList}>
                        {category.mainSkills.map((skill, skillIndex) => (
                          <div key={skill.name} className={styles.skillItem}>
                            <div className={styles.skillCard}>
                              <div className={styles.skillLogo}>
                                {skill.logo.startsWith('http') ? (
                                  <img src={skill.logo} alt={skill.name} className={styles.logoImage} />
                                ) : (
                                  <div className={styles.iconContainer}>
                                    {renderIcon(skill.logo)}
                                  </div>
                                )}
                              </div>
                              <span className={styles.skillName}>{skill.name}</span>
                              <span className={`${styles.skillBadge} ${getBadgeClass(skill.level)}`}>
                                {skill.level}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      className={styles.viewAllButton}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShowAllSkills(category.id);
                      }}
                    >
                      <span>{t('skills.viewAll')}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal para todas as skills */}
        {showAllSkills && (
          <div className={styles.modal} onClick={handleCloseModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>
                  {skillCategories.find(cat => cat.id === showAllSkills)?.title}
                </h3>
                <button className={styles.closeButton} onClick={handleCloseModal}>
                  <X size={20} />
                </button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.allSkillsGrid}>
                  {skillCategories
                    .find(cat => cat.id === showAllSkills)
                    ?.allSkills.map((skill, index) => (
                      <div key={skill.name} className={styles.modalSkillItem}>
                        <div className={styles.modalSkillCard}>
                          <div className={styles.skillLogo}>
                            {skill.logo.startsWith('http') ? (
                              <img src={skill.logo} alt={skill.name} className={styles.logoImage} />
                            ) : (
                              <div className={styles.iconContainer}>
                                {renderIcon(skill.logo)}
                              </div>
                            )}
                          </div>
                          <span className={styles.modalSkillName}>{skill.name}</span>
                          <span className={`${styles.skillBadge} ${getBadgeClass(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;