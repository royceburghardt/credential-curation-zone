import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.name': 'Royce Burghardt',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'I recently completed my training as a web developer and want to establish myself in this field. I\'m a dedicated professional who takes on challenges and eagerly acquires new skills for professional development.',
    'hero.getInTouch': 'Get In Touch',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Passionate developer with a unique background combining technical expertise and hands-on craftsmanship.',
    
    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.description': 'Here are the technologies and tools I work with',
    
    // Education
    'education.title': 'Education',
    'education.description': 'My educational background and certifications',
    
    // Experience
    'experience.title': 'Work Experience',
    'experience.description': 'My professional journey and roles',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.description': 'Some of my recent work and projects',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'Let\'s work together on your next project',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.availability': 'Available for new projects',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Failed to send message. Please try again.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.skills': 'Fähigkeiten',
    'nav.education': 'Bildung',
    'nav.experience': 'Erfahrung',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.name': 'Royce Burghardt',
    'hero.title': 'Full Stack Entwickler',
    'hero.description': 'Ich habe kürzlich meine Ausbildung als Webentwickler abgeschlossen und möchte mich in diesem Bereich etablieren. Ich bin ein engagierter Profi, der Herausforderungen annimmt und gerne neue Fähigkeiten für die berufliche Entwicklung erwirbt.',
    'hero.getInTouch': 'Kontakt aufnehmen',
    
    // About
    'about.title': 'Über mich',
    'about.description': 'Leidenschaftlicher Entwickler mit einem einzigartigen Hintergrund, der technische Expertise und handwerkliches Geschick kombiniert.',
    
    // Skills
    'skills.title': 'Fähigkeiten & Technologien',
    'skills.description': 'Hier sind die Technologien und Tools, mit denen ich arbeite',
    
    // Education
    'education.title': 'Bildung',
    'education.description': 'Mein Bildungshintergrund und Zertifizierungen',
    
    // Experience
    'experience.title': 'Berufserfahrung',
    'experience.description': 'Meine berufliche Laufbahn und Rollen',
    
    // Projects
    'projects.title': 'Ausgewählte Projekte',
    'projects.description': 'Einige meiner neuesten Arbeiten und Projekte',
    
    // Contact
    'contact.title': 'Kontakt aufnehmen',
    'contact.description': 'Lassen Sie uns gemeinsam an Ihrem nächsten Projekt arbeiten',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.location': 'Standort',
    'contact.availability': 'Verfügbar für neue Projekte',
    'contact.form.name': 'Ihr Name',
    'contact.form.email': 'Ihre E-Mail',
    'contact.form.subject': 'Betreff',
    'contact.form.message': 'Ihre Nachricht',
    'contact.form.send': 'Nachricht senden',
    'contact.form.success': 'Nachricht erfolgreich gesendet!',
    'contact.form.error': 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}