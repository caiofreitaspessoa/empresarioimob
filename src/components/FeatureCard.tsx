import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  number?: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, number, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-card p-8 hover:border-accent transition-all duration-300 hover:glow-accent group bg-white/80">
      <div className="flex items-start gap-4">
        {number && (
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-highlight flex items-center justify-center text-white font-bold text-xl">
            {number}
          </div>
        )}
        <div className="flex-shrink-0">
          <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
