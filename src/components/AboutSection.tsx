import { FeatureCard } from "./FeatureCard";
import { CTAButton } from "./CTAButton";
import { Award, BarChart3, Users, Headphones } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Especialistas em crescimento patrimonial",
      description: "Equipe dedicada exclusivamente a estratégias de alavancagem através de consórcio."
    },
    {
      icon: BarChart3,
      title: "Análise completa de consórcios",
      description: "Avaliação profunda de administradoras, grupos e cartas para maximizar resultados."
    },
    {
      icon: Users,
      title: "Foco em proteção familiar e segurança",
      description: "Construção de patrimônio sólido pensando no futuro das próximas gerações."
    },
    {
      icon: Headphones,
      title: "Acompanhamento personalizado",
      description: "Consultoria contínua em todas as etapas do processo de aquisição."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            A maior consultoria especializada em{" "}
            <span className="text-gradient">alavancagem com consórcio</span>{" "}
            no Brasil.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma consultoria focada em transformar renda em patrimônio real. 
            Combinamos inteligência financeira, análise imobiliária e estratégias avançadas 
            de consórcio para ajudar profissionais de alta renda a construir ativos que se multiplicam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};
