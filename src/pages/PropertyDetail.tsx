
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Bed, Bath, Square, MapPin, Share2, Heart } from 'lucide-react';

// Sample property data - expanded from PropertyCard data
const propertyData = [
  {
    id: '1',
    title: 'Modern Mansion with Ocean View',
    price: '$8,500,000',
    location: 'Beverly Hills, CA',
    bedrooms: 6,
    bathrooms: 7,
    area: 8500,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    description: "This stunning modern mansion offers breathtaking ocean views from multiple terraces. Featuring an open floor plan, gourmet kitchen with top-of-the-line appliances, and a master suite with a luxurious bathroom. The property includes a cinema room, wine cellar, infinity pool, and a spacious garage.",
    features: ['Cinema Room', 'Wine Cellar', 'Infinity Pool', 'Smart Home System', 'Home Gym', 'Gourmet Kitchen', 'Multiple Terraces', '4-Car Garage'],
    additionalImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: '2',
    title: 'Luxury Penthouse with Skyline Views',
    price: '$5,750,000',
    location: 'Manhattan, NY',
    bedrooms: 4,
    bathrooms: 4.5,
    area: 4200,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    description: "This spectacular penthouse offers panoramic views of the Manhattan skyline. The residence features floor-to-ceiling windows, a chef's kitchen with marble countertops, and a spacious master suite with a walk-in closet. Amenities include a private rooftop terrace, 24/7 concierge service, and access to the building's fitness center and spa.",
    features: ["Private Rooftop Terrace", "24/7 Concierge", "Floor-to-Ceiling Windows", "Chef's Kitchen", "Walk-in Closets", "Fitness Center Access", "Spa Access", "Wine Storage"],
    additionalImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: '3',
    title: 'Beachfront Villa with Private Pool',
    price: '$12,900,000',
    location: 'Malibu, CA',
    bedrooms: 5,
    bathrooms: 6,
    area: 6800,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    description: "This exquisite beachfront villa offers direct access to one of Malibu's most pristine beaches. The property features an open-concept living area with retractable glass walls that lead to an expansive deck with an infinity pool overlooking the ocean. The gourmet kitchen is equipped with high-end appliances, and the master suite includes a spa-like bathroom and private balcony.",
    features: ['Beachfront Access', 'Infinity Pool', 'Outdoor Kitchen', 'Home Theater', 'Wine Cellar', 'Guest House', 'Outdoor Shower', 'Private Dock'],
    additionalImages: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: '4',
    title: 'Classic Brownstone Townhouse',
    price: '$4,200,000',
    location: 'Boston, MA',
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3800,
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop',
    description: "This meticulously restored brownstone townhouse combines historic charm with modern amenities. The residence features original hardwood floors, ornate fireplaces, and high ceilings throughout. The chef's kitchen has been updated with premium appliances, and the property includes a private garden and rooftop terrace with city views.",
    features: ['Original Hardwood Floors', 'Ornate Fireplaces', 'Private Garden', 'Rooftop Terrace', 'Wine Cellar', 'Smart Home Technology', 'Library', 'Elevator'],
    additionalImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
    ]
  },
  {
    id: '5',
    title: 'Contemporary Mountain Retreat',
    price: '$7,950,000',
    location: 'Aspen, CO',
    bedrooms: 5,
    bathrooms: 6,
    area: 6200,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    description: "This contemporary mountain retreat offers stunning panoramic views of the Rocky Mountains. The residence features walls of glass, a dramatic great room with a stone fireplace, and a gourmet kitchen with top-of-the-line appliances. The property includes a heated outdoor pool, hot tub, fire pit, and ski room with direct mountain access.",
    features: ['Mountain Views', 'Heated Outdoor Pool', 'Hot Tub', 'Fire Pit', 'Ski Room', 'Home Theater', 'Wine Cellar', 'Game Room'],
    additionalImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop'
    ]
  },
  {
    id: '6',
    title: 'Exclusive Waterfront Estate',
    price: '$18,500,000',
    location: 'Palm Beach, FL',
    bedrooms: 8,
    bathrooms: 10,
    area: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1602343168117-bb8a12d7ee1b?q=80&w=2070&auto=format&fit=crop',
    description: "This exclusive waterfront estate offers the ultimate in luxury living. The property features a grand entrance with a sweeping staircase, formal living and dining rooms, a chef's kitchen, and a master suite with dual bathrooms and closets. The outdoor space includes a resort-style pool, summer kitchen, private dock, and tennis court.",
    features: ['Waterfront', 'Private Dock', 'Resort-Style Pool', 'Summer Kitchen', 'Tennis Court', 'Home Theater', 'Wine Cellar', 'Guest House'],
    additionalImages: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
    ]
  }
];

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = propertyData.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 luxury-container py-16">
          <div className="text-center">
            <h2 className="text-2xl font-playfair mb-4">Property Not Found</h2>
            <p className="mb-6">The property you are looking for does not exist.</p>
            <Link to="/properties" className="btn-luxury">
              View All Properties
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="luxury-container py-8">
          <Link to="/properties" className="flex items-center text-luxury-charcoal hover:text-luxury-gold mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Properties
          </Link>

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-2/3">
              <div className="relative aspect-[16/9] mb-4">
                <img 
                  src={property.imageUrl} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {property.additionalImages.map((img, index) => (
                  <div key={index} className="aspect-[4/3]">
                    <img 
                      src={img} 
                      alt={`${property.title} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 bg-white p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-playfair font-bold text-luxury-black">{property.title}</h1>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full hover:bg-luxury-cream transition-colors">
                    <Heart size={20} className="text-luxury-gold" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-luxury-cream transition-colors">
                    <Share2 size={20} className="text-luxury-gold" />
                  </button>
                </div>
              </div>

              <div className="text-2xl font-bold text-luxury-gold mb-4">{property.price}</div>
              
              <div className="flex items-center gap-2 mb-6 text-luxury-charcoal">
                <MapPin size={18} />
                <span>{property.location}</span>
              </div>

              <div className="flex justify-between py-4 border-t border-b border-luxury-cream mb-6">
                <div className="text-center">
                  <Bed size={24} className="mx-auto mb-2 text-luxury-gold" />
                  <span className="block text-sm text-luxury-charcoal">Bedrooms</span>
                  <span className="font-bold">{property.bedrooms}</span>
                </div>
                <div className="text-center">
                  <Bath size={24} className="mx-auto mb-2 text-luxury-gold" />
                  <span className="block text-sm text-luxury-charcoal">Bathrooms</span>
                  <span className="font-bold">{property.bathrooms}</span>
                </div>
                <div className="text-center">
                  <Square size={24} className="mx-auto mb-2 text-luxury-gold" />
                  <span className="block text-sm text-luxury-charcoal">Square Ft</span>
                  <span className="font-bold">{property.area.toLocaleString()}</span>
                </div>
              </div>

              <button className="btn-luxury w-full mb-4">Schedule a Viewing</button>
              <button className="btn-luxury-outline w-full">Request Information</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-playfair font-bold mb-4">Description</h2>
              <p className="text-luxury-charcoal mb-8">{property.description}</p>

              <h2 className="text-2xl font-playfair font-bold mb-4">Property Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-luxury-cream p-6">
              <h2 className="text-xl font-playfair font-bold mb-4">Contact Agent</h2>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074&auto=format&fit=crop" 
                  alt="Agent" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-center font-bold">James Anderson</h3>
                <p className="text-center text-luxury-charcoal text-sm mb-4">Senior Luxury Property Specialist</p>
                <div className="flex justify-center gap-2 mb-4">
                  <a href="tel:+1234567890" className="text-luxury-gold hover:text-luxury-black transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-luxury-cream focus:outline-none focus:border-luxury-gold" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-luxury-cream focus:outline-none focus:border-luxury-gold" />
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 border border-luxury-cream focus:outline-none focus:border-luxury-gold"></textarea>
                <button type="submit" className="btn-luxury w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
