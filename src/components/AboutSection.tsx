
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-luxury-cream">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h2 className="section-subtitle">About Us</h2>
            <h3 className="section-title text-luxury-black mb-8">The Pinnacle of Luxury Real Estate</h3>
            
            <p className="text-luxury-charcoal mb-6 leading-relaxed">
              At PRIMEProperties, we specialize in the most exclusive real estate properties across the globe. 
              Our curated portfolio features only the finest estates, crafted by renowned architects and designers 
              to meet the expectations of the most discerning clients.
            </p>
            
            <p className="text-luxury-charcoal mb-8 leading-relaxed">
              With decades of experience and a dedication to white-glove service, our team of luxury real estate 
              specialists provides a level of expertise and personalized attention that is unmatched in the industry.
            </p>
            
            <div className="flex gap-4 items-center">
              <div className="w-24 h-1 bg-luxury-gold"></div>
              <p className="italic text-luxury-charcoal">"Beyond exceptional living"</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-sm h-64">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Luxury Interior" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-sm h-80">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" alt="Luxury Pool" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-sm h-80">
                <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop" alt="Luxury Exterior" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-sm h-64">
                <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop" alt="Luxury Kitchen" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
