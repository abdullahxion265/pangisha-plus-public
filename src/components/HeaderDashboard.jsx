import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, Compass, User } from 'lucide-react';

const HeaderDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Dummy authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-10 bg-background">
      <div className="mx-4 my-4">
        <div className="bg-white rounded-xl shadow-md">
          <div className="flex items-center justify-between p-4">
            {/* Left Section: Logo and Title */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Compass className="w-6 h-6 text-primary sm:w-8 sm:h-8" />
              <h1 className="text-lg font-bold text-primary sm:text-2xl md:text-3xl font-poppins">
                Discover
              </h1>
            </div>

            {/* Right Section: Icons and Dropdown */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                className="p-2 rounded-full hover:bg-grey-light"
                onClick={() => navigate('/search')}
              >
                <Search className="w-6 h-6 text-primary sm:w-8 sm:h-8" />
              </button>

              {/* Menu / User Dropdown */}
              <div className="relative">
                <button
                  className="p-2 rounded-full hover:bg-grey-light"
                  onClick={toggleMenu}
                >
                  {isLoggedIn ? (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white sm:w-8 sm:h-8">
                      <User size={16} className="sm:w-5 sm:h-5" />
                    </div>
                  ) : (
                    <Menu className="w-6 h-6 text-primary sm:w-8 sm:h-8" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 sm:w-56 md:w-64"
                    style={{ minWidth: '150px' }}
                  >
                    {isLoggedIn ? (
                      <>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-grey-light sm:text-base md:text-lg"
                        >
                          Profile
                        </Link>
                        <Link
                          to="/favorites"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-grey-light sm:text-base md:text-lg"
                        >
                          Favorites
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-grey-light sm:text-base md:text-lg"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-grey-light sm:text-base md:text-lg"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-grey-light sm:text-base md:text-lg"
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;