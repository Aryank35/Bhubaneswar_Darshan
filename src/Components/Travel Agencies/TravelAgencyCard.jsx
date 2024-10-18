
import React from 'react';
import FacilityList from './FacilityList';

const TravelAgencyCard = ({ agency }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={agency.image} alt={agency.location} />
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-gray-700">{agency.duration}</span>
          <span className="text-sm font-bold text-gray-700">{agency.price}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-indigo-600">{agency.location}</h3>
        <FacilityList facilities={agency.facilities} />
      </div>
      <div className="px-6 py-4">
        <button className="w-full text-white bg-pink-500 hover:bg-pink-600 font-bold py-2 px-4 rounded transition-colors duration-300">
          More Details
        </button>
      </div>
    </div>
  );
};

export default TravelAgencyCard;
