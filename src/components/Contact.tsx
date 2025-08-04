import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Download } from 'lucide-react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
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
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage('Thanks for your message! I will get back to you soon.');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
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
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.description}>
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div className={styles.infoContent}>
                  <h3>Location</h3>
                  <p>Bahia, Brazil</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div className={styles.infoContent}>
                  <h3>Email</h3>
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
                  <h3>Phone</h3>
                  <a href="https://wa.me/5577981356658" target="_blank" rel="noopener noreferrer">
                    +55 77 981356658
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <h4 className={styles.socialTitle}>Connect with me</h4>
              <div className={styles.socialGrid}>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
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
                  aria-label="Download CV"
                >
                  <Download size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.formTitle}>Send Me a Message</h3>
            
            {submitMessage && (
              <div className={`${styles.message} ${submitStatus === 'success' ? styles.success : styles.error}`}>
                {submitMessage}
              </div>
            )}
            
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Jhon doe'
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder='example@email.com'
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="subject" className={styles.label}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder='Subject of your message'
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                placeholder='Write your message here...'
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;