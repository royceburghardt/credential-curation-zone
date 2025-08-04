import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink } from "lucide-react";

export function Education() {
  const education = [
    {
      title: "Fullstack Web Developer",
      institution: "Digital Career Institut",
      period: "05.2024 - 07.2025",
      type: "Professional Training",
      description: "Comprehensive fullstack development program covering UI design fundamentals, Single Page Applications, and backend development. Built solid foundation in HTML5, CSS, JavaScript, Vue.js, React, and various frameworks. Completed team React final project and fullstack project with frontend, backend, and database.",
      skills: ["HTML5/CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Node.js", "MongoDB", "Figma", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "German C1 Language Certification",
      institution: "Lingoda Language Academy", 
      period: "05.2024 - 05.2025",
      type: "Language Certification",
      description: "Enhanced vocabulary and improved ability to formulate complex sentences more precisely and efficiently for professional environments.",
      skills: ["German Language", "Professional Communication", "Advanced Grammar"]
    },
    {
      title: "Good Habitz Workshop",
      institution: "Good Habitz Online",
      period: "15 & 22.02.2025",
      type: "Professional Development",
      description: "Learned skills and tools to master daily challenges and various environments of future work, maintaining professional yet relaxed relationships with colleagues and supervisors.",
      skills: ["Professional Communication", "Workplace Skills", "Team Collaboration"]
    },
    {
      title: "Carpenter Retraining (Umschullung zum Tischler)",
      institution: "UÄZ Wittlich/Schreinerei Cullmann Traben-Trarbach",
      period: "02.1999 - 07.2002",
      type: "Professional Training",
      description: "Learned all necessary skills for general carpentry and modern work methods with CNC technology. Acquired knowledge and advantages to work competently and very precisely.",
      skills: ["Carpentry", "CNC Technology", "Precision Work", "Modern Manufacturing"]
    },
    {
      title: "Munitions Systems Specialist",
      institution: "General Dynamics U.S.A.",
      period: "10.1988 - 10.1989",
      type: "Military Training",
      description: "Learned programming of the first GPS-guided missiles and bombs to communicate with three satellites in space and exchange coordinate information. Also acquired first basic knowledge in handling digital tools and early cybersecurity.",
      skills: ["GPS Programming", "Satellite Communication", "Digital Tools", "Cybersecurity", "Precision Systems"]
    },
    {
      title: "High School Diploma",
      institution: "Belle Plaine High School, Belle Plaine Kansas U.S.A.",
      period: "08.1984 - 05.1988",
      type: "Secondary Education",
      description: "Received a general education covering everything from history to various natural sciences, different mathematical areas, and various forms of government.",
      skills: ["General Education", "Mathematics", "Natural Sciences", "History", "Government Studies"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education & Training</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My educational journey and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <Card key={item.title} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span>{item.institution}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge variant="secondary">{item.type}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Languages</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="shadow-card text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-2">Native</div>
                <h4 className="font-medium mb-1">English</h4>
                <p className="text-sm text-muted-foreground">Mother tongue</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-2">C1</div>
                <h4 className="font-medium mb-1">German</h4>
                <p className="text-sm text-muted-foreground">Advanced proficiency</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-2">B2</div>
                <h4 className="font-medium mb-1">Romanian</h4>
                <p className="text-sm text-muted-foreground">Upper intermediate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}