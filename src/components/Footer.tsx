
import { ChevronRight, Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wellness-sand/70 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-30%] right-[-10%] w-96 h-96 rounded-full bg-wellness-sage/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand and description */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-serif font-medium inline-block">
              <span className="text-wellness-moss">Holistic</span>
              <span className="text-foreground"> Wellbeing</span>
            </a>
            <p className="text-muted-foreground">
              Elevating mind, body & soul for lifelong well-being through transformative holistic solutions.
            </p>
            <p className="flex items-center text-sm">
              Made with <Heart size={14} className="mx-1 text-wellness-moss" fill="currentColor" /> for better well-being
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Features', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' us', '').replace(' ', '-')}`}
                    className="inline-flex items-center text-foreground/80 hover:text-wellness-moss transition-colors"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Mental Health Support',
                'Mindfulness Practices',
                'Eco-Conscious Wellness',
                'Luxury Retreats',
                'Preventative Wellbeing',
                'Personalized Programs'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="inline-flex items-center text-foreground/80 hover:text-wellness-moss transition-colors"
                  >
                    <ChevronRight size={14} className="mr-1" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for wellness tips and updates.</p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-wellness-stone/30 focus:outline-none focus:ring-2 focus:ring-wellness-moss/50"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-wellness-moss text-white rounded-lg hover:bg-wellness-leaf transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-6 border-t border-wellness-stone/30 flex flex-col items-center">
          <h3 className="text-lg font-serif font-medium mb-4">Follow Us</h3>
          <div className="flex space-x-6 mb-8">
            <a
              href="#facebook"
              className="w-10 h-10 rounded-full bg-wellness-sage/20 flex items-center justify-center hover:bg-wellness-moss hover:text-white transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#twitter"
              className="w-10 h-10 rounded-full bg-wellness-sage/20 flex items-center justify-center hover:bg-wellness-moss hover:text-white transition-colors"
              aria-label="Visit our Twitter page"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#instagram"
              className="w-10 h-10 rounded-full bg-wellness-sage/20 flex items-center justify-center hover:bg-wellness-moss hover:text-white transition-colors"
              aria-label="Visit our Instagram page"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#linkedin"
              className="w-10 h-10 rounded-full bg-wellness-sage/20 flex items-center justify-center hover:bg-wellness-moss hover:text-white transition-colors"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-wellness-stone/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Holistic Wellbeing Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/70 hover:text-wellness-moss transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/70 hover:text-wellness-moss transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/70 hover:text-wellness-moss transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
