import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import PropertyCard from '../components/PropertyCard';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto px-4 pb-20">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.length > 0 ? (
          favorites.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>No favorites added yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;