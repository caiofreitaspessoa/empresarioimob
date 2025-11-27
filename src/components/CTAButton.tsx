import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  onClick?: () => void;
  className?: string;
}

export const CTAButton = ({ onClick, className = "" }: CTAButtonProps) => {
  const scrollToForm = () => {
    const formSection = document.getElementById('formulario');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Button 
      onClick={onClick || scrollToForm}
      size="lg"
      className={`btn-gradient hover:opacity-90 transition-all duration-300 glow-accent text-lg px-8 py-6 group ${className}`}
    >
      Agende sua consultoria
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  );
};
