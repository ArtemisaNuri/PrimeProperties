
import React from 'react';
import PropertyCard from './PropertyCard';
import { Link } from 'react-router-dom';

// Sample property data
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
];

const FeaturedProperties = () => {
  return (
    <section className="py-24 bg-white">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="section-subtitle">Extraordinary Homes</h2>
          <h3 className="section-title text-luxury-black">Featured Properties</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyData.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`} className="block transition-transform hover:-translate-y-1 duration-300">
              <PropertyCard property={property} />
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/properties" className="btn-luxury-outline">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
