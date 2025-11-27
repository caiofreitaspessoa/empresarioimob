import { CTAButton } from "./CTAButton";
import buildingsImage from "@/assets/buildings-luxury-dark.jpg";

export const FinalCTASection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-purple">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={buildingsImage} 
          alt="Luxury buildings" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A3AFF]/90 via-[#4A3AFF]/80 to-[#4A3AFF]/90" />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-white">
            A liberdade financeira começa quando o seu{" "}
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">patrimônio trabalha por você</span>.
          </h2>
          
          <div className="space-y-4 text-xl text-white/90 max-w-2xl mx-auto">
            <p>
              Você já domina o trabalho. Agora é hora de dominar o patrimônio.
            </p>
            <p>
              Com o Método Patrimônio de Elite, seus imóveis deixam de ser um projeto 
              distante e passam a construir riqueza todos os meses.
            </p>
          </div>

          <div className="pt-8">
            <CTAButton className="text-xl px-12 py-7 bg-white text-highlight hover:bg-white/90" />
          </div>
        </div>
      </div>
    </section>
  );
};
