
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import Reveal from './Reveal';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Services = () => {
  const [activeTab, setActiveTab] = useState("individual");

  const services = {
    individual: [
      {
        title: 'Mindfulness Coaching',
        icon: '/mindfulness.svg',
        description: 'Personalized mindfulness coaching sessions designed to help you develop a sustainable meditation practice and mindful living approach.',
      },
      {
        title: 'Mental Health Support',
        icon: '/mental-health.svg',
        description: 'Compassionate mental health services focusing on stress management, anxiety reduction, and building emotional resilience.',
      },
      {
        title: 'Holistic Wellness Plans',
        icon: '/wellness-plan.svg',
        description: 'Integrated wellness plans combining mental, physical, and spiritual health practices for complete well-being.',
      },
      {
        title: 'Eco-Friendly Retreats',
        icon: '/retreat.svg',
        description: 'Immersive wellness retreats in nature-focused settings, designed to reconnect you with yourself and the environment.',
      },
    ],
    corporate: [
      {
        title: 'Workplace Wellness Programs',
        icon: '/workplace.svg',
        description: 'Comprehensive wellness initiatives designed to improve employee well-being, reduce stress, and enhance productivity.',
      },
      {
        title: 'Corporate Mindfulness Training',
        icon: '/corporate-mindfulness.svg',
        description: 'Structured mindfulness programs for teams, improving focus, creativity, and collaborative problem-solving.',
      },
      {
        title: 'Leadership Resilience Coaching',
        icon: '/leadership.svg',
        description: 'Specialized coaching for executives and leaders to build mental resilience and emotional intelligence.',
      },
      {
        title: 'Wellness Workshops & Seminars',
        icon: '/workshop.svg',
        description: 'Interactive educational sessions on stress management, work-life balance, and sustainable performance.',
      },
    ]
  };

  return (
    <section id="services" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-[-5%] w-72 h-72 rounded-full bg-wellness-sage/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-[-5%] w-72 h-72 rounded-full bg-wellness-ocean/10 blur-3xl"></div>
      </div>

      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Our <span className="text-wellness-moss">Services</span></h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="section-subtitle">
            Experience our holistic approach to wellness through our carefully curated services,
            designed to nurture your mind, body, and spirit.
          </p>
        </Reveal>

        <div className="mt-12">
          <Tabs defaultValue="individual" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-2">
              <TabsTrigger value="individual">Individual Services</TabsTrigger>
              <TabsTrigger value="corporate">Corporate Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.individual.map((service, index) => (
                  <Reveal key={service.title} delay={300 + index * 100}>
                    <ServiceCard {...service} />
                  </Reveal>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="corporate" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.corporate.map((service, index) => (
                  <Reveal key={service.title} delay={300 + index * 100}>
                    <ServiceCard {...service} />
                  </Reveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Reveal>
          <div className="flex justify-center mt-16">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-wellness-moss hover:text-wellness-ocean font-medium"
            >
              Discover all our services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
