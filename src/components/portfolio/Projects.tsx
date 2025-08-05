import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Projects() {
  const { t } = useLanguage();
  const projects = [
    {
      title: "Coffee Shop E-Commerce",
      description: "A modern coffee shop e-commerce platform with product catalog, shopping cart functionality, and responsive design built during my fullstack training.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "CSS"],
      github: "https://github.com/pablosabio/ecommerce-fp",
      demo: "https://coffee-shop-ten-kappa.vercel.app",
      featured: true
    },
    {
      title: "Next.js Todo Application",
      description: "A task management application built with Next.js featuring CRUD operations, modern UI design, and efficient state management.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/royceburghardt",
      demo: "https://next-js-todo-app-royce-o9vu.vercel.app/",
      featured: true
    },
    {
      title: "Emoji Picker Component",
      description: "An interactive emoji picker component with search functionality and category filtering, demonstrating modern React development practices.",
      image: "/api/placeholder/400/250", 
      technologies: ["React", "JavaScript", "CSS", "Vercel"],
      github: "https://github.com/royceburghardt",
      demo: "https://emoji-picker-xi.vercel.app/",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={project.title} className="group shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Plus className="h-8 w-8" />
                    </div>
                    <p className="text-sm">Project Screenshot</p>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.title} className="group shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Add Project CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform" />
            {t('projects.addProject')}
          </Button>
        </div>
      </div>
    </section>
  );
}
