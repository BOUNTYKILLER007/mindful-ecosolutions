
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  className?: string;
}

const TestimonialCard = ({ name, role, content, rating, className }: TestimonialCardProps) => {
  return (
    <div className={cn(
      "glass-card p-8 h-full flex flex-col",
      className
    )}>
      <div className="flex mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-wellness-leaf fill-wellness-leaf" : "text-wellness-stone"} 
          />
        ))}
      </div>
      <p className="text-foreground/80 mb-6 flex-grow">{content}</p>
      <div className="mt-auto">
        <p className="font-serif text-lg font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
