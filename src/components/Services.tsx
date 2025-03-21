
import { Brain, Heart, Leaf, Shield, Sun, Wind } from 'lucide-react';
import ServiceCard from './ServiceCard';
import Reveal from './Reveal';

const Services = () => {
  const services = [
    {
      icon: <Brain size={28} />,
      title: "Mental Health Support",
      description: "Expert guidance and personalized strategies to nurture mental wellbeing and emotional resilience in today's demanding world."
    },
    {
      icon: <Heart size={28} />,
      title: "Mindfulness Practices",
      description: "Transform your relationship with stress through evidence-based mindfulness techniques that restore balance and inner peace."
    },
    {
      icon: <Leaf size={28} />,
      title: "Eco-Conscious Wellness",
      description: "Sustainable wellbeing solutions that honor both personal health and environmental integrity for holistic harmony."
    },
    {
      icon: <Sun size={28} />,
      title: "Luxury Retreats",
      description: "Immersive wellbeing experiences in serene settings designed to rejuvenate mind, body, and spirit with premium care."
    },
    {
      icon: <Shield size={28} />,
      title: "Preventative Wellbeing",
      description: "Proactive approaches to wellness that address potential challenges before they impact your quality of life."
    },
    {
      icon: <Wind size={28} />,
      title: "Personalized Programs",
      description: "Tailored wellbeing journeys that adapt to your unique needs, goals, and lifestyle for maximum effectiveness."
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden py-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-[-5%] w-96 h-96 rounded-full bg-wellness-sage/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-[-10%] w-80 h-80 rounded-full bg-wellness-sky/20 blur-3xl"></div>
      </div>

      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Our Premium <span className="text-wellness-moss">Services</span></h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="section-subtitle">
            Discover our carefully crafted wellbeing solutions designed to transform your relationship with mental health, mindfulness, and ecological wellness.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
