import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      image: "https://raw.githubusercontent.com/guilhermeTavo/Portfolio/main/src/assets/floreslandia.jpg",
      technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "SEO"],
      demo: "https://www.floreslandia.com/",
      code: "#"
    },
    {
      image: "https://raw.githubusercontent.com/guilhermeTavo/Portfolio/main/src/assets/cv-generator.jpg",
      technologies: ["TypeScript", "CSS", "JavaScript", "PHP", "HTML"],
      demo: "https://curriculum-generator-tau.vercel.app/",
      code: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      demo: "#",
      code: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500",
      technologies: ["Adobe Premiere", "CapCut", "Motion Graphics"],
      demo: "#",
      code: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 card-glass hover-lift group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={t(`projects.${index + 1}.title`)}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    asChild
                    size="sm"
                    className="bg-neon text-primary-foreground neon-glow"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      {t('projects.viewDemo')}
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                  >
                    <a href="https://wa.me/5511952825374" target="_blank" rel="noopener noreferrer">
                      {t('projects.viewCode')}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {t(`projects.${index + 1}.title`)}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t(`projects.${index + 1}.description`)}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-accent-soft text-accent text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="bg-neon text-primary-foreground flex-1 neon-glow"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      {t('projects.viewDemo')}
                      <ArrowUp className="ml-2 w-4 h-4 rotate-45" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    <a href="https://wa.me/5511952825374" target="_blank" rel="noopener noreferrer">
                      {t('projects.viewCode')}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
