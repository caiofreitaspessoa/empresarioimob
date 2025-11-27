import { CTAButton } from "./CTAButton";
import heroImage from "@/assets/hero-skyline.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern cityscape" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] via-[#142840]/90 to-[#0A1A2F]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full border border-accent/30 bg-accent/10">
              Consultoria em Consórcio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            Como profissionais de alta renda{" "}
            <span className="text-gradient">aceleram patrimônio</span>{" "}
            usando consórcio de forma inteligente e estratégica.
          </h1>

          <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-3xl mx-auto">
            Com o Método Patrimônio de Elite, você transforma parte da sua renda em imóveis 
            de alta qualidade — que se pagam com o tempo — sem juros, sem volatilidade e 
            com previsibilidade total.
          </p>

          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            Você já domina sua carreira. Agora é hora de dominar a construção do patrimônio 
            que acompanha o seu esforço.
          </p>

          <div className="pt-6">
            <CTAButton />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
