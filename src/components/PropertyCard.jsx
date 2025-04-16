import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { Bookmark, Eye, MoreVertical, MapPin } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';

// Constants for repeated values
const COLORS = {
  primary: '#c9ab85',
  green: '#4abb24',
  background: '#ffffff',
  greyDark: '#695F53',
  white: '#FFFFFF',
};

const ICON_SIZES = {
  small: 'w-4 h-4',
  medium: 'w-5 h-5',
};

// Subcomponent: Bookmark Button
const BookmarkButton = ({ isBookmarked, onClick }) => (
  <button
    onClick={onClick}
    className="p-2 rounded-full"
    aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
  >
    <Bookmark
      className={`w-5 h-5 ${isBookmarked ? 'fill-primary text-primary' : 'text-white'}`}
      style={{ color: isBookmarked ? COLORS.primary : 'white' }}
    />
  </button>
);

// Subcomponent: Rating Stars
const RatingStars = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-xs ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-grey-light'}`}
        aria-hidden="true"
      >
        ★
      </span>
    ))}
  </div>
);

// Main Component: PropertyCard
const PropertyCard = ({ property }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [isBookmarked, setIsBookmarked] = useState(favorites.some(fav => fav.id === property.id));

  const toggleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isBookmarked) {
      removeFavorite(property.id);
    } else {
      addFavorite(property);
    }
    setIsBookmarked(!isBookmarked);
  };

  const safeProperty = {
    id: property.id || 'unknown',
    image: property.image || 'https://via.placeholder.com/300',
    name: property.name || 'Unnamed Property',
    location: property.location || 'Unknown Location',
    views: property.views || 0,
    discount: property.discount || 0,
    originalPrice: property.originalPrice || 'N/A',
    discountedPrice: property.discountedPrice || 'N/A',
    rating: property.rating || 0,
    category: property.category || 'Uncategorized',
  };

  return (
    <Link to={`/property/${safeProperty.id}`} className="block">
      <div className="rounded-xl overflow-hidden bg-white shadow-md m-2 h-full transition-transform duration-300 hover:scale-105">
        {/* Responsive Image */}
        <div className="relative">
          <img
            src={safeProperty.image}
            alt={safeProperty.name}
            className="w-full h-48 object-cover sm:h-56 md:h-64 lg:h-72" // Responsive heights
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>

          {/* Top-right buttons */}
          <div className="absolute top-2 right-2 flex items-center space-x-2">
            <BookmarkButton isBookmarked={isBookmarked} onClick={toggleBookmark} />
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="p-2 rounded-full"
              aria-label="Open menu"
            >
              <MoreVertical className={`${ICON_SIZES.medium} text-white`} />
            </button>
          </div>

          {/* View count */}
          <div className="absolute bottom-2 right-2 bg-black/50 rounded-full py-1 px-2 flex items-center">
            <Eye className={`${ICON_SIZES.small} text-white`} />
            <span className="text-white text-xs ml-1">{safeProperty.views}</span>
          </div>

          {/* Discount badge */}
          {safeProperty.discount > 0 && (
            <div className="absolute top-2 left-2 bg-green text-white text-xs px-2 py-1 rounded-full">
              -{safeProperty.discount}%
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 bg-white">
          {/* Category badge */}
          <div
            className="inline-block bg-primary text-white text-xs py-1 px-3 rounded-full mb-2"
            style={{ backgroundColor: COLORS.primary }}
          >
            {safeProperty.category}
          </div>

          {/* Property Name */}
          <h3 className="text-lg font-bold text-primary mb-1 sm:text-xl md:text-2xl">
            {safeProperty.name}
          </h3>

          {/* Location */}
          <div className="flex items-center mb-3">
            <MapPin className={`${ICON_SIZES.small} text-primary`} />
            <p className="text-grey-dark text-sm ml-1 sm:text-base md:text-lg">
              {safeProperty.location}
            </p>
          </div>

          {/* Ratings and Pricing */}
          <div className="flex justify-between items-center">
            <div>
              <RatingStars rating={safeProperty.rating} />
              <span className="text-xs text-grey-dark ml-1 sm:text-sm md:text-base">
                ({safeProperty.rating})
              </span>
            </div>
            <div className="text-right">
              {safeProperty.discount > 0 ? (
                <>
                  <p className="text-primary text-sm line-through sm:text-base md:text-lg">
                    {safeProperty.originalPrice}
                  </p>
                  <p className="text-primary font-bold sm:text-lg md:text-xl">
                    {safeProperty.discountedPrice}
                  </p>
                </>
              ) : (
                <p className="text-primary font-bold sm:text-lg md:text-xl">
                  {safeProperty.originalPrice}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(PropertyCard);