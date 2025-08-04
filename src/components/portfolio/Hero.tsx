import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

export function Hero() {
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
            Royce Burghardt
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            I recently completed my training as a web developer and want to establish myself in this field. 
            I'm a dedicated professional who takes on challenges and eagerly acquires new skills for professional development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 shadow-elegant">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10">
              <Download className="mr-2 h-5 w-5" />
              Download CV
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