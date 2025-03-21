
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CorePrinciples from '@/components/CorePrinciples';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <CorePrinciples />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
