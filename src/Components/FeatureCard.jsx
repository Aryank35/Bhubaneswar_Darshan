import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, links }) => {
  return (
    <Link to={links} className="bg-pink-500 text-white rounded-lg shadow-lg p-6 w-full md:w-[30%] transform hover:scale-105 transition-all duration-300 md:mx-4 flex-shrink-0">
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={icon} className="text-4xl mb-4" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-center text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default FeatureCard;
