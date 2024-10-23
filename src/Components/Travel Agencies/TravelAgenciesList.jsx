import React from 'react';
import Slider from 'react-slick';
import TravelAgencyCard from './TravelAgencyCard';

// Sample slider settings for center mode and responsiveness
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Display 3 slides by default
  slidesToScroll: 1,
  centerMode: true, // Enables center mode
  centerPadding: '0', // Removes the padding around the center slide
  responsive: [
    {
      breakpoint: 1024, // For screens smaller than 1024px
      settings: {
        slidesToShow: 2, // Show 2 cards
        centerMode: true, // Keep centered
      }
    },
    {
      breakpoint: 768, // For screens smaller than 768px
      settings: {
        slidesToShow: 1, // Show 1 card
        centerMode: true, // Keep centered
      }
    }
  ]
};

const travelAgencies = [
  {
    name: 'Explore Travels',
    duration: '2 Nights / 3 Days',
    price: 'INR:10,900.00 PP',
    facilities: ['AC Rooms', 'Meals Included', 'Sightseeing', 'Tour Guide'],
    image: '/images/tourist-places/jirang.jpg',
    location: 'Jiranga',
  },
  {
    name: 'Holiday Adventures',
    duration: '5 Nights / 6 Days',
    price: 'INR:19,900.00 PP',
    facilities: ['Luxury Accommodation', 'All Meals', 'Transport Included', 'Entry Fees Covered'],
    image: '/images/tourist-places/shakti-pitha.jpg',
    location: 'Sakti Peeth',
  },
  {
    name: 'Nature Escapes',
    duration: '2 Nights / 3 Days',
    price: 'INR:11,000.00 PP',
    facilities: ['Hotel Stay', 'Breakfast & Dinner', 'Guided Tours', 'Photography'],
    image: '/images/tourist-places/daringbadi.jpeg',
    location: 'Daringbadi',
  },
  
];

const TravelAgenciesList = () => {
  return (
    <div className="flex justify-center w-full items-center py-10">
      <div className="w-full max-w-7xl">
        <Slider {...sliderSettings}>
          {travelAgencies.map((agency, index) => (
            <div key={index}>
              <TravelAgencyCard agency={agency} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TravelAgenciesList;
