import { CTAButton } from "./CTAButton";

export const ProcessSection = () => {
  const mainSteps = [
    {
      number: "1",
      title: "Análise personalizada",
      description: "Entendemos seu cenário financeiro, metas e horizonte de tempo para desenhar o plano ideal."
    },
    {
      number: "2",
      title: "Estratégia de crédito",
      description: "Escolhemos a administradora e grupo com melhor potencial de contemplação."
    },
    {
      number: "3",
      title: "Seleção do imóvel certo",
      description: "Transformamos sua carta de crédito em imóveis com liquidez e valorização."
    },
    {
      number: "4",
      title: "Projeção patrimonial",
      description: "Criamos uma rota para que os imóveis adquiridos possam se pagar com o tempo."
    },
    {
      number: "5",
      title: "Ciclo contínuo de alavancagem",
      description: "Seu patrimônio cresce com previsibilidade: renda + valorização + novos imóveis."
    }
  ];

  const funnelSteps = [
    { number: "1", label: "Rentabilização\ne gestão" },
    { number: "2", label: "Compra\nestratégica\nde crédito" },
    { number: "3", label: "Contemplação\nacelerada" },
    { number: "4", label: "Aquisição\ndo imóvel" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-light">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 items-center">
          {/* Left: Text */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bg-dark">
              Sua Consultoria Imobiliária <span className="text-gradient">360°</span>
            </h2>
            <p className="text-lg md:text-xl text-bg-dark/70 leading-relaxed">
              Com nossa consultoria 360°, você tem acesso a{" "}
              <span className="font-semibold">todas as etapas da alavancagem patrimonial</span>,
              conduzidas por especialistas que já ajudaram milhares de brasileiros a comprar
              imóveis que se pagam sozinhos.
            </p>
          </div>

          {/* Right: Funnel Diagram */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Funnel Shape */}
              <div className="relative space-y-3">
                {funnelSteps.map((step, index) => {
                  const widthPercent = 100 - (index * 15);
                  return (
                    <div key={index} className="flex items-center justify-end gap-3">
                      <span className="text-sm md:text-base font-medium text-bg-dark/70 whitespace-pre-line text-right flex-shrink-0">
                        {step.label}
                      </span>
                      <div 
                        className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-lg h-16 md:h-20 flex items-center justify-center shadow-lg"
                        style={{ width: `${widthPercent}%` }}
                      >
                        <span className="text-2xl md:text-3xl font-bold text-bg-dark">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Step Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {mainSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-bg-dark/90 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {step.number}.
                  </span>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-bg-dark">
                    {step.title}
                  </h3>
                  <p className="text-bg-dark/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};
