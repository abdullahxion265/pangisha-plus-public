import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Inline Beta Badge */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/pangisha_logo_final.png"
                alt="Pangisha+"
                className="h-8 w-auto"
              />
              <div className="ml-3 flex items-center">
                <span className="text-2xl font-bold text-primary">Pangisha+</span>
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500 text-white uppercase">
                  Beta
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className={`relative w-full max-w-lg transition-all duration-200 ${searchFocused ? 'scale-105' : ''}`}>
              <input
                type="text"
                placeholder="Search for properties..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/listings" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Listings
            </Link>
            <Link to="/agents" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Agents
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
            <Link to="/account" className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors">
              Sign In
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {/* Mobile Search */}
            <div className="relative my-3">
              <input
                type="text"
                placeholder="Search for properties..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
            
            <Link to="/" className="block py-2 text-gray-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/listings" className="block py-2 text-gray-700 hover:text-primary font-medium">
              Listings
            </Link>
            <Link to="/agents" className="block py-2 text-gray-700 hover:text-primary font-medium">
              Agents
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-primary font-medium">
              Contact
            </Link>
            <div className="pt-2">
              <Link to="/account" className="block w-full text-center bg-primary text-white px-4 py-2 rounded-full font-medium">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


