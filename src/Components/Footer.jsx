// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <div className="flex justify-center mb-8">
          <a href="#" className="mx-2 text-gray-400 hover:text-white transition duration-200">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white transition duration-200">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white transition duration-200">
            <i className="fab fa-youtube text-xl"></i>
          </a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white transition duration-200">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white transition duration-200">
            <i className="fab fa-pinterest text-xl"></i>
          </a>
        </div>

        {/* Subscribe Section */}
        <div className="text-center mb-8">
          <h3 className="mb-4 text-lg font-semibold">Subscribe to us</h3>
          <div className="flex justify-center">
            <input
              type="email"
              className="w-64 px-4 py-2 rounded-l-full bg-gray-800 border border-gray-600 text-white placeholder-gray-400"
              placeholder="example@email.com"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-r-full transition duration-200">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1 */}
          <div>
            <img
              src="/images/odisha-logo.png"
              alt="Odisha Tourism"
              className="mb-4 mx-auto md:mx-0"
            />
          </div>
          
          {/* Column 2 */}
          <div>
            <h4 className="mb-4 font-bold border-b-2 border-orange-500 inline-block">Department of Tourism</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Website</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Travel Agents Registration</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Hotelier Registration</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Tenders</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Newsletter</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Disclaimer</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="mb-4 font-bold border-b-2 border-purple-500 inline-block">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Find A Trail</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Find a Travel Agent</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Deals & Offers</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Map</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Insider Stories</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Advisory on COVID-19</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">SAATHI-Ministry of Tourism</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="mb-4 font-bold border-b-2 border-red-500 inline-block">Activities</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Bird Watching</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Boating</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Trekking</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Folk Dance</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Photography</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Water Sports</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
