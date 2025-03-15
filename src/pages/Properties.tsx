
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Link } from 'react-router-dom';

// Sample property data - same as in FeaturedProperties
const propertyData = [
  {
    id: '1',
    title: 'Modern Mansion with Ocean View',
    price: '$8,500,000',
    location: 'Beverly Hills, CA',
    bedrooms: 6,
    bathrooms: 7,
    area: 8500,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Luxury Penthouse with Skyline Views',
    price: '$5,750,000',
    location: 'Manhattan, NY',
    bedrooms: 4,
    bathrooms: 4.5,
    area: 4200,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Beachfront Villa with Private Pool',
    price: '$12,900,000',
    location: 'Malibu, CA',
    bedrooms: 5,
    bathrooms: 6,
    area: 6800,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Classic Brownstone Townhouse',
    price: '$4,200,000',
    location: 'Boston, MA',
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3800,
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Contemporary Mountain Retreat',
    price: '$7,950,000',
    location: 'Aspen, CO',
    bedrooms: 5,
    bathrooms: 6,
    area: 6200,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Exclusive Waterfront Estate',
    price: '$18,500,000',
    location: 'Palm Beach, FL',
    bedrooms: 8,
    bathrooms: 10,
    area: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1602343168117-bb8a12d7ee1b?q=80&w=2070&auto=format&fit=crop'
  }
];

const Properties = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-12 bg-luxury-cream">
          <div className="luxury-container">
            <div className="text-center mb-16">
              <h2 className="section-subtitle">Exclusive Listings</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-luxury-black font-playfair mb-6">
                Our Premium Properties
              </h1>
              <p className="text-luxury-charcoal max-w-2xl mx-auto">
                Discover our curated collection of the most prestigious properties available in prime locations worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="luxury-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {propertyData.map((property) => (
                <Link key={property.id} to={`/property/${property.id}`} className="block transition-transform hover:-translate-y-1 duration-300">
                  <PropertyCard property={property} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
