import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      badge: "AWS",
      color: "bg-orange-500"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      badge: "React",
      color: "bg-blue-500"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      badge: "GCP",
      color: "bg-green-500"
    },
    {
      title: "TypeScript Advanced",
      issuer: "Microsoft",
      date: "2022",
      badge: "TS",
      color: "bg-blue-600"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {t('certifications.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('certifications.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="p-6 hover-lift border-0 card-glass animate-slide-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold text-lg">
                  {cert.badge}
                </span>
              </div>
              
              <h3 className="font-semibold text-lg mb-2 text-primary">
                {cert.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-3">
                {cert.issuer}
              </p>
              
              <Badge variant="secondary" className="bg-accent-soft text-accent">
                {cert.date}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;