
import React from 'react';

const FacilityList = ({ facilities }) => {
  return (
    <div>
      <p className="text-gray-600 font-semibold">Facilities:</p>
      <ul className="list-disc list-inside text-gray-600 pl-2">
        {facilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
    </div>
  );
};

export default FacilityList;
