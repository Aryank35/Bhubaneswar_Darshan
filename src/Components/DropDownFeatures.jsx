// DropDownFeatures.js
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FeaturesBoxContent } from './AllFeaturesData';

const DropDownFeatures = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track which dropdown is open
  const dropdownRefs = useRef([]);

  const closeDropdown = (e) => {
    if (dropdownRefs.current.every(ref => ref && !ref.contains(e.target))) {
      setOpenDropdownIndex(null);
    }
  };

  const handleToggle = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index); // Toggle the specific dropdown
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="flex flex-wrap md:justify-between items-center gap-4 mx-auto">
      {FeaturesBoxContent.map((feature, index) => (
        <div key={index} className="relative sm:w-[45%] w-full  mx-auto" ref={(el) => (dropdownRefs.current[index] = el)}>
          <button
            className="flex items-center w-full gap-2 text-center justify-center text-white text-xl md:text-2xl font-bold tracking-wide py-6 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full hover:from-indigo-500 hover:to-purple-600 focus:outline-none transition-all duration-300 shadow-lg"
            onClick={() => handleToggle(index)}
          >
            <FontAwesomeIcon icon={feature.mainIcon} />
            {feature.title}
          </button>
          {openDropdownIndex === index && (
            <div className="absolute left-0 mt-3 w-72 bg-white shadow-2xl rounded-lg z-20 overflow-hidden border border-gray-200">
              {feature.subFeatures.map((sub, subIndex) => (
                <Link
                  key={subIndex}
                  to={sub.link}
                  className="flex items-center text-lg font-semibold gap-3 px-4 py-3 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                >
                  <span>{sub.subtitle}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDownFeatures;
