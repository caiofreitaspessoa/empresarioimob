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
    <section className="py-16 md:py-24 px-6 md:px-4 bg-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
            O que antes era privilégio dos milionários,{" "}
            <span className="text-gradient">agora está nas suas mãos</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-10 md:mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white/95 border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-accent transition-all duration-300 hover:shadow-lg group text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-accent transition-colors text-bg-dark">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};
