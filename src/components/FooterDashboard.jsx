import React, { useState } from 'react';
import { Home, Search, Heart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const FooterDashboard = () => {
  const location = useLocation();

  // Helper function to determine active link
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Navigation items
  const navItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/' },
    { icon: <Search size={24} />, label: 'Search', path: '/search' },
    { icon: <Heart size={24} />, label: 'Favorites', path: '/favorites' },
    { icon: <User size={24} />, label: 'Profile', path: '/profile' },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-10">
      {/* Responsive container for navigation */}
      <div className="flex justify-around items-center h-16 sm:h-20 md:h-24">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center ${
              isActive(item.path) ? 'text-primary' : 'text-grey-dark'
            }`}
          >
            {/* Responsive icons */}
            {React.cloneElement(item.icon, {
              size: isActive(item.path) ? 28 : 24,
              className: `transition-transform duration-300 ${
                isActive(item.path) ? 'scale-110' : ''
              }`,
            })}
            {/* Responsive labels */}
            <span
              className={`text-xs mt-1 sm:text-sm md:text-base ${
                isActive(item.path) ? 'font-bold' : ''
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default FooterDashboard;