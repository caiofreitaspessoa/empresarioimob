import { CTAButton } from "./CTAButton";

export const FinalCTASection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-highlight/5 to-background" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            A liberdade financeira começa quando o seu{" "}
            <span className="text-gradient">patrimônio trabalha por você</span>.
          </h2>
          
          <div className="space-y-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            <p>
              Você já domina o trabalho. Agora é hora de dominar o patrimônio.
            </p>
            <p>
              Com o Método Patrimônio de Elite, seus imóveis deixam de ser um projeto 
              distante e passam a construir riqueza todos os meses.
            </p>
          </div>

          <div className="pt-8">
            <CTAButton className="text-xl px-12 py-7" />
          </div>
        </div>
      </div>
    </section>
  );
};
