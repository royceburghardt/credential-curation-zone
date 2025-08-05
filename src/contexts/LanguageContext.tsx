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
    'hero.photoPlaceholder': 'Your Photo',
    
    // About
    'about.title': 'About Me',
    'about.description': 'Passionate developer with a unique background combining technical expertise and hands-on craftsmanship.',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects Completed',
    'about.technologies': 'Technologies',
    
    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.description': 'Here are the technologies and tools I work with',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database & Storage',
    'skills.tools': 'Tools & Others',
    
    // Education
    'education.title': 'Education',
    'education.description': 'My educational background and certifications',
    'education.current': 'Current',
    'education.completed': 'Completed',
    
    // Experience
    'experience.title': 'Work Experience',
    'experience.description': 'My professional journey and roles',
    'experience.responsibilities': 'Key Responsibilities',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.description': 'Some of my recent work and projects',
    'projects.viewProject': 'View Project',
    'projects.sourceCode': 'Source Code',
    'projects.addProject': 'Add New Project',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'Let\'s work together on your next project',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.availability': 'Available for new projects',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Failed to send message. Please try again.',
    'contact.followMe': 'Follow Me',
    'contact.sendMessage': 'Send a Message',
    'contact.availabilityText': 'I\'m actively seeking new opportunities to start my career as a fullstack developer.',
    
    // Footer
    'footer.copyright': '© 2024 Royce Burghardt. Built with React, TypeScript, and Tailwind CSS.',
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
    'hero.photoPlaceholder': 'Ihr Foto',
    
    // About
    'about.title': 'Über mich',
    'about.description': 'Leidenschaftlicher Entwickler mit einem einzigartigen Hintergrund, der technische Expertise und handwerkliches Geschick kombiniert.',
    'about.experience': 'Jahre Erfahrung',
    'about.projects': 'Projekte abgeschlossen',
    'about.technologies': 'Technologien',
    
    // Skills
    'skills.title': 'Fähigkeiten & Technologien',
    'skills.description': 'Hier sind die Technologien und Tools, mit denen ich arbeite',
    'skills.frontend': 'Frontend-Entwicklung',
    'skills.backend': 'Backend-Entwicklung',
    'skills.database': 'Datenbank & Speicherung',
    'skills.tools': 'Tools & Sonstiges',
    
    // Education
    'education.title': 'Bildung',
    'education.description': 'Mein Bildungshintergrund und Zertifizierungen',
    'education.current': 'Aktuell',
    'education.completed': 'Abgeschlossen',
    
    // Experience
    'experience.title': 'Berufserfahrung',
    'experience.description': 'Meine berufliche Laufbahn und Rollen',
    'experience.responsibilities': 'Hauptverantwortlichkeiten',
    
    // Projects
    'projects.title': 'Ausgewählte Projekte',
    'projects.description': 'Einige meiner neuesten Arbeiten und Projekte',
    'projects.viewProject': 'Projekt ansehen',
    'projects.sourceCode': 'Quellcode',
    'projects.addProject': 'Neues Projekt hinzufügen',
    
    // Contact
    'contact.title': 'Kontakt aufnehmen',
    'contact.description': 'Lassen Sie uns gemeinsam an Ihrem nächsten Projekt arbeiten',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.location': 'Standort',
    'contact.availability': 'Verfügbar für neue Projekte',
    'contact.form.firstName': 'Vorname',
    'contact.form.lastName': 'Nachname',
    'contact.form.email': 'Ihre E-Mail',
    'contact.form.subject': 'Betreff',
    'contact.form.message': 'Ihre Nachricht',
    'contact.form.send': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet...',
    'contact.form.success': 'Nachricht erfolgreich gesendet!',
    'contact.form.error': 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
    'contact.followMe': 'Folgen Sie mir',
    'contact.sendMessage': 'Nachricht senden',
    'contact.availabilityText': 'Ich bin aktiv auf der Suche nach neuen Möglichkeiten, um meine Karriere als Fullstack-Entwickler zu beginnen.',
    
    // Footer
    'footer.copyright': '© 2024 Royce Burghardt. Erstellt mit React, TypeScript und Tailwind CSS.',
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