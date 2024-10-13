import React from "react";
import DropdownBox from "../Components/DropdownBox";
import Navbar from "../Components/Navbar";
import Features from "../Components/Features";

const Home = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[calc(100vh-4rem)] sm:h-[calc(80vh-4rem)] md:h-screen"
        style={{ backgroundImage: "url('/images/Home page/banner.jpg')" }}
      >
        {/* DropdownBox positioned at the top left */}
        <div className="absolute md:top-8 top-4 left-4 md:left-8 z-20">
          <DropdownBox />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Welcome Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center z-10">
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide">
            Welcome to Bhubaneswar
          </h1>
          <p className="text-white mt-4 text-sm sm:text-base lg:text-lg font-medium">
            Discover the beauty, culture, and history of the city.
          </p>
        </div>

        {/* Features Section */}
        <div className="hidden absolute md:block  w-full -bottom-32 z-20">
          <Features />
        </div>
        <div className=" absolute md:hidden  w-full  top-3/4 z-20">
          <Features />
        </div>
      </div>
    </>
  );
};

export default Home;
