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
    <section className="py-16 md:py-24 px-6 md:px-4 bg-light">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-center">
          {/* Left: Text */}
          <div className="space-y-3 md:space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bg-dark leading-tight">
              Sua Consultoria Imobiliária <span className="text-gradient">360°</span>
            </h2>
            <p className="text-base md:text-xl text-bg-dark/70 leading-relaxed">
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
                      <span className="text-xs md:text-base font-medium text-bg-dark/70 whitespace-pre-line text-right flex-shrink-0">
                        {step.label}
                      </span>
                      <div 
                        className={`rounded-lg h-16 md:h-20 flex items-center justify-center shadow-lg ${
                          index % 2 === 0 ? 'bg-bg-dark' : 'bg-white'
                        }`}
                        style={{ width: `${widthPercent}%` }}
                      >
                        <span className={`text-2xl md:text-3xl font-bold ${
                          index % 2 === 0 ? 'text-white' : 'text-bg-dark'
                        }`}>
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
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-10 md:mb-12">
          {mainSteps.map((step, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                index % 2 === 0 ? 'bg-bg-dark' : 'bg-white'
              }`}
            >
              <div className="flex flex-col md:flex-row items-start gap-4 text-center md:text-left">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center mx-auto md:mx-0 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-bg-dark'
                }`}>
                  <span className={`text-2xl font-bold ${
                    index % 2 === 0 ? 'text-bg-dark' : 'text-white'
                  }`}>
                    {step.number}.
                  </span>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className={`text-lg md:text-xl font-bold ${
                    index % 2 === 0 ? 'text-white' : 'text-bg-dark'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed text-sm md:text-base ${
                    index % 2 === 0 ? 'text-white/90' : 'text-bg-dark/80'
                  }`}>
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
