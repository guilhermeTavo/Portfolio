import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "APIs REST"]
    },
    {
      technologies: ["Adobe Premiere", "CapCut", "Photoshop", "After Effects"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block"></div>

                <Card className="ml-0 md:ml-20 p-6 hover-lift border-0 card-glass">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 md:hidden">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-semibold text-primary">
                          {t(`experience.${index + 1}.title`)}
                        </h3>
                        <Badge variant="outline" className="self-start md:self-auto mt-2 md:mt-0">
                          {t(`experience.${index + 1}.period`)}
                        </Badge>
                      </div>

                      <h4 className="text-lg font-medium text-accent mb-3">
                        {t(`experience.${index + 1}.company`)}
                      </h4>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {t(`experience.${index + 1}.description`)}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-accent-soft text-accent text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
