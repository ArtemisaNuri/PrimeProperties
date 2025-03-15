
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "Thank you for your inquiry. A luxury property specialist will contact you shortly.",
      duration: 5000,
    });
  };
  
  return (
    <section className="py-24 bg-luxury-black text-white">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="section-subtitle">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-8">Contact Our Luxury Specialists</h3>
            
            <p className="text-white/80 mb-12 leading-relaxed">
              Whether you're looking to buy, sell, or simply explore the world of luxury real estate, 
              our team of specialists is here to provide you with exceptional service tailored to your unique needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-luxury-gold p-3 rounded-sm">
                  <MapPin className="text-luxury-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Visit Our Office</h4>
                  <p className="text-white/80">1234 Luxury Lane, Beverly Hills, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-luxury-gold p-3 rounded-sm">
                  <Phone className="text-luxury-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-white/80">+1 (800) LUXURY-HOME</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-luxury-gold p-3 rounded-sm">
                  <Mail className="text-luxury-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-white/80">info@primeblackproperties.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm">
            <h4 className="font-playfair text-2xl font-bold mb-6">Send Us a Message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="luxury-input text-white" 
                  required 
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="luxury-input text-white" 
                  required 
                />
              </div>
              
              <div>
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="luxury-input text-white" 
                />
              </div>
              
              <div>
                <textarea 
                  placeholder="Your Message" 
                  className="luxury-input text-white h-32 resize-none" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="w-full btn-luxury bg-luxury-gold hover:bg-luxury-gold/90 text-black">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
