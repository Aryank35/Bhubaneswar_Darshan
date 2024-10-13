import React, { useState, useEffect } from "react";
import FeatureCard from "./FeatureCard";
import {
  faHotel,
  faUtensils,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
    const featuresData = [
        {
          icon: faHotel,
          title: "Hotel Booking",
          description:
            "Browse top-rated hotels, budget stays, and luxury resorts for a comfortable stay.",
          links: "/hotel",
        },
        {
          icon: faUtensils,
          title: "Food",
          description:
            "Discover popular restaurants, street food spots, and local dhabas for a delightful culinary experience.",
          links: "/food",
        },
        {
          icon: faCartShopping,
          title: "Shopping",
          description:
            "Explore vibrant shopping malls, local markets, and stores for the best shopping spree.",
          links: "/shopping",
        },
      ];
      

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the visible feature every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuresData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [featuresData.length]);

  return (
    <div className="md:flex md:justify-center md:gap-6 p-6">
      {/* Desktop View - Show All Cards */}
      <div className="hidden md:flex gap-6">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            links = {feature.links}
          />
        ))}
      </div>

      {/* Mobile View - Slider */}
      <div className="md:hidden flex justify-center transition-slide">
        <FeatureCard
          icon={featuresData[currentIndex].icon}
          title={featuresData[currentIndex].title}
          description={featuresData[currentIndex].description}
          links={featuresData[currentIndex].links}
        />
      </div>
    </div>
  );
};

export default Features;
