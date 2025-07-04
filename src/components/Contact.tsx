import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      label: "Email",
      value: "guids.tavares@gmail.com",
      href: "mailto:guids.tavares@gmail.com",
      icon: "📧"
    },
    {
      label: "LinkedIn",
      value: "/in/guilherme-tavares-398563240",
      href: "https://linkedin.com/in/guilherme-tavares-398563240",
      icon: "💼"
    },
    {
      label: "WhatsApp",
      value: "+55 (11) 95282-5374",
      href: "https://wa.me/5511952825374",
      icon: "📱"
    },
    {
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: "#",
      icon: "📍"
    }
  ];

  const availability = [
    "Desenvolvedor Full Stack",
    "Projetos Freelance",
    "Oportunidades CLT",
    "Edição de Vídeos",
    "Consultoria Técnica"
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            {t('contact.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Informações de Contato
              </h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <Card key={info.label} className="p-4 hover-lift border-0 card-glass">
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-sm">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-lg mb-4 text-primary">
                  Disponível para:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {availability.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="bg-accent-soft text-accent"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="animate-slide-up">
              <Card className="p-8 border-0 card-glass text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Pronto para novos desafios?
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Estou disponível para oportunidades de trabalho e projetos desafiadores. Vamos criar algo incrível juntos!
                </p>
                
                <div className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-neon text-primary-foreground neon-glow"
                  >
                    <a href="mailto:guids.tavares@gmail.com">
                      Enviar Email
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent/10"
                  >
                    <a href="https://wa.me/5511952825374" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  ⚡ Respondo em até 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;