
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white py-16">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="font-playfair text-2xl font-bold text-white mb-6 block">
              PRIME<span className="text-luxury-gold">PROPERTY</span>
            </Link>
            <p className="text-white/70 mb-6">
              Specializing in luxury real estate properties for the most discerning clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-luxury-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-white hover:text-luxury-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-luxury-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/70 hover:text-luxury-gold transition-colors">Home</Link></li>
              <li><Link to="/properties" className="text-white/70 hover:text-luxury-gold transition-colors">Properties</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-luxury-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Property Types</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-luxury-gold transition-colors">Luxury Estates</a></li>
              <li><a href="#" className="text-white/70 hover:text-luxury-gold transition-colors">Beachfront Villas</a></li>
              <li><a href="#" className="text-white/70 hover:text-luxury-gold transition-colors">City Penthouses</a></li>
              <li><a href="#" className="text-white/70 hover:text-luxury-gold transition-colors">Country Mansions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">Subscribe to receive updates on our newest exclusive properties.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/10 px-4 py-3 w-full focus:outline-none" 
                required 
              />
              <button type="submit" className="bg-luxury-gold px-4 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} PRIME BLACK Properties. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
