
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full py-6 bg-white/80 backdrop-blur-md z-50 fixed top-0 left-0 right-0">
      <div className="luxury-container flex justify-between items-center">
        <Link to="/" className="font-playfair text-2xl font-bold text-luxury-black">
          PRIME<span className="text-luxury-gold">PROPERTY</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="uppercase text-sm tracking-wider hover:text-luxury-gold transition-colors duration-200">Home</Link>
          <Link to="/properties" className="uppercase text-sm tracking-wider hover:text-luxury-gold transition-colors duration-200">Properties</Link>
          <Link to="/about" className="uppercase text-sm tracking-wider hover:text-luxury-gold transition-colors duration-200">About</Link>
          <Link to="/contact" className="uppercase text-sm tracking-wider hover:text-luxury-gold transition-colors duration-200">Contact</Link>
        </div>
        
        <div className="hidden md:block">
          <button className="btn-luxury">
            Book a Viewing
          </button>
        </div>
        
        <button className="md:hidden text-luxury-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
