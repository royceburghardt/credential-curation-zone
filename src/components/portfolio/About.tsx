import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Award } from "lucide-react";

export function About() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my background, experience, and what drives me
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
                    <p className="font-medium">burghardtroyce@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+49 - 176/34212462</p>
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
                    <h4 className="font-semibold">Web Developer</h4>
                    <p className="text-sm text-muted-foreground">Freelancer</p>
                    <p className="text-sm mt-2">Brief description of your current role and responsibilities.</p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <h4 className="font-semibold">Previous Position</h4>
                    <p className="text-sm text-muted-foreground">Previous Company • 2020 - 2022</p>
                    <p className="text-sm mt-2">Brief description of your previous role and achievements.</p>
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
                  I'm a passionate developer with a love for creating digital experiences that make a difference. 
                  My journey in tech started [your story here] and has led me through various exciting projects 
                  and collaborations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me [your hobbies/interests]. I believe in continuous 
                  learning and staying up-to-date with the latest technologies and industry trends.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </Card>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </Card>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Certificates</p>
              </Card>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}