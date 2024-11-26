import React from "react";

const Environment = () => {
  
  return (
    <>
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <img src="/env.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

    <div class="min-h-[550px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h2 class="text-4xl font-bold mb-4 flex flex-col items-center justify-center text-pink-600 z-20 mt-20">Pioneering Sustainable Cities for a Resilient Future</h2>
      <p class="sm:text-lg text-base  text-gray-200 z-20">Addressing Climate Change, Technology, and Green <br></br>Solutions to Shape the Urban Landscape of Tomorrow</p>


    </div>
  </div>
    <div className="md:px-10 px-4 font-[sans-serif] py-48">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        {/* Events Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          <div className="bg-white rounded overflow-hidden">
            <img
              src="/Climate.jpg"
              alt="Global Urban Summit"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Climate Change
              </h3>
              <p className="text-gray-500 text-sm">
                It refers to the long-term shifts in temperatures
                and weather patterns, primarily caused by human activities such
                as burning fossil fuels and deforestation. Mitigation efforts
                include reducing carbon emissions and transitioning to renewable
                energy sources.
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-900 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden">
            <img
              src="/envpro.jpg"
              alt="Technology for Smart Cities"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Environment Protection & Restoration
              </h3>
              <p className="text-gray-500 text-sm">
                It is essential to
                preserving ecosystems and biodiversity. Restoration projects
                help rebuild damaged ecosystems, making them more resilient to
                future environmental challenges.
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-900 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden">
            <img
              src="stormwater2.jpg"
              alt="Sustainability in Urban Development"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Stormwater Management
              </h3>
              <p className="text-gray-500 text-sm">
               It involves controlling and utilizing
                rainwater runoff to prevent flooding, erosion, and pollution.
                Green infrastructure helps absorb excess water and reduces
                environmental impacts.
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-900 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* News Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          <div className="bg-white rounded overflow-hidden">
            <img
              src="smart City.jpeg"
              alt="Urban Development Trends"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Nature-based Solutions
              </h3>
              <p className="text-gray-500 text-sm">
                It use natural systems to address
                environmental challenges, such as wetlands restoration, urban
                forests, and green spaces to manage water and enhance
                biodiversity.
              </p>
              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-900 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden">
            <img
              src="waste.jpg"
              alt="Green Architecture"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Waste Management
              </h3>
              <p className="text-gray-500 text-sm">
               It involves processes like recycling, composting,
                and reducing waste generation. Proper management minimizes
                environmental pollution and conserves natural resources.{" "}
              </p>

              <a
                href="javascript:void(0);"
                className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-green-900 hover:bg-green-900 text-white text-[13px]"
              >
                Read More
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Environment;
