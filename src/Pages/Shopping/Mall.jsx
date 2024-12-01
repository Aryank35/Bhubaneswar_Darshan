import React from 'react';


const Mall = () => {
  return (
    <div className="bg-[#dba9b0]">
      <h1 className='text-center text-red-500 text-4xl font-bold'>MALLS</h1>
      
      {/* 1st mall */}
      <div className="flex flex-col md:flex-row items-center justify-center h-auto pl-1 pr-6 pt-4 pb-2 space-x-4">
        {/* Box 1: Image */}
        <div className="w-full md:w-1/2 p-6">
          <img src="/images/Pages/Shopping/Mall/Esplanade.png" alt="Mall"
          className="w-full h-auto max-w-[800px] border-4 border-gray-500 rounded-lg shadow-lg mx-auto"/>
        </div>

        {/* Box 2: Description */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Esplanade One</h1>
          <p className="text-gray-700 mb-2">
          <i class="fa-solid fa-location-dot"></i> Bhubaneswar, Odisha
          </p>
          <p className="text-gray-700 mb-2">
          <i class="fa-solid fa-phone"></i> +91-9876543210
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Description:</strong> City Center Mall is a premium shopping destination offering a variety of stores, dining options, and entertainment facilities.
          </p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-semibold">
              <i class="fa-solid fa-globe">Visit Website</i>
          </a>
        </div>

        {/* Box 3: Images */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-center p-2 items-center">
        <h2 className="w-full text-center text-xl font-semibold text-gray-800 mb-4">Places to visit</h2>
    {/* Img-1 */}
    <div className="w-full md:w-1/2 p-3 text-center">
      <img src="/images/Pages/Shopping/Mall/IMFA_Park.png" alt="Mall 1"
        className="w-44 h-44 object-cover mx-auto mb-2 border-2 border-gray-400 rounded-lg" />
      <a href="https://example.com" className="text-gray-700 hover:text-blue-500 hover:underline">IMFA Park</a>
    </div>

    {/* Img-2 */}
    <div className="w-full md:w-1/2 p-3 text-center">
      <img src="/images/Pages/Shopping/Mall/Nicco_Park.jpg" alt="Mall 2"
        className="w-44 h-44 object-cover mx-auto mb-2 border-2 border-gray-400 rounded-lg" />
      <a href="https://example.com" className="text-gray-700 hover:text-blue-500 hover:underline">Nicco Park</a>
    </div>

    {/* Img-3 */}
    <div className="w-full md:w-1/2 p-3 text-center">
      <img src="/images/Pages/Shopping/Mall/Planetarium.jpg" alt="Mall 3"
        className="w-44 h-44 object-cover mx-auto mb-2 border-2 border-gray-400 rounded-lg" />
    </div>

    {/* Img-4 */}
    <div className="w-full md:w-1/2 p-3 text-center">
      <img src="/images/Pages/Shopping/Mall/Regional_Science_Center.jpg" alt="Mall 4"
        className="w-44 h-44 object-cover mx-auto mb-2 border-2 border-gray-400 rounded-lg" />
      <a href="https://example.com" className="text-gray-700 hover:text-blue-500 hover:underline">Regional Science Center</a>
    </div>
        </div>
      </div>


      {/* 2nd mall */}
      <div className="flex flex-col md:flex-row items-center justify-center h-auto pl-1 pr-6 pt-4 pb-2 space-x-4">
        {/* Box 1: Image */}
        <div className="w-full md:w-1/2 p-6">
          <img src="/images/Pages/Shopping/Mall/Esplanade.png" alt="Mall"
          className="w-full h-auto max-w-[800px] border-4 border-gray-500 rounded-lg shadow-lg mx-auto"/>
        </div>

        {/* Box 2: Description */}
        <div className="w-full md:w-1/2  border-4 border-gray-500 rounded-lg shadow-lg mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Esplanade One</h1>
          <p className="text-gray-700 mb-2">
            <strong>Location:</strong> Bhubaneswar, Odisha
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Contact:</strong> +91-9876543210
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Description:</strong> City Center Mall is a premium shopping destination offering a variety of stores, dining options, and entertainment facilities. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae blanditiis culpa dicta odit vitae nemo repellendus vel incidunt consectetur necessitatibus esse ipsum dolor, nam sapiente et officia veniam nisi.
          </p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-semibold">
            Visit Website
          </a>
        </div>

        {/* Box 3: Images */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 items-center  border-4 border-gray-500 rounded-lg shadow-lg">
          <a href="https://example.com" className="text-gray-700 hover:text-blue-500 hover:underline font-medium">Planetarium</a>
          <a href="https://example.com" className="text-gray-700 hover:text-blue-500 hover:underline font-medium">Planetarium</a>
          <a href="https://example.com" className="text-gray-700 hover:text-blue-500 hover:underline font-medium">Planetarium</a>
          <a href="https://example.com" className="text-gray-700 hover:text-blue-500 hover:underline font-medium">Planetarium</a>
        </div>
      </div>


    </div>
  )
}

export default Mall
