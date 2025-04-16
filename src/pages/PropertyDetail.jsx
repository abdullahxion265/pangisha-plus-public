import { useState } from 'react';
import { ArrowLeft, Bookmark, Eye, MapPin, MoreVertical } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { dummyProperties,dummyAmenities } from '../data/dummyData';

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Find the property from dummy data
  const property = dummyProperties.find(p => p.id.toString() === id) || dummyProperties[0];

  const RatingStars = ({ rating }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <div className="pb-20">
      {/* Image Section */}
      <div className="relative h-64 bg-gray-200">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        
        {/* Header Controls */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
          <button className="p-2 rounded-full bg-black/30 text-white">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            className="p-2 rounded-full bg-black/30 text-white"
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Views Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white rounded-full px-3 py-1 flex items-center space-x-1">
          <Eye className="w-4 h-4" />
          <span className="text-sm">{property.views}</span>
        </div>

        {/* Image Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentImageIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 py-4">
        <div className="inline-block bg-primary text-white text-xs py-1 px-3 rounded-full mb-2">
          {property.category}
        </div>
        
        <h1 className="text-xl font-bold text-primary mb-2">{property.name}</h1>
        
        <div className="flex items-center mb-4">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="ml-1 text-gray-600 text-sm">{property.location}</span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <RatingStars rating={property.rating} />
            <span className="text-sm text-gray-600">
              {property.rating} ({property.reviewCount} reviews)
            </span>
          </div>
          <div className="text-right">
            {property.discount > 0 ? (
              <>
                <p className="text-primary text-sm line-through">{property.originalPrice}</p>
                <p className="text-primary font-bold text-lg">{property.discountedPrice}</p>
              </>
            ) : (
              <p className="text-primary font-bold text-lg">{property.originalPrice}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-primary mb-2">Description</h2>
          <div className="w-8 h-1 bg-primary mb-3"></div>
          <p className="text-gray-600">{property.description}</p>
        </div>

        {/* Room Preview */}
        <div>
          <h2 className="text-lg font-bold text-primary mb-2">Rooms Overview</h2>
          <div className="w-8 h-1 bg-primary mb-3"></div>
          <div className="grid grid-cols-3 gap-2">
            {property.rooms.map((room, index) => (
              <div key={index} className="aspect-[2/3] bg-gray-200 rounded-lg overflow-hidden">
                <img src={room.image} alt={`Room ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

      {/* Amenities Section */}
      <div className="mt-6">
          <h2 className="text-lg font-bold text-primary mb-2">Available Amenities</h2>
          <div className="w-8 h-1 bg-primary mb-3"></div>
          <div className="flex space-x-4">
            {dummyAmenities.map((amenity) => {
              const IconComponent = amenity.iconComponent;
              return (
                <div key={amenity.id} className="flex flex-col items-center">
                  <div className="p-4 bg-primary rounded-full mb-2">
                    <IconComponent size={16} className="text-colorPrimary" />
                  </div>
                  <span className="text-sm text-gray-600">{amenity.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;