import React, { useState, useEffect } from 'react';
import { Search, MapPin, Home as HomeIcon, Building, ChevronRight, Star, Tractor } from 'lucide-react';
import { getImgUrl } from '../getImgUrl';

// Constants
const FEATURED_CATEGORIES = [
  { name: 'Apartments', icon: Building, count: 154 },
  { name: 'Houses', icon: HomeIcon, count: 231 },
  { name: 'Farms', icon: Tractor, count: 87 },
  { name: 'Offices', icon: Building, count: 68 }
];

// Sample property data - in a real app this would come from an API
const FEATURED_PROPERTIES = [
  {
    id: 1, 
    title: 'Modern Apartment in City Center',
    location: 'Chinyonga, Blantyre',
    price: 'MK120,000/month',
    rating: 4.8,
    reviewCount: 24,
    image: getImgUrl('pexels-eye4dtail-modern-city-centre.jpg'), 
    isNew: true,
    features: ['2 Beds', '1 Bath', '850 sq.ft']
  },
  {
    id: 2, 
    title: 'Luxury Villa with Pool',
    location: 'Namiwawa, Blantyre',
    price: 'MK250,000/month',
    rating: 4.9,
    reviewCount: 36,
    image: getImgUrl('pexels-jonathanborba-luxur-villa-pool.jpg'),
    isNew: false,
    features: ['4 Beds', '3 Baths', '2200 sq.ft']
  },
  {
    id: 3,
    title: 'Spacious Farm with Fertile Land',
    location: 'Chinsapo, Lilongwe',
    price: 'MK250,000/month',
    rating: 4.8,
    reviewCount: 20,
    image: getImgUrl('pexels-goodcitizen-farmland.jpg'),
    isNew: true,
    features: ['3,000 sq.ft', '10 Acres of Land', 'Barn', 'Irrigation System']
  }
  
];

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
        {property.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            NEW
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-gray-800">{property.title}</h3>
        
        <div className="flex items-center mb-2 text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex">
            {property.features.map((feature, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded mr-1">
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{property.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({property.reviewCount})</span>
          </div>
          <p className="font-bold text-primary">{property.price}</p>
        </div>
      </div>
    </div>
  );
};

// Home Component
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Animation on component mount
    setIsVisible(true);
  }, []);

  return (
    <main>
    {/* Hero Section with Search */}
<section className="relative h-screen max-h-[600px] bg-gray-900 text-white overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    {/* Background image with added blur and brightness */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${getImgUrl('pexels-bruthethe-urban-loft-apartments.jpg')})`,
        filter: "brightness(0.6) blur(3px)"
      }}
    />
    {/* Optional Dark Overlay for extra contrast */}
    <div className="absolute inset-0 bg-black opacity-30"></div>
  </div>
        
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">FIND A HOME, RELAX</h1>
      <p className="text-lg md:text-xl max-w-xl mx-auto mb-8">
        Discover the best properties for rent or sale across Malawi with our curated listings
      </p>
            
      {/* Search Box */}
      <div className="bg-white rounded-lg shadow-xl p-2 max-w-3xl mx-auto flex flex-col md:flex-row">
        <div className="flex-1 flex items-center px-3 border-b md:border-b-0 md:border-r border-gray-200">
          <Search className="w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for location, property type..." 
            className="w-full p-2 focus:outline-none text-gray-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex">
          <select className="p-2 focus:outline-none text-gray-800 bg-transparent">
            <option>Any Type</option>
            <option>For Rent</option>
            <option>For Sale</option>
          </select>
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition-colors ml-2">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      
      {/* Category Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Browse by Category</h2>
            <p className="text-gray-600 mt-2">Find the perfect property type that fits your needs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FEATURED_CATEGORIES.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 text-center shadow hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary bg-opacity-10 mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} Properties</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Featured Properties</h2>
              <p className="text-gray-600 mt-2">Handpicked properties for you</p>
            </div>
            <a href="/listings" className="flex items-center text-primary font-medium hover:underline">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PROPERTIES.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
  {/* Testimonials Section */}
<section className="py-12 bg-primary bg-opacity-5">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
      <p className="text-gray-600 mt-2">Trusted by thousands of happy customers</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-bold uppercase">
            J
          </div>
          <div>
            <h4 className="font-bold">John Malikebu</h4>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600">
          "Finding my apartment through Pangisha+ was a breeze. Their platform is intuitive and their agents are extremely helpful. Highly recommended!"
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold uppercase">
            M
          </div>
          <div>
            <h4 className="font-bold">Mary Timveni</h4>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600">
          "I sold my property within two weeks of listing it on Pangisha+. The exposure and quality of interested buyers was impressive."
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg font-bold uppercase">
            D
          </div>
          <div>
            <h4 className="font-bold">David Kapapa</h4>
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <Star className="w-4 h-4 text-gray-300" />
            </div>
          </div>
        </div>
        <p className="text-gray-600">
          "The virtual tours feature saved me so much time. I was able to narrow down my choices before physically visiting properties."
        </p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};

export default Home;