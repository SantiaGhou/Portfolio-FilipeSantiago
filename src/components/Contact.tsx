import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const whatsappNumber = '5577981356658';
    const text = `Nome: ${formData.name}
Email: ${formData.email}
Assunto: ${formData.subject}
Mensagem: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    setSubmitMessage(t('contact.form.sent') || 'Mensagem enviada!');
    setSubmitStatus('success');
    setTimeout(() => {
      setSubmitMessage('');
      setSubmitStatus(null);
    }, 3000);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-filipe-santiago.pdf';
    link.download = 'Filipe_Santiago_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('contact.title')}</h2>
          <p className={styles.description}>
            {t('contact.description')}
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>{t('contact.info')}</h3>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div className={styles.infoContent}>
                  <h4>{t('contact.location')}</h4>
                  <p>Bahia, Brasil</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div className={styles.infoContent}>
                  <h4>{t('contact.email')}</h4>
                  <a href="mailto:filipecacule@gmail.com">
                    filipecacule@gmail.com
                  </a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <div className={styles.infoContent}>
                  <h4>{t('contact.phone')}</h4>
                  <a href="https://api.whatsapp.com/send/?phone=5577981356658&text&type=phone_number&app_absent=0">
                    +55 77 98135-6658
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <h4 className={styles.socialTitle}>{t('contact.connect')}</h4>
              <div className={styles.socialGrid}>
                <a 
                  href="https://github.com/SantiaGhou" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/filipe-santiago-0736932b2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
                <button 
                  onClick={handleDownloadCV}
                  className={styles.socialLink}
                  aria-label={t('nav.downloadCV')}
                >
                  <Download size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.formTitle}>{t('contact.form.title')}</h3>
            
            {submitMessage && (
              <div className={`${styles.message} ${submitStatus === 'success' ? styles.success : styles.error}`}>
                {submitMessage}
              </div>
            )}
            
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  placeholder="Seu nome completo"
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="subject" className={styles.label}>
                {t('contact.form.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder="Assunto da mensagem"
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
                placeholder="Sua mensagem aqui..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;