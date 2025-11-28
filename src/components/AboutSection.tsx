import { FeatureCard } from "./FeatureCard";
import { CTAButton } from "./CTAButton";
import { Target, Shield, Heart, Award } from "lucide-react";
export const AboutSection = () => {
  const features = [{
    icon: Target,
    title: "Especialistas em crescimento patrimonial",
    description: "Foco em estratégias que geram riqueza previsível."
  }, {
    icon: Shield,
    title: "Análise completa de consórcios",
    description: "Verificamos administradoras, grupos e oportunidades."
  }, {
    icon: Heart,
    title: "Foco em proteção familiar e segurança",
    description: "Seu patrimônio como pilar do futuro da família."
  }, {
    icon: Award,
    title: "Acompanhamento personalizado",
    description: "Do diagnóstico até a expansão patrimonial."
  }];
  return <section className="py-16 md:py-24 px-6 md:px-4 bg-light">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h2 className="md:text-5xl font-display font-bold text-bg-dark leading-tight my-0 py-0 text-2xl">
              A maior consultoria especializada em{" "}
              <span className="text-gradient">alavancagem com consórcio</span>{" "}
              no Brasil.
            </h2>
            <p className="md:text-xl text-bg-dark/70 text-sm">
              Somos uma consultoria focada em transformar renda em patrimônio real. 
              Combinamos inteligência financeira, análise imobiliária e estratégias 
              avançadas de consórcio para ajudar profissionais de alta renda a 
              construir ativos que se multiplicam.
            </p>
          </div>
          
          {/* Placeholder para foto da equipe */}
          <div className="bg-gradient-to-br from-accent/10 to-highlight/10 rounded-xl aspect-square flex items-center justify-center border-2 border-dashed border-accent/30">
            <p className="text-accent/50 font-semibold">Foto da Equipe</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-10 md:mb-12">
          {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>;
};