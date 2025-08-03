import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Database, Globe } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 88 }
      ]
    },
    {
      title: "Backend Development", 
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 82 },
        { name: "PostgreSQL", level: 78 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe Creative Suite", level: 75 },
        { name: "UI/UX Design", level: 80 },
        { name: "Prototyping", level: 78 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 72 }
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", 
    "Python", "Django", "PostgreSQL", "MongoDB", "Docker", "AWS", 
    "Tailwind CSS", "Sass", "Figma", "Git", "Linux", "Express.js"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
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