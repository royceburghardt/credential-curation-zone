import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Experience() {
  const { t } = useLanguage();
  const workExperience = [
    {
      title: "Hausmeister in Produktion",
      company: "Peter Bock AG",
      period: "06.2020 - 01.2024",
      type: "Maintenance"
    },
    {
      title: "Hausmeister",
      company: "Scherer GmbH",
      period: "10.2018 - 05.2020",
      type: "Maintenance"
    },
    {
      title: "Tischler",
      company: "Armini Raum Design",
      period: "06.2017 - 10.2018",
      type: "Carpentry"
    },
    {
      title: "Tischler/Lagerist",
      company: "Fischers Lagerhaus",
      period: "06.2015 - 05.2017",
      type: "Carpentry & Logistics"
    },
    {
      title: "Bestatter",
      company: "Bestattungs Haus Heidelberg",
      period: "05.2014 - 05.2015",
      type: "Funeral Services"
    },
    {
      title: "Bestatter",
      company: "Beerdigungs Institut Cullmann",
      period: "06.2003 - 04.2014",
      type: "Funeral Services"
    },
    {
      title: "Tischler",
      company: "Schreinerei Cullmann",
      period: "08.2002 - 05.2003",
      type: "Carpentry"
    },
    {
      title: "Hausmeister",
      company: "Gasthaus Zum Marienburg",
      period: "09.1998 - 12.1998",
      type: "Maintenance"
    },
    {
      title: "Hilfsarbeiter",
      company: "Hans Kirst KG",
      period: "05.1991 - 08.1998",
      type: "General Labor"
    },
    {
      title: "Munitions System Specialist",
      company: "General Dynamics",
      period: "10.1989 - 04.1991",
      type: "Military/Defense"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Carpentry":
      case "Carpentry & Logistics":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
      case "Maintenance":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Funeral Services":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      case "Military/Defense":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('experience.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('experience.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={`${job.company}-${job.period}`} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{job.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <Badge 
                        variant="secondary" 
                        className={getTypeColor(job.type)}
                      >
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="shadow-card text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </Card>
            <Card className="shadow-card text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">10</div>
              <p className="text-sm text-muted-foreground">Different Companies</p>
            </Card>
            <Card className="shadow-card text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <p className="text-sm text-muted-foreground">Industry Sectors</p>
            </Card>
            <Card className="shadow-card text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <p className="text-sm text-muted-foreground">Countries</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}