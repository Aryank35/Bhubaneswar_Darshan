import React from "react";
import Navbar from "../Components/Navbar";
import Features from "../Components/Features";
import TransportDropDown from "../Components/TransportDropDown";
import DropDownFeatures from "../Components/DropDownFeatures";
import AllFeatures from "../Components/AllFeatures";
import TravelAgenciesList from "../Components/Travel Agencies/TravelAgenciesList";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[calc(100vh-4rem)] sm:h-[calc(80vh-4rem)] md:h-screen"
        style={{ backgroundImage: "url('/images/Home page/banner.jpg')" }}
      >
        {/* DropdownBox positioned at the top left */}
        <div className="absolute md:top-8 top-4 left-4 md:left-8 z-20">
          <TransportDropDown />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Welcome Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center z-10">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide">
            Welcome to Bhubaneswar
          </h1>
          <p className="text-white mt-4 sm:text-base lg:text-lg font-medium">
            Discover the beauty, culture, and history of the city.
          </p>
        </div>

        {/* Features Section */}
        <div className="hidden absolute md:block  w-full -bottom-32 z-20">
          <Features />
        </div>
        <div className=" absolute md:hidden  w-full  top-3/4 mt-4 z-20">
          <Features />
        </div>
      </div>
      <div className="my-[150px] mx-5 bg-[FFE1FF]">
        <AllFeatures/>
      </div>
      <div className="min-h-screen bg-gray-100 py-8 ">
      <h1 className="md:text-5xl text-3xl font-bold text-center text-indigo-700 mb-8">Travel Packages</h1>
      <TravelAgenciesList/>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
