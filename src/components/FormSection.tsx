import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    city: "",
    profession: "",
    investment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação simples
    if (!formData.name || !formData.whatsapp || !formData.city) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Aqui você pode integrar com um serviço de email ou CRM
    toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.");
    
    // Limpar formulário
    setFormData({
      name: "",
      whatsapp: "",
      city: "",
      profession: "",
      investment: ""
    });
  };

  return (
    <section id="formulario" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-bg-dark">
            Descubra quanto você pode{" "}
            <span className="text-gradient">acelerar seu patrimônio</span>{" "}
            com consórcio.
          </h2>
          <p className="text-lg text-bg-dark/70">
            Preencha e receba uma análise gratuita do seu potencial de crescimento 
            patrimonial através do Método Patrimônio de Elite.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 glow-accent bg-white/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Nome completo *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background/50 border-border focus:border-accent"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-foreground">WhatsApp *</Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="bg-background/50 border-border focus:border-accent"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="text-foreground">Cidade *</Label>
              <Input
                id="city"
                type="text"
                placeholder="Sua cidade"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="bg-background/50 border-border focus:border-accent"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="profession" className="text-foreground">Profissão</Label>
              <Input
                id="profession"
                type="text"
                placeholder="Sua profissão"
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                className="bg-background/50 border-border focus:border-accent"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="investment" className="text-foreground">Capacidade mensal de investimento</Label>
              <Input
                id="investment"
                type="text"
                placeholder="R$ 0.000,00"
                value={formData.investment}
                onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                className="bg-background/50 border-border focus:border-accent"
              />
            </div>

            <Button 
              type="submit"
              size="lg"
              className="w-full btn-gradient hover:opacity-90 transition-all duration-300 glow-accent text-lg py-6 group"
            >
              Agende sua consultoria
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
