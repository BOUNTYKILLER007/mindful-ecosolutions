
import { LifeBuoy, UserCheck, Sparkles, Leaf } from 'lucide-react';
import Reveal from './Reveal';

const Features = () => {
  const features = [
    {
      icon: <LifeBuoy className="w-6 h-6" />,
      title: "Personalised Approach",
      description: "Tailored mindfulness-based programs, coaching, and retreats designed for your unique journey."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Longevity & Resilience",
      description: "Sustainable well-being practices to enhance mental, emotional, and physical vitality for life."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Luxury Eco-Wellness",
      description: "Exclusive well-being experiences that nourish both you and the environment."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Ethical & Confidential",
      description: "A safe, welcoming space where your well-being is our priority, with the highest standards of care."
    }
  ];

  return (
    <section id="features" className="relative overflow-hidden py-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-wellness-ocean/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-64 h-64 rounded-full bg-wellness-sage/20 blur-3xl"></div>
      </div>

      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Experience a <span className="text-wellness-moss">Higher Standard</span></h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="section-subtitle">
            Our premium services deliver exceptional results through a combination of expertise, compassion, and innovation.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16">
          {features.map((feature, index) => (
            <Reveal key={index} delay={300 + index * 100} direction="right">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-wellness-sage/30 flex items-center justify-center mr-5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={700} className="mt-24">
          <div className="glass-card p-10 md:p-16">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-2/3 md:pr-12 mb-8 md:mb-0">
                <h3 className="text-3xl font-serif font-medium mb-6">Your journey to clarity, resilience, and lifelong well-being starts here.</h3>
                <p className="text-muted-foreground mb-6">
                  Join us to discover a new approach to well-being that honors the interconnectedness of mind, body, and environment. Our holistic solutions are designed to support you in creating a life of balance, purpose, and vitality.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <a 
                    href="#contact" 
                    className="px-8 py-3 bg-wellness-moss text-white rounded-full hover:bg-wellness-leaf transition-colors"
                  >
                    Begin Your Journey
                  </a>
                  <a href="#services" className="text-wellness-moss hover:text-wellness-leaf transition-colors font-medium underline underline-offset-2">
                    Explore Our Services
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-40 h-40 relative">
                  <div className="absolute inset-0 bg-wellness-moss/20 rounded-full animate-pulse-slow"></div>
                  <div className="absolute inset-2 bg-wellness-moss/30 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute inset-4 bg-wellness-moss/40 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute inset-6 bg-wellness-moss/50 rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
                  <div className="absolute inset-8 bg-wellness-moss rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
