import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const exploreRef = useRef(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeDropdown = (e) => {
    if (exploreRef.current && !exploreRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-teal-600 via-emerald-500 to-green-600 py-4 shadow-lg w-full">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center">
          <h1 className="sm:text-3xl text-xl font-bold text-white ml-4 tracking-widest hover:scale-105 transition-transform">
            Bhubaneswar Darshan
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-emerald-200 font-semibold tracking-wider transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-emerald-200 font-semibold tracking-wider transition-colors duration-300">
            About
          </Link>
          <div className="relative" ref={exploreRef}>
            <button
              className="text-white hover:text-emerald-200 font-semibold tracking-wider focus:outline-none transition-colors duration-300"
              onClick={handleToggle}
            >
              Explore
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg z-10 overflow-hidden">
                <Link to="/spots" className="block px-4 py-3 text-gray-800 hover:bg-emerald-50 hover:text-green-700 transition-colors">
                  Tourist Spots
                </Link>
                <Link to="/events" className="block px-4 py-3 text-gray-800 hover:bg-emerald-50 hover:text-green-700 transition-colors">
                  Local Events
                </Link>
                <Link to="/cuisine" className="block px-4 py-3 text-gray-800 hover:bg-emerald-50 hover:text-green-700 transition-colors">
                  Cuisine
                </Link>
                <Link to="/guide" className="block px-4 py-3 text-gray-800 hover:bg-emerald-50 hover:text-green-700 transition-colors">
                  Travel Guide
                </Link>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search destinations..."
              className="w-64 px-4 py-2 rounded-full text-sm text-gray-800 bg-white focus:outline-none shadow-inner focus:ring-2 focus:ring-green-400 transition-all duration-300"
            />
            <button className="absolute top-1/2 transform -translate-y-1/2 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816a1 1 0 01-1.414-1.414l4.816-4.816L11.3 3.476a6 6 0 010 11.939l-4.817 4.817a1 1 0 01-1.414-1.414l4.816-4.816a4 4 0 100-8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 rounded-b-lg">
          <Link to="/" className="block text-gray-800 hover:text-green-600 py-2 font-medium">
            Home
          </Link>
          <Link to="/about" className="block text-gray-800 hover:text-green-600 py-2 font-medium">
            About
          </Link>
          <button
            onClick={handleToggle}
            className="block text-gray-800 hover:text-green-600 py-2 font-medium w-full text-left"
          >
            Explore
          </button>
          {isOpen && (
            <div className="pl-4 mt-2">
              <Link to="/spots" className="block text-gray-700 hover:bg-green-50 py-2 rounded transition-colors">
                Tourist Spots
              </Link>
              <Link to="/events" className="block text-gray-700 hover:bg-green-50 py-2 rounded transition-colors">
                Local Events
              </Link>
              <Link to="/cuisine" className="block text-gray-700 hover:bg-green-50 py-2 rounded transition-colors">
                Cuisine
              </Link>
              <Link to="/guide" className="block text-gray-700 hover:bg-green-50 py-2 rounded transition-colors">
                Travel Guide
              </Link>
            </div>
          )}
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search destinations..."
            className="w-full mt-3 px-4 py-2 rounded-full text-sm text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
