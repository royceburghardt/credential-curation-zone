import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, Plus } from "lucide-react";

export function Certificates() {
  const certificates = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional-level certification for developing and maintaining applications on AWS",
      credentialId: "AWS-DEV-2023-001",
      link: "#",
      category: "Cloud Computing"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      description: "Advanced certification covering React fundamentals, hooks, and modern development practices",
      credentialId: "META-REACT-2023",
      link: "#",
      category: "Frontend Development"
    },
    {
      title: "Google UX Design Certificate",
      issuer: "Google",
      date: "2022",
      description: "Comprehensive program covering UX research, design thinking, and prototyping",
      credentialId: "GOOGLE-UX-2022",
      link: "#",
      category: "Design"
    },
    {
      title: "MongoDB Developer Certification",
      issuer: "MongoDB Inc.",
      date: "2022",
      description: "Professional certification for designing and building applications with MongoDB",
      credentialId: "MONGO-DEV-2022",
      link: "#",
      category: "Database"
    },
    {
      title: "JavaScript Algorithms Certification",
      issuer: "freeCodeCamp",
      date: "2021",
      description: "300+ hours of coursework in JavaScript algorithms and data structures",
      credentialId: "FCC-JS-2021",
      link: "#",
      category: "Programming"
    },
    {
      title: "Figma Design Certification",
      issuer: "Figma",
      date: "2021",
      description: "Advanced certification in design systems and collaborative design with Figma",
      credentialId: "FIGMA-2021",
      link: "#",
      category: "Design"
    }
  ];

  const categories = [...new Set(certificates.map(cert => cert.category))];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certificates & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and completed courses that validate my expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Badge variant="default" className="px-4 py-2 cursor-pointer">
            All Categories
          </Badge>
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              {category}
            </Badge>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <Card key={cert.credentialId} className="group shadow-card hover:shadow-elegant transition-all duration-300 h-full flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Award className="h-6 w-6 text-primary flex-shrink-0" />
                  <Badge variant="outline" className="text-xs">
                    {cert.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                  {cert.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">{cert.issuer}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Credential ID:</strong> {cert.credentialId}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Certificate CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform" />
            Add New Certificate
          </Button>
        </div>
      </div>
    </section>
  );
}