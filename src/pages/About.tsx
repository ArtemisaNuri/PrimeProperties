
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-12 bg-luxury-cream">
          <div className="luxury-container">
            <div className="text-center mb-16">
              <h2 className="section-subtitle">Our Story</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-luxury-black font-playfair mb-6">
                About PrimeProperty
              </h1>
              <p className="text-luxury-charcoal max-w-2xl mx-auto">
                Discover the vision and expertise behind the world's most exclusive real estate agency.
              </p>
            </div>
          </div>
        </section>
        
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
