import React from "react";
import DropDownFeatures from "./DropDownFeatures";

const AllFeatures = () => {
  

  return (
  <>
    <div className="heading text-center my-[50px]">
      <h1 className="text-3xl font-bold text-green-400">Explore Bhubaneswar</h1>
    </div>
    <div className="flex justify-center items-center mx-auto">
      <DropDownFeatures/>
    </div>
  </>
  );
};

export default AllFeatures;
