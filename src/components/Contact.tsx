
import { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import Button from './Button';
import Reveal from './Reveal';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-[-10%] w-72 h-72 rounded-full bg-wellness-sage/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[-5%] w-80 h-80 rounded-full bg-wellness-ocean/10 blur-3xl"></div>
      </div>

      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Get in <span className="text-wellness-moss">Touch</span></h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="section-subtitle">
            Have questions about our services or ready to begin your wellbeing journey? We're here to help.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <Reveal delay={300}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wellness-sage/30 flex items-center justify-center mr-4">
                    <MapPin size={18} className="text-wellness-moss" />
                  </div>
                  <div>
                    <p className="font-medium">Our Location</p>
                    <p className="text-muted-foreground mt-1">123 Wellness Avenue, Mindful City, MC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wellness-sage/30 flex items-center justify-center mr-4">
                    <Phone size={18} className="text-wellness-moss" />
                  </div>
                  <div>
                    <p className="font-medium">Phone Number</p>
                    <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wellness-sage/30 flex items-center justify-center mr-4">
                    <Mail size={18} className="text-wellness-moss" />
                  </div>
                  <div>
                    <p className="font-medium">Email Address</p>
                    <p className="text-muted-foreground mt-1">info@holisticwellbeingsolutions.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-serif mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="w-10 h-10 rounded-full bg-wellness-sage/20 flex items-center justify-center hover:bg-wellness-moss hover:text-white transition-colors"
                      aria-label={`Visit our ${social} page`}
                    >
                      <i className={`lucide-${social}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-serif mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className={cn(isSubmitted ? "hidden" : "block")}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-wellness-stone/30 focus:outline-none focus:ring-2 focus:ring-wellness-moss/50"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-wellness-stone/30 focus:outline-none focus:ring-2 focus:ring-wellness-moss/50"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-wellness-stone/30 focus:outline-none focus:ring-2 focus:ring-wellness-moss/50"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Service Information">Service Information</option>
                      <option value="Booking Request">Booking Request</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="How can we help you?"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-wellness-stone/30 focus:outline-none focus:ring-2 focus:ring-wellness-moss/50"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full flex items-center justify-center gap-2">
                    <Send size={16} />
                    <span>Send Message</span>
                  </Button>
                </div>

                <div className={cn("text-center py-8", isSubmitted ? "block" : "hidden")}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wellness-sage/30 mb-4">
                    <CheckCircle size={32} className="text-wellness-moss" />
                  </div>
                  <h4 className="text-2xl font-serif mb-3">Message Sent!</h4>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
