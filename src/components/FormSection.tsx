import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    investment: "",
    termsAccepted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!formData.name || !formData.whatsapp || !formData.investment) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    if (!formData.termsAccepted) {
      toast.error("Por favor, aceite os Termos de Uso");
      return;
    }

    // Aqui você pode integrar com um serviço de email ou CRM
    toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.");

    // Limpar formulário
    setFormData({
      name: "",
      whatsapp: "",
      investment: "",
      termsAccepted: false
    });
  };

  return (
    <section id="formulario" className="py-16 md:py-24 px-6 md:px-4 bg-white">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bg-dark leading-tight">
            Descubra quanto você pode{" "}
            <span className="text-gradient">acelerar seu patrimônio</span>{" "}
            com consórcio.
          </h2>
          <p className="text-base md:text-lg text-bg-dark/70">
            Preencha e receba uma análise gratuita do seu potencial de crescimento 
            patrimonial através do Método Patrimônio de Elite.
          </p>
        </div>

        <div className="glass-card p-6 md:p-12 glow-accent bg-white/50">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground text-sm md:text-base">Nome *</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Escreva seu nome completo" 
                value={formData.name} 
                onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} 
                className="bg-background/50 border-border focus:border-accent h-12 md:h-11" 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-foreground text-sm md:text-base">Whatsapp - (Número do celular) *</Label>
              <Input 
                id="whatsapp" 
                type="tel" 
                placeholder="Formato: (xx) 9-xxxx-xxxx" 
                value={formData.whatsapp} 
                onChange={e => setFormData({
                  ...formData,
                  whatsapp: e.target.value
                })} 
                className="bg-background/50 border-border focus:border-accent h-12 md:h-11" 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="investment" className="text-foreground text-sm md:text-base">Qual sua capacidade de investimento em Reais? *</Label>
              <Select 
                value={formData.investment} 
                onValueChange={(value) => setFormData({ ...formData, investment: value })}
              >
                <SelectTrigger className="bg-background/50 border-border focus:border-accent h-12 md:h-11">
                  <SelectValue placeholder="Escolha sua preferência" />
                </SelectTrigger>
                <SelectContent className="bg-white border-border z-50">
                  <SelectItem value="1000-2000">de R$ 1.000,00 a R$ 2.000,00</SelectItem>
                  <SelectItem value="2000-3000">de R$ 2.000,00 a R$ 3.000,00</SelectItem>
                  <SelectItem value="3000-5000">de R$ 3.000,00 a R$ 5.000,00</SelectItem>
                  <SelectItem value="5000+">Acima de R$ 5.000,00</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground text-sm md:text-base">Termos de Uso *</Label>
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="terms" 
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked as boolean })}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-foreground/80 leading-relaxed cursor-pointer">
                  Declaro que li e estou de concordo com as{" "}
                  <a href="#" className="text-accent hover:underline">Políticas de Privacidade</a>
                  {" "}e os{" "}
                  <a href="#" className="text-accent hover:underline">Termos de Uso</a>
                </label>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full btn-gradient transition-all duration-300 glow-accent md:text-lg md:py-7 group mt-6 py-6 text-base text-center opacity-95">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};