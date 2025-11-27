import { CTAButton } from "./CTAButton";
import skylineImage from "@/assets/hero-skyline.jpg";

export const FinalCTASection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-purple">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={skylineImage} 
          alt="City skyline" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/95 via-bg-dark/90 to-bg-dark/95" />
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white">
            A liberdade financeira começa quando o seu{" "}
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">patrimônio trabalha por você</span>.
          </h2>
          
          <div className="space-y-3 md:space-y-4 text-base md:text-xl text-white/90 max-w-2xl mx-auto">
            <p>
              Você já domina o trabalho. Agora é hora de dominar o patrimônio.
            </p>
            <p>
              Com o Método Patrimônio de Elite, seus imóveis deixam de ser um projeto 
              distante e passam a construir riqueza todos os meses.
            </p>
          </div>

          <div className="pt-6 md:pt-8">
            <CTAButton className="text-base md:text-xl px-8 md:px-12 py-6 md:py-7 bg-white text-highlight hover:bg-white/90" />
          </div>
        </div>
      </div>
    </section>
  );
};
