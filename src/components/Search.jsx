import React, { useState } from 'react';
import { dummyProperties } from '../data/dummyData';
import PropertyCard from '../components/PropertyCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(dummyProperties);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    const filtered = dummyProperties.filter(property =>
      property.name.toLowerCase().includes(value.toLowerCase()) ||
      property.location.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      <input
        type="text"
        placeholder="Search properties..."
        value={query}
        onChange={handleSearch}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Search;

