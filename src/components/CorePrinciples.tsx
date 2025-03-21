
import { Check, Shield, Activity, Heart } from 'lucide-react';
import Reveal from './Reveal';

const CorePrinciples = () => {
  const principles = [
    {
      icon: <Shield className="w-8 h-8 text-wellness-moss" />,
      title: "Protect",
      description: "Safeguard mental well-being through science-backed strategies that create resilience against daily stressors and challenges."
    },
    {
      icon: <Activity className="w-8 h-8 text-wellness-moss" />,
      title: "Prevent",
      description: "Address stress, burnout, and emotional challenges before they escalate with proactive and preventative approaches."
    },
    {
      icon: <Heart className="w-8 h-8 text-wellness-moss" />,
      title: "Promote",
      description: "Cultivate long-term well-being, vitality, and a fulfilling life through sustainable practices and mindful living."
    }
  ];

  return (
    <section id="about" className="py-24 bg-wellness-sand/50">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Our <span className="text-wellness-moss">Core</span> Philosophy</h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="section-subtitle">
            Our holistic approach is built on three foundational principles that guide every aspect of our wellbeing solutions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {principles.map((principle, index) => (
            <Reveal key={index} delay={300 + index * 150}>
              <div className="relative bg-white rounded-2xl p-8 shadow-soft text-center hover:shadow-card transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-wellness-sage/30 mb-6 mx-auto">
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-serif font-medium mb-4">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
                <div className="absolute top-0 left-0 w-full h-1 bg-wellness-moss rounded-t-2xl"></div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={800} className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-3xl font-serif font-medium mb-6">A Higher Standard of <span className="text-wellness-moss">Holistic Well-Being</span></h3>
              <p className="text-muted-foreground mb-6">
                At Holistic Wellbeing Solutions, we believe that well-being is a journey—one that requires care, commitment, and a personalised approach. Our carefully designed services integrate mental health support, mindfulness, and sustainable wellness practices.
              </p>
              <p className="text-muted-foreground">
                Your journey to clarity, resilience, and lifelong well-being starts here with our premium services tailored to your unique needs.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-wellness-sage/10 rounded-xl p-6">
              <ul className="space-y-4">
                {[
                  "Personalised approach to well-being",
                  "Longevity & resilience focused programs",
                  "Luxury eco-wellness experiences",
                  "Inclusive & compassionate support",
                  "Ethical & confidential practices"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-wellness-leaf text-white flex items-center justify-center mt-0.5">
                      <Check size={14} />
                    </div>
                    <span className="ml-3">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CorePrinciples;
