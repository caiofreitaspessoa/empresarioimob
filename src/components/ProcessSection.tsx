import { CTAButton } from "./CTAButton";
import { Search, Target, CheckCircle, Building2, RefreshCw, ArrowDown } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    { icon: Search, title: "Diagnóstico Inteligente" },
    { icon: Target, title: "Estratégia de Consórcio Sob Medida" },
    { icon: CheckCircle, title: "Plano de Contemplação" },
    { icon: Building2, title: "Aquisição do Imóvel Estratégico" },
    { icon: RefreshCw, title: "Ciclo de Crescimento Patrimonial" }
  ];

  return (
    <section className="py-24 px-4 bg-light">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-bg-dark">
            Sua <span className="text-gradient">Consultoria 360°</span>
          </h2>
          <p className="text-xl text-bg-dark/70">
            A rota completa para transformar renda em patrimônio.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="glass-card p-8 w-full max-w-lg hover:border-accent transition-all duration-300 hover:glow-accent group bg-white/80">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-highlight flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="flex items-center gap-4">
                      <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                      <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ArrowDown className="w-8 h-8 text-accent my-4" />
                )}
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
