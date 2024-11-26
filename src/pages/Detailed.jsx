import React from 'react';

const Detailed = () => {
  return (
    <div className="font-[sans-serif] relative">
      <div className="h-[540px] font-[sans-serif]">
        <video
            src="/videos/urbanplan.mp4"
            className="w-full h-full object-cover"
            alt="Urban Planning"
            autoPlay
            loop
            muted
            playsInline
          />
      </div>

      <div className="relative -mt-40 m-4">
        <div className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8 rounded-2xl">
          <div className="mb-12">
            <h3 className="text-green-900 text-3xl font-bold text-center">Detailed Physical Plans</h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-12 my-12">
            <div className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-600 w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md" viewBox="0 0 24 24">
                <path d="M3 4v16l6-6h12V4H3z" fill="currentColor" />
              </svg>
              <h3 className="text-lg font-bold mb-2 text-green-900">Site Analysis</h3>
              <p className="text-sm text-black">Conduct thorough studies of proposed development sites, considering environmental, social, and economic factors.</p>
            </div>
            
            <div className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-600 w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md" viewBox="0 0 24 24">
                <path d="M4 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4z" fill="currentColor" />
              </svg>
              <h3 className="text-lg font-bold mb-2 text-green-900">Master Plans</h3>
              <p className="text-sm text-black">Develop comprehensive plans that integrate transportation, infrastructure, and land use.</p>
            </div>
            
            <div className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-600 w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md" viewBox="0 0 24 24">
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="currentColor" />
              </svg>
              <h3 className="text-lg font-bold mb-2 text-green-900">Public Amenities</h3>
              <p className="text-sm text-black">Plan for schools, hospitals, and recreational facilities in urban areas.</p>
            </div>

            <div className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-600 w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md" viewBox="0 0 24 24">
                <path d="M12 2L2 22h20L12 2zm0 3.5l3.5 9H8.5L12 5.5zm0 14.5l-4-4h8l-4 4z" fill="currentColor" />
              </svg>
              <h3 className="text-lg font-bold mb-2 text-green-900">Urban Design Guidelines</h3>
              <p className="text-sm text-black">Establish design principles for building aesthetics, public spaces, and urban landscapes.</p>
            </div>

            <div className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-600 w-10 h-10 mb-4 inline-block bg-white p-2 rounded-md" viewBox="0 0 24 24">
                <path d="M3 5v14h18V5H3zm1 2h16v10H4V7zm0 12h16v2H4v-2z" fill="currentColor" />
              </svg>
              <h3 className="text-lg font-bold mb-2 text-green-900">Phased Development Plans</h3>
              <p className="text-sm text-black">Outline stages of development to manage growth effectively.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
