
import { cn } from '@/lib/utils';
import Reveal from './Reveal';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

const ServiceCard = ({ title, description, icon, delay = 0, className }: ServiceCardProps) => {
  return (
    <Reveal delay={delay} className="h-full">
      <div className={cn(
        "glass-card h-full p-8 group hover:shadow-glow transition-all duration-500",
        className
      )}>
        <div className="relative mb-6 w-16 h-16 rounded-xl flex items-center justify-center bg-wellness-sage/40 text-wellness-moss group-hover:bg-wellness-moss group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-serif mb-4 group-hover:text-wellness-moss transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Reveal>
  );
};

export default ServiceCard;
