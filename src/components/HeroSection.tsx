import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-luxury-house.jpg";
export const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('formulario');
    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Luxury modern house" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white">
            Como profissionais de alta renda{" "}
            <span className="text-gradient">aceleram patrimônio</span>{" "}
            usando consórcio de forma inteligente e estratégica.
          </h1>

          <p className="text-base text-white/90 leading-relaxed md:text-base">Com o Método Patrimônio de Elite, você transforma parte da sua renda em imóveis de alta qualidade, que se pagam com o tempo. Sem juros, sem volatilidade e com previsibilidade total.</p>

          

          <div className="pt-2 md:pt-4">
            <Button onClick={scrollToForm} size="lg" className="bg-[#B8860B] hover:bg-[#9A7209] text-white transition-all duration-300 text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-lg group shadow-lg hover:shadow-xl w-full md:w-auto">
              Agende sua consultoria
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A1A2F] to-transparent z-10" />
    </section>;
};