import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma completa de e-commerce com painel administrativo, pagamentos integrados e sistema de inventário.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      demo: "#",
      code: "#"
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real e notificações.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      demo: "#",
      code: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard analítico com visualizações interativas, relatórios personalizáveis e integração com APIs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      technologies: ["Next.js", "D3.js", "MongoDB", "Chart.js"],
      demo: "#",
      code: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Aplicativo bancário mobile com autenticação biométrica, transferências e controle financeiro.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500",
      technologies: ["React Native", "Node.js", "JWT", "SQLite"],
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
              key={project.title}
              className="overflow-hidden border-0 card-glass hover-lift group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    className="bg-neon text-primary-foreground neon-glow"
                  >
                    {t('projects.viewDemo')}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                  >
                    {t('projects.viewCode')}
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
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
                    size="sm"
                    className="bg-neon text-primary-foreground flex-1 neon-glow"
                  >
                    {t('projects.viewDemo')}
                    <ArrowUp className="ml-2 w-4 h-4 rotate-45" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    {t('projects.viewCode')}
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