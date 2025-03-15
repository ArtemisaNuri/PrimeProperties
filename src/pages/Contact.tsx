
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-12 bg-luxury-cream">
          <div className="luxury-container">
            <div className="text-center mb-16">
              <h2 className="section-subtitle">Get In Touch</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-luxury-black font-playfair mb-6">
                Contact Us
              </h1>
              <p className="text-luxury-charcoal max-w-2xl mx-auto">
                Reach out to our team of luxury real estate specialists for personalized assistance.
              </p>
            </div>
          </div>
        </section>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
