import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Languages } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  // Simple translation function as fallback
  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.education': 'Education',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
      },
      de: {
        'nav.home': 'Startseite',
        'nav.about': 'Über mich',
        'nav.skills': 'Fähigkeiten',
        'nav.education': 'Bildung',
        'nav.experience': 'Erfahrung',
        'nav.projects': 'Projekte',
        'nav.contact': 'Kontakt',
      }
    };
    return translations[language]?.[key] || key;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md shadow-card border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl">
            <span className={`transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white/90'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className={`${isScrolled ? 'text-foreground' : 'text-white/90'}`}
            >
              <Languages className="mr-1 h-4 w-4" />
              {language.toUpperCase()}
            </Button>
          </div>

          {/* Mobile Navigation - Language Toggle and Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className={`${isScrolled ? 'text-foreground' : 'text-white/90'}`}
            >
              <Languages className="mr-1 h-4 w-4" />
              {language.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`${isScrolled ? 'text-foreground' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-elegant">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}