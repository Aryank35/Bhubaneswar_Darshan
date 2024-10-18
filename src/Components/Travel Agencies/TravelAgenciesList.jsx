
import React from 'react';
import TravelAgencyCard from './TravelAgencyCard';

const travelAgencies = [
    {
        name: 'Explore Travels',
        duration: '2 Nights / 3 Days',
        price: 'INR:10,900.00 PP',
        facilities: ['AC Rooms', 'Meals Included', 'Sightseeing', 'Tour Guide'],
        image: '/images/jiranga.jpg',
        location: 'Jiranga',
      },
      {
        name: 'Holiday Adventures',
        duration: '5 Nights / 6 Days',
        price: 'INR:19,900.00 PP',
        facilities: ['Luxury Accommodation', 'All Meals', 'Transport Included', 'Entry Fees Covered'],
        image: '/images/sakti-peeth.jpg',
        location: 'Sakti Peeth',
      },
      {
        name: 'Nature Escapes',
        duration: '2 Nights / 3 Days',
        price: 'INR:11,000.00 PP',
        facilities: ['Hotel Stay', 'Breakfast & Dinner', 'Guided Tours', 'Photography'],
        image: '/images/daringbadi.jpg',
        location: 'Daringbadi',
      },{
        name: 'Explore Travels',
        duration: '2 Nights / 3 Days',
        price: 'INR:10,900.00 PP',
        facilities: ['AC Rooms', 'Meals Included', 'Sightseeing', 'Tour Guide'],
        image: '/images/jiranga.jpg',
        location: 'Jiranga',
      },
      {
        name: 'Holiday Adventures',
        duration: '5 Nights / 6 Days',
        price: 'INR:19,900.00 PP',
        facilities: ['Luxury Accommodation', 'All Meals', 'Transport Included', 'Entry Fees Covered'],
        image: '/images/sakti-peeth.jpg',
        location: 'Sakti Peeth',
      },
      {
        name: 'Nature Escapes',
        duration: '2 Nights / 3 Days',
        price: 'INR:11,000.00 PP',
        facilities: ['Hotel Stay', 'Breakfast & Dinner', 'Guided Tours', 'Photography'],
        image: '/images/daringbadi.jpg',
        location: 'Daringbadi',
      },
];

const TravelAgenciesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
      {travelAgencies.map((agency, index) => (
        <TravelAgencyCard key={index} agency={agency} />
      ))}
    </div>
  );
};

export default TravelAgenciesList;
