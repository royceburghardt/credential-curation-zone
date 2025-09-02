import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Database, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Skills() {
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "HTML5/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "React", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: t('skills.backend'), 
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 65 }
      ]
    },
    {
      title: t('skills.tools'),
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "Figma", level: 80 },
        { name: "Bootstrap", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "GitHub", level: 80 }
      ]
    },
    {
      title: "Languages & Soft Skills",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "German (C1)", level: 85 },
        { name: "English (Native)", level: 100 },
        { name: "Romanian (B2)", level: 70 }
      ]
    }
  ];

  const technologies = [
    "HTML5/CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", 
    "Node.js", "MongoDB", "SQL", "Tailwind CSS", "Bootstrap", "Figma", 
    "GitHub", "Teamwork", "Adaptability", "Creativity", "Time Management"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('skills.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies Tags */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-center">Technologies & Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}