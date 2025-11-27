import { FeatureCard } from "./FeatureCard";
import { CTAButton } from "./CTAButton";
import { TrendingUp, Building, LineChart, Heart, Trophy } from "lucide-react";

export const ForWhoSection = () => {
  const criteria = [
    {
      icon: TrendingUp,
      title: "Ganha bem, mas seu patrimônio não cresce no mesmo ritmo.",
      description: "Hora de alinhar sua renda com a construção de ativos reais."
    },
    {
      icon: Building,
      title: "Deseja imóveis que se valorizam e geram renda.",
      description: "Transforme seu investimento em propriedades que trabalham por você."
    },
    {
      icon: LineChart,
      title: "Quer previsibilidade sem volatilidade.",
      description: "Estratégia estruturada longe das incertezas do mercado financeiro."
    },
    {
      icon: Heart,
      title: "Pensa no futuro da família.",
      description: "Construa um legado sólido e proteção para as próximas gerações."
    },
    {
      icon: Trophy,
      title: "Quer investir como profissionais de elite.",
      description: "Acesse estratégias antes restritas a grandes investidores."
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Essa estratégia é{" "}
            <span className="text-gradient">pra você se</span>...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {criteria.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};
