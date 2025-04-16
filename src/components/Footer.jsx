import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
   
      console.log('Subscribed with email:', email);
      setSubscribed(true);
      setEmail('');
      
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Stay updated with new listings</h3>
              <p className="text-white text-opacity-80 mt-1">
                Subscribe to our newsletter to receive the latest property updates
              </p>
            </div>
            
            <div className="w-full md:w-auto">
      <form onSubmit={handleSubscribe} className="flex">
        <div className="relative flex-grow">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-l-md bg-white focus:outline-none text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {subscribed && (
            <div className="absolute -bottom-8 left-0 text-white text-sm">
              ✓ Successfully subscribed!
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-gray-900 text-white px-5 py-3 rounded-r-md hover:bg-gray-800 transition-colors flex items-center"
        >
          Subscribe
          <ArrowRight className="ml-1 w-4 h-4" />
        </button>
      </form>
    </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Pangisha+</h4>
            <p className="mb-4">
              Your trusted partner in finding the best home, Easy! Relax...We connect buyers, sellers, and renters across Malawi.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/listings" className="hover:text-white transition-colors">Property Listings</Link>
              </li>
              <li>
                <Link to="/agents" className="hover:text-white transition-colors">Our Agents</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          {/* Property Types */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Property Types</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/listings?type=apartments" className="hover:text-white transition-colors">Apartments</Link>
              </li>
              <li>
                <Link to="/listings?type=houses" className="hover:text-white transition-colors">Houses</Link>
              </li>
              <li>
                <Link to="/listings?type=offices" className="hover:text-white transition-colors">Offices</Link>
              </li>
              <li>
                <Link to="/listings?type=land" className="hover:text-white transition-colors">Land</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
            <address className="not-italic">
              <p className="mb-2">Kagame street</p>
              <p className="mb-2">Blantyre, Malawi</p>
              <p className="mb-2">info@pangishaplus.com</p>
              <p>+265 712 345 678</p>
            </address>
            <div className="mt-4">
              <a href="/contact" className="text-primary hover:text-white transition-colors flex items-center">
                Send us a message <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright & Terms */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Pangisha+. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="mr-4 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="mr-4 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
