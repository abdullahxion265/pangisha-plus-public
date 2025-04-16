import { Wifi, Coffee, Car, Tv, Utensils, Wind } from 'lucide-react';
import { getImgUrl } from "../getImgUrl"

// Function to process rooms and apply getImgUrl to each image
const processRooms = (rooms) => {
  return rooms.map(room => ({
    ...room,
    image: getImgUrl(room.image)
  }));
};

// Function to process properties and apply getImgUrl to each image
const processProperties = (properties) => {
  return properties.map(property => ({
    ...property,
    image: getImgUrl(property.image),
    images: property.images.map(img => getImgUrl(img)),
    rooms: processRooms(property.rooms)
  }));
};

 const dummyPropertiesData = [
  {
    id: 1,
    name: "Sapphire Ridge Apartments",
    category: "For Rent",
    description: "The Sapphire Ridge apartments give visitors a lively experience, with views that capture the best of nature. The apartments also allow for some levels of agriculture. Visitors' stay is sure to be regarded as the best experience.",
    location: "Zomba, Old Naisi",
    originalPrice: "MK2,000,000",
    discountedPrice: "MK1,700,000",
    discount: 15,
    rating: 4.7,
    reviewCount: 124,
    views: "1.2K",
    image: getImgUrl("benjamin_lehman.jpg"),
    images: [
      "/api/placeholder/400/320",
      "/api/placeholder/400/320",
      "/api/placeholder/400/320"
    ],
    rooms: [
      { image: "chastity_cortijo_bed.jpg" },
      { image: "curology_bathroom.jpg" },
      { image: "christian_mackie_kitchen.jpg" },
    ]
  },
  {
    id: 2,
    name: "Modern Villa Capuela",
    category: "For Sale",
    description: "A spacious modern villa with minimalist design, huge windows for natural light, and an infinity pool overlooking the city. Perfect for those who appreciate contemporary architecture and luxury living.",
    location: "Blantyre, Namiwawa",
    originalPrice: "MK45,000,000",
    discountedPrice: "",
    discount: 0,
    rating: 4.9,
    reviewCount: 87,
    views: "3.4K",
    image: getImgUrl("frames_for_your_heart.jpg"),
    images: [
      "/api/placeholder/400/320",
      "/api/placeholder/400/320",
      "/api/placeholder/400/320"
    ],
    rooms: [
      { image: "/api/placeholder/120/180" },
      { image: "/api/placeholder/120/180" },
      { image: "/api/placeholder/120/180" }
    ]
  },
  {
    id: 3,
    name: "Sunrise Garden Cottage",
    category: "For Rent",
    description: "A charming cottage surrounded by beautiful gardens and morning sunshine. Features a cozy interior with wooden beams, fireplace, and a reading nook. Perfect for weekend getaways.",
    location: "Lilongwe, Area 10",
    originalPrice: "MK950,000",
    discountedPrice: "MK855,000",
    discount: 10,
    rating: 4.6,
    reviewCount: 56,
    views: "982",
    image: getImgUrl("pexels-histoires-a-croquer-garden-cottage.jpg"),
    images: [
      "/api/placeholder/400/320",
      "/api/placeholder/400/320",
      "/api/placeholder/400/320"
    ],
    rooms: [
      { image: "/api/placeholder/120/180" },
      { image: "/api/placeholder/120/180" },
      { image: "/api/placeholder/120/180" }
    ]
  },
  {
    id: 4,
    name: "Lakeside Apartments",
    category: "For Rent",
    description: "Modern apartments with stunning lake views, featuring spacious balconies, full kitchen facilities, and access to community amenities including a pool and gym.",
    location: "Mangochi, Cape Maclear",
    originalPrice: "MK1,200,000",
    discountedPrice: "",
    discount: 0,
    rating: 4.3,
    reviewCount: 42,
    views: "754",
    image: getImgUrl("benjamin_lehman.jpg"),
    images: [
      getImgUrl("placeholder/400/320"),
      getImgUrl("placeholder/400/320"),
      getImgUrl("placeholder/400/320")
    ],
    rooms: [
      { image: "/api/placeholder/120/180" },
      { image: "/api/placeholder/120/180" },
      { image: "/api/placeholder/120/180" }
    ]
  },
  {
    id: 5,
    name: "Highland View Estate",
    category: "For Sale",
    description: "An elegant estate perched on the highlands with panoramic views of the surrounding mountains and valleys. Features 5 bedrooms, a library, wine cellar, and manicured gardens.",
    location: "Mzuzu, Katoto",
    originalPrice: "MK38,500,000",
    discountedPrice: "MK35,000,000",
    discount: 9,
    rating: 4.8,
    reviewCount: 29,
    views: "1.5K",
    image: getImgUrl("pexels-quang-nguyen-vinh-highland-view-estate.jpg"),
    images: [
      "/api/placeholder/400/320",
      "/api/placeholder/400/320",
      "/api/placeholder/400/320"
    ],
    rooms: [
      { image: "/api/placeholder/120/180" },
      { image: "/api/placeholder/120/180" },
      { image: "/api/placeholder/120/180" }
    ]
  },
  {
    id: 6,
    name: "Urban Loft Apartments",
    category: "For Rent",
    description: "Contemporary loft apartments in the heart of the city with high ceilings, exposed brick walls, and industrial finishes. Walking distance to cafes, shops, and entertainment.",
    location: "Blantyre, Mandala",
    originalPrice: "MK1,800,000",
    discountedPrice: "",
    discount: 0,
    rating: 4.5,
    reviewCount: 63,
    views: "2.1K",
    image: getImgUrl("pexels-bruthethe-urban-loft-apartments.jpg"),
    images: [
      "/api/placeholder/400/320",
      "/api/placeholder/400/320",
      "/api/placeholder/400/320"
    ],
    rooms: [
      { image: "/api/placeholder/120/180" },
      { image: "/api/placeholder/120/180" },
      { image: "/api/placeholder/120/180" }
    ]
  }
];

export const dummyProperties = processProperties(dummyPropertiesData);

export const dummyAmenities = [
  {
    id: 1,
    name: 'WiFi',
    iconComponent: Wifi
  },
  {
    id: 2,
    name: 'Coffee Bar',
    iconComponent: Coffee
  },
  {
    id: 3,
    name: 'Parking',
    iconComponent: Car
  },
  {
    id: 4,
    name: 'TV',
    iconComponent: Tv
  },
  {
    id: 5,
    name: 'Kitchen',
    iconComponent: Utensils
  },
  {
    id: 6,
    name: 'AC',
    iconComponent: Wind
  }
];