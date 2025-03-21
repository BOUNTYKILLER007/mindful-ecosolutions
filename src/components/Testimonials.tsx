
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import Reveal from './Reveal';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      content: "The personalized mindfulness program transformed my relationship with stress. I've gained practical tools that help me stay centered even during the most challenging workdays.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Technology Director",
      content: "After years of burnout, the holistic approach to well-being has given me a new perspective on balancing work and personal life. The results have been remarkable.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Healthcare Professional",
      content: "As someone who helps others all day, I needed support for my own well-being. The eco-wellness retreat was exactly what I needed - both rejuvenating and enlightening.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Finance Analyst",
      content: "I was skeptical about mindfulness practices, but the evidence-based approach convinced me to try. Six months later, my anxiety levels have decreased significantly.",
      rating: 4
    },
    {
      name: "Sophia Patel",
      role: "Creative Director",
      content: "The combination of mental health support and sustainable wellness practices has helped me reconnect with my creativity and find a more balanced approach to life.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Entrepreneur",
      content: "Running a business takes its toll, but the personalized resilience program has given me tools to maintain clarity and purpose through all the challenges.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const maxIndex = Math.max(0, Math.ceil(testimonials.length / 3) - 1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      handleNext();
    }

    if (touchStart - touchEnd < -100) {
      handlePrev();
    }
  };

  // Automatically adjust the maxIndex based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) { // Mobile
        setCurrentIndex(Math.min(currentIndex, testimonials.length - 1));
      } else if (width < 1024) { // Tablet
        setCurrentIndex(Math.min(currentIndex, Math.ceil(testimonials.length / 2) - 1));
      } else { // Desktop
        setCurrentIndex(Math.min(currentIndex, Math.ceil(testimonials.length / 3) - 1));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-wellness-sand/50">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">What Our <span className="text-wellness-moss">Clients</span> Say</h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="section-subtitle">
            Discover how our holistic approach to wellbeing has transformed lives and fostered lasting positive change.
          </p>
        </Reveal>

        <div className="relative mt-12">
          <div 
            ref={containerRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)` 
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
                >
                  <TestimonialCard
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            className={cn(
              "absolute top-1/2 -translate-y-1/2 left-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-wellness-moss transition-all",
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:scale-105"
            )}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className={cn(
              "absolute top-1/2 -translate-y-1/2 right-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-wellness-moss transition-all",
              currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:scale-105"
            )}
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-10 h-1.5 rounded-full transition-all",
                  index === currentIndex ? "bg-wellness-moss" : "bg-wellness-stone/30 hover:bg-wellness-stone/50"
                )}
                aria-label={`Go to testimonial set ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
