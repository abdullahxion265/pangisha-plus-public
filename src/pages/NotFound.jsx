import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';
import { getImgUrl } from '../getImgUrl'; // Adjust the import path as needed

const NotFound = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Blur & Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getImgUrl('pexels-ron-lach-wrinkled-paper.jpg')})`,
            filter: "brightness(0.5) blur(3px)"
          }}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-9xl font-extrabold">404</h1>
        <h2 className="mt-4 text-4xl font-bold">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link 
          to="/" 
          className="mt-6 inline-flex items-center bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition-colors"
        >
          Go Home <HomeIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
