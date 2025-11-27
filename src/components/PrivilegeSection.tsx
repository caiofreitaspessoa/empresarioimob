import { FeatureCard } from "./FeatureCard";
import { CTAButton } from "./CTAButton";
import { Home, Rocket, Wallet, Shield } from "lucide-react";

export const PrivilegeSection = () => {
  const benefits = [
    {
      icon: Home,
      title: "Acesso a imóveis estratégicos",
      description: "Antes restrito a grandes investidores, agora acessível com estratégia."
    },
    {
      icon: Rocket,
      title: "Construção acelerada de patrimônio",
      description: "Use o consórcio como motor silencioso de crescimento."
    },
    {
      icon: Wallet,
      title: "Renda que fortalece seu fluxo de caixa",
      description: "Aluguéis podem ajudar a pagar parcelas."
    },
    {
      icon: Shield,
      title: "Segurança para o futuro",
      description: "Proteção familiar com ativos reais e valorizáveis."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            O que antes era privilégio dos milionários,{" "}
            <span className="text-gradient">agora está nas suas mãos</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <FeatureCard key={index} {...benefit} />
          ))}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};
