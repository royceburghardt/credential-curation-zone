import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full border-4 border-white/30 flex items-center justify-center shadow-glow">
              <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
                <span className="text-white/80 text-sm font-medium">Your Photo</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-left">
            {t('hero.name')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            {t('hero.title')}
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 shadow-elegant"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('hero.getInTouch')}
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-white/70 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}