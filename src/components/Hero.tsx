
import { ArrowDown } from 'lucide-react';
import Reveal from './Reveal';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-wellness-sage/30 blur-3xl"></div>
        <div className="absolute top-1/3 left-[5%] w-72 h-72 rounded-full bg-wellness-sky/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-[15%] w-80 h-80 rounded-full bg-wellness-ocean/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <Reveal>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-wellness-sage/30 text-wellness-moss">
              Elevating Mind, Body & Soul
            </span>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight">
              A Premium Destination for 
              <span className="text-wellness-moss"> Holistic Wellbeing</span>
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-10">
              Experience a transformative journey to balance, resilience, and longevity through our 
              expertly curated mental health support, mindfulness practices, and eco-conscious wellness solutions.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </Reveal>

          <Reveal delay={800}>
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 animate-gentle-float">
              <p className="text-sm font-medium mb-2">Discover More</p>
              <a 
                href="#services" 
                className="w-10 h-10 rounded-full border border-wellness-moss/40 flex items-center justify-center hover:border-wellness-moss transition-colors"
              >
                <ArrowDown size={20} className="text-wellness-moss" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
