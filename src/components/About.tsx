import { Card } from "@/components/ui/card";
import { Code, User, Briefcase } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const skills = [
    { category: "Frontend", technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", technologies: ["Git", "Docker", "AWS", "Figma"] },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {t('about.description')}
            </p>
            
            <div className="grid gap-6">
              {skills.map(({ category, technologies }) => (
                <div key={category} className="card-glass p-6 rounded-xl hover-lift">
                  <h3 className="font-semibold text-lg mb-3 text-primary">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent-soft text-accent rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
            <Card className="p-6 hover-lift border-0 card-glass">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
              <p className="text-muted-foreground text-sm">
                Escrevo código limpo, legível e fácil de manter seguindo as melhores práticas.
              </p>
            </Card>

            <Card className="p-6 hover-lift border-0 card-glass">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">UX/UI Design</h3>
              <p className="text-muted-foreground text-sm">
                Foco na experiência do usuário criando interfaces intuitivas e atrativas.
              </p>
            </Card>

            <Card className="p-6 hover-lift border-0 card-glass md:col-span-2">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Soluções Completas</h3>
              <p className="text-muted-foreground text-sm">
                Desenvolvimento full stack do conceito à implementação, sempre pensando em escalabilidade.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;