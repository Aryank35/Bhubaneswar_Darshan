import React from 'react';

const Market = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen space-y-6 p-6 bg-slate-100">
      <h1 className="text-4xl font-semibold text-yellow-900 mb-6">Bhubaneswar Market Square: Shop, Explore, Enjoy</h1>
      {/* First Section */}
      <div className="flex items-start justify-center w-full space-x-6">
        {/* First Parent Div */}
        <div className="relative p-6 bg-gray-300 rounded-lg w-2/5">
          <div className="relative bg-white w-full h-60 rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="https://i.postimg.cc/mZdGgYfL/Regional-Science-Center.jpg"
              alt="Nicco Park"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-700"></p>
          </div>
        </div>

        {/* Second Parent Div */}
        <div className="p-6 rounded-lg shadow-lg w-1/2 flex bg-white">
          {/* Left Section with Address, Contacts, and Description */}
          <div className="space-y-4 w-2/3">  
          <h2 className="text-2xl font-bold text-gray-900 mb-2 underline">Bapuji Nagar Market</h2>      
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-700">Bapuji Nagar, Bhubaneswar</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Visiting Time</h3>
              <p className="text-gray-700"> Early mornings and late evenings</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Description</h3>
              <p className="text-gray-700">
              A bustling local market in Bhubaneswar offering a wide variety of items, including clothes, household goods, electronics, and fresh produce. Known for its affordability and variety, it is frequented by locals for everyday shopping.
              </p>
            </div>
          </div>

          {/* Right Section with Message Box */}
          <div className="w-1/3 ml-6">
            <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
              <textarea
                className="w-full h-36 p-4 border border-gray-300 rounded-lg"
                placeholder="Enter your message here..."
              >"Lorem Lorem A detailed description of the mall, its facilities,its facilities djknaljknlksfc"</textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex items-start justify-center w-full space-x-6">
        {/* Repeat the same structure as the First Section */}
        <div className="relative p-6 bg-gray-300 rounded-lg w-2/5">
          <div className="relative bg-white w-full h-60 rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/images/Pages/Shopping/Mall/Nicco_Park.jpg"
              alt="Nicco Park"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="mt-4 text-center">
            {/* <p className="text-sm text-gray-700">Write something here...</p> */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Bhubaneswar</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 flex">
          <div className="space-y-4 w-2/3">
            <div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-gray-700">123 Mall Street, City, Country</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="text-gray-700">Phone: +123 456 7890</p>
              <p className="text-gray-700">Email: info@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Description</h3>
              <p className="text-gray-700">
                A detailed description of the mall, its facilities, and attractions. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perspiciatis ipsum tempore quidem magnam facilis reiciendis.
              </p>
            </div>
          </div>

          <div className="w-1/3 ml-6">
            <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
              <textarea
                className="w-full h-36 p-4 border border-gray-300 rounded-lg"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
