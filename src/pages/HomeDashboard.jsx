import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { dummyProperties } from '../data/dummyData';

const HomeDashboard = () => {
  const [properties] = useState(dummyProperties);

  return (
    <div className="container mx-auto px-4 pb-20">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomeDashboard;