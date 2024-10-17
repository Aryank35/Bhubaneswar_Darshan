import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faBus, faTrainSubway, faPlaneDeparture, faMotorcycle } from '@fortawesome/free-solid-svg-icons';

const TransportDropDown = () => {
  const exploreRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = (e) => {
    if (exploreRef.current && !exploreRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="relative" ref={exploreRef}>
      <button
        className="flex items-center gap-2 text-white text-xl md:text-2xl font-bold tracking-wide px-4 py-2 bg-gradient-to-l from-purple-600 to-indigo-500 rounded-full hover:from-indigo-500 hover:to-purple-600 focus:outline-none transition-all duration-300 shadow-lg"
        onClick={handleToggle}
      >
        Transport <FontAwesomeIcon icon={faEarthAmericas} />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-3 w-64 bg-white shadow-2xl rounded-lg z-20 overflow-hidden border border-gray-200">
          <Link
            to="/flights"
            className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faPlaneDeparture} className="text-indigo-500" />
            <span className="text-lg">Flights</span>
          </Link>
          <Link
            to="/railways"
            className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faTrainSubway} className="text-indigo-500" />
            <span className="text-lg">Railways</span>
          </Link>
          <Link
            to="/bus"
            className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faBus} className="text-indigo-500" />
            <span className="text-lg">Bus Service</span>
          </Link>
          <Link
            to="/rentals"
            className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faMotorcycle} className="text-indigo-500" />
            <span className="text-lg">Rentals</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TransportDropDown;
