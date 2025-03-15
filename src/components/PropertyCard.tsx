
import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    imageUrl: string;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="property-card overflow-hidden group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-luxury-black text-white px-4 py-2 text-sm font-medium">
          {property.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold mb-2">{property.title}</h3>
        
        <div className="flex items-center gap-2 mb-4">
          <MapPin size={16} className="text-luxury-gold" />
          <span className="text-sm text-luxury-charcoal">{property.location}</span>
        </div>
        
        <div className="border-t border-luxury-black/10 pt-4 mt-4 flex justify-between">
          <div className="property-feature">
            <Bed size={16} />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="property-feature">
            <Bath size={16} />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="property-feature">
            <Square size={16} />
            <span>{property.area} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
