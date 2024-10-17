import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, links }) => {
  return (
    <Link to={links} className="bg-gradient-to-b from-purple-600 to-indigo-500  hover:from-indigo-500 hover:to-purple-600 focus:outline-none  text-white rounded-lg shadow-lg md:px-6 md:py-10 2xl:py-[70px] px-2 py-10 w-full sm:w-[45%] lg:w-[30%] md:w-[30%] transform hover:scale-105 transition-all duration-300 mx-auto flex-shrink-0">
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
