import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  number?: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, number, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-card p-8 hover:border-accent/50 transition-all duration-300 hover:glow-accent group">
      <div className="flex items-start gap-4">
        {number && (
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl border border-accent/30">
            {number}
          </div>
        )}
        <div className="flex-shrink-0">
          <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
