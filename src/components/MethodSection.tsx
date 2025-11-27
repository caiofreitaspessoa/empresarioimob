import { FeatureCard } from "./FeatureCard";
import { CTAButton } from "./CTAButton";
import { Search, Building2, TrendingUp, DollarSign, RefreshCw } from "lucide-react";

export const MethodSection = () => {
  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Mapeamento & Diagnóstico Patrimonial",
      description: "Entendemos seu cenário financeiro, metas e horizonte de tempo para desenhar um plano sob medida."
    },
    {
      icon: Building2,
      number: "2",
      title: "Estruturação do Consórcio Ideal",
      description: "Selecionamos a carta, administradora e grupo com maior potencial de contemplação e menor risco."
    },
    {
      icon: TrendingUp,
      number: "3",
      title: "Aquisição Estratégica de Ativos",
      description: "Transformamos sua carta de crédito em imóveis certos, com liquidez, valorização e potencial de renda."
    },
    {
      icon: DollarSign,
      number: "4",
      title: "Construção de Renda e Expansão",
      description: "Criamos uma rota para que os imóveis adquiridos possam se pagar com o tempo e financiar o próximo ciclo."
    },
    {
      icon: RefreshCw,
      number: "5",
      title: "Ciclo Contínuo de Crescimento",
      description: "Seu patrimônio cresce com previsibilidade: renda + valorização + novos imóveis ao longo dos anos."
    }
  ];

  return (
    <section className="py-24 px-4 bg-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-bg-dark">
            Como funciona o{" "}
            <span className="text-gradient">Método Patrimônio de Elite</span>?
          </h2>
          <p className="text-xl text-bg-dark/70 max-w-3xl mx-auto">
            Uma estratégia validada e previsível para construir patrimônio através do 
            consórcio imobiliário — de forma segura, escalável e inteligente.
          </p>
        </div>

        <div className="grid gap-6 mb-12">
          {steps.map((step, index) => (
            <FeatureCard key={index} {...step} />
          ))}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};
