import React from 'react';

const Disasters = () => {
  return (
    <>
        <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <img src="/disasita1.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

    <div class="min-h-[550px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h2 class="text-5xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">Planning for Resilience</h2>
      <p class="sm:text-lg text-base text-center text-gray-200 z-20">Mitigating risks and building urban resilience to disasters.</p>


    </div>
  </div>
      <div className="font-[sans-serif] py-10">
        <div className="grid md:grid-cols-2 items-center mx-12 max-md:max-w-md">
          <div className=" mt-20">
            <img src="/Stormwater1.jpeg" className="w-full h-full rounded-lg p-4 object-cover" />
          </div>

          <div className="max-md:text-center">
            <h3 className="text-black font-semibold md:text-3xl text-2xl md:leading-10 capitalize">
              Be a Part of Disaster Preparedness
            </h3>
            <p className="mt-4 font-light text-base text-black p-3.5 leading-relaxed">
              Join us in mitigating the impact of natural disasters. At NGU Link Hub, we believe that community involvement and effective planning are key to reducing disaster risks. Here's how you can contribute to building resilient communities prepared for any eventuality.
            </p>
            <div className="font-[sans-serif] space-x-12 space-y-4"></div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-20 font-[sans-serif]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-12">
          
          {/* Risk Assessment Frameworks */}
          <div className="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-600 w-12 h-12 p-3 rounded-lg shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H3V8h18v2h2V6c0-1.1-.9-2-2-2z" />
              <path d="M11.54 17.23l-4.23-4.22 1.41-1.41 2.82 2.82 5.3-5.3 1.41 1.41-6.71 6.71z" />
            </svg>
            <div>
              <h3 className="text-gray-800 text-xl font-semibold mb-3">Risk Assessment Frameworks</h3>
              <p className="text-gray-600 text-sm">Identify vulnerabilities and risks associated with natural disasters.</p>
            </div>
          </div>

          {/* Emergency Response Plans */}
          <div className="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-600 w-12 h-12 p-3 rounded-lg shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93h2c0 3.07 2.54 5.5 5.5 5.5v2zm6.93-2.36l-1.41 1.41L12 13.41l-4.52 4.52-1.41-1.41L10.59 12 6.07 7.48l1.41-1.41L12 10.59l4.52-4.52 1.41 1.41L13.41 12l4.52 4.52z" />
            </svg>
            <div>
              <h3 className="text-gray-800 text-xl font-semibold mb-3">Emergency Response Plans</h3>
              <p className="text-gray-600 text-sm">Develop efficient disaster response strategies to mitigate harm.</p>
            </div>
          </div>

          {/* Community Preparedness */}
          <div className="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-pink-600 w-12 h-12 p-3 rounded-lg shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93h2c0 3.07 2.54 5.5 5.5 5.5v2zm6.93-2.36l-1.41 1.41L12 13.41l-4.52 4.52-1.41-1.41L10.59 12 6.07 7.48l1.41-1.41L12 10.59l4.52-4.52 1.41 1.41L13.41 12l4.52 4.52z" />
            </svg>
            <div>
              <h3 className="text-gray-800 text-xl font-semibold mb-3">Community Preparedness</h3>
              <p className="text-gray-600 text-sm">Empower communities to take proactive measures for disaster readiness.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disasters;
