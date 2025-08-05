import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('about.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-6">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">Royce Burghardt</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">69121</p>
                    <p className="font-medium">Heidelberg, Germany</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">royceburghardt@yahoo.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+49 176 34212462</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold">Fullstack Web Developer</h4>
                    <p className="text-sm text-muted-foreground">Digital Career Institut • 05.2024 - 07.2025</p>
                    <p className="text-sm mt-2">Built a solid foundation in HTML5, CSS, JavaScript, Vue.js, React, and various frameworks. Completed team React final project and fullstack project with frontend, backend, and database.</p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <h4 className="font-semibold">German C1 Certification</h4>
                    <p className="text-sm text-muted-foreground">Lingoda Language Academy • 05.2024 - 05.2025</p>
                    <p className="text-sm mt-2">Enhanced vocabulary and improved ability to formulate complex sentences more precisely and efficiently.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio & Stats */}
          <div className="space-y-6">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle>My Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I recently completed my training as a web developer and am eager to establish myself in this field. 
                  Starting with UI design fundamentals, I progressed through Single Page Applications and backend development, 
                  building expertise in modern frameworks and technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated professional who embraces challenges and continuously acquires new skills. 
                  I believe in teamwork, empathy, and maintaining professional yet relaxed relationships with colleagues and supervisors.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-sm text-muted-foreground">Languages</p>
              </Card>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </Card>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </Card>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}