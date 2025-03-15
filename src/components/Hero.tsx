
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-luxury-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
      
      <div className="luxury-container relative z-10 py-20 mt-16">
        <div className="max-w-3xl animate-fade-in" style={{animationDelay: '0.3s'}}>
          <h2 className="section-subtitle">Luxury Real Estate</h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-playfair mb-6 leading-tight">
            Experience Unmatched <br /> Luxury Living
          </h1>
          <p className="text-white/80 mb-8 text-lg max-w-2xl">
            Discover extraordinary properties that define excellence in the most prestigious locations around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/properties" className="btn-luxury bg-luxury-gold hover:bg-luxury-gold/90 text-black">
              View Properties
            </Link>
            <Link to="/contact" className="btn-luxury-outline border-white text-white hover:bg-white hover:text-luxury-black">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
